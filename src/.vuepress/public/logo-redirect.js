if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLogoRedirect);
} else {
  initLogoRedirect();
}

function initLogoRedirect() {
  const setupLogoRedirect = () => {
    const logoSelectors = [
      '.vp-navbar-start .vp-navbar-logo',
      '.navbar-brand',
      '.vp-brand',
      '.brand',
      'a[aria-label="Solop ERP"]',
      '.navbar-start .home-link',
      '.vp-navbar .home-link',
      'a[href="/"][class*="logo"]',
      '.navbar-logo'
    ];
    let logoElement = null;
    for (const selector of logoSelectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        for (const el of elements) {
          if (el.querySelector('img[src*="logo"]') || 
              el.querySelector('svg') || 
              el.textContent.includes('Solop') ||
              el.href === window.location.origin + '/') {
            logoElement = el;
            break;
          }
        }
      }
      if (logoElement) break;
    }
    if (!logoElement) {
      const logoImg = document.querySelector('img[src="/logo.svg"], img[alt*="logo"]');
      if (logoImg) {
        logoElement = logoImg.closest('a');
      }
    }
    if (logoElement) {
      const newLogoElement = logoElement.cloneNode(true);
      logoElement.parentNode.replaceChild(newLogoElement, logoElement);
      newLogoElement.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.open('https://solopsoftware.com', '_blank');
        return false;
      });
      newLogoElement.style.cursor = 'pointer';
      if (newLogoElement.href) {
        newLogoElement.removeAttribute('href');
        newLogoElement.setAttribute('data-original-href', '/');
      }
    } else {
      if (window.logoRedirectAttempts === undefined) {
        window.logoRedirectAttempts = 0;
      }
      window.logoRedirectAttempts++;
      if (window.logoRedirectAttempts < 20) {
        setTimeout(setupLogoRedirect, 500);
      }
    }
  };
  setupLogoRedirect();
  if (window.__VUEPRESS__ && window.__VUEPRESS__.router) {
    window.__VUEPRESS__.router.afterEach(() => {
      setTimeout(setupLogoRedirect, 100);
    });
  }
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) {
            if (node.classList && (
              node.classList.contains('navbar') ||
              node.classList.contains('vp-navbar') ||
              node.querySelector && node.querySelector('[class*="logo"]')
            )) {
              console.log('Navbar detectada, reconfigurando logo...');
              setTimeout(setupLogoRedirect, 100);
              break;
            }
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  setTimeout(() => {
    observer.disconnect();
  }, 10000);
}