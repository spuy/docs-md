import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "About", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "Some History",
        children: ["the-beginning", "branding"],
      },
      {
        text: "Meeting",
        prefix: "meeting/",
        children: ["berlin-2009", "berlin-2014"],
      },
      {
        text: "Articles",
        prefix: "articles/",
        children: [
          "2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system",
          "2015-08-06-world-announcement-for-adempiere",
        ],
      },
      "articles/",
    ],
  },
  {
    text: "Product",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
        children: [
          "technology",
          "business-process",
          "benefits",
          "source-code",
          "demo",
        ],
      },
    ],
  },
  {
    text: "Community",
    icon: "group",
    prefix: "/community/",
    children: [
      {
        text: "Community",
        icon: "group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "Community",
        children: ["code-of-conduct", "duties-and-rigths"],
      },
    ],
  },
  {
    text: "Documentation",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "ADempiere Estándar", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Gestión Básica",
        children: [
          "basic-rules/login",
          "basic-rules/user-interface",
          "basic-rules/icons-interface",
          "basic-rules/toolbar",
          "basic-rules/quick-access",
          "basic-rules/props",
        ],
      },
      {
        text: "Datos Maestros",
        children: [
          "master-data/business-partner",
          "master-data/product",
          "master-data/warehouse",
          "master-data/reports"
        ],
      },
      {
        text: "Gestión de Materiales",
        children: [
          "material-management/inventory-move",
          "material-management/internal-use-inventory",
          "material-management/physical-inventory",
          "material-management/ldm",
          "material-management/replenishment",
        ],
      },
      { text: "Verticales", link: "", icon: "note", activeMatch: "^/docs/verticals/$" },
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
      {
        text: "Binary Files",
        children: ["docker", "helm", "operator", "binary"],
      },
    ],
  },
  {
    text: "Foundation",
    icon: "software",
    prefix: "/foundation/",
    children: [
      {
        text: "Foundation",
        icon: "software",
        link: "",
        activeMatch: "^/foundation/$",
      },
      {
        text: "How To",
        children: [
          "how-to-contribute",
          "membership",
          "board",
          "statutes",
          "sponsors",
        ],
      },
    ],
  },
]);

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/about/",
  "/zh/product/",
  "/zh/community/",
  "/zh/support/",
  "/zh/docs/",
  "/zh/downloads/",
  "/zh/foundation/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/about/",
  "/es/product/",
  "/es/community/",
  "/es/support/",
  "/es/docs/",
  "/es/downloads/",
  "/es/foundation/",
]);
