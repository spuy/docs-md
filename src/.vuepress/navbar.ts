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
        text: "Introducción",
        children: [
          "basic-rules",
        ],
      },
      {
        text: "Datos Maestros",
        children: [
          "master-data",
        ],
      },
      {
        text: "Facturación Electrónica",
        children: [
          "electronic-billing",
        ],
      },
      {
        text: "Gestión Contable",
        children: [
          "accounting-management",
        ],
      },
      {
        text: "Gestión de Activos",
        children: [
          "asset-management",
        ],
      },
      {
        text: "Gestión de Compras",
        children: [
          "purchase-management",
        ],
      },
      {
        text: "Gestión de Devoluciones",
        children: [
          "return-management",
        ],
      },
      {
        text: "Gestión de Distribución",
        children: [
          "distribution-management",
        ],
      },
      {
        text: "Gestión de Materiales",
        children: [
          "material-management",
        ],
      },
      {
        text: "Gestión de Producción",
        children: [
          "production-management",
        ],
      },
      {
        text: "Gestión de Proyectos",
        children: [
          "project-management",
        ],
      },
      {
        text: "Gestión de Punto de Venta",
        children: [
          "pdv-management",
        ],
      },
      {
        text: "Gestión de Recursos Humanos",
        children: [
          "human-management",
        ],
      },
      {
        text: "Gestión de Relaciones con Clientes",
        children: [
          "customer-relationship-management",
        ],
      },
      {
        text: "Gestión de Saldos Pendientes",
        children: [
          "balance-management",
        ],
      },
      {
        text: "Gestión de Servicios",
        children: [
          "service-management",
        ],
      },
      {
        text: "Gestión de Ventas",
        children: [
          "sales-management",
        ],
      },
      {
        text: "Gestión Financiera",
        children: [
          "financial-management",
        ],
      },
      {
        text: "Gestión de Activos",
        children: [
          "asset-management",
        ],
      },
      {
        text: "Preguntas Frecuentes (FAQs)",
        children: [
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
