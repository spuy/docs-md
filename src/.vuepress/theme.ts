import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, esNavbarConfig } from "./navbar";

export default hopeTheme({
  hostname: "https://ayuda.solopapp.com",

  author: {
    name: "Solop ERP",
    url: "https://solopsoftware.com/",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/spuy/docs-md",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: enNavbarConfig,

      blog: {
        description: "Documentación Solop ERP",
        intro: "/about/",
        medias: {
          Gmail: "mailto:consultas@solop.uy",
          Discord: "https://discord.gg/CbrEeQwcqr",
          Linkedin: "https://www.linkedin.com/company/solop/",
        },
      },
    },
  },

  displayFooter: true,
  copyright: "Copyright © Solop ERP",

  plugins: {
    blog: true,

    comment: {
      // Comment box in footer page
      //provider: "Waline",
      //serverURL: "https://<to-be-defined>",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
      container: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#0080E1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "Solop ERP",
        short_name: "Solop ERP",
        description: "Solop Software",
        theme_color: "#0080E1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Classification",
            short_name: "Classification",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "Classification Group",
          },
          {
            name: "Label",
            short_name: "Label",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "Tag Grouping",
          },
          {
            name: "Timeline",
            short_name: "Timeline",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "Timeline Article List",
          },
          {
            name: "Self Introduction",
            short_name: "Self Introduction",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "Self Introduction",
          },
        ],
      },
    },
  },
});
