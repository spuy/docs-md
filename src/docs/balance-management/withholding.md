---
title: Retenciones
category: Documentation
star: 9
sticky: 9
article: false
---

## Definición de Retenciones

En la ventana Definición de Retenciones se parametrizan todas las retenciones de DGI, más las que necesite agregar customizada la empresa.

Datos a configurar en el registro de retención (cabezal):

* Código: El código establecido por DGI, enviado en el CFE
* Nombre: Nombre de la retención
* Tipo de Retención: Parametrización interna, por lo general se deberá seleccionar la única definida
* WHAmtType: Monto imponible, si se aplica sobre el impuesto, total o subtotal
* Porcentaje: Porcentaje a retener (0-100)
* Monto máximo: a retener

Mono registro:

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret1.png)

Multi registro:

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret2.png)

En la pestaña Documentos a Aplicar se indicarán los documentos en el cual se deben generar retenciones (ejemplo: Factura Proveedor).

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret3.png)

En la pestaña Proveedores se indicarán los Proveedores a los que se debe aplicar esta Retención. Estas retenciones también se pueden visualizar desde la ventana “Socio del Negocio” para cada uno de ellos, seleccionando la pestaña “Proveedor” y luego la pestaña “Retención”.

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret4.png)

Cada vez que se completa un Documento por pagar (Factura Proveedor o Nota de Crédito Proveedor), automáticamente el sistema verifica si el Proveedor al que se ingresó la factura tiene alguna retención definida.

::: note
Esto lo podemos ver en las ventanas “Definición de retenciones" o ventana “Socio del Negocio” pestaña "Retenciones".
:::

Si el proveedor tiene una retención definida y la factura cumple con la definición de la misma, una retención será generada automáticamente por el importe correspondiente al completar el Documento por pagar.
Al completar el mismo también se completa de forma automática la retención.
Para poder acceder a ella desde el Documento por Pagar podremos navegar desde los Documentos relacionados en la barra de herramientas.

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret5.png)

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret6.png)

## Resguardos

Una vez creadas las retenciones automáticamente a medida que se vayan generando los Documentos por Pagar, para realizar los resguardos se deberá buscar aquellas Retenciones que aún no hayan sido generados sus correspondientes resguardos para emitirlos.
Para generar los resguardos podremos realizarlos mediante el proceso de Generar Resguardos Masivos. Realizaremos la búsqueda inteligente, la cual permite filtrar por:

* Socio del Negocio (Proveedor)
* Organización
* Fecha del documento
* Retención
* Factura fuente
* Tipo de retención

![Definición de Retenciones](/assets/img/docs/balance-management/bam-ret7.png)

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