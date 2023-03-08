---
title: Orden de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

Una orden de venta es un documento elaborado para autorizar la venta de los productos y servicios que contiene, el mismo puede ser utilizado como pedido, pre factura o cotización. Desde una orden de venta se pueden generar entregas, guias y facturas.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere una orden de venta, en su versión 3.9.2 para la localización Venezuela.

Registro de Orden de Venta
Validación de Inventario en Orden de Venta
Funcionalidad de la Validación

Registro de Orden de Venta
Ubique y seleccione en el menú de ADempiere la carpeta “Gestión de Ventas”, luego seleccione la carpeta “Órdenes de Venta”, por último seleccione la ventana “Órdenes de Venta”.

Menú de ADempiere

Imagen 1. Menú de ADempiere

Seleccione el icono “Registro Nuevo” en la barra de herramientas de ADempiere, para realizar un nuevo documento.

Icono Registro Nuevo

Imagen 2. Icono Registro Nuevo

Seleccione en el campo “Organización”, la organización para la cual esta realizando el documento “Orden de Venta”.

Campo Organización

Imagen 3. Campo Organización

Seleccione el tipo de documento a generar en el campo “Tipo de Documento Destino”, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

Campo Tipo de Documento

Imagen 4. Campo Tipo de Documento Destino

Seleccione en el campo “Fecha de la Orden”, la fecha en la que es ordenado por el cliente el producto o servicio.

Campo Fecha de la Orden

Imagen 5. Campo Fecha de la Orden

Seleccione en el campo “Fecha Prometida”, la fecha en la que es prometido el producto o servicio al cliente.

Campo Fecha Prometida

Imagen 6. Campo Fecha Prometida

Seleccione en el campo “Socio del Negocio”, el socio del negocio cliente al cual se le realizará la venta.

Campo Socio del Negocio

Imagen 7. Campo Socio del Negocio

Seleccione en el campo “Socio del Negocio a Facturar”, el socio del negocio a ser impreso en la factura.

Campo Socio del Negocio a Facturar

Imagen 8. Campo Socio del Negocio a Facturar

Seleccione en el campo “Dirección del Socio del Negocio”, la dirección de localización del socio del negocio.

Campo Dirección del Socio del Negocio

Imagen 9. Campo Dirección del Socio del Negocio

Seleccione en el campo “Dirección Factura”, la dirección a ser impresa en la factura para la entrega del producto o servicio.

Campo Dirección Factura

Imagen 10. Campo Dirección Factura

Seleccione en el campo “Usuario”, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.

Campo Usuario

Imagen 11. Campo Usuario

Seleccione en el campo “Contacto Entrega Directa”, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.

Campo Contacto Entrega Directa

Imagen 12. Campo Contacto Entrega Directa

Seleccione en el campo “Regla de Entrega”, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.

Campo Regla de Entrega

Imagen 13. Campo Regla de Entrega

Seleccione en el campo “Prioridad”, la prioridad que tiene la orden de venta que se esta realizando.

Campo Prioridad

Imagen 14. Campo Prioridad

Seleccione en el campo “Almacén”, el almacén donde se encuentra el producto o servicio que se va a vender.

Campo Almacén

Imagen 15. Campo Almacén

Seleccione el checklist “Entrega Directa”, para indicar que el documento será enviado del vendedor directamente al socio del negocio cliente.

Campo Entrega Directa

Imagen 16. Campo Entrega Directa

Seleccione en el campo “Vía de Entrega”, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.

Campo Vía de Entrega

Imagen 17. Campo Vía de Entrega

Seleccione en el campo “Regla de Costo de Flete”, la regla para cargar los costos del flete de los productos y servicios al socio del negocio cliente.

Campo Regla de Costo de Flete

Imagen 18. Campo Regla de Costo de Flete

Seleccione en el campo “Regla de Facturación”, la opción de cómo serán facturados los productos y servicios al socio del negocio cliente.

Campo Regla de Facturación

Imagen 19. Campo Regla de Facturación

Seleccione en el campo “Lista de Precios”, la lista de precios que será utilizada para la venta de los productos y servicios al socio del negocio cliente.

Campo Lista de Precios

Imagen 20. Campo Lista de Precios

Seleccione en el campo “Moneda”, la moneda que será utilizada para la venta de los productos y servicios al socio del negocio cliente.

Campo Moneda

Imagen 21. Campo Moneda

Seleccione en el campo “Agente Comercial”, el agente comercial o vendedor asignado a la región de ventas del socio del negocio cliente.

Campo Agente Comercial

Imagen 22. Campo Agente Comercial

Seleccione el checklist “Imprimir Descuento”, para imprimir el descuento en los documentos de orden de venta y factura.

Campo Imprimir Descuento

Imagen 23. Campo Imprimir Descuento

Seleccione en el campo “Término de Pago”, la opción de cómo serán pagados los productos y servicios por el socio del negocio cliente.

Campo Término de Pago

Imagen 24. Campo Término de Pago

Introduzca en el campo “Código de Promoción”, el código de promoción existente al momento de la venta.

Campo Código de Promoción

Imagen 25. Campo Código de Promoción

Seleccione en el campo “Tipo de Pago”, el tipo del pago de los documentos de orden de venta y factura.

Campo Tipo de Pago

Imagen 26. Campo Tipo de Pago

Seleccione en el campo “Centro de Costos”, el elemento definido para la combinación de cuentas.

Campo Centro de Costos

Imagen 27. Campo Cantro de Costos

Seleccione en el campo “Actividad”, la actividad del negocio utilizada para el costeo.

Campo Actividad

Imagen 28. Campo Actividad

Seleccione el icono “Guardar Cambios” en la barra de herramientas de ADempiere, para guardar el registro de la pestaña “Orden”.

Icono Guardar Cambios

Imagen 29. Icono Guardar

Seleccione la pestaña “Línea de la Orden” y proceda al llenado de los campos correspondientes.

Pestaña Línea de la Orden

Imagen 30. Pestaña Línea de la Orden

Seleccione en el campo “Producto”, el producto o servicio a vender al socio del negocio cliente.

Campo Producto

Imagen 31. Campo Producto

Introduzca en el campo “Descripción”, una breve descripción sobre el producto o servicio seleccionado para la venta.

Campo Descripción

Imagen 32. Campo Descripción

Seleccione en el campo “Cantidad”, la cantidad a vender del producto o servicio seleccionado.

Campo Cantidad

Imagen 33. Campo Cantidad

Seleccione en el campo “UM”, la unidad de medida a vender del producto o servicio seleccionado.

Campo UM

Imagen 34. Campo UM

Introduzca en el campo “Precio”, el precio por unidad de medida del producto o servicio seleccionado para la venta.

Campo Precio

Imagen 35. Campo Precio

Seleccione en el campo “Impuesto”, el impuesto a ser aplicado al producto o servicio seleccionado.

Campo Impuesto

Imagen 36. Campo Impuesto

Podrá apreciar en el campo “Neto de Línea”, el monto neto del producto por la cantidad ingresada.

Campo Neto de Línea

Imagen 37. Campo Neto de Línea

Regrese a la ventana principal “Orden” y seleccione la opción “Completar”.

Pestaña Principal Orden y Opción OK

Imagen 38. Opción Completar

Seleccione la acción “Completar” y la opción “OK”, para completar el documento.

Acción Completar y Opción OK

Imagen 39. Opción Completar


Validación de Inventario en Orden de Venta
Para validar la disponibilidad de los productos en las ventas por medio de las órdenes de venta, ya sea desde la ventana “Órdenes de Venta” o desde el formulario “Punto de Venta”, ERPyA realizó una actualización en los tipos de documentos de órdenes de venta. Dicha actualización consta de un check que establece como regla principal la disponibilidad en almacén de los productos cargados a la orden.

check validar disponibilidad

Imagen 1. Check Validar Disponibilidad

Note

El check “Validar Disponibilidad”, en los tipos de documentos se encuentra deshabilitado por defecto, permitiendo que se complete el registro de la orden de venta desde la ventana “Órdenes de Venta” o desde el formulario “Punto de Venta”, sin validar que tengan disponibilidad en almacén los productos cargados a la orden de venta.

La validación se realiza en las órdenes de ventas por medio del check “Validar Disponibilidad”, que se encuentra en el tipo de documento utilizado para generar dicha orden. Para que la validación funcione se debe considerar lo siguiente:

El tipo de documento debe estar marcado como “Validar Disponibilidad”.

La línea de la orden de venta debe tener cantidades mayores a cero.

Sólo aplica para lineas de órdenes con productos asociados.

El registro del producto debe tener habilitado el check “Almacenado”.

El almacén utilizado para la validación es el que se encuentra en la linea de la orden de venta.

Note

Esta configuración no aplica para las Órdenes de Devolución

Funcionalidad de la Validación
Cuando el check se encuentra habilitado, ADempiere sólo permitirá completar el registro de la orden de venta desde la ventana “Órdenes de Venta”, si todos los productos tienen disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:

registro desde ventana órdenes de venta

Imagen 2. Registro desde Ventana Órdenes de Venta

Note

Para crear una orden de venta desde la ventana “Órdenes de Venta”, puede consultar el material Registro de Orden de Venta.

De igual manera, al estar habilitado el check sólo será agregado el producto a la línea de la orden de venta desde el formulario “Punto de Venta”, si el producto seleccionado tiene disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:

registro desde formulario punto de venta

Imagen 3. Registro desde Formulario Punto de Venta

Note

Para crear una orden de venta desde el formulario “Punto de Venta”, puede consultar el material Toma de Pedido.