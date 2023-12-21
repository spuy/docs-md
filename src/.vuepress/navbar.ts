import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
//  {
//    text: "Nosotros",
//    icon: "profile",
//    prefix: "/about/",
//    children: [
//      { text: "Nosotros", icon: "profile", link: "", activeMatch: "^/about/$" },      
//      {
//        text: "Noticias",
//        prefix: "news/",
//        children: [
//          "2023-01-01-SOLOP-394",
//        ],
//      },
//      {
//        text: "Nuestros Servicios",
//        children: [
//          "services/",
//          "advanced-functional-support-scheme/"
//        ],
//      },
//      
//    ],
//  },
//   {
//    text: "Producto",
//    icon: "engine",
//    prefix: "/product/",
//    children: [
//      { text: "Producto", icon: "engine", link: "", activeMatch: "^/product/$" },      
//      {
//        text: "Tecnología",
//        children: [
//          "technology",
//          "business-process",
//          "benefits",
//          "source-code",
//        ],
//      },
//    ],
//  },
  {
    text: "Documentación",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "SOLOP Estándar", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Funcionalidades",
        children: [
          "basic-rules",
          "master-data",
          "electronic-billing",
          "accounting-management",
          "asset-management",
          "purchase-management",
          "return-management",
          "distribution-management",
          "material-management",
          "production-management",
          "project-management",
          "pdv-management",
          "human-management",
          "customer-relationship-management",
          "service-management",
          "sales-management",
          "financial-management",
          "asset-management",
          "frequently-asked-questions",
        ],
      },
      {
        text: "Verticales de Negocio",
        children: [
          "verticals/fap",
          "verticals/investment-and-loan",
          "verticals/education-management",
        ],
      },
//       {
//         text: "Localización Venezuela",
//         children: [
//          "lve/document-utility",
//          "lve/procedures",
//          "lve/report",
//          "lve/standard-coding",
//        ],
//       },
    ],
  },
//   {
//    text: "Comunidad",
//    icon: "group",
//    prefix: "/community/",
//    children: [
//      {
//        text: "Comunidad",
//        icon: "group",
//        link: "",
//        activeMatch: "^/community/$",
//      },
//      {
//        text: "Comunidad de SOLOP ERP",
//        children: ["code-of-conduct", "duties-and-rigths"],
//      },
//    ],
//  },
//  {
//    text: "Descargas",
//    icon: "software",
//    prefix: "/downloads/",
//    children: [
//      {
//        text: "Descargas",
//        icon: "software",
//        link: "",
//        activeMatch: "^/downloads/$",
//      },
//      {
//        text: "Binarios de Aplicaciones",
//        children: ["docker", "binary"],
//      },
//      {
//        text: "Actualizaciones",
//        children: [
//          "updates/", 
//          "updates/rs-5.x", 
//          "updates/rs-4.x",
//          "updates/rs-3.x", 
//          "updates/rs-2.x",
//          "updates/rs-1.x"
//        ],
//      },
//    ],
//  },
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
