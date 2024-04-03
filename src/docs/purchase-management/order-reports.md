---
title: Reportes de Órdenes
category: Documentation
star: 9
sticky: 9
article: false
---

## Reportes de Órdenes

### Listado de Ordenes

Muestra las **líneas de las Órdenes**, tanto Órdenes de Venta como Órdenes de Compra (indicando Transacción de Venta: SI/NO)

Este informe **no** muestra las órdenes de inversión, honorarios, comisiones.

Parámetros:

![Listado de Órdenes](/assets/img/docs/sales-management/sam-report1.png)

Vistas del Reporte de Ordenes:

* Listado de Ordenes de Compra por Nro de Orden
* Listado de Ordenes de Compra por Tipo de Orden
* Listado de Ordenes por Moneda y Contrato
* Listado de Ordenes por Moneda Contrato y Proyecto
* Listado de Ordenes por Contrato y Moneda
* Listado de Ordenes por Moneda Contrato y Categoría
* Listado de Ordenes por Moneda Contrato y Soporte
* Listado de Ordenes por Moneda y Proyecto

El listado de Ordenes detalla todas las órdenes existentes en el sistema, tanto de Venta como de Compra informando los siguientes importes:

* Importe Ordenado
* Importe Entregado
* Importe Facturado

* Importe Pendiente de Entregar
* Importe Pendiente de Facturar
* Importe Entregado No Facturado
* Importe Facturado No Entregado

**Verificación Reporte con Contabilidad:**

Se puede verificar que los importes definidos por este Reporte de “Listado de Órdenes” se pueda corresponder con los siguientes:

* **Importe Facturado:** Se puede validar con el reporte de “Diario de Ventas y Compras” clasificando según Socio del Negocio. El Importe Fuente en cada Moneda se podrá validar con el importe Facturado definido en el Reporte de “Listado de Órdenes”.
* **Importe Entregado No Facturado:** Se puede validar con el importe de “Unbilled” en moneda Fuente. Adicionalmente el Reporte de “Unbilled General” también mostrará su correspondiente conversión y esta a su vez se podrá corresponder con el saldo de la Cuenta Contable de Unbilled.
* **Importe Facturado no Entregado:** Se podrá validar en moneda fuente con el reporte de “Facturas Cliente sin Entregar” o “Facturas Proveedor sin Entregar” así como también con la columna de “Deferred” del Monitor tanto de Compras como de Ventas respectivamente.

**Pendiente de Entregar:** se corresponderá con la columna de “Compromiso” del Monitor de Compras o de Ventas respectivamente.

### Listado de Ordenes Completo

Este informe muestra la totalidad de las Órdenes incluyendo las de inversión, honorarios, comisiones. También se muestran datos relacionados al reconocimiento de la orden, para los casos en que la línea tenga plan de reconocimiento.

![Listado de Órdenes Completo](/assets/img/docs/sales-management/sam-report2.png)

Diferentes Vistas: 

* Listado de Ordenes Completo por Moneda y Contrato
* Listado de Ordenes Completo por Moneda, Contrato y Proyecto
* Listado de Ordenes Completo por Moneda, Contrato y Socio del Negocio (Para Compras)
* Listado de Ordenes Completo por Moneda, Contrato, Proyecto y Socio del Negocio (Para Compras)

### Transacción de la Orden

Reporte que presenta cabezales de las Órdenes de Compra o de Venta (seleccionando el check Transacción de venta SI/NO) entre determinadas fechas.

Filtros: 

* Organización
* Fecha de la Orden Desde-hasta
* Tipo de Documento
* Estado de la Orden

Muestra los cabezales de las Órdenes, tanto de Ventas como de Compras.

* Contrato
* Proyecto
* Orden Enlazada
* Importes Totales

Parámetros:

![Transacción de la Orden](/assets/img/docs/sales-management/sam-report3.png)

### Órdenes no Entregadas

Reporte de órdenes que muestra aquellas que no fueron Entregadas o que no fueron Facturadas.

![Órdenes no Entregadas](/assets/img/docs/sales-management/sam-report4.png)