---
title: 2. Facturación y Pagos
category: Documentation
star: 9
sticky: 9
article: false
---

### Generar Facturas desde Línea de Orden

Una vez generada la Orden de venta (junto con la orden de compra y documento por pagar desde **"generar orden desde proyecto"**), a través del proceso **"Generar Factura desde línea de orden"** es posible de forma automática crear los documentos por cobrar (factura al cliente).

Para esto existe un requisito: la Orden de Venta debe estar seteada como **Permite Facturar = SI**. Debe seleccionarse la fecha de facturación, la accion en el documento (si la factura se genera en estado completo o en estado borrador) y el tipo de agrupación (por ejemplo: por orden).

#### Tipo de Agrupación

Seleccionar un tipo de agrupación permite definir la forma en la cual se confeccionará el documento por cobrar.
Si se selecciona como tipo de agrupación "Proyecto" se emitirá un documento por cobrar por cada proyecto (previamente seleccionado). 
En el caso de seleccionar "Contrato", y elegir registros que estén vinculados a un mismo contrato, se emitirán todos en un mismo documento por cobrar (de existir diferentes contratos, se emitirá un comprobante por cada contrato).

Si se selecciona agrupar por Unidad, el proceso unificará en un mismo documento por cobrar aquellas wo de mismo Socio del Negocio y mismo dato Unidad (que se ingresa en la orden de trabajo). Este agrupamiento es similar al de PO reference (En este caso en lugar de agrupar por el dato Unidad, lo hará por el de referencia oc Cliente).

También cuenta con la opción de agrupar por "Socio del Negocio". En este caso al seleccionar un grupo de órdenes de trabajo para facturar, se agrupará por Socio de Negocio (y por contrato) en cada documento por cobrar.
Por último, al agrupar por "Orden" se generarán documentos por cobrar por las líneas de orden de trabajo que correspondan a una misma orden de venta.

![Generar Factura desde Línea de orden](/assets/img/docs/field-services-management/fis-services6.png)

### Selección de Pago

Los documentos por pagar (por los servicios realizados por los diferentes agentes comerciales o recursos) se crean automáticamente junto con la orden de compra (al generar la orden de venta en estado completo). Por lo cual, el paso siguiente es generar la Selección de Pago.
Esto puede realizarse diariamente, o periódicamente (de forma semanal, quincenal, etc.)
En la ventana Selección de Pago debe seleccionarse El tipo de documento (Orden de Pago), la cuenta bancaria, la fecha del documento y la moneda. Luego debe setearse la selección de pago en Estado Completo.
La selección de pago puede realizarse sobre un agente comercial en particular o bien sobre los documentos por pagar pendientes de pago (uno, varios o todos), mediante el botón de seleccionar Documentos por pagar.
En paso posterior se selecciona la forma de pago y es posible imprimir el Pago generado (o exportar desde la ventana Imprimir/Exportar pagos).

![Selección de Pago](/assets/img/docs/field-services-management/fis-services7.png)