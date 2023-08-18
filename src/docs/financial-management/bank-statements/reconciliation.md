---
title: Conciliaciones Automáticas
category: Documentation
star: 9
sticky: 9
article: false
---

## Conciliaciones Automáticas

El área de tesorería en una empresa organiza y gestiona todas las acciones relacionadas con operaciones de flujo monetario, dentro de esas operaciones se encuentra la gestión bancaria el cual se encarga de garantizar y verificar todos los movimientos de dinero qué entran y salen en la empresa.

Para garantizar dichos movimientos de dinero se aplican operaciones como las conciliaciones bancarias, que no es más qué la verificación y comparación de entradas y salidas de dinero (Pagos/Cobros) en una cuenta bancaria con los registros físicos qué son llevados a Solop ERP, la verificación de estos movimientos suele ser un tema importante y tedioso para muchas empresas, por el tiempo y trabajo manual qué en algunos casos suelen aplicar.

Solop ERP cuenta con un proceso de conciliaciones automáticas el cual permite de una manera rápida y eficaz comparar los movimientos generados a través de movimientos bancarios con los movimientos registrados en Solop ERP.

Una conciliación automática es un proceso que se realiza con la finalidad de garantizar los saldos de las cuentas por cobrar y las cuentas por pagar que posee una empresa, el mismo compara la información del estado de cuenta real del banco con los registros y movimientos bancarios existentes en Solop ERP para corroborar que ambos coincidan y no existan errores en los saldos bancarios y en la contabilidad de la empresa.

**Solop ERP** pretende ofrecer una explicación eficiente a nuestros clientes del procedimiento de conciliación automática a través de una guía fácil y sencilla para así obtener resultados exitosos al momento de generar una conciliación en la versión 3.9.2 de Solop ERP. A continuación se explica el procedimiento que se debe realizar para generar una conciliación bancaria de manera automática en Solop ERP.

- Descarga de Extracto Bancario desde Banco
- Registro de Conciliación Automática
  - Importación de Extracto Bancario
  - Conciliación Automática
  - Coincidencia Bancarias
  - Revisión de Conciliaciones
  - Crear Pagos Desde Línea de Estado de Cuenta
- Crear Pagos desde Estado de Cuenta
- Pagos/Cobros sin Registros
  - Pagos o Cobros de Comisiones
  - Otros Tipos de Pagos o Cobros
  - Pagos o Cobros sin Identificar
  - Completar Conciliación Bancaria

## Descarga de Extracto Bancario desde Banco

Para que un extracto bancario pueda ser importado en Solop ERP este debe cumplir por Banco un formato en específico para que la importación sea exitosa, el siguiente material explica el procedimiento para descargar los formatos correctos de los estados de cuentas bancarios:

La descarga de cada estado de cuenta bancario va a variar según el banco que este utilizando, la descargas de estos archivos son datos confidenciales el cual el agente autorizado tendrá el acceso a los bancos de la compañía para poder realizar dicho procedimiento.

### Extracto Bancario 

Para poder hacer la descarga del extracto bancario debe iniciar sesión en el banco, una vez ingrese al banco siga las siguientes instrucciones indicadas bajo la plataforma Web del banco correspondiente donde se describe el paso a paso de como realizar la descarga de archivos o movimientos bancarios; el estado de cuenta bancario a descargar de este banco debe ser en el formato **.csv**, el cual es el formato que aceptara Solop ERP al momento de realizar la importación del extracto bancario.

Solop ERP ofrece a nuestros clientes el ejemplo de extracto bancario, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en Solop ERP.

Ningún estado de cuenta bancario puede ser modificado o convertido manualmente a cualquiera de los formatos existentes, el usuario solo debe descargar el estado de cuenta bancario en los formatos indicados e importarlos a Solop ERP.

Para realizar la importación del extracto bancario este proceso se explica en el documento Conciliaciones Automáticas elaborado por Solop ERP.

### Registro de Conciliación Automática

Para poder crear una conciliación automática en Solop ERP debe seguir los siguientes pasos:

Ubique en el menú de Solop ERP la carpeta **Gestión de Saldos Pendientes** y luego seleccione la ventana **Estado de Cuenta Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image139.png)

Imagen 1. Menú de Solop ERP

Seleccione el icono **Registro Nuevo** en la barra de herramientas de Solop ERP y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/balance-management/bam-balance-image140.png)

Imagen 2. Icono de Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se está realizando el documento de estado de cuenta bancario, el valor en el mismo debe ser diferente del símbolo (\*).

Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por Solop ERP.

Campo Tipo de Documento

Seleccione en el campo **Cuenta Bancaria**, el banco con el que va a trabajar la conciliación.

Campo Cuenta Bancaria

Seleccione el icono **Guardar** en la barra de herramientas de Solop ERP para guardar los cambios realizados en el documento.

Icono Guardar

Hasta este paso es el llenado del encabezado de la conciliación, donde se define el banco en el cual se va a realizar la conciliación de los pagos/cobros que ha tenido la empresa en un rango determinado. En adelante se procederá a realizar la conciliación.

### Importación de Extracto Bancario

Para que Solop ERP pueda conciliar y verificar los pagos/cobros en una cuenta bancaria y los registrados pagos/cobros en Solop ERP, se debe importar el extracto bancario generado del banco para ello se deben seguir los siguientes pasos.

Ya estando posicionados en la ventana **Estado de Cuenta Bancario** seleccione el icono **Proceso** en la barra de herramientas de Solop ERP.

Icono Proceso

Seleccione la opción **Carga de Estado de Cuentas** en el menú desplegado por el icono **Proceso**.

Opción Proceso

Podrá apreciar la siguiente ventana y proceder al llenado de los campos correspondientes para cargar el extracto bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image147.png)

Imagen 3. Ventana Extracto Bancario

Seleccione en el campo **Cargador de Estado de Cuenta**, el banco seleccionado en el campo **Cuenta Bancaria** de la ventana principal **Estado de Cuentas Bancario**.

Campo Cargador de Estado de Cuenta

Seleccione en el campo **Nombre del Archivo** el estado de cuenta bancario a importar, correspondiente al banco seleccionado.

Campo Nombre del Archivo

Seleccione la opción **Seleccionar Archivo**, para buscar el archivo a importar.

![Campo](/assets/img/docs/balance-management/bam-balance-image150.png)

Imagen 4. Opción Seleccionar Archivo

Seleccione la opción **Cargar Archivo (Upload)**, para cargar el archivo seleccionado.

Opción Cargar Archivo

Seleccione la opción **OK**, para importar el archivo a Solop ERP.

Opción OK

Podrá visualizar en la ventana un mensaje el cual indica la importación exitosa en Solop ERP del extracto bancario y la cantidad de movimientos que posee el extracto bancario, para este caso como ejemplo está indicando que tiene 598 movimientos el extracto bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image153.png)

Imagen 5. Estado de Cuenta

Una vez cargado el extracto de cuenta bancario se puede proceder a realizar la conciliación automática, si el extracto de cuenta bancario no es importado Solop ERP no podrá realizar el proceso.

### Conciliación Automática

Una vez seleccionado el banco con el que se realizará la conciliación bancaria e importado el extracto bancario se procede a realizar la conciliación automática:

Estando posicionados en la ventana **Estado de Cuenta bancario** Seleccione el icono **Proceso** en la barra de herramientas de Solop ERP.

Icono Proceso

Seleccione la opción **Conciliación de Estado de Cuenta** en el menú que es desplegado por el icono **Proceso**.

Menú Proceso

Se le desplegará una ventana de búsqueda inteligente con campos por los cuales se filtrará la búsqueda para realizar la conciliación.

![Campo](/assets/img/docs/balance-management/bam-balance-image156.png)

Imagen 6. Filtrar Búsqueda

Puede observar que la ventana de búsqueda inteligente trae precargado el campo **Cuenta Bancaria** con la información del banco seleccionado en la ventana principal **Estado de Cuentas Bancario**. Los otros campos reflejados en esta ventana serán utilizados acorde al criterio de búsqueda que se requiera.

Una vez definido el criterio de búsqueda, seleccione la opción **Refrescar** para que se muestre la información del estado de cuenta bancario importado y los pagos/cobros realizados en Solop ERP.

Opción Refrescar

Podrá apreciar los movimientos del estado de cuenta del lado izquierdo de la venta de busqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image158.png)

Imagen 7. Movimientos Importados

Podrá apreciar del lado derecho de la ventana de búsqueda inteligente los movimientos registrados en Solop ERP.

Movimientos de Solop ERP

Seleccione la opción **Simular Conciliación** para buscar coincidencia entre la información reflejada en ambos lados de la ventana de búsqueda inteligente.

Opción Simular Conciliación

La simulación de conciliación consiste en verificar las coincidencias que tenga los pagos/cobros del extracto bancario con los registrados en Solop ERP, está verificación parte en identificar qué los números de referencia de la transacciones bancarias coinciden con el número de documento del registro en Solop ERP, qué ambos montos sean iguales y qué estén trabajando con la misma moneda , sí ambos movimientos (los del extracto bancario y los de Solop ERP) coinciden en su totalidad con estas tres características **N° referencias / N° Documento , monto /monto, moneda/moneda** Solop ERP identificara y lo marcará como una coincidencia.

Podrá apreciar los movimientos con coincidencia en la parte inferior de la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image161.png)

Imagen 8. Pagos con Coincidencia

Si existe coincidencia entre los pagos/cobros y el extracto bancario se le mostrarán los movimientos con coincidencias, de lo contrario no se le mostrará ningún movimiento con coincidencia.

Seleccione la opción **OK** para guardar el registro de coincidencia entre los movimientos reflejados en la ventana de búsqueda inteligente. Automáticamente se importan en la pestaña **Línea Estado Cuentas**, todos movimientos del extracto bancario que han sido identificados y los que no tengan registro en .Solop ERP

Para los casos en los que el extracto bancario corresponda al **Banco del Tesoro** y al momento de realizar la simulación no se refleje ningún tipo de movimientos con coincidencia, se debe seleccionar de igual manera la opción **OK**, para que sean importados a la pestaña **Línea Estado Cuentas**, todos los registros del extracto bancario.

Opción OK

El extracto bancario puede poseer algunos registros que no han sido cargados en Solop ERP, estos pueden ser cobros no identificados, comisiones bancarias entre otros, los cuales no van a ser identificados al momento de hacer la simulación, sin embargo para estos pagos/cobros no conciliados se aplicará un proceso que se detalla en el documento Crear Pagos desde Estado de Cuenta.

Al seleccionar **Ok** Solop ERP lo llevará nuevamente a la ventana principal **Estado de Cuenta Bancario**.

### Coincidencia Bancarias

Al momento de realizar la conciliación bancaria Solop ERP maneja una serie verificaciones para poder encontrar las coincidencias bancarias.

### Revisión de Conciliaciones

Una vez aplicado el proceso de conciliación automática, se debe verificar que tanto los pagos/cobros que coincidieron como los que no coincidieron se carguen correctamente dentro del registro de la conciliación bancaria en la que se este trabajando, para ello debe seguir los siguientes paso:

Seleccione la pestaña **Línea Estado Cuentas** para verificar que se encuentren los registros de todos los movimientos del estado de cuenta bancario cargado desde la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image163.png)

Imagen 9. Pestaña Línea Estado Cuentas

Podrá apreciar en la parte inferior derecha del documento, la cantidad de movimientos cargados a la pestaña **Línea Estado Cuentas**, estos deben coincidir con la cantidad de movimientos que se refleja al momento de hacer la \_importación del extracto bancario

Cantidad de Movimientos Cargados a la Pestaña Línea Estado Cuentas

Por cada movimiento del estado de cuenta bancario es un registro en la pestaña **Línea Estado Cuentas** es decir, si el estado de cuenta bancario tiene 26 movimientos, la pestaña tendrá 26 líneas de registro el cual verá identificado como N° de líneas de 10 en 10 (10,20,30,40); de click en la palabra **importación** si desea visualizar nuevamente el paso a paso de la importación del extracto bancario.

### Crear Pagos Desde Línea de Estado de Cuenta

Si al realizar la conciliación existen movimientos sin registros en Solop ERP, se debe realizar el proceso **Crear pagos desde Estado de Cuenta** para generar los pagos/cobros correspondientes a cada uno de los movimientos,ya que es muy importante que todos los movimientos bancarios coincidan en su totalidad con los registros en Solop ERP o que los mismos logren ser identificados, ya que de lo contrario la conciliación no podrá ser completada en Solop ERP, del mismo modo este proceso también es explicado en el documento Crear Pagos desde Estado de Cuenta.

En el caso de que existan movimientos con registros en Solop ERP pero sin documentos de pagos/cobros asociados en la línea, se debe seleccionar de la siguiente manera el documento **Pago/Cobro**.

Ubique el registro de la línea sin documento **Pagos/Cobros** asociado y seleccione el documento con ayuda del identificador del campo **Pago**.

Registro del Movimiento en la Pestaña Línea Estado Cuentas

Este proceso es realizado cuando no coinciden los números de referencia del movimiento y del documento **Pago/Cobro**. Sin embargo, existe el conocimiento de que dicho movimiento pertenece un documento determinado ya que existe una coincidencia en el monto, el socio del negocio y el banco.

Seleccione el icono **Guardar Cambios** en la barra de herramientas de Solop ERP, para guardar los cambios realizados.

Icono Guardar Cambios del Movimiento en la Pestaña Línea Estado Cuentas

Regrese a la ventana principal Estado Cuentas Bancario y seleccione la opción Completar.

 Pestaña Principal Estado Cuentas Bancario y Opción Completar

Seleccione la acción **Completar** y la opción **OK** para completar el documento.

Acción Completar Documento

## Crear Pagos desde Estado de Cuenta

El proceso **Crear Pagos desde Estado de Cuenta** es realizado por consecuencia de la existencia de **Pagos/Cobros** que se encuentran en el extracto bancario y al momento de la conciliación no se encuentra ninguna coincidencia con los movimientos registrados en Solop ERP; el mismo parte del proceso de conciliación automática donde al importar el extracto bancario verifica los movimientos registrado en Solop ERP, este realiza una verificación de coincidencias de **Pagos/Cobros** en ambos lados (Movimientos del extracto / Movimientos en Solop ERP), mayormente se encuentran muchos movimientos en el extracto bancario que no han sido registrados en Solop ERP y no solo es por que no se lleve un buen control de los registros si no que los extractos bancarios poseen detalladamente otros tipo de transacciones como comisiones bancarias que en algunos casos no son registrados en Solop ERP o poseen movimientos bancarios que se desconoce su procedencia, pero para este tipo de casos se encuentra el proceso **Crear Pagos desde Estado de Cuenta**, ya que es muy importante que todos los movimientos bancarios coincidan en su totalidad con los registros en Solop ERP o que los mismos logren ser identificados, ya que de lo contrario la conciliación no podrá ser completada en Solop ERP.

El presente material elaborado por Solop ERP pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para la creación de pagos y cobros sin registros en Solop ERP, partiendo desde el proceso de Conciliación Automática registro de pagos / cobros existentes en el extracto bancario importado, obteniendo un resultado exitoso al momento de conciliación de cuentas en la versión 3.9.2 de Solop ERP en la localización Venezuela.

## Pagos/Cobros sin Registros

Los pagos o cobros sin registro en Solop ERP pueden presentarse en las empresas por diferentes motivos los cuales pueden ser que no fueron registrados a tiempo o correctamente, o la cuenta bancaria a recibido un cobro por adelantado y este no ha sido notificado al personal que lleva los registros de los pagos/cobros en Solop ERP, el registro de los mismos puede realizarse de tres formas explicadas a continuación.

Luego de realizar el proceso de conciliación, ubique la pestaña **Línea Estado Cuentas**.

Pestaña Estado Cuentas para Pagos Cobros sin Registros

Seleccione el icono **Proceso**, en la barra de herramientas de Solop ERP.

Icono Proceso para Pagos Cobros sin Registros

Seleccione la opción **Crear Pago desde Estado de Cuenta**.

Opción Crear Pago desde Estado de Cuenta

Podrá visualizar la siguiente ventana de búsqueda inteligente con los **Pagos/Cobros** que no tuvieron coincidencias al momento de conciliar.

![Campo](/assets/img/docs/balance-management/bam-balance-image172.png)

Imagen 1. Ventana de Búsqueda Inteligente

**Hasta este punto solo se puede visualizar los movimientos bancarios sin conciliar, pero la mayoría de estos movimientos bancarios pertenecen a otros tipos de transacciones como lo son los **Cargos Bancarios**, **Otro Tipo de Pagos** y los **Pagos sin Identificar**, estas transacciones bancarias deben ser identificadas para poder completar la conciliación bancaria**.

### Pagos o Cobros de Comisiones

Para aquellos movimientos que pertenezcan a comisiones bancarias estos deben ser asociados al tipo de transacción **Cargos Bancarios**, ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

En la ventana de búsqueda inteligente de **Crear Pago desde Estado de Cuenta** seleccione el o los pagos/cobros correspondientes a las comisiones.

![Campo](/assets/img/docs/balance-management/bam-balance-image173.png)

Imagen 2. Selección de Pagos/Cobros

Opción Cargo Bancario del Campo Tipo de Transacción

Seleccione en el campo **Cargo** el cargo de comisión correspondiente, para este ejemplo es **Comisión FLAT**.

Campo Cargo

Seleccione la opción **OK** para generar automáticamente el documento de pago/cobro en Solop ERP.

Opción OK para Crear Pagos Cobros de Comisiones

Si Solop ERP refleja el error **No encontrado Factura / Socio del Negocio**, es porque está buscando una factura asignada al pago/cobro o un socio del negocio asociado al banco y no existe registro de ello. En este caso, es necesario abrir registro del banco y seleccionar un socio del negocio.

Podrá visualizar el **Pago/Cobro** de cargos bancarios en la pestaña **Línea Estado de Cuentas**, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se seleccionó al momento de aplicar el proceso **Cargo Bancario**.

Campo Pago Comisiones

El número de documento a mostrar en el campo **Pago** debe coincidir con el número que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** podrá visualizar lo siguiente:

En el campo **Socio de Negocio** debe aparecer el banco con el que se está trabajando la conciliación.

Campo Socio Negocio Comisiones

Para este caso el socio del negocio a mostrar es el banco **Banesco** por que es el banco con el que se está trabajando la conciliación, pero ese socio de negocio va a variar según el banco con el que esté trabajando la conciliación, sí está trabajando con el banco **Mercantil** tomará ese banco, si está trabajando la conciliación con el banco **Banesco** tomará **Banesco** y así sucesivamente.

En el campo **Cuenta Beneficiario TEF** debe aparecer **COMISIÓN TRF OTROS BCOS**.

Campo Cuenta Beneficiario TEF

En el campo **Cantidad TEF** debe aparecer el mismo monto del movimiento bancario.

Campo Cantidad TEF

El monto que aparece en el campo **Cantidad TEF** debe ser el mismo monto que aparece en el campo **Total de la Transacción**.

Si desea verificar el registro del pago/cobro generado en Solop ERP puede realizarlo tildando el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Pago Acercar

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

![Campo](/assets/img/docs/balance-management/bam-balance-image182.png)

Imagen 3. Ventana Pago/Cobro

### Otros Tipos de Pagos o Cobros

Para aquellos movimientos que se encuentran en el extracto bancario que al momento de realizar la conciliación no se asoció a ningún pago/cobro en Solop ERP por qué no se encontraban registrados pero sí se conoce su procedencia se deben asociar al tipo de transacción **Otro tipo de Pago** ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

Note

Para este caso se tomará como ejemplo un préstamo bancario, el cual el socio de negocio al que se le realizó el préstamo hizo un abono, en su momento esta transferencia no había sido notificada por ello no se realizó el registro del pago/cobro en Solop ERP, pero como se sabe de dónde proviene ese movimiento bancario este entraría dentro de la tipo de transacción **Otro tipo de Pago**.

En la ventana de búsqueda inteligente **Crear Pago desde Estado de Cuenta** seleccione el o los pagos/cobros correspondientes a otros tipos de pagos.

![Campo](/assets/img/docs/balance-management/bam-balance-image183.png)

Imagen 4. Selección de Pagos/Cobros

Seleccione en el campo **Tipo de Transacción** la opción **Otro Tipo de Pago**.

Otro tipo de Pago

Seleccione el socio del negocio en el campo **Socio del Negocio**, para este ejemplo el socio a utilizar es **Estándar**.

Socio de Negocio Otro Tipo de Pago

Para este caso el socio de negocio es la persona que realizó la transferencia bancaria.

Seleccione en el campo **Cargo** el cargo correspondiente al pago/cobro,siguiendo el ejemplo anteriormente comentado el cargo a utilizar es **Préstamo Bancario**.

Cargo Otro Tipo de Pago

El cargo a utilizar dependerá del tipo de transacción que se esté registrando.

Seleccione la opción **OK** para generar automáticamente el documento de pago/cobro en Solop ERP.

OK Otro Tipo de Pago

Podrá visualizar el **Pago/Cobro** creado de **Otro Tipo de Pago** en la pestaña **Línea Estado de Cuentas**, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se seleccionó al momento de aplicar el tipo de transacción **Otro Tipo de Pago**.

Campo Pago Otro tipo de Pago

El número de documento a mostrar en el campo **Pago** debe coincidir con el número que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** podrá visualizar lo siguiente:

En el campo **Socio de Negocio** debe aparecer el socio de negocio asociado al momento de aplicar el tipo de transacción **Otro Tipo de Pago**.

Campo Socio Negocio Otro tipo de Pagos

En el campo **Referencia TEF** debe aparecer el número de referencia del movimiento bancario.

Campo Referencia TEF

En el campo **Cantidad TEF** debe aparecer el mismo monto del movimiento bancario.

Campo Cantidad TEF Otro tipo de Pagos

El monto que aparece en el campo **Cantidad TEF** debe ser el mismo monto que aparece en el campo **Total de la Transacción**.

Si desea verificar el registro del pago/cobro generado en Solop ERP puede realizarlo tildando el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Acercar Otro tipo de Pagos

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

![Campo](/assets/img/docs/balance-management/bam-balance-image193.png)

Imagen 5. Pago/Cobro Otro tipo de Pagos

### Pagos o Cobros sin Identificar

Al momento de hacer la conciliaciòn bancaria la mayorìa de las veces suelen haber movimientos en el extracto bancario que se desconocen de donde provienen, y para Solop ERP todos los movimiento que tiene el extracto bancario deben ser identificados o asociados a un **Pago/Cobro** ya que de no ser identificados Solop ERP no permitirá completar la conciliación bancaria, el cual implica que dentro de Solop ERP no se ha realizado ninguna conciliación.

Para los movimientos bancarios que se desconocen de dónde proviene, en Solop ERP se llevan a pagos/cobros no identificados, para poder completar e identificar todos esos movimientos que posee el extracto bancario.

Note

Los **Pago/Cobro** que se pasen a ser no identificados, luego podrán ser identificados una vez se verifique su procedencia.

Para poder llevar estas transacciones bancarias a **Pagos o Cobros sin Identificar** ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

Podrá observar la ventana de búsqueda inteligente donde se muestran todos los movimientos bancarios que no se les encontró una coincidencia al momento de hacer la conciliación automática.

![Campo](/assets/img/docs/balance-management/bam-balance-image194.png)

Imagen 6. Movimientos Bancarios Pagos sin Identificar

Seleccione el o los **Pago/Cobro** con procedencia desconocida.

Selección Pago sin Identificar

Seleccione en el campo **Tipo de Transacción** la opción **Pago Sin Identificar**.

Pago Cobro sin Identificar

Seleccione la opción **OK** para generar automáticamente el documento de **Pago/Cobro** en Solop ERP y esté pueda ser asociado con el movimiento bancario desconocido.

Ok Pago Cobro sin Identificar

Al seleccionar la opción **OK** Solop ERP creará un **Pago/Cobro** con las mismas características del movimiento bancario desconocido en cuanto monto, fecha, y moneda.

Podrá visualizar el **Pago/Cobro creado de **Pago sin Identificar** en la pestaña **Línea Estado de Cuentas\*\*, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

La descripción de la **Línea Estado de Cuenta** debe tener como descripción **Pago no identificado**

Descripción Pago Cobro sin Identificar

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se creó al momento de aplicar el proceso **Pago Sin Identificar**

Campo Pago sin Identificar

El n° de documento a mostrar debe coincidir con el n° que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** debe aparecer como **Socio de Negocio** **Pagos/Cobros Sin Identificar**, este es un socio de negocio que tomará temporalmente el **Pago/Cobro** sin identificar.

Referencia Pago Cobro sin Identificar

El socio de negocio **Pagos/Cobros Sin Identificar** es un socio de negocio que toma temporalmente el **Pago/Cobro** sin identificar, el cual más adelante será modificado una vez se desee identificar ese **Pago/Cobro**.

Si desea verificar el registro del pago/cobro generado en Solop ERP puede realizarlo tildado el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de Solop ERP.

Acercar Pago Cobro sin Identificar

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

Pago/Cobro Sin identificar

### Completar Conciliación Bancaria

Una vez identificado todos los movimientos bancarios y conciliado correctamente se puede completar la conciliación Bancaria, para ello debe seguir los siguientes pasos:

Debe posicionarse en la ventana padre **Estado de Cuenta Bancario**.

Estado de Cuenta

Ubicar al finalizar la ventana en el grupo de campo **Estado** y el botón que debe tener por nombre **Completar**

Grupo de Estado

El nombre del botón cambiará dependiendo del estado en el que se encuentre el documento si el documento se encuentra en estado **Borrador** la acción a mostrar en el botón es **Completar** caso que se está aplicando para este documento, si el estado del documento está en estado **Completo** el botón cambiará su nombre a la posible siguiente acción que se pueda aplicar en el documento.

Dar click a botón **Completar** y tildar **Ok** para la acción de documento seleccionada.

Botón Completar

Al aplicar esta acción **Completar** el documento pasará a esta completo y este no podrá ser modificado.

Es muy importante tener en cuenta que todo documento transaccional una vez se culmine con el llenado de los datos debe ser completado, para que Solop ERP tome como válido los datos cargados en el documento.
