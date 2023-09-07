---
title: Orden de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

Una orden de venta es un documento elaborado para autorizar la venta de los productos y servicios que contiene, el mismo puede ser utilizado como pedido, pre factura o cotización. Desde una orden de venta se pueden generar entregas, guias y facturas.

El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en Solop ERP una orden de venta.

- Registro de Orden de Venta
- Validación de Inventario en Orden de Venta
  - Funcionalidad de la Validación

## Registro de Orden de Venta

Ubique y seleccione en el menú de Solop ERP la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la ventana **Órdenes de Venta**.

![Campo](/assets/img/docs/sales-management/sam-sales-image262.png)

Imagen 1. Menú de Solop ERP

Seleccione el icono **Registro Nuevo** en la barra de herramientas de Solop ERP, para realizar un nuevo documento.

![Campo](/assets/img/docs/sales-management/sam-sales-image263.png)

Imagen 2. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento **Orden de Venta**.

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por Solop ERP.

Seleccione en el campo **Fecha de la Orden**, la fecha en la que es ordenado por el cliente el producto o servicio.

Seleccione en el campo **Fecha Prometida**, la fecha en la que es prometido el producto o servicio al cliente.

Seleccione en el campo **Socio del Negocio**, el socio del negocio cliente al cual se le realizará la venta.

Seleccione en el campo **Socio del Negocio a Facturar**, el socio del negocio a ser impreso en la factura.

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección de localización del socio del negocio.

Seleccione en el campo **Dirección Factura**, la dirección a ser impresa en la factura para la entrega del producto o servicio.

Seleccione en el campo **Usuario**, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.

Seleccione en el campo **Contacto Entrega Directa**, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.

Seleccione en el campo **Regla de Entrega**, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Prioridad**, la prioridad que tiene la orden de venta que se esta realizando.

Seleccione en el campo **Almacén**, el almacén donde se encuentra el producto o servicio que se va a vender.

Seleccione el checklist **Entrega Directa**, para indicar que el documento será enviado del vendedor directamente al socio del negocio cliente.

Seleccione en el campo **Vía de Entrega**, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Regla de Costo de Flete**, la regla para cargar los costos del flete de los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Regla de Facturación**, la opción de cómo serán facturados los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Lista de Precios**, la lista de precios que será utilizada para la venta de los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Moneda**, la moneda que será utilizada para la venta de los productos y servicios al socio del negocio cliente.

Seleccione en el campo **Agente Comercial**, el agente comercial o vendedor asignado a la región de ventas del socio del negocio cliente.

Seleccione el checklist **Imprimir Descuento**, para imprimir el descuento en los documentos de orden de venta y factura.

Seleccione en el campo **Término de Pago**, la opción de cómo serán pagados los productos y servicios por el socio del negocio cliente.

Introduzca en el campo **Código de Promoción**, el código de promoción existente al momento de la venta.

Seleccione en el campo **Tipo de Pago**, el tipo del pago de los documentos de orden de venta y factura.

Seleccione en el campo **Centro de Costos**, el elemento definido para la combinación de cuentas.

Seleccione en el campo **Actividad**, la actividad del negocio utilizada para el costeo.

Seleccione el icono **Guardar Cambios** en la barra de herramientas de Solop ERP, para guardar el registro de la pestaña **Orden**.

Seleccione la pestaña **Línea de la Orden** y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/sales-management/sam-sales-image291.png)

Imagen 30. Pestaña Línea de la Orden

Seleccione en el campo **Producto**, el producto o servicio a vender al socio del negocio cliente.

Introduzca en el campo **Descripción**, una breve descripción sobre el producto o servicio seleccionado para la venta.

Seleccione en el campo **Cantidad**, la cantidad a vender del producto o servicio seleccionado.

Seleccione en el campo **UM**, la unidad de medida a vender del producto o servicio seleccionado.

Introduzca en el campo **Precio**, el precio por unidad de medida del producto o servicio seleccionado para la venta.

Seleccione en el campo **Impuesto**, el impuesto a ser aplicado al producto o servicio seleccionado.

Podrá apreciar en el campo **Neto de Línea**, el monto neto del producto por la cantidad ingresada.

Regrese a la ventana principal **Orden** y seleccione la opción **Completar**.

![Campo](/assets/img/docs/sales-management/sam-sales-image299.png)

Imagen 38. Opción Completar

Seleccione la acción **Completar** y la opción **OK**, para completar el documento.

![Campo](/assets/img/docs/sales-management/sam-sales-image300.png)

Imagen 39. Opción Completar

## Validación de Inventario en Orden de Venta

Para validar la disponibilidad de los productos en las ventas por medio de las órdenes de venta, ya sea desde la ventana **Órdenes de Venta** o desde el formulario **Punto de Venta**, Solop ERP realizó una actualización en los tipos de documentos de órdenes de venta. Dicha actualización consta de un check que establece como regla principal la disponibilidad en almacén de los productos cargados a la orden.

![Campo](/assets/img/docs/sales-management/sam-sales-image301.png)

Imagen 1. Check Validar Disponibilidad

Note

El check **Validar Disponibilidad**, en los tipos de documentos se encuentra deshabilitado por defecto, permitiendo que se complete el registro de la orden de venta desde la ventana **Órdenes de Venta** o desde el formulario **Punto de Venta**, sin validar que tengan disponibilidad en almacén los productos cargados a la orden de venta.

La validación se realiza en las órdenes de ventas por medio del check **Validar Disponibilidad**, que se encuentra en el tipo de documento utilizado para generar dicha orden. Para que la validación funcione se debe considerar lo siguiente:

El tipo de documento debe estar marcado como **Validar Disponibilidad**.

La línea de la orden de venta debe tener cantidades mayores a cero.

Sólo aplica para lineas de órdenes con productos asociados.

El registro del producto debe tener habilitado el check **Almacenado**.

El almacén utilizado para la validación es el que se encuentra en la linea de la orden de venta.

Note

Esta configuración no aplica para las Órdenes de Devolución

## Funcionalidad de la Validación

Cuando el check se encuentra habilitado, Solop ERP sólo permitirá completar el registro de la orden de venta desde la ventana **Órdenes de Venta**, si todos los productos tienen disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:

![Campo](/assets/img/docs/sales-management/sam-sales-image302.png)

Imagen 2. Registro desde Ventana Órdenes de Venta

Note

Para crear una orden de venta desde la ventana **Órdenes de Venta**, puede consultar el material Registro de Orden de Venta.

De igual manera, al estar habilitado el check sólo será agregado el producto a la línea de la orden de venta desde el formulario **Punto de Venta**, si el producto seleccionado tiene disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:

![Campo](/assets/img/docs/sales-management/sam-sales-image303.png)

Imagen 3. Registro desde Formulario Punto de Venta

Note

Para crear una orden de venta desde el formulario **Punto de Venta**, puede consultar el material Toma de Pedido.

### **Órdenes de venta (Tipo documento destino: orden de venta)**


Se debe seleccionar el socio de negocio.

Desde línea de orden se pueden elegir los productos. En los casos de ventas recurrentes, existe la posibilidad de copiar líneas de una orden anterior.

Esta función (copiar líneas) copia las líneas tal como fueron generadas en la orden de venta original (hereda descuentos).

En el negocio de retail, la lista de precios utilizada ya posee el impuesto incluido (así está configurado en el check correspondiente, en la entidad lista de precios).

En la orden de venta, la regla de pago se setea por defecto según el socio de negocio seleccionado.

La dirección también la hereda del socio de negocio (pestaña Localización) y se encuentra vinculada a una región de ventas. Esto permite asignar un vendedor para cada región de ventas.

Es importante en la orden de venta la regla de facturación. En general, se utiliza "después de entrega", con el objeto de generar factura por aquello que ha sido efectivamente entregado y evitar así diferencias  por falta de stock.

Luego de setear todos los datos obligatorios se completa la orden de venta. Esto genera los documentos que correspondan según el tipo de orden de venta (en este caso en el cual el tipo es: orden de venta, no genera otros documentos).

Los descuentos en la orden de venta pueden ingresarse manualmente o bien setearse en el socio de negocio.


### ***__Órdenes de Venta: Tipo documento destino y subtipo OV__***

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

### ***__Orden de Venta: Regla de Entrega__***


De acuerdo a la selección que se realice sobre la regla de entrega, el sistema presentará diferentes comportamientos.

Reglas de Entrega:

* Disponibilidad: El ERP verifica que se posea el stock necesario de acierdp al producto y cantidades.
* Forzado: el sistema realiza la entrega completa sin verificar stock. En caso que el stock sea insuficiente, quedará con cantidad "negativa".
