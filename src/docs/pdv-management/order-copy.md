---
title: Copiar Orden Desde Otra
category: Documentation
star: 9
sticky: 9
article: false
---

El proceso de **Copiar Orden Desde Otra**, pemite realizar una copia exacta de una orden determinada, repestando los precios que tienen los productos en la misma, así como la tasa de cambio con la que fue generada.

::: note
Mayormente las órdenes son copiadas desde el punto de venta para mantener la tasa de cambio de la misma y generar una orden con fecha actual, en la cual se mantengan los mismos precios. Este proceso se debe utilizar cuando se va a generar una nota de crédito desde el punto de venta, ya que permite crear una orden bajo la misma tasa de cambio.
:::

Para copiar una orden de venta desde el punto de venta, se debe realizar el siguiente procedimiento:

1. Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

La interfaz de la ventana **Punto de Venta**, se encuentra definida de forma específica en el documento Interfaz de Punto de Venta, elaborado por Solop ERP.

2. Realice la búsqueda de registros de órdenes de venta generadas desde el punto de venta, seleccionando el icono **Registros Históricos** de la barra de herramientas de la ventana **Punto de Venta**, dicho proceso se encuentra explicado en el documento Barra de Herramientas del Punto de Venta, elaborado por Solop ERP.

3. Seleccione en la ventana **Orden de Venta**, generada del icono **Registros Históricos**, la orden de venta que requiere copiar.

4. Por último, seleccione la opción **OK** para ubicar en la ventana **Punto de Venta**, el registro de la orden de venta realizada desde el punto de venta.

Podrá visualizar que el registro de la orden de venta ubicada se encuentra en estado **Completo**.

::: warning
Es importante resaltar que cuando se presenta una devolución, la orden debe ser copiada antes de ejecutar el proceso de devolución ya que al generarse la nota de crédito, la orden pasa de estado Completo a estado Cerrado.
:::

Seleccione la opción **Copiar Orden Desde Otra**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por Solop ERP.

::: note
En el caso de que el terminal del punto de venta con el cual se encuentra trabajando, este configurado para que requiera PIN al momento de ejecutar ciertas transacciones, se mostrará la ventana PIN de Usuario luego de seleccionar la opción Copiar Orden Desde Otra. En dicha ventana se debe ingresar el PIN del usuario establecido como supervisor en el terminal y finalmente seleccionar la opción OK para ejecutar el proceso.
:::

Para el presente ejemplo, el terminal con el cual se esta realizando la transacción, no se encuentra configurado para que solicite el PIN.

Al seleccionar la opción **Copiar Orden Desde Otra**, se ejecuta el proceso de manera automática y podrá visualizar en la ventana **Punto de Venta**, el nuevo registro de la orden de venta en estado **Borrador** y con fecha actual **06/08/2021**.

Adicionalmente, puede visualizar que la orden contiene todos los productos y precios de la orden copiada.