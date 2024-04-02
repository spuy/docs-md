---
title: Acciones del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Apertura de Caja

El proceso de apertura de caja consta en realizar una transferencia bancaria desde un proceso específico del punto de venta. Permitiendo con ello, realizar un egreso de la caja administrativa del punto de venta y posteriormente, un ingreso a la caja en la cual serán realizadas las operaciones de venta. Dichos movimientos son reflejados en la ventana **Caja**, por medio de los documentos **Pago** y **Cobro**.

Este procedimiento crea un registro en la ventana **Cierre de Caja**, con la cuenta **Caja**, desde la cual egresa el dinero. En la línea del mismo, se asocia el registro de **Pago**, generado en la ventana **Caja** por la apertura.

Adicional a ello, crea un registro en dicha ventana **Cierre de Caja**, con la cuenta **Caja POS**, a la cual ingresa el dinero. De igual manera, se asocia en la línea del registro, el **Cobro**, generado en **Caja** por la apertura.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Apertura de Caja POS**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

::: note
Recuerde que este proceso se debe realizar antes de iniciar las ventas del día. Es un proceso necesario al momento del cierre de caja (la apertura genera el registro de cierre de caja con el primer movimiento por el ingreso del dinero).
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

![Apertura 1](/assets/img/docs/pdv-management/pdm-pdv-image292.png)

![Apertura 2](/assets/img/docs/pdv-management/pdm-pdv-image293.png)

### Consultar Egreso e Ingreso Generado de la Apertura de Punto de Venta

Al buscar entre los registros de la ventana **Caja**, los valores ingresados en los campos **No. del Documento** y **Documento Destino**, de la ventana **Apertura de Punto de Venta**, se pueden visualizar dos (2) registros resultantes de la transferencia bancaria, entre ellos se encuentran:

* El egreso generado en la cuenta **Caja Administrativa** como pago nacional, con toda la información suministrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.

* El ingreso generado en la cuenta **Caja 04** como cobro nacional, con toda la información suministrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.

### Consultar Registros Creados en la Ventana Cierre de Caja

Al realizar una apertura de caja se crean dos registros en estado **Borrador**, en la ventana **Cierre de Caja**, uno para cada caja involucrada en el proceso ejecutado en la ventana **Apertura de Punto de Venta**.

## Completar Orden Preparada

El proceso completar orden preparada permite completar la orden de venta generando automáticamente en estado **Completo**, su respectiva factura y entrega. Esta opción se utiliza luego de concluir con la toma de pedido en la ventana **Punto de Venta**, permitiendo realizar el proceso de venta sin un cobro.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Completar Orden Preparada**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image55.png)

Imagen 1. Diagrama de Completar Orden Preparada POS

Para ejecutar correctamente el proceso completar orden preparada, se debe realizar el siguiente procedimiento.

## Ejecución del Proceso

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

La interfaz de la ventana **Punto de Venta**, se encuentra definida de forma específica en el documento Interfaz de Punto de Venta, elaborado por Solop ERP. Realice cada uno de los procesos explicados a continuación para obtener un resultado exitoso en la completación de una orden preparada por el punto de venta.

Luego de realizar desde el punto de venta la toma de pedido, seleccione la opción **Completar Orden Preparada**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por Solop ERP.

## Consulta de Documentos Generados

En la ventana **Orden Venta**, se puede visualizar el registro de la orden de venta con ayuda del número de documento **OPOS-58** mostrado en el grupo de campos Información de la Orden, de la ventana **Punto de Venta**.

Al seleccionar en el registro de la orden de venta generada, el icono **Visualiza Detalle** ubicado en la barra de herramientas de Solop ERP y la opción **Documentos por Cobrar**, Solop ERP muestra el registro de la factura generada desde el punto de ventan, en la ventana **Documentos por Cobrar**.

Al seleccionar la pestaña **Facturas Pagadas**, de la ventana **Documentos por Cobrar**, podrá visualizar que efectivamente no fue creado ni asociado a la factura ningún tipo de pago.

Adicional a ello, se genera en la ventana **Entrega (Cliente)**, el documento de entrega de los productos cargados a la orden de venta desde el punto de venta. Este se puede visualizar seleccionando el icono **Visualiza Detalle** ubicado en la barra de herramientas de Solop ERP y la opción **Entregas (Cliente)**.

## Copiar Orden Desde Otra

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

## Anular Transacción de Venta

El proceso anular transacción de venta, permite realizar la devolución total de la venta, generando de manera automática y en estado **Completo**, los documentos **Orden de Devolución**, **Devolución** y **Nota de Crédito**.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Anular Transacción de Venta**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image14.png)

Imagen 1. Diagrama de Anular Transacción de Venta POS

A continuación, se específica el procedimiento que se debe realizar para anular correctamente una transacción de venta de POS.

## Ejecución del Proceso

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

La interfaz de la ventana **Punto de Venta**, se encuentra definida de forma específica en el documento Interfaz de Punto de Venta, elaborado por Solop ERP. Realice cada uno de los procesos explicados a continuación para obtener un resultado exitoso en la anulación de la transacción de venta por el punto de venta.

Realice la búsqueda de registros de órdenes de venta generadas desde el punto de venta, seleccionando el icono **Registros Históricos** de la barra de herramientas de la ventana **Punto de Venta**, dicho proceso se encuentra explicado en el documento Barra de Herramientas del Punto de Venta, elaborado por Solop ERP.

Seleccione en la ventana **Orden de Venta**, generada del icono **Registros Históricos**, la orden de venta que requiere anular.

Por último, seleccione la opción **OK** para ubicar en la ventana **Punto de Venta**, el registro de la orden de venta realizada desde el punto de venta.

Luego de ubicar la orden de venta que requiere anular, seleccione la opción **Anular Transacción de Venta**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por Solop ERP.

Al seleccionar el proceso **Anular Transacción de Venta**, Solop ERP muestra el mensaje para la confirmación de la ejecución del proceso, en el cual se debe seleccionar la opción **OK**, para ejecutar el mismo.

Luego de ejecutar la acción anteriormente explicada, Solop ERP muestra un mensaje con el resultado del proceso.

Por último, se muestra el reporte del documento **Nota de Crédito de CxC** generada automáticamente desde el proceso **Anular Transacción de Venta**.

## Consulta de Documentos Generados

En la ventana **Orden de Devolución (Cliente)**, se puede visualizar el registro de la orden de devolución con ayuda del número de documento **OPOS-36106** generado en el reporte de la nota de crédito mostrada anteriormente.

De igual manera, se puede visualizar en la ventana **Devolución Cliente**, el registro generado desde el proceso anteriormente explicado.

Este documento se genera de manera automática, cuando existe un documento de entrega asociado a la venta.

::: note
Recuerde que dicho documento de entrega se puede generar de manera automática según la configuración del tipo de documento, como se indica en el material Gestión PDV.
:::

Finalmente, se puede visualizar en la ventana **Documentos por Cobrar**, el registro de la nota de crédito generado automáticamente desde el proceso anteriormente explicado.

Adicional a ello, se genera un egreso en caja con el tipo de documento **Pago Nacional**, para reflejar el movimiento de egreso realizado automáticamente al ejecutar el proceso **Anular Transacción de Venta**.

### Devolución

#### Devolución de Cliente desde Punto de Venta

Para realizar una devolución a un cliente de una Factura se deberá realizar los siguientes pasos:

1. Identificar la Orden de Venta la cuál se está devolviendo. Para ello se deberá ir a las “Opciones Rápidas del Punto de Venta” ubicadas ocultas en la parte izquierda del Punto de Venta. Dentro de la sección “Orden de Venta” hacer click en la opción “Histórico de Órdenes”. Se abrirá una ventana emergente donde podrá realizar una búsqueda de la orden de venta correspondiente. Utilizar los filtros existentes para acotar las órdenes a mostrar. Marcar Procesada = SI y la Fecha de la misma. Opcionalmente si el cliente está identificado también podrá buscar por el Socio del Negocio. Una vez encuentre la Orden que corresponde, seleccionarla con un click y darle OK a la ventana. La Orden de Venta será cargada en el Punto de Venta con sus líneas correspondientes.
2. Una vez tengamos la orden de venta sobre la que se desea realizar la devolución se deberá ir nuevamente a las opciones rápidas del Punto de Venta y hacer click en la acción “Anular Transacción de Venta”. Esta acción abrirá una pequeña ventana de “Descripción” donde se deberá detallar el motivo de la misma. Al hacer click en el Check del proceso, se generará la correspondiente devolución, creando la Nota de Crédito en cuestión así como también la devolución de mercadería y el Pago por la salida de dinero.

![Anular Transacción de venta](/assets/img/docs/pdv-management/pdm-pdv-image291.png)

Al anular una transacción de venta el sistema lo que realizará será los siguientes:

* La orden de venta original será cerrada quedando la misma inactiva inactiva.
* De los documentos  asociados a la misma sin ser modificados es decir la factura en cuestión quedará así la orden de venta original será cerrada quedando la misma inactiva  inactiva.
* De los documentos  asociados a la misma sin ser modificados es decir la factura en cuestión quedar asignada con el cobro realizado originalmente.
* Por otro lado se generará una nueva orden de venta = las características de la orden de venta original pero sobre la misma se generará un documento por cobrar del tipo nota de crédito un pago es decir una salida de caja haciendo la cancelación correspondiente y quedando la misma asignada a la conciliación del día de la caja en cuestión y también una devolución cliente que realice moverá el inventario gnada con el cobro realizado originalmente.
* Por otro lado se generará una nueva orden de venta = las características de la orden de venta original pero sobre la misma se generará un documento por cobrar del tipo nota de crédito un pago es decir una salida de caja haciendo la cancelación correspondiente y quedando la misma asignada a la conciliación del día de la caja en cuestión y también una devolución cliente que realice moverá el inventario

## Retiro Detallado de Punto de Venta

Un retiro de fondos es realizado cuando por algún motivo se saca dinero de alguna de las cajas donde es realizado el proceso de venta de productos, la mayoria de las veces suele suceder por un alivio de caja, cancelación de un gasto, entre otros. A continuación es explicado el procedimiento regular para reflejar en Solop ERP, un retiro de fondos.

A continuación, se específica el procedimiento que se debe realizar para retirar correctamente los fondos de caja POS.

## Ejecución del Proceso

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

Si en el transcurso del día, se presenta un retiro de fondos en alguna de las cajas en la cual se encuentran realizando transacciones desde el punto de venta, seleccione la opción **Retiro de Caja (Detallado)**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por Solop ERP.

Podrá visualizar la ventana **Retiro de Caja (Detallado)**, con diferentes campos que permiten filtrar la información en base a lo requerido por el usuario para reflejar el retiro de fondos de la caja donde se encuentra realizando sus operaciones de venta.

Como ejemplo del proceso de retiro de fondos desde el punto de venta se tienen las siguientes transacciones en **Caja 01**:

- Transacciones del punto de venta del día **10/02/2021**.

  - Apertura de Caja

    - 100,00 en Moneda **USD**

  - Formas de Pago Recibidas por Ventas

    - Efectivo en Moneda **USD**

      - 10,00

    - Transferencia en Moneda **UYU**

      - 5.917.563,54

    - Pago Móvil en Moneda **UYU**

      - 70.000.000,00

    - Débito Directo en Moneda **UYU**

      - 40.577.378,71

El retiro detallado de la caja, se debe realizar por moneda. Para el caso de la moneda **UYU**, se debe tildar de manera Obligatoria, el check **Dividir Depósitos**, para que Solop ERP genere un egreso de caja POS por el total de los movimientos con dicha moneda y un ingreso a caja administrativa por cada uno de los movimientos de cobro de dicha moneda.

En el campo **Terminal PDV**, podrá visualizar el terminal asociado al punto de venta desde el que accedió al proceso.

En el campo **Cuenta Bancaria**, podrá visualizar la cuenta bancaria de la caja POS asociada al punto de venta desde el que accedió al proceso.

Seleccione en el campo **Socio del Negocio**, el socio del negocio vendedor por el cual requiere filtrar la información.

Seleccione en el campo **Tipo de Pago**, el tipo de pago por el cual requiere filtrar la información.

Seleccione en el campo **Fecha de la Transacción**, el rango de fecha por la cual requiere filtrar la información.

Seleccione en el campo **Moneda**, la moneda por la cual requiere filtrar la información.

Seleccione la opción **Comenzar Búsqueda**, para filtrar la información en base a lo seleccionado anteriormente.

Podrá visualizar los diferentes movimientos de la caja en base a lo seleccionado.

Seleccione los movimientos correspondientes al retiro que requiere realizar.

Seleccione en el campo **Fecha de la Transacción**, la fecha con la que serán generados los documento.

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria en la cual ingresarán los movimientos seleccionados.

Seleccione en el campo **Socio del Negocio**, el socio del negocio correspondiente para el ingreso.

Introduzca en el campo **No. del Documento**, el número de documento para los documentos de egreso e ingreso.

En el caso de los retiros en moneda **UYU**, tilde el check **Dividir Depósitos**, para generar un documento de egreso de la caja POS con la suma de todos los cobros y tantos documentos de ingreso a la caja administrativos como movimientos seleccionados en el proceso.

Seleccione en el campo **Cargo**, el cargo que justifica el retiro de fondos del dinero de la caja. Para este caso, es utilizado como ejemplo el cargo **Efectivo en Tránsito Administración**.

Seleccione en el campo **Tipo de Documento para Retiros**, el tipo de documento con el cual será generado el egreso. Para este caso, se utiliza el tipo de documento **Egreso Caja**.

Seleccione en el campo **Tipo de Documento para Depósito**, el tipo de documento con el cual será generado el ingreso. Para este caso, se utiliza el tipo de documento **Ingreso Caja**.

El check **Conciliar Automáticamente**, permite la conciliación automática de los movimientos seleccionados.

Seleccione la opción **OK**, para ejecutar el proceso.

::: note
Por cada retiro de fondo realizado desde el punto de venta, Solop ERP crea en la ventana **Caja** los siguientes documentos:
:::

Un documento de pago asociando en el campo **Cuenta**, la caja POS desde la cual se ejecuta el proceso. Dicho documento se puede visualizar en la ventana **Caja**.

De igual manera crea un documento de cobro asociando en el campo **Cuenta**, la caja adiministrativa seleccionada en el campo **Cuenta Bancaria** del proceso **Retiro de Caja (Detallado)**. Dicho documento se puede visualizar en la ventana **Caja**.

::: note
En el caso que el punto de venta haya tenido transacciones tanto en efectivo como con tarjeta, se deberán realizar dos retiros, uno por cada método de pago (uno por el efectivo y uno por las tarjetas).
:::

## Consulta de Pago y Cobro Generados en Caja

Ubique los registros creados por el retiro de fondos en la ventana **Caja**, con ayuda del número de documento ingresado en el campo **No. del Documento**, de la ventana **Retiro de Caja (Detallado)**.

Podrá visualizar en la parte inferior derecha de la ventana **Caja**, el número de registros creados con el valor ingresado en el campo **No. del Documento**, de la ventana **Retiro de Caja (Detallado)**.

Podrá visualizar el registro de **Pago** creado desde la ventana **Retiro de Caja (Detallado)**.

Seleccione el icono **Próximo Registro**, ubicado en la barra de herramientas para visualizar el registro de **Cobro** creado desde la ventana **Retiro de Caja (Detallado)**.

## Consultar Registro en Cierre de Caja

Cada forma de pago y moneda por la que se realiza un retiro de fondos, se genera un documento de egreso y uno de ingreso en la ventana **Caja**. Por cada documento generado se crea una línea con el mismo asociado, en la pestaña **Línea de Cierre de Caja**, de la ventana **Cierre de Caja** correspondiente a los registros creados en estado Borrador al realizar la apertura de caja.

Registro de **Caja Administrativa** en la ventana **Cierre de Caja**.

Registro de **Caja 01** en la ventana **Cierre de Caja**.

::: note
En el reporte Detalles de Caja es posible visualizar los ingresos de un punto de venta por sus diferentes métodos de pago (seleccionando los fitros fecha, cuenta del Punto de venta y Estado de Documento COMPLETO) y de esa forma tener la posibilidad de analizar el caso ante una posible diferencia de caja.
:::

## Cierre de Caja del Punto de Venta

Cada uno de los Cobros realizados desde un Punto de Venta son ingresados a un Cierre de Caja (Conciliación Bancaria), cuando se realiza el cierre simplemente se debe verificar dicha conciliación, analizando las diferencias que puede tener.

El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana **Punto de Venta**. Su finalidad es completar el registro de cierre de caja creado con la cuenta **Caja POS** en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:

1. La apertura de caja desde el proceso de punto de venta

2. La venta de los productos desde el punto de venta

3. El retiro de fondos desde el punto de venta

Cada uno de los procesos anteriormente nombrados, generan documentos que se asocian de manera automática a la línea de los registros creados en la ventana **Cierre de Caja**, con las cuentas **Caja POS** y **Caja**.

Adicional a ello, al ejecutar el proceso cierre de caja del punto de venta, Solop ERP deja el cierre de caja creado con la cuenta **Caja**, en estado **Borrador**, para que este sea completado de forma manual.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Cierre de Caja**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image26.png)

Imagen 1. Diagrama de Cierre de Caja POS

A continuación, se específica el procedimiento que se debe realizar para ejecutar correctamente el cierre de caja POS.

### Ejecución del Proceso

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

Luego de realizar desde el punto de venta todas las tomas de pedido del día, seleccione la opción **Cerrar Caja del Punto de Venta**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por Solop ERP.

Podrá visualizar la ventana **Cerrar Caja del Punto de Venta**, con diferentes campos que permiten filtrar la búsqueda de información según lo requerido por el socio del negocio vendedor que esta realizando el cierre de caja.

En el campo **Terminal PDV**, podrá visualizar el terminal configurado para el socio del negocio vendedor.

En el campo **Cuenta Bancaria**, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.

Seleccione en el campo **Fecha de la Transacción**, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.

Seleccione en el campo **Tipo de Licitación**, el tipo de pago por el cual requiere filtrar las tomas de pedido realizadas.

Indique en el campo **Cobros**, si las tomas de pedido realizadas fueron cobradas o no.

Seleccione la opción **Comenzar Búsqueda**, para realizar la búsqueda de todas las tomas de pedido realizadas por el socio del negocio vendedor, según lo seleccionado en los campos anteriormente explicados.

Podrá visualizar el listado de todos los cobros realizados por las órdenes de ventas POS generadas desde el punto de venta. Así como también, las transacciones de apertura y retiros de fondos que se realicen en la caja durante el día, para realizar el cierre de caja debe seleccionar todos los registros de transacciones que contiene la misma.

En el grupo de campos **Parámetros**, podrá visualizar los siguientes campos:

En el campo **Terminal PDV**, podrá visualizar el terminal configurado para el socio del negocio vendedor.

En el campo **Cuenta Bancaria**, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.

En el campo **Fecha de la Transacción**, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.

Para calcular el valor correspondiente a los siguientes campos, Solop ERP realiza la conversión de todos los montos de los pagos y cobros de la caja, a la moneda de la caja para luego realizar los respectivos cálculos y obtener el valor de cada uno.

En el campo **Total de la Línea**, la cantidad total de la línea con impuestos incluidos.

El valor de este campo proviene de la sumatoria del gran total de todas las órdenes de venta.

En el campo **Total Pagado**, la monto total pagado de las órdenes de venta realizadas desde el punto de venta.

El valor de este campo proviene de la sumatoria de todos los cobros y pagos realizados en la caja, convertidos a la moneda de la caja, (Cobros Convertidos a la Moneda de la Caja + Pagos Convertidos a la Moneda de la Caja).

En el campo **Total Abierto**, el monto total abierto de las órdenes de venta realizadas desde el punto de venta.

Este valor proviene de la sumatoria de todos los montos pendientes por cobrar cuando las ordenes de ventas son a crédito.

En el campo **Diferencia Monto**, podrá visualizar el monto resultante de la sumatoria del monto total de la apertura más el resultado del total cobrado menos el total de los retiros.

El valor de este campo proviene de la sumatoria de todos los montos pendientes por cobrar de las órdenes de venta, para el cálculo del mismo se emplea la fórmula (Total de la Apertura + (Total de los Cobros - Total de los Retiros)).

El campo **Diferencia Edo. de Cuenta**, muestra el saldo que posee la cuenta caja en la que se encuentra realizando el proceso **Cierre de Caja**.

Tilde el checklist **Sobre/Sub Pago**, para indicar que existe un sobre pago (no contabilizado) o un sub pago (pago parcial).

Si el punto de venta tuvo pagos de más (Sobre) o de menos (Sub), Solop ERP calcula la diferencia. Para el caso expuesto en el presente material, no es necesario seleccionar el checklist.

Seleccione en el campo **Cargo**, el cargo correspondiente al cierre de caja que se encuentra realizando desde el punto de venta.

Cuando existen pagos de más (Sobre) o de menos (Sub), se selecciona un cargo y Solop ERP genera una linea en el cierre contra el cargo seleccionado, permitiendo cuadrar la caja del día. Para el caso expuesto en el presente material, no es necesario seleccionar ningún cargo.

Seleccione la opción **OK**, para realizar el cierre de caja del punto de venta con los cobros seleccionados y generar el documento pertinente en la ventana **Cierre de Caja**.

### Consultar Registro en Cierre de Caja

Al ejecutar el proceso **Cerrar de Caja del Punto de Venta**, se completa el registro con la cuenta **Caja 01**, creado en la ventana **Cierre de Caja**, llevando la misma a cero (0) nuevamente.

Podrá visualizar en la pestaña **Línea de Cierre de Caja**, los registros que fueron creados automáticamente a lo largo del día según las transacciones que fueron realizadas en la caja. Basicamente estos son:

Apertura: Crea el registro de cierre de caja (Caja 01), asociando en la línea del mismo el documento de ingreso generado en caja.

Cobros: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de cobro generado en caja, asociando el documento a la línea.

Retiro de Fondos: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de egreso generado en caja, asociando el documento a la línea.

### Completar Registro en Cierre de Caja

Ubique el registro de la **Caja Administrativa** generado en la ventna **Cierre de Caja**, el cual se encuentra en estado **Borrador**.

Al seleccionar la pestaña **Línea de Cierre de Caja**, podrá visualizar las líneas creadas con los registros asociados de apertura si fue utilizada la caja para realizar apertura y retiro si fueron realizados retiros en la moneda de la caja en la que se encuentra.

Regrese a la pestaña principal **Cierre de Caja**, para ejecutar el cierre de la misma.

Seleccione la opción **Completar**, para completar el cierre de caja de la **Caja Administrativa**.

Seleccione la acción **Completar** y la opción **OK**, para completar el registro.

### Quién realiza el Cierre de Caja?

Lo realiza el supervisor, desde el SmartBrowser “Cierre del Punto de Venta”. Puede seleccionar el período que desee, se sugiere que sea uno por día y aparecerán todos los movimientos no conciliados.

Se cargarán los siguientes campos:

* **Total de la Línea:**  Suma de Gran Total de **Órdenes de Venta** en estado Completo generadas por el POS seleccionado para el rango de fechas elegido, tal que se encuentre un estado de cuentas bancario (no completo ni cerrado) en el cual exista un pago para dicha orden. 
  * **Tiene todo lo que se facturó en el PDV en el período seleccionado.
* Total pagado: Suma de montos de pagos asociados al POS y rango de fechas seleccionados, tal que se encuentre un estado de cuentas bancarias para la Cuenta Bancaria del cierre actual, en estado Completo o Cerrado, y en el cual exista un línea asociada a dicho pago, y que el mismo esté asociado a una orden.** 
  * Sumariza todos los pagos de este PDV en el período seleccionado.
* **Total abierto:** Facturas emitidas desde el Punto de Venta a Crédito.

**Verificación:** Si todo está bien -> Total de la Línea - Total Abierto debería ser igual a Total Pagado

* **Diferencia Monto:** es la suma de montos de pagos, convertidos a moneda de la Caja del POS más el monto de saldo inicial del estado de cuentas que contiene dichos pagos. El filtro de rango de fechas se aplica para la fecha de los pagos.
  * Esto significa que si se generó mal el Balance Bancario sin hacer el Cierre del Día anterior este saldo quedará mal.
  * Es editable, se puede modificar.

### Control de Diferencia en Cierre de Caja

El proceso de Cierre de Caja debería dar 0 ya que es la sumatoria de todos los cobros realizados por un POS menos los Retiros que realizó al final del turno. En caso de existir una diferencia en el campo “Diferencia Monto” es porque se realizó un Retiro del POS por un importe menor del que figura en el sistema por lo que se debe decidir qué hacer con esta diferencia (considerar que para que este control sea correctamente aplicado se deberá realizar un Retiro por el 100% del dinero existente en el POS) .

**Aceptar Diferencia**

Si se Acepta la diferencia se tiene que marcar el check de “Sobre/Sub Pago” y se tiene que indicar a qué cargo se va a enviar la diferencia (Por ejemplo Pérdida por diferencia de quebranto de caja)

Se deberá indicar una descripción y la fecha que se va a hacer la conciliación

Tener en cuenta que la columna monto es el monto en la moneda transacción mientras que la columna monto convertido es el monto convertido a la moneda que tiene definido el POS.

## Traspaso a Banco

El procedimiento para registrar en Solop ERP un traspaso monetario desde una caja a un banco determinado, se debe realizar de la siguiente manera.

Cuando se tiene solamente transacciones por tarjeta de débito o crédito, efectuadas por medio del punto de venta. Se debe realizar el proceso Depósito de Caja y por último el proceso Cierre de Caja, para llevar la caja a cero (0) nuevamente.

Si por el contrario, se tiene solamente transacciones por pago móvil y transferencia bancaria. Se debe realizar el proceso Transferencia Bancaria por cada una de las transacciones y por último el proceso Cierre de Caja, para llevar la caja a cero (0) nuevamente.

Finalmente, se puede presentar el caso en el que se tengan todos los tipos de pago anteriormente nombrados. Para ello se debe realizar primeramente el proceso Depósito de Caja, para reflejar en Solop ERP las transacciones por tarjeta de débito o crédito. Luego se debe realizar el proceso Transferencia Bancaria, para reflejar en Solop ERP las transacciones por pago móvil y transferencia bancaria. Por último el proceso Cierre de Caja, para ejecutar el cruce de los saldos y poder llevar la cuenta caja a cero (0) nuevamente.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Traspaso a Banco**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

Cada uno de los procesos nombrados anteriormente son explicados a continuación.

### Depósito de Caja

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la carpeta **Diario de Caja**, por último seleccione la ventana **Depósito de Caja**.

Podrá visualizar la ventana de búsqueda inteligente **Depósito de Caja**, que permite realizar el proceso de depósito de las diferentes cajas registradas en Solop ERP. Esta ventana cuenta con diferentes campos que le permiten al usuario filtrar la búsqueda de registros en base a lo que sea seleccionado en los mismos.

Podrá visualizar en el campo **Tipo de Banco**, el tipo de banco que define el comportamiento de la ventana de búsqueda inteligente **Depósito de Caja**.

Seleccione en el campo **Cuenta Bancaria**, la cuenta caja por la cual requiere filtar la búsqueda de la información. Para este caso, se utiliza la cuenta **Caja Administración Ventas - –_Administración UYU**.

::: note
Para el realizar el depósito de caja a banco, se debe seleccionar la cuenta caja administrativa en la cual se encuentran los registros de los monto que serán transferidos a banco.
:::

Seleccione en el campo **Socio del Negocio**, el socio del negocio por el cual requiere filtar la búsqueda de la información.

Seleccione en el campo **Tipo de Pago**, el tipo de pago por el cual requiere filtrar la búsqueda de la información.

Seleccione en el campo **Tipo de Documento**, el tipo de documento por el cual requiere filtar la búsquedade de la información.

Seleccione en el campo **Fecha de la Transacción**, la fecha de la transacción por la cual requiere filtrar la búsqueda de la información.

Seleccione la opción **Comenzar Búsqueda**, para filtrar la búsqueda de la información en base a lo seleccionado en los campos anteriormente explicados.

Podrá visualizar el listado de las transacciones registradas en Solop ERP, en base a lo seleccionado en los campos anteriormente explicados.

Seleccione la transacción involucrada en el depósito que se encuentra realizando.

Seleccione en el campo **Fecha de la Transacción**, la fecha con la cual se va a generar el depósito de caja que se encuentra realizando.

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria a la cual se va a realizar el depósito de caja que se encuentra realizando.

Seleccione en el campo **Socio del Negocio**, el socio del negocio involucrado en el depósito que se encuentra realizando. En este caso, el socio del negocio es la misma empresa.

Introduzca en el campo **No. del Documento**, el número de documento con el cual se va a generar el depósito de caja que se encuentra realizando.

Este campo se utiliza cuando se va a realizar un depósito que involucra una sola transacción. Cuando se va a realizar un depósito con más de una transacción, se recomienda tildar el check dividir depósito.

Seleccione el checklist **Dividir Depósito**, si requiere dividir el depósito de caja que se encuentra realizando.

Este check permite generar tantos depósitos como movimientos sean seleccionados en el proceso, respetando su número de documento. Para este caso, no es necesario tildar el checklist **Dividir Depósito**.

Seleccione en el campo **Cargo**, el cargo correspondiente al depósito de caja que se encuentra realizando. Para este caso se utiliza el cargo **Efectivo en Tránsito Administración**.

Seleccione en el campo **Tipo de Documento para Retiros**, el tipo de documento para retiros. Para este caso, no es necesario seleccionar el tipo de documento para retiros.

Seleccione en el campo **Tipo de Documento para Depósito**, el tipo de documento para depósito. Para este caso, no es necesario seleccionar el tipo de documento para depósito.

El check **Conciliar Automáticamente**, permite que sea creado un registro de cierre de caja con la cuenta caja administrativa seleccionada anteriormente y asocia al mismo el registro del egreso que genera en la ventana **Caja**. Para este caso, es necesario destildar el check para crear el cierre de caja de manera manual según lo requerido por el usuario.

Seleccione la opción **OK**, para ejecutar el proceso y realizar el depósito de caja a banco.

### Consultar Egreso e Ingreso Generado del Depósito

Al consultar el documento de egreso generado en la ventana **Caja**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Depósito de Caja**.

Al consultar el documento de ingreso generado en la ventana **Pago/Cobro**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Depósito de Caja**.

### Transferencia Bancaria

Realice el procedimiento regular para registrar una transferencia bancaria en Solop ERP, el mismo se encuentra explicado de manera detallada en el documento Registro de Transferencia Bancaria, elaborado por Solop ERP. Considerando las siguientes restricciones:

**Cuenta Bancaria Desde**: La caja desde la cual requiere realizar la transferencia. Para este ejemplo es utilizada la caja **Caja Administración Ventas - –_Administración UYU**.

**Cuenta Bancaria a Transferir**: El banco al cual requiere realizar la transferencia. Para este ejemplo es utilizado el banco **Banco Provincial S.A. Banco Universal - 0108_01080000000000000019**.

**Socio del Negocio**: El socio del negocio involucrado en la transferencia bancaria. Para este ejemplo es utilizado el socio **Compañía Estándar**.

**Moneda**: La moneda con la cual requiere realizar la transferencia. Para este ejemplo es utilizada la moneda **UYU**.

**Cargo**: El cargo que justifica el movimiento monetario. Para este caso es utilizado el cargo **Efectivo en Tránsito Administración**.

**No. del Documento**: El número de documento con el que será generado el egreso de la caja. Para este ejemplo es utilizado el número **4321**.

**Documento Destino**: El número de documento con el que será generado el ingreso del banco. Para este ejemplo es utilizado el número **4321**.

**Monto**: El monto correspondiente a la transferencia bancaria que requiere generar. Para este ejemplo es utilizado el monto **5.917.563,54**.

**Descripción**: Una breve descripción relacionada a la transferencia que requiere generar. Para este ejemplo es utilizado como descripción **Transferencia bancaria por pago de factura TMP- 0004910**.

**Fecha de Estado de Cuenta**: La fecha en la cual se encuentra realizando la transferencia bancaria.

**Fecha Contable**: La fecha en la cual se encuentra realizando la transferencia bancaria.

::: warning
Recuerde que se debe realizar una transferencia bancaria por cada pago móvil y transferencia bancaria recibida.
:::

### Consultar Egreso e Ingreso Generado de la Transferencia

Al consultar el documento de egreso generado en la ventana **Caja**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Transferencia Bancaria**.

Al consultar el documento de ingreso generado en la ventana **Pago/Cobro**, con ayuda del número de documento ingresado en el campo **Documento Destino** de la ventana **Transferencia Bancaria**.

### Retiro de Dinero PDV

Este proceso debe ser realizado por el Cajero del Punto de Venta antes de realizar el Cierre del Mismo o en cualquier momento a lo largo del día para retirar efectivo.

Tener en cuenta las siguientes consideraciones:

* Se deberá realizar uno por moneda
* **Caja Destino:** se entregará el Dinero retirado del Punto de Venta desde donde se genera.
* Cargo por defecto: “Retiro de Caja”. Este cargo es el que será utilizado como “Puente” entre el Retiro de la Caja del POS y la Caja donde ingresará dicho importe.
* Definir cuánto dinero por Tipo de Pago se está retirando en la Moneda seleccionada
* Tarjeta de Crédito: Si se desea hacer un Retiro por Cierre de Lote de Tarjeta se recomienda hacer tantos retiros como lotes de Tarjetas se deseen. 
  * En la columna “Tarjeta de Crédito” podrá seleccionar cada lote a que Tarjeta corresponde.
  * En Número de Referencia pueden detallar el Número de Lote.

### Cierre de Caja

Realice el procedimiento regular para registrar un cierre de caja en Solop ERP, el mismo se encuentra explicado de manera detallada en el documento Registro de Cierre de Caja, elaborado por Solop ERP.

Se selecciona la caja para llevar esta a cero (0) nuevamente, transfiriendo el saldo de la caja al banco. Este proceso se debe realizar por cada caja administrativa a la que igreso dinero por las ventas del día.

En la ejecución del procedimiento de cierre de caja, se debe considerar las siguientes restricciones:

**Cuenta**: Caja Administración Ventas - –_Administración UYU

**Tipo de Documento**: Cierre de Caja de Administrativo

**Fecha de Estado de Cuenta**: La fecha correspondiente al día de las transacciones de cobro por las ventas.

Recuerde cargar las transacciones seleccionando la opción **Crear a Partir de Caja**, donde debe seleccionar los movimientos creados en la ventana **Caja**, obtenidos como resultado de los procesos Depósito de Caja y Transferencia Bancaria, previamente realizados.