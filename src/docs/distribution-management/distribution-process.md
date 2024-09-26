---
title: Proceso de Distribución
category: Documentation
star: 9
sticky: 9
article: false
---

## Proceso de Distribución

Para iniciar el circuito de distribución el primer paso es crear una Orden de Venta.
Estos documentos presentan diferentes tipos, y a su vez, cada tipo de orden de venta posee un sub tipo con un determinado comportamiento.
Para mayor detalle sobre órdenes de venta: - [Orden de Venta](../sales-management/sales-orders/order)

y sobre Tipos de Documentos (Tipo documento destino y subtipo OV): - [Tipos de Documentos](../sales-management/sales-orders/document-type)

### Orden de Venta Distribución:

Se debe seleccionar el socio de negocio.

Desde línea de orden se pueden elegir los productos. En los casos de ventas recurrentes, existe la posibilidad de copiar líneas de una orden anterior.

Esta función (copiar líneas) copia las líneas tal como fueron generadas en la orden de venta original (hereda descuentos).

En el negocio de retail, la lista de precios utilizada ya posee el impuesto incluido (así está configurado en el check correspondiente, en la entidad lista de precios).

En la orden de venta, la regla de pago se setea por defecto según el socio de negocio seleccionado.

La dirección también la hereda del socio de negocio (pestaña Localización) y se encuentra vinculada a una región de ventas. Esto permite asignar un vendedor para cada región de ventas.

Es importante en la orden de venta la regla de facturación. En general, se utiliza "después de entrega", con el objeto de generar factura por aquello que ha sido efectivamente entregado y evitar así diferencias  por falta de stock.

Luego de setear todos los datos obligatorios se completa la orden de venta. Esto genera los documentos que correspondan según el tipo de orden de venta (en este caso en el cual el tipo es: orden de venta, no genera otros documentos).

Los descuentos en la orden de venta pueden ingresarse manualmente o bien setearse en el socio de negocio.

Una vez generada la orden de venta el siguiente paso es generar la Orden de salida:

### Generar Orden de Salida

Luego de completar las órdenes de venta, el paso siguiente es **"generar orden de salida"**. En esta ventana se da origen al proceso de distribución.

Se debe seleccionar la organización y el almacén. Luego puede filtrarse por región de ventas y/o por fecha documento (no es obligatorio).

Al seleccionar "buscar", muestra todas las órdenes pendientes de entrega (según los filtros utilizados).

A medida que se van seleccionando las órdenes a entregar en la parte superior, en la parte inferior se van agregando las **líneas de esas órdenes**.

Dentro de esas líneas, si se utliza el inventario correctamente, el ERP realiza una comparación entre la cantidad a entregar y la cantidad en existencia.

::: note
Desde el proceso Generar Orden de Salida desde OV se puede visualizar la columna Cantidad Existencia, que muestra la cantidad en existencia para el producto y el almacén de la Orden de Venta.
:::

También es posible configurar la secuencia de carga (orden en la cual se realizarán las entregas).

En el extremos inferior de la ventana existe una sección (resumen de inventario por producto) donde es posible visualizar en qué almacén se encuentra la cantidad en existencia por cada producto.

También permite definir una ubicación (ubicación lógica) para el armado del pedido. Se trata de una ubicación dentro del almacén donde se realizará el pickinig.

Al aceptar, el sistema genera mensaje de insuficiente cantidad disponible por aquellos productos con stock por debajo de lo solicitado en las órdenes a entregar.

Al aceptar (con existencia suficiente por producto), el ERP brinda la opción de imprimir orden (de salida).

Esta impresión actúa como "hoja de ruta" para preparar los pedidos (realizar la búsqueda en el almacén).
La impresión cuenta con diferentes formatos (tipos de agrupación): por producto, por factura, por orden de venta.

Al momento de aceptar la orden de salida es importante seleccionar la acción que se ejecutará sobre el documento: puede ser "completo" o "en proceso".

En este caso se recomienda setear "en proceso", porque aun en esta instancia se encuentra pendiente realizar el "pickeo" para determinar la existencia real de los productos para completar los pedidos.
![Generar Orden de Salida](/assets/img/docs/distribution-management/dim-distribution-image23.png)

### Generar Orden de salida desde OV

En este proceso, el smart browser no está abierto por línea de OV, sino que se visualiza **por cabezales de orden**.

Se genera una orden de salida que incluye a todas las líneas de OV, de todas las OV seleccionadas en el browser.

**Parámetros**

![Parámetros](/assets/img/docs/distribution-management/dim-distribution-image24.png)

### Reporte de Orden de Salida

El paso posterior a generar la Orden de salida es imprimir el reporte de Orden de Salida para realizar la búsqueda de los productos a distribuir (el pickeo).
Este reporte presenta diferentes formatos de acuerdo a lo que se requiera:

* Un formato con listado general de los productos incluidos en la Orden de Salida para (generar Picking)

* Un formato de listado por Socio del Negocio (por cliente) para armar cada pedido individual (generar Packing).

* Un formato de listado más detallado incluyendo importes para el transportista (generar el Shiping)

Dicho proceso puede ubicarse desde el Menú, y también es posible ejecutarlo directo desde la ventana para la orden actual:

![Proceso](/assets/img/docs/distribution-management/dim-distribution-image28.png)

### Generar picking y entregas desde orden de salida


Se debe marcar todo lo que se encontró de los productos a entregar (resultado del picking) y se modifican las cantidades de acuerdo a las existencias reales.

Al completar documento, define en estado completo la orden de salida y realiza las entregas.

El motivo por el cual puede haber diferencias entre la existencia que muestra el ERP y el resultado del pickeo responde a que no se encuentra correctamente actualizado el stock del producto.

En esta instancia, al consultar una orden de venta (vinculada a nuestra orden de salida con estado completo) se puede observar la cantidad "entregada". Aun no se visualizará cantidad facturada.

![Filtros picking](/assets/img/docs/distribution-management/dim-distribution-image25.png)

### Crear Facturas Masivamente

Una vez generado el picking y entrega, el paso siguiente es **crear las facturas masivamente**.

La facturación se realiza desde la orden de salida (en estado completo) en la ventana "Generar factura desde orden de salida": - [Generar Factura desde Orden de Salida](../sales-management/receivable-document/bill)

![Filtros Facturas](/assets/img/docs/distribution-management/dim-distribution-image26.png)

:::
Los procesos "Generar picking y entregas desde orden de salida" y "Generar factura desde orden de salida", permiten entregar y facturar por cantidad mayor a la ordenada (por ejemplo para aquellos productos que se vendan por bolsa y su valor sea por unidad, pero su peso pueda variar).
::: 

### Generar Cobros desde Orden de Salida


El último paso de este proceso es **generar los cobros desde orden de salida.**  Se debe seleccionar la orden de salida.

En esta opción (Generar cobros desde orden de salida) se visualizarán todas aquellas facturas cuyo medio de pago se haya configurado como "contado" (no es a crédito), como por ejemplo cheque, efectivo, etc.

En el caso de cheque, se ingresa el número (número de pago), se selecciona en parámetros la cuenta bancaria que corresponda y la fecha de pago.

Al seleccionar aceptar se podrá observar el documento por cobrar marcado como "pagado" y el pago generado correspondiente (registro de pago/cobro).

![Filtros Cobros](/assets/img/docs/distribution-management/dim-distribution-image27.png)