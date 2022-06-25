import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "Documentation",
    icon: "note",
    prefix: "/docs/",
    children: [
      { text: "Docs", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Standard ERP Procedures",
        children: ["basic-steps/", "customer-relations/", "manufacturing/", "material-management/", "human-resource/", "performance-analysis/"],
      },
    ],
  },
  {
    text: "Community",
    icon: "code",
    children: [
      {
        text: "Community",
        icon: "code",
        link: "/community/",
        activeMatch: "^/community/$",
      },
      {
        text: "产品设计",
        children: ["/design/"],
      },
      {
        text: "后端运维",
        children: ["/linux/"],
      },
    ],
  },
  {
    text: "Forums",
    icon: "software",
    prefix: "/forums/",
    children: [
      {
        text: "Forums",
        icon: "software",
        link: "",
        activeMatch: "^/forums/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
  {
    text: "Downloads",
    icon: "software",
    prefix: "/downloads/",
    children: [
      {
        text: "Downloads",
        icon: "software",
        link: "",
        activeMatch: "^/downloads/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
  {
    text: "About Us",
    icon: "software",
    prefix: "/about/",
    children: [
      {
        text: "About Us",
        icon: "software",
        link: "",
        activeMatch: "^/about/$",
      },
      "about/",
      "git/",
      "comsol/",
    ],
  },
]);

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/docs/",
  "/zh/community/",
  "/zh/forumns/",
  "/zh/downloads/",
  "/zh/about/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/docs/",
  "/es/community/",
  "/es/forums/",
  "/es/downloads/",
  "/es/about/",
]);