---
title: 2. Facturación
category: Documentation
star: 9
sticky: 9
article: false
---

### Crear Orden de Compra desde Línea de Requisición

Permite la búsqueda de las diferentes requisiciones pendientes por proyecto, por fase, etc. Con el fin de generar la correspondiente orden de compra por los productos comprendidos en cada requisición.

Se define el Proveedor, tipo de documento y fecha.

En el caso de no poseer precios de productos, es posible generar la orden de compra en estado "Preparar" (y no completar). Para luego, cuando se confirme precio de productos, se consulte la orden de compra, se definan los precios y se cambie el estado por "Completo".

![Crear OC](/assets/img/docs/construction-management/com-image4.png)

### Salida de Proyecto desde Compra/Inventario

Este proceso permite seleccionar las órdenes de compra recibidas (o bien permite seleccionar desde nuestro inventario) los productos que se deseen enviar al costo del Proyecto (se define la fecha del movimiento). O sea, permite realizar el movimiento de productos desde nuestro propio stock o desde una compra realizada.

![Salida de Proyecto](/assets/img/docs/construction-management/com-image5.png)

En el caso de realizarlo desde una compra, genera dos movimientos en un solo paso: realiza la recepción de los productos de la compra, y genera la salida por proyecto (o sea, los baja de stock por cosumo en un proyecto determinado).

## Generar orden desde Línea de Proyecto

En este paso, este proceso permite generar orden de venta por líneas de proyecto (permite la preparación para facturar de el avance de un determinado proyecto).

Desde un grupo de parámetros permite individualizar las líneas sobre las cuales se realizará la orden de venta y luego se define el tipo de documento, la fecha y la acción sobre el documento (preparar o completar).

En una primera instancia se generará una exportación (a excel por ejemplo) de aquellas líneas que estén en situación de ser facturadas para enviar y notificar al cliente.

Esta exportación brinda información del avance del proyecto, de los productos con cantidad cotizada, cantidad cometida y cantidad a facturar.

Luego de la aprobación del cliente se procede a completar la orden de venta para su posterior facturación.

![Generar Orden](/assets/img/docs/construction-management/com-image6.png)

## Generar Factura desde Línea de Orden

Este proceso permite visualizar las líneas de órdenes de venta en estado completo, que se encuentran en situación de generar la factura a cliente.

Es posible seleccionar el tipo de agrupación para generar facturas: por proyecto, por orden, etc. y al seleccionar las líneas de orden y ejecutar el proceso generará tantas facturas (documentos por cobrar) como correspondan según la agrupación seleccionada.

Se selecciona la fecha del documento y la acción sobre el documento (preparar o completar).

En el caso de seleccionar la acción "Completar" ingresa en el circuito de envío de facturas a la entidad fiscal (según corresponda) así como el envío de la representación gráfica a los clientes vía e mail.

![Generar Factura](/assets/img/docs/construction-management/com-image7.png)

## Reporte "Detalle de Avance de Proyecto"

El reporte Detalle de Avance de Proyecto muestra los mismos datos que el smart browser "Generar Orden desde Línea de Proyecto".
Permite filtrar por parámetros de "Proyecto" y "Fase de Proyecto".

### Detalle de columnas

- Total Planeado: es el total planeado de la línea de proyecto

- Cant. Planeada: es la cantidad planeada de la línea de proyecto

- Cuenta Facturada: es el importe de cuenta facturada de la línea de proyecto

- Cant. Facturada: es la cantidad facturada de la línea de proyecto

- Cant. Cometida: es la cantidad cometida de la línea de proyecto

- % Trabajo Terminado: es el % de trabajo terminado de la línea de proyecto

- % Facturado: si la cant. planeada de la línea de proyecto es mayor a cero entonces será el resultado de (cuenta facturada * 100)/cant. planeada, de lo contrario el valor de esta columna será cero

- % a Facturar: es el resultado de (% trabajo terminado - % facturado)

- Cant. a Facturar: es el resultado de (cant. cometida - cant. facturada)

- Importe a Facturar: es el resultado de (cant. a facturar * precio planeado de línea de proyecto)

### Reporte disponible para los roles:

* Administrador

* Constructora - Admin