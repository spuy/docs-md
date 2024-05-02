---
title: Retenciones
category: Documentation
star: 9
sticky: 9
article: false
---

## Definición de Retenciones

Cada vez que se completa un Documento por pagar (Factura Proveedor o Nota de Crédito Proveedor), automáticamente el sistema verifica si el Proveedor al que se ingresó la factura tiene alguna retención definida, (esto lo podemos ver en las ventanas “Definición de retenciones" o ventana “Socio del Negocio” pestaña "Retenciones".
Si el proveedor tiene una retención definida y la factura cumple con la definición de la misma, una retención será generada automáticamente por el importe correspondiente al completar el Documento por pagar.
Al completar el mismo también se completa de forma automática la retención.
Para poder acceder a ella desde el Documento por Pagar podremos navegar desde los Documentos relacionados en la barra de herramientas.

## Resguardos

Una vez con las retenciones generadas automáticamente a medida que se vayan generando los Documentos por Pagar, para generar los resguardos se deberá buscar aquellas Retenciones que aún no hayan sido generados sus correspondientes resguardos para generarlos.
Para generar los resguardos podremos realizarlos mediante el proceso de Generar Resguardos Masivos. Realizaremos la búsqueda inteligente, la cual permite filtrar por:

* Socio del Negocio (Proveedor)
* Organización
* Fecha del documento
* Retención
* Factura fuente
* Tipo de retención

Una vez seleccionemos todas aquellas retenciones sobre las cuales se desea generar un resguardo, procederemos a correr el proceso, el cual va a generar los documentos "Resguardo" requeridos a partir de los “Documentos Retención” Completos. 
En este caso se selecciona Preparar el documento para completarlo posteriormente.
Estos resguardos generados es posible visualizarlos en la ventana “Resguardos” y funcionarán como una Nota de Crédito Proveedor.

::: note
Tener en cuenta que los Resguardos son CFE y se generarán siempre en la moneda pesos uruguayos convertidos según Tasa de Cambio de la fecha del Documento por Pagar
:::

En la ventana Resguardos, desde el ícono de procesos podremos acceder a “Impresión de resguardo” para visualizar el formato de impresión del mismo.

### Asignar un Resguardo

Un Resguardo se agrega en un Recibo de Pago como una Nota de Crédito Proveedor, descontando el Importe a Pagar o en una Selección de pagos.

Contra Resguardos:
Cuando se anula un resguardo se genera un reverso (contra-resguardo) que tendrá la siguiente secuencia y será el negativo del original.

### Registro de un resguardo recibido

Los resguardos que nos realiza un cliente y nos lo descuenta en un Recibo de Cobro los ingresaremos desde la ventana Recibo de Cobro.

Aquí seleccionaremos el botón Cobro Contado y completaremos los campos seleccionando “Resguardo” en el campo Regla de pago, y el banco “Retenciones Recibidas” en el campo Cuenta Bancaria.
Este banco tiene una definición contable que va a mover la cuenta de "Retenciones Recibidas" (Ver definición de Cuentas Bancarias).