---
title: Gestión de Distribución
category: Documentation
star: 9
sticky: 9
article: false
---

Esta documentación está destinada a definir cada uno de los procedimientos para la gestión de distribución de los productos en Solop ERP para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimientos descritos aquí recuerde que de eso dependerá el buen uso del ERP.

***__Distribución__***


**Órdenes de venta (Tipo documento destino: orden de venta)**


Se debe seleccionar el socio de negocio.

Desde línea de orden se pueden elegir los productos. En los casos de ventas recurrentes, existe la posibilidad de copiar líneas de una orden anterior.

Esta función (copiar líneas) copia las líneas tal como fueron generadas en la orden de venta original (hereda descuentos).

En el negocio de retail, la lista de precios utilizada ya posee el impuesto incluido (así está configurado en el check correspondiente, en la entidad lista de precios).

En la orden de venta, la regla de pago se setea por defecto según el socio de negocio seleccionado.

La dirección también la hereda del socio de negocio (pestaña Localización) y se encuentra vinculada a una región de ventas. Esto permite asignar un vendedor para cada región de ventas.

Es importante en la orden de venta la regla de facturación. En general, se utiliza "después de entrega", con el objeto de generar factura por aquello que ha sido efectivamente entregado y evitar así diferencias  por falta de stock.

Luego de setear todos los datos obligatorios se completa la orden de venta. Esto genera los documentos que correspondan según el tipo de orden de venta (en este caso en el cual el tipo es: orden de venta, no genera otros documentos).

Los descuentos en la orden de venta pueden ingresarse manualmente o bien setearse en el socio de negocio.


***__Órdenes de Venta: Tipo documento destino y subtipo OV__***

Para realizar un registro de orden de venta, el primer paso es seleccionar el tipo de orden de venta (tipo documento destino).

Cada tipo de documento destino posee por defecto un subtipo OV.

Por ejemplo, el tipo orden Pos Order (e factura) tiene como subtipo OV "orden facturada automáticamente.

Al completar lla orden (en este caso) se genera la factura (no la entrega).

La OV en sí, genera diferentes documentos (al pasar al estado completo). Es una característica de las órdenes de venta.

A su vez, el sub tipo OV orden a crédito genera una factura a crédito (a un determinado plazo de pago) y crea la entrega también.

El sub tipo OV orden almacén cuando se completa, genera una entrega (no genera ni factura ni cobro).

El subtipo OV orden estandar no genera otros documentos al completar la OV. Cada área realiza su labor por separado en diferentes momentos (entrega, factura, cobro).

El subtipo OV orden prepagada genera entrega y cobro  (pero no la factura).

El subtipo OV orden punto de venta genera todos los documentos (entrega, factura y cobro). Es una opción que ya no se utiliza. Se reemplazó por la orden facturada automáticamente.

***__Orden de Venta: Regla de Entrega__***


De acuerdo a la selección que se realice sobre la regla de entrega, el sistema presentará diferentes comportamientos.

Reglas de Entrega:

* Disponibilidad: El ERP verifica que se posea el stock necesario de acierdp al producto y cantidades.
* Forzado: el sistema realiza la entrega completa sin verificar stock. En caso que el stock sea insuficiente, quedará con cantidad "negativa".

***__Generar Orden de Salida__***


Luego de completar las órdenes de venta, el paso siguiente es **"generar orden de salida"**. En esta ventana se da origen al proceso de distribución.

Se debe seleccionar la organización y el almacén. Luego puede filtrarse por región de ventas y/o por fechadocumento (no es obligatorio).

Al seleccionar "buscar", muestra todas las órdenes pendientes de entrega (según los filtros utilizados).

A medida que se van seleccionando las órdenes a entregar en la parte superior, en la parte inferiorse van agregando las líneas de esas órdenes.

Dentro de esas líneas, si se utliza el inventario correctamente, el ERP realiza una comparación entre la cantidad a entregar y la cantidad en existencia.

También es posible configurar la secuencia de carga (orden en la cual se realizarán las entregas).

En el extremos inferior de la ventana existe una sección (resumen de inventario por producto) donde es posible visualizar en qué almacén se encuentra la cantidad en existencia por cada producto.

También permite definir una ubicación (ubicación lógica) para el armado del pedido. Se trata de una ubicación dentro del almacén donde se realizará el pickinig.

Al aceptar, el sistema genera mensaje de insuficiente cantidad disponible por aquellos productos con stock por debajo de lo solicitado en las órdenes a entregar.

Al aceptar (con existencia suficiente por producto), el ERP brinda la opción de imprimir orden (de salida).

Esta impresión actúa como "hoja de ruta" para preparar los pedidos (realizar la búsqueda en el almacén).

La impresión cuenta con diferentes formatos (tipos de agrupación): por producto, por factura, por orden de venta.

Al momento de aceptar la orden de salida es importante seleccionar la acción que se ejecutará sobre el documento: puede ser "completo" o "en proceso".

En este caso se recomienda setear "en proceso", porque aun en esta instancia se encuentra pendiente realizar el "pickeo" para determinar la existencia real de los productos para completar los pedidos.
![Ventana Orden de Salida](/assets/img/docs/distribution-management/orden_de_salida.png)

***__Generar picking y entregas desde orden de salida__***


Se debe marcar todo lo que se encontró de los productos a entregar (resultado del picking) y se modifican las cantidades de acuerdo a las existencias reales.

Al completar documento, define en estado completo la orden de salida y realiza las entregas.

El motivo por el cual puede haber diferencias entre la existencia que muestra el ERP y el resultado del pickeo responde a que no se encuentra correctamente actualizado el stock del producto.

En esta instancia, al consultar una orden de venta (vinculada a nuestra orden de salida con estado completo) se puede observar la cantidad "entregada". Aun no se visualizará cantidad facturada.

***__Crear Facturas Masivamente__***


Una vez generado el picking y entrega, el paso siguiente es **crear las facturas masivamente**.

La facturación se realiza des la orden de salida (en estado completo) en la ventana "Generar factura desde orden de salida".

Esto crea las facturas por las órdenes de venta vinculadas a la orden de salida.

Para esto, se deben seleccionar todas las líneas. Se configura acción del documento = "completar".

Al aceotar, el sistema brinda la opción de imprimir los documentos generados (una factura por cada orden de venta).

El formato de impresión de las facturas es gestionado por Solop (soporte). Aunque existen ciertos datos que se pueden setear desde el ERP, en la opción "tipo de documento" (vinculado a la factura). Como el dato de adenda, que es un texto fijo que se visualiza en la parte inferior del documento impreso.

Una vez generadas las facturas, al consultar las órdenes de venta vinculadas, se podrá observar además de cantidades entregadas, las cantidades facturadas.

***__Generar Cobros desde Orden de Salida__***


El último paso de este proceso es **generar los cobros desde orden de salida.**  Se debe seleccionar la orden de salida.

En esta opción (Generar cobros desde orden de salida) se visualizarán todas aquellas facturas cuyo medio de pago se haya configurado como "contado" (no es a crédito), como por ejemplo cheque, efectivo, etc.

En el caso de cheque, se ingresa el número (número de pago), se selecciona en parámetros la cuenta bancaria que corresponda y la fecha de pago.

Al seleccionar aceptar se podrá observar el docuemnto por cobrar marcado como "pagado" y el pago generado correspondiente (registro de pago/cobro).

- [Registro de Peso](weight)
