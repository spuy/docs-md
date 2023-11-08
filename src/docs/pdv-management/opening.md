---
title: Apertura de Caja
category: Documentation
star: 9
sticky: 9
article: false
---

El proceso de apertura de caja consta en realizar una transferencia bancaria desde un proceso específico del punto de venta. Permitiendo con ello, realizar un egreso de la caja administrativa del punto de venta y posteriormente, un ingreso a la caja en la cual serán realizadas las operaciones de venta. Dichos movimientos son reflejados en la ventana **Caja**, por medio de los documentos **Pago** y **Cobro**.

Este procedimiento crea un registro en la ventana **Cierre de Caja**, con la cuenta **Caja**, desde la cual egresa el dinero. En la línea del mismo, se asocia el registro de **Pago**, generado en la ventana **Caja** por la apertura.

Adicional a ello, crea un registro en dicha ventana **Cierre de Caja**, con la cuenta **Caja POS**, a la cual ingresa el dinero. De igual manera, se asocia en la línea del registro, el **Cobro**, generado en **Caja** por la apertura.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Apertura de Caja POS**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

::: note
Recuerde que este proceso se debe realizar antes de iniciar las ventas del día. Adicional a ello, es un proceso necesario al momento del cierre de caja.
:::

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image125.png)

Imagen 1. Diagrama de Apertura de Caja POS

::: warning
No debe realizar el proceso de apertura de caja si no es entregado fisicamente el dinero en la respectiva caja. De lo contrario, los saldos de la caja en Solop ERP no tendrán ninguna coincidencia con los saldos que existen fisicamente en la caja.
:::

::: note
Recuerde seleccionar la opción **OK**, ubicada en la parte inferior de la ventana **Transferencia Bancaria**, para completar el proceso y simular en Solop ERP el movimiento monetario realizado.
:::

::: note
Se debe realizar una transferencia por moneda, cuando se necesite aperturar la caja con más de una moneda.
:::

## Consultar Egreso e Ingreso Generado de la Apertura de Punto de Venta

Al buscar entre los registros de la ventana **Caja**, los valores ingresados en los campos **No. del Documento** y **Documento Destino**, de la ventana **Apertura de Punto de Venta**, se pueden visualizar dos (2) registros resultantes de la transferencia bancaria, entre ellos se encuentran.

El egreso generado en la cuenta **Caja Administrativa** como pago nacional, con toda la información suministrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.

El ingreso generado en la cuenta **Caja 04** como cobro nacional, con toda la información suministrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.

## Consultar Registros Creados en la Ventana Cierre de Caja

Al realizar una apertura de caja se crean dos registros en estado **Borrador**, en la ventana **Cierre de Caja**, uno para cada caja involucrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.