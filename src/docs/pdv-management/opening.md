---
title: Acciones del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Apertura de Caja

El proceso de apertura de caja consiste en realizar una transferencia bancaria desde un proceso específico del punto de venta. Este procedimiento permite efectuar un egreso desde la caja administrativa y un ingreso en la caja donde se realizarán las operaciones de venta. Dichos movimientos se reflejan en la ventana Caja, mediante los documentos Pago y Cobro.

Este procedimiento genera un registro en la ventana Cierre de Caja, con la cuenta Caja, desde la cual egresa el dinero. En la línea correspondiente, se asocia el registro de Pago, generado en la ventana Caja.

Adicionalmente, se crea un registro en Cierre de Caja, con la cuenta Caja POS, a la cual ingresa el dinero. En la línea del registro se asocia el Cobro, generado en Caja por la apertura.

#### Procedimiento

1. Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas], en sección [Gestión de Caja].

2. Seleccionar la opción [Apertura].

3. Definir el importe para aperturar.

4. Definir en campo [Usar Fondos de Caja] la caja origen para el ingreso de apertura.

5. Seleccionar opción [Transferir Fondos].

6. Aceptar.


::: note
* Este proceso debe realizarse antes de iniciar las ventas del día.

* No se debe realizar la apertura de caja sin haber entregado físicamente el dinero correspondiente. De lo contrario, los saldos en Solop ERP no coincidirán con los saldos físicos.

* Es obligatorio seleccionar la opción OK en la ventana Transferencia Bancaria para completar el proceso y reflejar el movimiento monetario en Solop ERP.

* Si se requiere aperturar la caja con más de una moneda, se debe realizar una transferencia por cada moneda.
:::

![Apertura 1](/assets/img/docs/pdv-management/pdm-pdv-image292.png)

![Apertura 2](/assets/img/docs/pdv-management/pdm-pdv-image293.png)

## Completar Orden Preparada

El proceso de Completar Orden Preparada permite completar la orden de venta y generar automáticamente su factura y entrega en estado Completo. Se utiliza después de concluir la toma de pedido en la ventana Punto de Venta, permitiendo realizar la venta sin un cobro inmediato.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Luego de la toma de pedido, seleccionar la opción Completar Orden Preparada 

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image55.png)

## Copiar Orden Desde Otra

El proceso de Copiar Orden Desde Otra permite duplicar una orden de venta manteniendo los precios de los productos y la tasa de cambio utilizada en la orden original. Es especialmente útil para generar de manera ágil, órdenes recurrentes de ciertos Clientes desde el punto de venta.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Seleccionar Orden a copiar desde la opción Registros Históricos en la ventana Punto de Venta.

* Ubicar y seleccionar la orden de venta a copiar.

* Seleccionar la opción Copiar Orden.


::: note
* Si el terminal requiere un PIN de usuario, se debe ingresar antes de ejecutar el proceso.

* Una vez copiada, la orden se generará en estado Borrador con la fecha actual.

* Si se va a generar una nota de crédito, la orden debe copiarse antes de realizar la devolución, ya que al generarse la nota de crédito la orden original pasará a estado Cerrado.
:::

## Anular Transacción de Venta

Este proceso permite realizar la devolución total de una venta, generando automáticamente los documentos Orden de Devolución, Devolución y Nota de Crédito en estado Completo.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Seleccionar la orden desde opción Registros Históricos para localizar la transacción a anular.

* Seleccionar opción [Anular Transacción de Venta].

![Anular Transacción de venta](/assets/img/docs/pdv-management/pdm-pdv-image291.png)

## Retiro Detallado de Punto de Venta

Un retiro de fondos ocurre cuando se extrae dinero de una caja del punto de venta, ya sea por alivio de caja, cancelación de un gasto, entre otros.

#### Ejecución del Proceso

1. Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas], en sección [Gestión de Caja].

2. Seleccione la opción [Retiro].

3. Configure los filtros según su necesidad:

* Terminal PDV: Terminal del punto de venta.
* Definir Caja (origen) en [Usar Fondos de Caja]
* Socio del Negocio: Vendedor asociado.
* Tipo de Pago y Moneda.
* Seleccionar [Transferir Fondos].
* Aceptar

::: note
Por cada retiro realizado, Solop ERP genera en la ventana Caja:
* Un documento de pago asociando la caja POS.
* Un documento de cobro asociando la caja administrativa.
:::

Si el punto de venta tiene transacciones en efectivo y tarjeta, se deben realizar dos retiros por separado