---
title: Documento por Cobrar
category: Documentation
star: 9
sticky: 9
article: false
---

Una factura en cuentas por cobrar, es el documento legal que representa una deuda contraída por un cliente determinado con la compañía u organización, por la compra de productos y servicios que el mismo necesita de forma directa o indirecta.

En Solop ERP es posible generar una factura de cuentas por cobrar de forma directa. El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una factura de cuentas por cobrar en Solop ERP.

## Registro de Documento por Cobrar

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Facturas de Ventas**, por último seleccione la ventana **Documentos por Cobrar**.

![Campo](/assets/img/docs/sales-management/sam-sales-image216.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar la ventana **Documentos por Cobrar** con los diferentes registros de documentos de cuentas por cobrar en Solop ERP.

![Campo](/assets/img/docs/sales-management/sam-sales-image217.png)

Imagen 2. Ventana Documento por Cobrar

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de Solop ERP para crear un nuevo registro de factura de cuentas por cobrar.

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento por cobrar.

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por Solop ERP.

Introduzca en el campo **Fecha de Facturación**, la fecha en la cual se realiza la venta y facturación del producto o servicio.

Introduzca en el campo **Fecha Contable**, la fecha en la cual se realiza la venta y facturación del producto o servicio.

Seleccione en el campo **Socio del Negocio**, el socio del negocio cliente al cual se le realiza la venta del producto o servicio.

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección de localización del socio del negocio cliente al cual se le realiza la venta del producto o servicio.

Seleccione en el campo **Lista de Precios**, la lista de precios que será utilizada para la venta del producto o servicio.

Podrá visualizar en el campo **Moneda**, la moneda utilizada para la venta del producto o servicio, esta va a depender de la lista de precios seleccionada.

Seleccione en el campo **Término de Pago**, el término o la condición establecida para el pago del producto o servicio.

Recuerde guardar el registro de los campos con ayuda del icono **Guardar Cambios**, ubicado en la barra de herramientas de Solop ERP.

Seleccione la pestaña **Línea de la Factura** y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/sales-management/sam-sales-image228.png)

Imagen 13. Pestaña Línea de la Factura

Seleccione en el campo **Producto**, el producto o servicio que será vendido al socio del negocio cliente.

Seleccione en el campo **Cantidad**, la cantidad de productos o servicios que serán vendidos al socio del negocio cliente.

Seleccione en el campo **UM**, la unidad de medida del producto que será vendido al socio del negocio cliente.

Podrá visualizar en el campo **Precio**, el precio unitario del producto o servicio seleccionado para la venta al socio del negocio cliente.

Seleccione en el campo **Impuesto**, el impuesto correspondiente a la venta del producto o servicio seleccionado.

Podrá visualizar en el campo **Neto de Línea**, el resultado del cálculo del valor en el campo **Precio** por el valor ingresado en el campo **Cantidad**.

Recuerde guardar el registro de los campos con ayuda del icono **Guardar Cambios**, ubicado en la barra de herramientas de Solop ERP.

Seleccione la pestaña principal **Factura** y luego seleccione la opción **Procesar Factura** ubicada en la parte inferior del documento por cobrar.

Seleccione la acción **Completar** y la opción **OK** para completar el documento.

![Campo](/assets/img/docs/sales-management/sam-sales-image236.png)

Imagen 21. Acción Procesar Factura y Opción OK

## Consultar Facturas Generadas

Al consultar el registro en la ventana **Documentos por Cobrar**, puede visualizar la factura de cuentas por cobrar generada desde la línea de la orden.

![Campo](/assets/img/docs/sales-management/sam-sales-image254.png)

Imagen 18. Consulta de Facturas Generadas

## Imprimir Facturas Generadas

Al imprimir el registro en la ventana **Documentos por Cobrar**, seleccionando el icono **Imprimir** ubicado en la barra de herramientas de Solop ERP, podrá visualizar de la siguiente manera la factura de ventas generada desde la línea de la orden.

![Campo](/assets/img/docs/sales-management/sam-sales-image255.png)

Imagen 19. Imprimir Facturas Generadas

## Documentos por Cobrar Servicios

Este documento está destinado a definir las diferentes formas de facturar un Contrato de Servicios.
La explicación detallada sobre Contrato de Servicios se encuentra en la sección Gestión de Servicios, en el apartado Contrato de Servicio.

El Contrato es un acuerdo sobre determinadas condiciones entre nuestra organización y un cliente (o un proveedor). Dentro de esas condiciones se encuentra la manera en la cual será facturado respecto a su frecuencia (mensual, anual), respecto a si se trata de un pago único o en cuotas. Así como acuerdos de otra índole como pactar Honorarios sobre determinados productos/servicios.

## Facturación Recurrente de Servicios en cuotas

### Facturación de Cuotas del Contrato de Servicios

Para generar facturas de manera masiva se deberá utilizar el proceso de “Generar Factura desde Cuota de Contrato”.

El primer paso será realizar la búsqueda “smartbrowser” utilizando los siguientes filtros:

* Socio del Negocio
* Servicio
* Fecha del Concepto

Luego se deberán seleccionar mediante los checks de la izquierda izquierda todas las cuotas que se deseen facturar.

Seleccionar Líneas

Las Facturas serán generadas al momento de marcar el check de OK en la sección inferior de los “Parámetros”.

Se deberá definir la Fecha de facturación, el Tipo de Documento que se desea emitir así como la acción que se desea realizar al documento (preparar, completar).

En el caso que se elija la acción de Preparar, deberá completar manualmente el documento luego.

El Proceso generará un único documento por cada Socio de negocio a facturar.

![Generar Factura desde Cuota de Contrato](/assets/img/docs/sales-management/sam-education3.png)