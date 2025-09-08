import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  // {
  //   text: "Nosotros",
  //   icon: "id-card-clip",
  //   prefix: "/about/",
  //   children: [
  //     { text: "Acerca de", icon: "user", link: "", activeMatch: "^/about/$" },      
  //     {
  //       text: "Noticias",
  //       prefix: "news/",
  //       children: [
  //         "2023-01-01-adempiere-394",
  //         "security-improvements-in-adempiere-cloud",
  //       ],
  //     },
  //     {
  //       text: "Nuestros Servicios",
  //       children: [
  //         "services/",
  //         "advanced-functional-support-scheme/",
  //         "standard-procedures/"
  //       ],
  //     },
  //     {
  //       text: "Otros Servicios",
  //       children: [
  //         "other-services/e-commerce",
  //         "other-services/bot"
  //       ],
  //     },
  //   ],
  // },
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
          "purchase-management",
          "return-management",
          "distribution-management",
          "material-management",
          "production-management",
          "pdv-management",
          "human-management",
          "customer-relationship-management",
          "balance-management",
          "sales-management",
          "financial-management",
          "asset-management",
          "frequently-asked-questions",
        ],
      },
      {
        text: "Verticales de Negocio",
        children: [
          "verticals/agency-management",
          "verticals/fap",
          "verticals/investment-and-loan",
          "verticals/education-management",
          "verticals/field-services-management",
          "verticals/construction-management",
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