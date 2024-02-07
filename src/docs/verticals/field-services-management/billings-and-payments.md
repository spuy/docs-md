---
title: 2. Facturación y Pagos
category: Documentation
star: 9
sticky: 9
article: false
---

### Generar Facturas desde Línea de Orden

Una vez generada la Orden de venta (junto con la orden de compra y documento por pagar desde generar orden desde proyecto), desde el proceso Generar Factura desde línea de orden es posible de forma automática crear los documentos por cobrar (factura al cliente).
Para esto como requisito la Orden de Venta debe estar seteada como Permite Facturar = SI. Debe seleccionarse la fecha de facturación, la accion en el documento (si la factura se genera en estado completo o en estado borrador) y el tipo de agrupación (por ejemplo: por orden).

![Generar Factura desde Línea de orden](/assets/img/docs/field-services-management/fis-services6.png)

### Selección de Pago

Los documentos por pagar (por los servicios realizados por los diferentes agentes comerciales o recursos) se crean automáticamente junto con la orden de compra (al generar la orden de venta en estado completo). Por lo cual, el paso siguiente es generar la Selección de Pago.
Esto puede realizarse diariamente, o periódicamente (de forma semanal, quincenal, etc.)
En la ventana Selección de Pago debe seleccionarse El tipo de documento (Orden de Pago), la cuenta bancaria, la fecha del documento y la moneda. Luego debe setearse la selección de pago en Estado Completo.
La selección de pago puede realizarse sobre un agente comercial en particular o bien sobre los documentos por pagar pendientes de pago (uno, varios o todos), mediante el botón de seleccionar Documentos por pagar.
En paso posterior se selecciona la forma de pago y es posible imprimir el Pago generado (o exportar desde la ventana Imprimir/Exportar pagos).

![Selección de Pago](/assets/img/docs/field-services-management/fis-services7.png)