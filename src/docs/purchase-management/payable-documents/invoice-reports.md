---
title: Reportes de Facturas
category: Documentation
star: 9
sticky: 9
article: false
---

### Unbilled General

Este reporte mostrará todas las Entregas/Recepciones que tengan líneas que aún no cuenten con un Match invoice realizado vinculandolo con una Factura.

Se podrá obtener el mismo reporte tanto para Ventas como para Compras mediante el check de “Transacción de Ventas = SI/NO”

Parámetros del Reporte:

* Organización:
* Fecha Estado de Cuenta: Se deberá definir Fecha Hasta que se desea obtener los documentos.
* Socio del Negocio:
* Grupo de Socio del Negocio:
* Moneda:
* Tio de Conversión: 
* Spot: Se deberá elegir “Spot” para realizar una comparación contable durante cualquier momento del mes. Las conversiones de Entregas o Recepciones en Moneda Extranjera se realizarán según la tasa de cambio del día de la transacción.
* Period End: Se deberá utilizar este Tipo de Conversión para realizar una comparación al Cierre de Ejercicio. Este importe se deberá comparar con la Contabilidad luego de haber generado el Proceso de “Ajuste Diferencia de Cambio Entregas y Recepciones no Facturadas”.
* Proyecto
* Categoría Proyecto: Proyecto de Agencia, Proyecto de Medios, etc. Si se deja vacío tomará todos los Proyectos
* Contrato de Servicios: Si se desea obtener el reporte sólo para un contrato.
* Transacción de Ventas: (SI/NO) Según si el check está en Y o N se obtendrán transacciones de Ventas o Transacciones de Compras correspondientemente.
* Costos Asociados:
* Todas las Transacciones: Tomará todas las transacciones, con Costo Asociado y Sin Costo Asociado. Se deberá definir esta opción para verificar con la Contabilidad.
* Con Costo Asociado: Si se define con “Costo Asociado = Y” se obtendrán las Ventas que tienen un Costo Asociado, por ejemplo para el caso de Medios y Producción.
* Sin Costo Asociado: Si se desea obtener sólo entregas de Producción Interna se deberá elegir esta opción.

**Devoluciones (de Cliente/Proveedor)**

Las devoluciones de cliente y proveedor se muestran de igual manera que entregas y recepciones, pero con signo negativo.

Vistas:

* Unbilled General por Moneda y SDN
* Unbilled General por Contrato y Moneda
* Unbilled General por Contrato Moneda y Proyecto
* Unbilled General por Moneda y Contrato
* Unbilled General por Moneda, Contrato y Proyecto
* Unbilled General por SDN Moneda (Control)
* Unbilled General por Sello, Moneda y Proyecto

**Unbilled General por Contrato y Moneda**

Muestra el total pendiente de facturar en moneda contable, agrupado por contrato.

Se utiliza para comparar con el IF 120 Monitor de Venta columna Unbilled

**Unbilled General por Contrato, Moneda y Proyecto**

Muestra el total pendiente de facturar en moneda contable, agrupado por Proyecto

Se utiliza para comparar con el IF 121 Monitor de Venta por Proyecto, ingresando su contrato,  columna Unbilled.

**FIltros de OV que considera:**

Estos son los tipos de doc que filtra, falta el doc de esas órdenes

* "Orden de Venta (Compra y Consumo)"
* "OV Compra Consumo (Factura Medio-Cliente)"
* "OV Consumo Paquete"
* "OV Split Manual"
* "Orden de Venta con Aprobación"
* "Orden de Venta Intercompany"
* "Orden de Venta Honorarios"
* "Orden de Venta Fee"

### Facturas Cliente sin Entrega

Documentos Órdenes de Venta (Estado Completo o Cerrado) que ya tienen Factura emitida al Cliente (completa) pero que aún no se han Entregado al cliente (no tiene una entrega completa).

Parámetros:

* Organización
* Proyecto
* Sello Proyecto
* Tipo de Proyecto
* Categoría Proyecto
* Grupo de SdN
* Moneda

Columnas:

* Organización
* Sello Proyecto
* Proyecto
* Sello Orígen
* SdN
* SdN entrega Directa
* Nro.OV
* Nro. Factura
* Moneda
* Monto OV
* Monto Factura
* Monto entregado
* Monto facturado no entregado

### Facturas Proveedor sin Entregar

Funcionamiento igual a “Facturas Clientes sin Entregar”, utilizan la misma tabla molde para cargar la información.

No se consideran en el reporte los tipos de documento de factura que tienen categoría de contabilidad “AP Invoice - Nota de Débito”.

Vistas:

* Unbilled General por SDN y Moneda
* Unbilled General por SDN y Moneda, Contrato y Proyecto
* Unbilled General por SDN, Moneda y Contrato y Proyecto
* Unbilled General por Moneda y SDN
* Unbilled General por Moneda y SDN, Contrato y Proyecto
* Unbilled General por Contrato y Moneda
* Unbilled General por Contrato Moneda y Proyecto
* Unbilled General por Moneda y Contrato
* Unbilled General por Moneda, Contrato y Proyecto

### Trade Creditors

Órdenes de Compra que tienen un Proyecto asociado de Categoría (Agencia Creativa), cuyo DxP aún está pendiente de Pago y tiene al menos una Recepción.

**Filtros:**

* Medios
* No Medios

Vistas:

* Unbilled General por SDN y Moneda
* Unbilled General por Moneda y SDN
* Unbilled General por Contrato y Moneda
* Unbilled General por Contrato Moneda y Proyecto
* Unbilled General por Moneda y Contrato
* Unbilled General por Moneda, Contrato y Proyecto

### Billing de Cliente por Producto

Clasifica la facturación por Cliente desglosando lo facturado según Categoría de Producto y el Soporte.

Vistas:

* Billings por Producto y Moneda
* Billings por Tipo de Billing
* Billings por Grupo de Productos

Billings por Producto y Moneda

### Detalles de Facturas y Márgenes

Muestra todas las facturas y sus líneas vinculadas con sus Órdenes.

En este reporte se podrán obtener todas las facturas emitidas entre determinadas fechas.

Se podrá filtra por:

* Organización
* Fechas
* Estado del Documento
* Tipo de Documento
* Socio del Negocio
* Agente Comercial
* Transacción de Ventas: SI / NO

### Facturas Cobradas sin pagar a Proveedores

Muestra los DXP vinculados a DXC que ya fueron cobrados. Muestra toda la información relacionada a esas transacciones.

Descripción:

Este reporte mira las OV cuyos DxC se encuentren en un recibo de cobro en estado completo (estén cobrados), y que los DxP completos, asociados a las OC enlazadas a dichas OV, aún no estén pagados (Pagado = N en el DxP).

Parámetros:

* Organización
* Sello Contrato
* Cliente
* Contrato
* Proyecto
* Sello Proyecto
* Tipo Proyecto
* Fecha OV
* Fecha OC
* Moneda
* Recibo de Cobro

### Facturas Cobradas a Cliente sin recibir Factura Proveedor

Este reporte mira los Documentos por Cobrar vinculados a las Órdenes de Venta que estén en un recibo de cobro Completo. A su vez, muestra registros si las respectivas Órdenes de Compra tienen líneas que no estén vinculadas a líneas de Documentos por Pagar. Si la Orden de Compra tiene todas sus líneas vinculadas a Documento por Cobrar, entonces no aparecerá en el reporte.

Parámetros:

* Organización: Organización de la OC
* Sello Contrato
* Cliente
* Contrato
* Proyecto
* Sello Proyecto
* Tipo Proyecto
* Recibo cliente
* Fecha OV
* Fecha OC
* Moneda

### Diario Compras y Ventas

Muestra todos los DXP o DXC emitidos, mostrando de forma separada los importes fuentes, tasas de cambio del documento y los valores contables.

Vistas:

* Por Documento
* Por Día
* Por Impuesto

Parámetros:

* Organización
* Fecha de facturación
* Fecha de Contabilización
* Impuesto
* Moneda
* Transacción de Ventas

### Reporte de Notas de Crédito Emitidas a Clientes

Muestra las Notas de Crédito emitidas a clientes y su asignación.

Parámetros:

* Organización
* Sello:
* Fecha: Desde Hasta
* SDN
* Grupo de SDN