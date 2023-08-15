---
title: Facturación Electrónica
category: Documentation
star: 9
sticky: 9
article: false
---

## Facturación Electrónica

### Mensaje a enviar en caso de caída de servidor de Invoicy

Al confirmar servidor caído:

Si, efectivamente verificamos que no responde la página.

Estamos trabajando en ello, ni bien tengamos novedades les confirmamos

Al tener respuesta de parte de Invoicy:

Estimados, ya nos han confirmado que Invoicy está trabajando en solucionar el problema. Ni bien se restablezca el servicio le estaremos notificando. 

Disculpas por las molestias. 

### Enviar e-ticket

Para enviar un E-Ticket, sólo es necesario que el receptor tenga definido el tipo de documento si el monto supera las 10.000 UI a fecha del 31/12 del año anterior.

Si se supera dicho monto, al socio de negocio del comprobante se le puede asignar el tipo de documento “Otros” y colocar cualquier número como número de documento.

### Mensajes de Error CFE

***CFE_NOTORG* = "CFE Error: Los documentos emitidos deben tener la compañía y organización con la que se inició sesión en el sistema";**

*IDDOC_002* = "CFE Error: No es un tipo de documento para emitir CFE";

*IDDOC_002_2* = "CFE Error: El tipo de CFE no es un tipo aceptado por DGI";

*IDDOC_003* = "CFE Error: Area Identificacion del Comprobante (3) - Falta Prefijo de la secuencia";

*IDDOC_004* = "CFE Error: Area Identificacion del Comprobante (4) - Numero de comprobante no asignado al documento";

*IDDOC_005* = "CFE Error: Area Identificacion del Comprobante (5) - Fecha del comprobante no establecida";

*IDDOC_011* = "CFE Error: Area Identificacion del Comprobante (11) - Forma de pago no aceptada por DGI (Contado o Credito)";

*EMISOR_ORG* = "CFE Error: Area Emisor - Empresa no establecida";

***EMISOR_040* = "CFE Error: Area Emisor (40) - RUT no establecido";**

*EMISOR_041* = "CFE Error: Area Emisor (41) - Razon Social no establecida";

*EMISOR_047* = "CFE Error: Area Emisor (47) - Identificador de DGI para local no establecido";

*EMISOR_048* = "CFE Error: Area Emisor (48) - Domicilio fiscal no establecido";

*EMISOR_049* = "CFE Error: Area Emisor (49) - Ciudad para domicilio fiscal no establecida";

#### Mensajes de Error CFE

***CFE_NOTORG* = "CFE Error: Los documentos emitidos deben tener la compañía y organización con la que se inició sesión en el sistema";**

*IDDOC_002* = "CFE Error: No es un tipo de documento para emitir CFE";

*IDDOC_002_2* = "CFE Error: El tipo de CFE no es un tipo aceptado por DGI";

*IDDOC_003* = "CFE Error: Area Identificacion del Comprobante (3) - Falta Prefijo de la secuencia";

*IDDOC_004* = "CFE Error: Area Identificacion del Comprobante (4) - Numero de comprobante no asignado al documento";

*IDDOC_005* = "CFE Error: Area Identificacion del Comprobante (5) - Fecha del comprobante no establecida";

*IDDOC_011* = "CFE Error: Area Identificacion del Comprobante (11) - Forma de pago no aceptada por DGI (Contado o Credito)";

*EMISOR_ORG* = "CFE Error: Area Emisor - Empresa no establecida";

***EMISOR_040* = "CFE Error: Area Emisor (40) - RUT no establecido";**

*EMISOR_041* = "CFE Error: Area Emisor (41) - Razon Social no establecida";

*EMISOR_047* = "CFE Error: Area Emisor (47) - Identificador de DGI para local no establecido";

*EMISOR_048* = "CFE Error: Area Emisor (48) - Domicilio fiscal no establecido";

*EMISOR_049* = "CFE Error: Area Emisor (49) - Ciudad para domicilio fiscal no establecida";

#### Mensajes de Error CFE

***CFE_NOTORG* = "CFE Error: Los documentos emitidos deben tener la compañía y organización con la que se inició sesión en el sistema";**

*IDDOC_002* = "CFE Error: No es un tipo de documento para emitir CFE";

*IDDOC_002_2* = "CFE Error: El tipo de CFE no es un tipo aceptado por DGI";

*IDDOC_003* = "CFE Error: Area Identificacion del Comprobante (3) - Falta Prefijo de la secuencia";

*IDDOC_004* = "CFE Error: Area Identificacion del Comprobante (4) - Numero de comprobante no asignado al documento";

*IDDOC_005* = "CFE Error: Area Identificacion del Comprobante (5) - Fecha del comprobante no establecida";

*IDDOC_011* = "CFE Error: Area Identificacion del Comprobante (11) - Forma de pago no aceptada por DGI (Contado o Credito)";

*EMISOR_ORG* = "CFE Error: Area Emisor - Empresa no establecida";

***EMISOR_040* = "CFE Error: Area Emisor (40) - RUT no establecido";**

*EMISOR_041* = "CFE Error: Area Emisor (41) - Razon Social no establecida";

*EMISOR_047* = "CFE Error: Area Emisor (47) - Identificador de DGI para local no establecido";

*EMISOR_048* = "CFE Error: Area Emisor (48) - Domicilio fiscal no establecido";

*EMISOR_049* = "CFE Error: Area Emisor (49) - Ciudad para domicilio fiscal no establecida";

Cuales son los datos requeridos para realizar la certificación de una Empresa:

### Datos requeridos para realizar la Certificación de una Empresa

* RUT
* Razón Social
* Teléfono
* Dirección
* Solicitar en DGI usuario para "Homologación Simplificada" ([__http://atendimento.migrate.info/customer/es/portal/articles/2540657__](http://atendimento.migrate.info/customer/es/portal/articles/2540657))
* Mail y contraseña para comunicación entre empresas para CFE (ej: cfe@dominiodelaempresa.com.uy o gmail u otro), debe ser exclusivo para comunicación entre empresas y no se deberá acceder a el manualmente, los sistemas de facturación electrónica consultarán directamente esta casilla.
* Mail de contacto entre DGI y la Empresa
* Si los mails son del dominio de la empresa entonces también se deberá proporcionar:
  * Descarga de email (POP3)
    * Host
    * Puerto
    * Es SSL (Si/No)


* Envío de email (SMTP)
  * Host
  * Puerto
  * Es SSL (Si/No)


* Numero de Sucursal y Código de Vigencia

### Cómo cargar un CAE en InvoiCy?

Cuando un cliente informa de que no tiene ninguna CAE autorizada, lo mas probable es que el CAE para ese tipo de CFE se haya terminado o vencido.

En ambos casos se tiene que hacer la carga del nuevo CAE

En caso de que se haya vencido, es muy probable que queden números de ese CAE sin utilizar, por lo que tienen que ser anulados para que se envíen en el reporte diario

  
Y también cuando se vence, se tiene que adelantar la secuencia en Solop ERP para ese tipo de documento para que comience con la numeración del nuevo CAE que está mas adelante.

  
#### **Evaluar que hacer con el CAE si había un cae previo si se vence o termina**

Solop ERP gestiona las secuencia de los documentos que envía a InvoiCy, entonces.

\* Cuando el cae se termina, habiendo llegado a 800 en un caso hipotético, en Solop ERP la siguiente secuencia es la 801 y como DGI te asigna también CAEs en secuencia, va a ser también la 801 por lo cual no se requiere una acción adicional, Solop ERP sigue sin intervención con la siguiente secuencia.

\* Si se vence, (en un segundo caso hipotético) habiendo emitido hasta el 759, Solop ERP está apuntando el próximo número: al 760, por lo que no va a haber ningún cae válido que responda a ese nombre.

Cuando se vence un CAE hay que:

\* Adelantar la secuencia en ADempiere

\* En invoicy ANULAR el rango de secuencias del cae vencido que no fueron emitidos para que sea informado en el reporte diario

#### Como Ver el formato de impresión de una e-Factura desde Solop ERP

Para visualizar el formato de impresión de las facturas se debe correr el proceso “Impresión de CFE Invoicy” desde la ventana “Documentos por cobrar”.

### Proceso de como Generar líneas CFE

El proceso de Generar líneas CFE funciona una vez que la Factura esté en Estado "En Proceso"

Los Documentos por Cobrar son generados siempre desde el proceso de "Generar Factura desde líneas de Orden" en estado "En Proceso".

Cuando una factura está en Estado "Borrador" (por ej. si se generó manualmente), el proceso de Generar líneas CFE aparece VACÍO y eso es un problema.

En estos casos que se genera un DxC manualmente desde la ventana, se debe intentar "Preparar". esto se realiza desde el proceso de Completar.

\*Al preparar se crea automáticamente las Líneas CFE.

#### ¿Por qué motivo puede aparecer el siguiente error: “Error: CFE  Rechazado”?

Lo mas probable es que se este intentando enviar un CFE que tenga una o mas lineas en cero (ya sea cantidad o precio o ambos). Es una validacion de DGI que no puede ir un producto con precio 0. Para resolverlo quitar la linea.

Si es POS, se puede validar el error directamente en InvoiCy, con el numero de Factura, se ingresa a la consola, en inicio, se da clic en el documento y en la pestaña “Respuestas” se puede ver el detalle del error (es obligatorio informar el valor unitario del item).

#### ¿Por qué motivo puede aparecer el siguiente error: “Error: CFE - Rechazado - 607 Ninguna CAE Autorizada encontrada”?

El problema aquí es que NOexisten CAEs para las facturas o boletas.

Esto lo debe solicitar el cliente a su estudio contable y subirlo a Invoicy.

  
De lo contrario si no los puede subir el cliente, nos lo pueden pasar a nosotros y se los subimos.

que no se han utilizado, y se debe adelantar en Solop ERP la secuencia del tipo de documento correspondiente, para coincidir con el número inicial del nuevo CAE vigente. 

#### ¿Por qué puede suceder el siguiente error: “ERROR: "CFE Error: Area Información de Referencia (3) - Error al parsear código de CFE" al completar una e-Nota de Crédito”?

Esto sucede cuando el documento referenciado es previo a facturación electrónica y por ese motivo no tiene prefijo. Para solucionarlo se indica referenciar en el campo descripción de CFE Referido a este documento en vez de en el campo Documento Asignado.

#### ¿Qué hay que tener en cuenta al generar un e-Ticket o una e-Factura?

Puede ocurrir que cuando se esta generando una Orden de Venta, y dependiendo de si se desea generar una e-Factura o un e-Ticket, debe estar definido el RUT en el SDN.

Si lo que se desea es generar una e-Factura entonces el SDN debe tener definido el “Grupo de Impuestos” como RUT.

Si lo que se desea generar es un e-Ticket, entonces el documento puede ser generado a un SDN generico (como mostrador) ya que no exige la identificacion del mismo, siempre y cuando no supere los 10000 UI.

Otra causa posible es que, aunque exista un CAE vigente, se venció la secuencia anterior, quedando números sin usar. En ese caso se deben anular los números del CAE vencido 

#### ¿Por qué motivo puede suceder el siguiente error: “Tipo de documento no definido para Socio de Negocio…”?

Esto puede suceder ya que el Socio de negocio en cuestión tiene en esta ventana en blanco los campos “Número de identificación” y “Grupo de impuestos”.

#### ¿Por qué los datos de una factura en el sistema (cabezal, lineas, totales) se ven bien, pero al imprimir, una sale con los datos de otra? (CFE impresión factura se cruza una con la otra)

**Sucede porque** hay un error al procesar los documentos en InvoiCy. Se debe revisar en InvoiCy si lo documentos ya se han ido para DGI (entrar en la consola, en inicio, y validar los datos de los CFE involucrados). Entonces lo que se debe hacer primero es dejar el ambiente de InvoiCy igual al de Solop ERP. Esto puede significar o no que se deba anular una factura en Solop ERP y volverla a hacer luego. Se debe validar los pasos a ejecutar y organizarlos.

Por ejemplo (las situaciones pueden ser varias):

En Solop ERP Tenemos una factura con el SDN A con un total X y otra factura al SDN B con un total Y. Pero en InvoiCy aparecen dos facturas al SDN B con el total Y. Como las facturas ya se fueron para DGI, lo primero que hay que hacer es replicar el ambiente de InvoiCy en DGI y luego realizar las acciones necesarias para normalizar la situación. En este caso:

 1. En Solop ERP anular la factura que esta mal (SDN A con total X)
 2. Crear una igual a la que esta en InvoiCy (SDN B con total Y)
 3. Tomar nota de la secuencia definitiva actual para el tipo de documento en Solop ERP (ya sea Factura Cliente, etc.)
 4. Coordinar con el Cliente para que no se facture mas mientras se hacen las correcciones.
 5. Modificar la secuencia definitiva para que la siguiente factura sea la que se anulo (SDN A con total X).
 6. Desactivar el tipo de documento como CFE (isCFE=NO)
 7. Completar la nueva factura que esta en Draft (borrador).
 8. Restaurar la secuencia definitiva.
 9. Habilitar nuevamente el tipo de documento como CFE (isCFE=SI)
10. Crear una Nota de Crédito para la nueva factura creada con la secuencia correspondiente a SDN A con total X y con los datos de SDN total Y, esto para anular la factura doble que quedo en InvoiCy.
11. Volver a facturar al SDN A con total X para que esta vez salga bien.

Es posible también, que al entrar en InvoiCy y validar el estatus del CFE, se vea que la factura con problemas esta en estado de “RECHAZADO”, si es asi, entonces se puede por base de datos corregir los datos del documento y tratar de completar nuevamente el documento.

También es posible que al chequear en InvoiCy el documento CFE todavia no haya llegado, se puede proceder a anular la factura y volverla a crear.

### ¿Cómo saber si una organización envía CFE?

Se puede saber si envía o no CFE desde la ventana "LUY Sender".

Si envía CFE debe estar en “Y”.

#### ¿Por qué motivo al ingresar un pago para una Factura (Documentos por Pagar) e ir a la opción de cheque no veo las opciones de Banco?

Solo se puede pagar una Factura y ver las opciones de Banco cuando la factura esta en estado de “Completo”, si está en “Borrador” no dejará ver las opciones de pago. Debe completar la Factura.

#### ¿Se pueden borrar facturas?

Las facturas una vez generadas no podrán borrarse por motivo de auditoría, lo que se debe hacer con ellas en estos casos es anularlas.

**NOTA:** El sistema permite anular facturas que se encuentren en estado borrador.

#### Como generar Asignación (Automática) de facturas a los pagos:

El proceso permite asignar facturas a los pagos para un socio de negocio o grupo de socios de negocio.

  
A este proceso se le agregó el check “Factura Asignada Totalmente”, mediante el cual se indica que una factura no puede quedar asignada parcialmente, sino que siempre se debe asignar por el total de su monto abierto. También se modificó para no considerar notas de crédito, solamente facturas.

Cuando se marca el check “Asignación a las Primeras” llama a una función que permite asignar todo lo que se pueda, aunque el total de cobros sea distinto al de facturas, creando primero todas las líneas de asignación para los pago/cobro, y luego todas las líneas para las facturas. En este caso, si también se marcó el check “Factura Asignada Totalmente”, se controla e impide que la factura quede con saldo abierto.

\- Funcionamiento con ambos check = Y (ver foto):

El importe de cobros es mayor al importe de  facturas -> se genera asignación

El importe de cobros es igual al importe de  facturas -> se genera asignación

Hay N facturas y 1 cobro por el total de las facturas -> se genera asignación

  
En estos casos no quedarán saldos abiertos en las facturas, y para cualquier otro caso (diferentes combinaciones de facturas y cobros), si una factura llegara a quedar con saldo abierto, **el proceso no realizará la asignación y devolverá mensaje de error.**

#### como generar Asignación (Automática con Exclusión)

Este proceso funciona igual al anterior, con la diferencia de que NO considera las facturas que tengan marcado el check “IsSelfService” (Auto Servicio).

A los Informes de Gasto que se generan desde el proceso "Generar Servicio a Facturar" se les define el check de "IsSelfService" en Y por defecto.

Las Facturas que se generan desde el Proceso "Generar Factura desde Cuota Contrato" consideran si el Informe de Gasto que se está facturando tiene el check "IsSelfService=Y", y en ese caso la factura se genera con el check en Y. 

Si se agregan varios informes y al menos uno tiene el check “IsSelfService” en Y,  entonces se define el check en la factura.

  
Se utilizan los campos en pestaña "CFE Referidos" de "Total Abierto" y "Total Asignado". Estos campos, cuando las líneas en esta pestaña son generadas mediante un proceso, se cargan de la siguiente manera:

  
\- **Desde el botón "Crear Desde" (desde Factura) en cabezal de documento:** se setea el importe abierto de la factura y el importe total asignado, según el total de líneas agregadas a la nota de crédito.

\- **Desde proceso "Crear Nota de Crédito desde Factura" (en el ícono del engranaje en cabezal de factura):** se setea el importe abierto de la factura y el importe total asignado, según el total de líneas agregadas a la nota de crédito.

\- **Desde proceso "Generar Nota de Crédito desde Devolución":** se setea el importe abierto de la factura y el importe total asignado se toma del importe total del cabezal de RMA (Autorización de Devolución)

Si se genera una línea manualmente en pestaña "CFE Referidos", también se carga el importe abierto, y el importe asignado con igual valor.

Luego, al momento de completarse la NC, se genera la asignación automática creando una línea por la NC, y las N líneas por cada una de las facturas presentes en los CFE Referidos, por el importe asignado indicado en cada una.

Al momento de ejecutarse este proceso, se verifica que cada una de las facturas siga teniendo un saldo abierto igual o mayor al indicado en la NC, y también que la moneda sea la misma de la NC, de lo contrario se retorna mensaje de error indicando el motivo.

Al completarse la NC de DxP, se verifican las líneas de orden de los DxP asignados en pestaña "CFE Referidos", y en caso de que ninguna línea tenga cantidad ordenada distinta a la facturada, se quita el check de "En Negociacion" del DxP.

**__NOTA__**

**EL SISTEMA NO REALIZA ASIGNACIONES POR LÍNEA SINO POR FACTURA, por lo que si los pagos no cancelan totalmente los Documentos por Cobrar no se deben asignar parcialmente**.

CONTROLES:

\- No se permite guardar una línea en CFE referidos, si hay una factura seleccionada y al menos uno de los campos de importe (total abierto o total asignado) es menor o igual a cero.

\- No se permite completar la NC si el monto total de facturas asignadas es mayor al importe de la NC. En el caso que sea 

menor, entonces la NC se asigna con el importe de las facturas asignadas, quedando un pendiente en la NC.

### Recibo de Cobro

Es un documento que una entidad (comercial/personal) emite indicando que cobró a un tercero por un bien o servicio.

  
El recibo de cobro tiene un total monetario que está formado por la suma de los "Medios de Pago", este total nunca puede exceder el total del recibo de cobro (el total de los medios de pago puede ser menor o igual al recibo de cobro), estos medios de pago pueden ser:

* Cheque diferido
* Efectivo
* Canje

El recibo de cobro tiene documentos afectados o "Documentos Por Cobrar", la suma de esta relación puede ser igual o menor que el Recibo de Cobro pero nunca superior.

**Es posible que esta misma Entidad a su vez deba pagar por un bien o servicio al mismo tercero al que le está cobrando, pero que, en vez de pagarlo en Cheque diferido o Efectivo, lo paga en "Canje"**

En ese caso, por ejemplo, si la Entidad debe pagar 1000 y a su vez debe cobrar 300, generará un Recibo de pago cuyos Medios de Pago serán ya sea Efectivo o Chequeo por 700 y un documento en "Canje" por 300.

Del lado de la otra Empresa (la que debía pagar 300 a la Entidad), la deuda quedaría saldada.

Adempiere tiene una funcionalidad en su menú de "Recibo de Cobro" o "Recibo de Pago", con una caja de verificación llamada "Transacción de Venta". Cuando el menú es "Recibo de Cobro" y está marcada la caja de verificación, el sistema mostrará la relación de los "Documentos Por Cobrar".

Cuando el menú es "Recibo de Pago" y está marcada la caja de verificación, el sistema mostrará la relación de los "Documentos Por Cobrar", con lo cual, se habilitará la opción de pagar por medio de la generación de un documento en "Canje".

Este documento debe relacionar los Documentos Por Cobrar que se canjearán por el/los Documentos Por Pagar. Y cuando se completa, genera de forma automática el "Recibo de Pago".

Adempiere tiene una funcionalidad en el Documento / Ventana de "Recibo de Cobro" o "Recibo de Pago" para incorporar al Recibo un Documento de CANJE. 

Si estamos en un Recibo de Pago, el CANJE es realizado asignando un Documento por Cobrar desde la Asignación. Para ello se debe hacer click en el Botón de Asignar Facturas donde se abrirá la ventana para seleccionar los Documentos a Asignar. Por defecto la misma mostrará Documentos por Pagar (Transacción de Ventas = N), se debe marcar el Check "Transacción de Venta" en Y para que la ventana muestre todos los Documentos por Cobrar que existen para dicho SDN.

  
Luego de seleccionar el mismo, al Completar el Recibo de Pago se generará un Recibo de

COBRO por el importe de dicho CANJE. Este importe lo determinará la suma total de Documentos CANJEADOS (DxC asignados al Recibo de PAGO). 

Por último, se deberá definir el NRO del Recibo de COBRO que será generado automáticamente. Este nro se debe definir en el campo “Nro. Recibo de Cobro”

#### Canje en Recibo de Cobro

Para el caso de la funcionalidad en el Documento / Ventana de “Recibo de Pago” se entiende al revés, pero la lógica es la misma.

##### Mensaje de “Pago No Asignado” en Recibo de Cobro

**Problema:** En un Recibo de Cobro, aparece como pago no asignado, aunque se puede apreciar que existe una Factura asignada, así como un pago, que puede estar pasando?

**Respuesta:** Cuando existe coincidencia entre el total de los documentos asignados con la suma total de los pagos (entre cheques, cobro contado, etc.), la asignación se hace de forma automática, pero si existe una diferencia de un pico (centesimos por ejemplo), esta asignación no se hace de forma automática.

Para asignar el cheque al cobro, en el caso de que el estado del documento (Recio de Cobro) este en “Completo” se realiza la ventana Asignación manualmente.

Como realizar recibo pago/cobro multimoneda

Cuando se marca el check “Multimoneda” en un recibo, se habilitan los siguientes campos obligatorios:

* **Segunda Moneda:** indica la segunda moneda a considerar para seleccionar las  facturas a asignar
* **Tipo de Conversión:** indica el tipo de conversión a utilizar, si se elige SPOT o COMPANY se cargan dichas tasas en modo sólo lectura, se se elige DOCUMENTO, entonces el usuario debe ingresar la tasa a utilizar, que será válida solamente para el recibo en cuestión.
* **Tasa:** indica la tasa a utilizar para convertir en las dos monedas del recibo

No se permite realizar cambios en el cabezal del recibo, si el mismo ya tiene líneas y se está queriendo cambiar alguno de los siguientes campos:

* Socio del negocio
* Moneda
* Número
* Fecha
* En Representación
* Proyecto
* Tipo de Documento
* Es Anticipo
* Multimoneda (check)
* Tasa
* Tipo de Conversión


* Segunda Moneda

Si el recibo es multimoneda y aún no tiene líneas, se vuelve a obtener y cargar la tasa de cambio cuando se modifica alguno de los siguientes campos:

* Fecha
* Moneda
* Segunda Moneda
* Tipo de Conversión
* Multimoneda (check)

En este caso, si es multimoneda y el tipo de conversión es SPOT o COMPANY, se obtiene y carga la tasa. Si no es multimoneda, entonces se setea vacía la segunda moneda.

Luego de guardarse el cabezal de recibo, si se modificó alguno de los 4 campos de multimoneda, se borran las tasas de conversión creadas y, si el tipo de conversión seleccionado es DOCUMENTO, entonces se vuelven a generar (ventana de Tasa de Cambio).

Luego, al momento de completarse el recibo multimoneda, si el mismo genera una asignación, en dicha asignación se le setea también los siguientes campos:

 

* Multimoneda (check)
* Tipo de Conversión
* Tasa

Estos datos son necesarios al momento de contabilizar la asignación de pagos, para obtener la tasa utilizada al momento de los cálculos para la pérdida/ganancia realizada.

#### Recibo de anualidad (Educación)

**Al crear un recibo de anualidad se debe marcar el check "anticipo"**

**Cómo realizar** Redondeo en Recibo de Cobro (**Check Redondeo)**

Si no se marca el check, el Asignado de Facturas y el Asignado de Pago debe ser IGUAL!!!

Situación: COBRO SUPERIOR A FACTURAS - Signo Negativo

Se puede hacer una asignación Parcial del Cobro? y dejar el resto "Pendiente de Asignar"?

1\. **Check Redondeo = N** Asignación por importe de Facturas, menor al Cobro dejando saldo abierto del Cobro.

2\. **Check Redondeo = Y** Asignar el 100% del Cobro mandando el resto a un Cargo.

Situación: FACTURAS SUPERIOR AL COBRO - Signo POSITIVO

  
1\. **Check Redondeo = N** Asignación Parcial: Para poder hacer una asignación Parcial de las Facturas se deberá seleccionar las mismas desde el SB de Asignar Facturas por el importe que se desea asignar. No debería permitir asignar de más si no se marca el Redondeo en Y. CONTROL

2\. **Check Redondeo = Y** si se tiene un importe superior de las facturas al Cobro, se marca el check "redondeo" y se enviará dicha diferencia al Cargo Redondeo.

###  Retención y Resguardos

Como parametrizar retenciones de DGI

#### Configuración de Retenciones

En esta ventana se parametrizan todas las retenciones de DGI más las que quiera agregar customizada la empresa.

Código: El código establecido por DGI, enviado en el CFE

Nombre: Nombre de la retención

Tipo de Retención: Parametrización interna, por lo general se deberá seleccionar la única definida

WHAmtType: Monto imponible, si se aplica sobre el impuesto, total o subtotal

Porcentaje: Porcentaje a retener (0-100)

Monto máximo: a retener

#### Documentos a Aplicar

En la pestaña Documentos a Aplicar se indicarán los documentos en el cual se deben generar retenciones.

### Proveedores

En Referencia  se debería definir el Documento que se generará como “Retención” en “Documentos de Retención Generada”: Crear tipo de documento “Retención”

Además se debería generar el Tipo de Documento de “e-Resguardo”. Considerar que se debe aplicar la misma lógica que se aplicó para la generación automática de Facturas definiendo de manera genérica el Documento pero luego al momento de generarlo se deberá tomar el Tipo de Documento que corresponda según la Organización donde se encuentre

### Impuestos

Cuando se define una retención donde su monto imponible se realiza sobre el impuesto, aparecerá una nueva pestaña donde se indicarán los impuestos que se retendrán

  
En esta pestaña se ingresarán todos los impuestos a retener para el documento en cuestión

### Observaciones

Según la parametrización realizada en el Tipo de Retención, se evaluará si corresponde realizar documento de Withholoding para el documento.

Actualmente está parametrizado para que se revise en la acción Completar de la Factura

#### Al completar DxP

Si el documento cumple para generar retención, según la parametrización indicada más arriba, se generará un documento previo al resguardo en la ventana “Documento Retención Generado”

#### Generar Documento Retención de forma manual

En caso de que por algún motivo algún DxP requiera generar su respectivo Documento Retención y no lo tenga generado, este proceso podrá ser lanzado desde la ventana Documentos por Pagar -> Engranaje en la pestaña cabezal -> Re-Procesar Retención

#### Observaciones Documento Retención

  
El Documento Retención Generado va a calcular los montos sin tener en cuenta la moneda del documento de origen y sin convertir montos, por lo tanto, para realizar el resguardo se tomará la línea de DxP y calculará la conversión de moneda según la fecha del DxP

Los resguardos siempre se emiten en Moneda UYU.

#### Como generar retenciones

  
Proceso Generar Retenciones

El proceso “Generar Retenciones” va a generar los documentos Resguardos requeridos a partir de los “Documentos Retención” Completos pertenecientes al mes de la fecha ingresada en el proceso.

Este va a agrupar por retenciones, y evaluará:

* Si la Definición de Retención no tiene moneda o MaxAmount continuará generando la Invoice (Resguardo)
* Si tiene monto y moneda
  * Convertirá el monto MaxAmount a UYU basándose en una tasa de cambio existente con las siguientes características
    * Tipo Period End
    * Fecha mes anterior a la fecha DateDoc pasado por parámetros (tener en cuenta que resta 1 mes, y la conversión tipo Period End va del primero al último día del mes
    * Moneda de Origen a UYU
  * **Hará sumatoria de todos los montos de Retención agrupados, convirtiendolos a UYU según moneda, dateInvoiced y Tipo de Conversión de la factura source relacionada**
  * Si el monto de la retención no supera la sumatoria de montos de la factura entonces no genero Resguardo

#### Observaciones

* El cargo definido en la factura a generar se tomará primero de la ventana (Tipo Retención -> Pestaña Configuración de Retención -> Campo Cargo) y si no está definido va a obtenerlo de la Definición de Retención del campo Cargo (WH_Definition.C_Charge_ID)
* **Monto mínimo de la Retención (conversión a UYU)**: Se define monto y moneda tal que al 31/12 del año anterior se defina se obtenga la conversión a la moneda del esquema contable (UYU) para poder validar que el monto de los Documentos Retención, sumados por Definición Retención, sumen más que el mínimo, se tomará la moneda de la factura de origen relacionada para determinar la moneda.
* **Documentos Retención en Resguardos Anulados**: Si se anula un Resguardo, se emitirá un reverso Resguardo cancelandolo como CFE, en este caso, los Documentos Retención Generados para este resguardos quedarán libres para ser enlazados a otro Resguardo cuando se corra nuevamente el proceso de Generación de Resguardos
* **Observación CFE:** Línea CFE No aplica para Resguardos

Existe el Smart Browser de “Generar Resguardos” donde se estarán mostrando todas las Retenciones generadas que aún no cuentan con un Resguardo generado. 

  
Mediante este Proceso se podrá ver lo que está pendiente de generar resguardo, seleccionando las mismas y dando OK al proceso generará los Resguardos correspondientes. 

  
**Retenciones generadas con fecha contable y no con fecha de documento**

Las retenciones las debe generar con fecha contable del documento por pagar y no con fecha de documento como lo viene haciendo, si la genera con fecha de documento, quedan con error de contabilizacion, dado que el periodo esta cerrado.

Controles Resguardos y retención

Si se anula una retención que tuene resguardo no permite. 

  
Reporte de Pagos sin Asignar:

Columna “Totales con sobre/sub pago” reifere al campo definido en el Pago/Cobro al ser generado. No se actualiza si el mismo tiene otra asignación realizada luego de haberse completado.   
Si Todos los pagos son generados de manera correcta al completarse y su importe de  “Totales con sobre/sub pago” es correcto, este Reporte de Pagos sin Asignar debería corresponderse con el Mayor “Cheque Depósito no Asignados”

### FAQ

#### Reporte de saldos Pendientes y Reporte de Estado de Cuenta Corriente no da igual saldo ¿Por qué?

Para que este reporte se genere igual se debe verificar que la tasa de cambio aplicada en las asignaciones vinculadas a los medios de pago incluidos en el recibo de pago multimoneda tienen la misma tasa de cambio que la tasa definida en el recibo de cobro en cuestión. Actualmente no hay un control para que no te permita seleccionar una tasa diferente al momento de hacer la asignación manual desde la forma asignación de pagos.  
  
Otro tema es que el recibo multimoneda está hecho para generar un recibo de cobro con 1moneda contra facturas en otra moneda. No está soportado agregar facturas en múltiples monedas en un mismo recibo de cobro

#### ¿Se puede rechazar un cheque diferido de tercero como un cheque diferido propio?

No, pero no por ser de terceros sino por ser “diferido”. Para Rechazar un cheque hay que primero depositarlo, el cheque diferido en si no se deposita sino que se genera otro tipo de documento de “Depósito de cheque” que es quién se deposita (el Depósito actúa como un PAGO/COBRO y un Cheque Diferido actúa como una FACTURA). Para rechazar un Ch. Diferido habría que primero depositarlo y lo que se rechazaría sería el Depósito, no el cheque diferido.

\*Esto no lo pidió nadie hasta el momento.

#### ¿Cómo llegar a un recibo desde Documentos por cobrar?

Para llegar a un recibo desde la ventana de Documentos por cobrar se debe ir a la pestaña “Facturas pagadas”, elegir la factura y dentro de la misma hacer click en “Asignación”. Esto nos abrirá la ventana “Consulta de asignación” donde en el campo “Descripción” nos dirá que Recibo de cobro la generó la misma.

#### ¿Cómo podemos ver el saldo pendiente de una factura?

El saldo pendiente de un Documento por cobrar lo podemos ver desde la pestaña “Facturas pagadas”.

#### ¿Por qué una factura puede aparecer duplicada en el reporte de Saldos Pendientes?

Se debe ver si tiene varios esquemas de pagos incorrectos.

El término de pago se define en la factura mismo, pero al completar la factura, según el término de pago definido, se crea (o NO) su correspondiente Esquema de Pagos.

El problema es que el término de pago definido tiene ciertos esquemas, para definir cuotas, pero si este está mal definido, puede generar 2 líneas en esquema de pagos de manera incorrecta.

#### ¿Cuándo aparece una Nota de crédito en el reporte de saldos pendientes? 

Aparece cuando tiene SALDO ABIERTO pendiente de asignar. Si está COMPLETAMENTE asignada entonces no aparecerá. Si NO ESTÁ completamente asignada entonces sí aparecerá.

  
Qué representa el SALDO INICIAL en el reporte de estado de cuenta corriente?

Representa el saldo de todos los documentos para atrás, su saldo abierto.

Si sacas el reporte desde la fecha desde pero para atrás te debería dar el mismo importe.

#### ¿Facturas pagas se ven en el Estado de Cuenta Corriente y en Saldos pendientes?

En el estado de cuenta se ven las facturas Pagas. No se muestran en el reporte Saldos Pendientes justamente porque ya no tienen nada pendiente.

El estado de cuenta corriente muestra todo, Facturas y pagos sin filtrar si esta paga o no, son todos los documentos.

Ahora, este reporte no muestra DxP Cerrados.

#### Reporte de saldos Pendientes y Reporte de Estado de Cuenta Corriente no da igual saldo ¿Por qué?

Pedimos un listado de saldos pendientes a la fecha 31/12/2018 (ejemplo) y lo estamos verificando con el estado de cuenta corriente de cada socio de negocio, debería de dar lo mismo, pero eso no ocurre, cual puede ser el motivo?

**Respuesta:**

1. Verificación de Balance Cierre de Ejercicio
2. Obtener el Balance Contable a fecha de Cierre de Ejercicio
3. Obtener el Balance de Prueba con el Informe: “Mayor contable por SDN”. Este reporte brindará el saldo clasificando según Socio del Negocio y Moneda para ver el detalle de las transacciones existentes. 
4. Obtener el reporte de “Saldos Abiertos a la Fecha” definiendo la fecha del Cierre de Balance. Para validar los saldos así como también los ajustes realizados por Diferencia de Cambio se puede detener sobre un Socio de Negocio en particular para analizar en detalle sus transacciones y su saldo. Comparar los Documentos existentes en el reporte Saldos Abiertos con el Saldo Final de todas las transacciones del Mayor Contable correspondiente según SDN.
5. Tener Cuidado con los ajustes ya realizados sobre la Cuenta Contable para aplicar las Diferencias de Cambio Realizadas cuando las mismas hayan sido cobradas. En estos casos, las líneas de Ganancia/Pérdida por Diferencia de Cambio Realizada se realizan SIEMPRE con Moneda del Esquema Contable, de manera que no estarán clasificadas como con Moneda USD sino con UYU si su esquema contable está en UYU.

#### Cómo me doy cuenta si una Consulta de Asignación fue generada manualemente desde la Forma “Asignación de Pagos”?

Siempre pone el nombre del Usuario en el campo “Descripción”