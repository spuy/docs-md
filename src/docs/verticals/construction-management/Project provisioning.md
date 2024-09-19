---
title: 2. Aprovisionamiento de Proyecto
category: Documentation
star: 9
sticky: 9
article: false
---

## *Necesidades de Proyecto*

Desde el *Navegador Necesidades de Proyecto* es posible seleccionar el proyecto y la Fase (opcional). Al aceptar se desplegará el listado de todo lo que necesita alimentar ese proyecto (o Fase) para llevarse a cabo (los productos).

Luego, desde los parámetros es posible seleccionar si se desea generar una Orden de compra (para abastecer con los productos necesarios al proyecto/fase) o bien una requisición (una solicitud interna de compra).

![Necesidades de Proyecto](/assets/img/docs/construction-management/com-image3.png)

### *Crear Orden de Compra desde Línea de Requisición*

Permite la búsqueda de las diferentes requisiciones pendientes por proyecto, por fase, etc. Con el fin de generar la correspondiente orden de compra por los productos comprendidos en cada requisición.

Se define el Proveedor, tipo de documento y fecha.

En el caso de no poseer precios de productos, es posible generar la orden de compra en estado "Preparar" (y no completar). Para luego, cuando se confirme precio de productos, se consulte la orden de compra, se definan los precios y se cambie el estado por "Completo".

![Crear OC](/assets/img/docs/construction-management/com-image4.png)

### *Salida de Proyecto desde Compra/Inventario*

Este Navegador permite seleccionar las órdenes de compra recibidas (o bien permite seleccionar desde nuestro inventario) los productos que se deseen enviar al costo del Proyecto (se define la fecha del movimiento). O sea, permite realizar el movimiento de productos desde nuestro propio stock o desde una compra realizada.

![Salida de Proyecto](/assets/img/docs/construction-management/com-image5.png)

En el caso de realizarlo desde una compra, genera dos movimientos en un solo paso: realiza la recepción de los productos de la compra, y genera la salida por proyecto (o sea, los baja de stock por cosumo en un proyecto determinado).