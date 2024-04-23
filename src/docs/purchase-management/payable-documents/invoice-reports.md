---
title: Reportes de Facturas
category: Documentation
star: 9
sticky: 9
article: false
---

### Unbilled General

* Nombre Reporte: Unbilled General
* Descripción del Reporte: Entregas/Recepciones pendiente de facturar.
* Ayuda del Reporte: Este reporte Entregas/Recepciones sin facturar.
* Nombre en Menú: Unbilled General

* Documentación: Este reporte muestra todas las Entregas/Recepciones que tengan líneas que aún no cuenten con un Match invoice realizado, que lo vincule con una Factura.

Se podrá obtener el mismo reporte tanto para Ventas como para Compras mediante el check de “Transacción de Ventas = SI/NO”

Parámetros del Reporte:

* Organización
* Fecha Estado de Cuenta: Se deberá definir Fecha Hasta la cual desea obtener los documentos.
* Socio del Negocio
* Grupo de Socio del Negocio
* Moneda
* Tipo de Conversión
* Spot: Se deberá elegir “Spot” para realizar una comparación contable durante cualquier momento del mes. Las conversiones de Entregas o Recepciones en Moneda Extranjera se realizarán según la tasa de cambio del día de la transacción.
* Period End: Se deberá utilizar este Tipo de Conversión para realizar una comparación al Cierre de Ejercicio. Este importe se deberá comparar con la Contabilidad luego de haber generado el Proceso de “Ajuste Diferencia de Cambio Entregas y Recepciones no Facturadas”.
* Proyecto
* Categoría Proyecto: Proyecto de Agencia, Proyecto de Medios, etc. Si se deja vacío tomará todos los Proyectos
* Contrato de Servicios: Si se desea obtener el reporte sólo para un contrato.
* Transacción de Ventas: (SI/NO) Según si el check está en Y o N se obtendrán transacciones de Ventas o Transacciones de Compras correspondientemente.
* Costos Asociados
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

**FIltros de OV que considera**

Estos son los tipos de documentos que filtra:

* "Orden de Venta (Compra y Consumo)"
* "OV Compra Consumo (Factura Medio-Cliente)"
* "OV Consumo Paquete"
* "OV Split Manual"
* "Orden de Venta con Aprobación"
* "Orden de Venta Intercompany"
* "Orden de Venta Honorarios"
* "Orden de Venta Fee"

### Facturas Cliente sin Entrega

* Nombre Reporte: Facturas Cliente sin Entrega
* Descripción del Reporte: Órdenes facturadas sin Entregar.
* Ayuda del Reporte: Muestra Órdenes con factura y con entrega pendiente.
* Nombre en Menú: Facturas Cliente sin Entrega

* Documentación: Muestra Documentos Órdenes de Venta (Estado Completo o Cerrado) que ya tienen Factura emitida al Cliente (completa) pero que aún no se han Entregado al cliente (no tiene una entrega completa).

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

* Nombre Reporte: Facturas Proveedor sin Entrega
* Descripción del Reporte: Órdenes facturadas sin Entregar.
* Ayuda del Reporte: Muestra Órdenes con factura y con entrega pendiente.
* Nombre en Menú: Facturas Proveedor sin Entrega

* Documentación: Funcionamiento idéntico a “Facturas Clientes sin Entregar”, pero aplicado para documentos de proveedor (Documentos ordenes de compra en estado completo/cerrado con factura proveedor emitida pero sin recepción)

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

* Nombre Reporte: Trade Creditors
* Descripción del Reporte: Órdenes de compra con factura pendiente de pago.
* Ayuda del Reporte: Muestra Órdenes con factura emitidas e impagas.
* Nombre en Menú: Trade Creditors

* Documentación: Muestra Órdenes de Compra que tienen un Proyecto asociado de Categoría (Agencia Creativa), cuyo Documento por Pagar aún está pendiente de Pago y tiene al menos una Recepción.

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

* Nombre Reporte: Billing de Cliente por Producto
* Descripción del Reporte: Facturación por Cliente desglosado por Categoria de producto.
* Ayuda del Reporte: Muestra la facturación por cliente y desglosado por categoría de producto y soporte.
* Nombre en Menú: Billing de Cliente por Producto

* Documentación: Este Listado clasifica la facturación por Cliente desglosando lo facturado según Categoría de Producto y el Soporte.

Vistas:

* Billings por Producto y Moneda
* Billings por Tipo de Billing
* Billings por Grupo de Productos

Billings por Producto y Moneda

### Detalles de Facturas y Márgenes

* Nombre Reporte: Detalles de Facturas y Margen
* Descripción del Reporte: Informe de detalles y márgenes de líneas de factura.
* Ayuda del Reporte: Este informe muestra los detalles y márgenes por líneas de factura.
* Nombre en Menú: Detalles de Facturas y Margen

* Documentación: El informe refleja los detalles de las facturas de clientes y proveedores con márgenes.
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

* Nombre Reporte: Facturas Cobradas sin pagar a Proveedores
* Descripción del Reporte: Facturas de Proveedor en relación a facturas de Cliente cobradas.
* Ayuda del Reporte: Muestra los Documentos por Pagar vinculados a Documentos por Cobrar que ya fueron cobrados. Muestra toda la información relacionada a esas transacciones.
* Nombre en Menú: Facturas Cobradas sin pagar a Proveedores

* Documentación: Este reporte visualiza las Órdenes de Venta cuyos Documentos por Cobrar se encuentren en un recibo de cobro en estado completo (cobrados), en relación a Documentos por Pagar completos, asociados a las Órdenes de Compra enlazadas a dichas Orden, que aún no estén pagados.

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

* Nombre Reporte: Facturas Cobradas a Cliente sin recibir Factura Proveedor
* Descripción del Reporte: Facturación por Cliente desglosado por Categoria de producto.
* Ayuda del Reporte: Muestra los Documentos por Pagar vinculados a Documentos por Cobrar que ya fueron cobrados. Muestra toda la información relacionada a esas transacciones.
* Nombre en Menú: Facturas Cobradas a Cliente sin recibir Factura Proveedor

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

* Nombre Reporte: Diario Compras y Ventas
* Descripción del Reporte: Diario de Compras y Ventas
* Ayuda del Reporte: Este reporte muestra las facturas (ventas y compras) emitidas
* Nombre en Menú: Diario Compras y Ventas

* Documentación: Este informe muestra todos los Documentos por Pagar o Documentos por Cobrar emitidos, mostrando de forma separada los importes fuentes, tasas de cambio del documento y los valores contables.

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

* Nombre Reporte: Reporte de Notas de Crédito Emitidas a Clientes
* Descripción del Reporte: Notas de Crédito  cliente y asignadas.
* Ayuda del Reporte: Muestra Motas de crédito emitidas al cliente y con asignación.
* Nombre en Menú: Reporte de Notas de Crédito Emitidas a Clientes

* Documentación: Este informe muestra las Notas de Crédito emitidas a clientes y su asignación.

Parámetros:

* Organización
* Sello:
* Fecha: Desde Hasta
* SDN
* Grupo de SDN

### Transacción de Facturas

* Nombre Reporte: Transacción de Facturas
* Descripción del Reporte: Informe de transacciones de facturas por fecha contable.
* Ayuda del Reporte: Este informe muestra los cabezales de facturas por fecha contable.
* Nombre en Menú: Transacción de Facturas

### Resumen de Facturas

* Nombre Reporte: Resumen de Facturas
* Descripción del Reporte: Informe de facturas por fecha de factura..
* Ayuda del Reporte: Este informe muestra los cabezales de facturas por fecha de factura.
* Nombre en Menú: Resumen de Facturas

### Facturación Diaria

* Nombre Reporte: Facturación Diaria
* Descripción del Reporte: Informe de factura por día.
* Ayuda del Reporte: Este informe muestra totales de facturas por Socio de negocio y por día.
* Nombre en Menú: Facturación Diaria

### Facturación Semanal

* Nombre Reporte: Facturación Semanal
* Descripción del Reporte: Informe de facturas por semana..
* Ayuda del Reporte: Este informe muestra un total de factura por Socio del negocio y por semana.
* Nombre en Menú: Facturación Semanal

### Facturación Semanal de Producto

* Nombre Reporte: Facturación Semanal de producto
* Descripción del Reporte: Informe de facturas semanal por categoría de producto
* Ayuda del Reporte: Este informe muestra un total de facturas por semana y por categoría de producto
* Nombre en Menú: Facturación Semanal de producto

### Facturación Mensual

* Nombre Reporte: Facturación Mensual
* Descripción del Reporte: Informe de facturas por mes
* Ayuda del Reporte: Este informe muestra los totales de facturas por mes y por Socio del Negocio
* Nombre en Menú: Facturación Mensual

### Facturación Mensual de Producto

* Nombre Reporte: Facturación Mensual de Producto
* Descripción del Reporte: Informe de facturas mensual por categoría de Producto
* Ayuda del Reporte: Este informe muestra totales de facturas mensual por categoría de Producto
* Nombre en Menú: Facturación Mensual de Producto

### Facturación Mensual de Proveedor

* Nombre Reporte: Facturación Mensual de Proveedor
* Descripción del Reporte: Informe de facturas mensual por proveedor de producto
* Ayuda del Reporte: Este informe muestra totales de facturas mensual por proveedor y categoría de producto.
* Nombre en Menú: Facturación Mensual de Proveedor

### Producto Facturado Mensualmente

* Nombre Reporte: Producto Facturado Mensualmente
* Descripción del Reporte: Informe de Factura por Producto por Més
* Ayuda del Reporte: Este informe muestra la cantidad facturada mensualmente por producto.
* Nombre en Menú: Producto Facturado Mensualmente

### Facturación Trimestral a Clientes por Proveedor

* Nombre Reporte: Facturación Trimestral a Clientes por Proveedor
* Descripción del Reporte: Informe de Facturas por Proveedor y cliente de Productos por Trimestre.
* Ayuda del Reporte: Este informe muestra totales de facturas por Proveedor y Cliente de productos por trimestre
* Nombre en Menú: Facturación Trimestral a Clientes por Proveedor

### Facturación Trimestral a Clientes por Producto

* Nombre Reporte: Facturación Trimestral a Clientes por Producto
* Descripción del Reporte: Informe de Facturas trimestral por cliente y categoría de producto
* Ayuda del Reporte: Este informe muestra totales de facturas en forma trimestral por cliente y categoría de producto
* Nombre en Menú: Facturación Trimestral a Clientes por Producto

### Facturación Trimestral por Producto

* Nombre Reporte: Facturación Trimestral por producto
* Descripción del Reporte: Reporte de facturación de productos por trimestre
* Ayuda del Reporte: Este informe muestra totales de facturas en forma trimestral por producto y por Socio del Negocio
* Nombre en Menú: Facturación Trimestral por producto