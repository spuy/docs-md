---
title: 2. Proceso Final
category: Documentation
star: 9
sticky: 9
tag: 
  - Educación
article: false
---

## Flujo Instituciones educativas

### Circuito final

![Flujo educación 2](/assets/img/docs/education-management/edum-image2.png)

### Carga de Extracto de Cuenta Bancaria

Desde la ventana de Estados de Cuenta Bancario generamos un registro para la Cuenta bancaria correspondiente (se ingresa un nombre y la fecha del estado de cuenta). Se aplica tipo de documento "Conciliación Bancaria" y desde Procesos seleccionamos "Carga de Estado de Cuenta".
En la ventana emergente del proceso seleccionamos la cuenta y desde "Cargador de Archivo" es posible montar al sistema el extracto de cuenta bancaria, seleccionando el formato del banco correspondiente (ejemplo: ITAU dólares), así como su lista de conjunto de caracteres (ejemplo: UTF-8).
Cada movimiento del extracto de cuenta cargado se visualizará en diferentes lineas del registro de Estado de cuenta bancario.

![Carga de Extracto](/assets/img/docs/education-management/edum-image6.png)

### Crear Cobros desde Movimientos Bancarios

Sobre cada movimiento bancario, que se visualiza como una línea del estado de cuenta bancario se crean los Pago/cobros (dependiendo de si el movimiento es positivo o negativo en el extracto). Una vez identificados todos los movimientos es posible Completar el estado de cuenta bancario.

![Carga de Extracto](/assets/img/docs/education-management/edum-image7.png)

### Asignación de Pagos Masiva

Una vez generado los Pago/cobros por cada movimiento en Estado de Cuenta Bancario, desde el Proceso de Asignación de Pagos Masiva es posible de forma automática realizar la asignación entre El Cobro y la factura (el documento por cobrar).
Posee filtros para realizar este proceso por Socio del Negocio, por grupo de Socio del Negocio, y permite seleccionar Cuentas por cobrar, Cuentas por pagar o ambas.
Esta rutina cuenta un protocolo para realizar la asignación de un cobro a una factura realizando las siguientes validaciones:

* Por importe exacto.
* Por importe superior al documento por cobrar (siempre asignando a la factura de menor fecha).

En los casos de un cobro por importe menor al documento por cobrar no genera la asignación (ya que no admite asignaciones parciales de forma automática, estas solo se realizan manualmente).

![Asignación de Pagos Masiva](/assets/img/docs/education-management/edum-image8.png)

### Crear Conceptos a Facturar No Recurrentes

Desde el proceso Crear Conceptos a Facturar es posible generar estos conceptos utilizando filtros de Organización y actividad.
La búsqueda muestra los contratos activos de alumnos.
En la sección de "parámetros" se deben definir:
Producto, Precio, Actividad, Fecha (del concepto a generar) y Lista de Precio.
Al seleccionar "Aceptar" se generan los correspondientes Conceptos a Facturar por aquellos registros seleccionados.

![Conceptos a facturar](/assets/img/docs/education-management/edum-image9.png)

### Generar Facturas desde Cuota de Contrato

Desde la ventana CFE es posible generar las cuotas creadas desde los contratos.
Se inicia generando un registro de Bandeja CFE ingresando un nombre (y descripción opcional).
Al grabar el registro se habilita la generación masiva de facturas (documentos por cobrar) en tres pasos y a partir de los conceptos a facturar previamente creados.

* Primer paso: Seleccionar Conceptos a Facturar. Desde esta opción se abre una ventana emergente en la cual se pueden elegir los filtros con el objeto de agrupar aquellos conceptos a facturar que deseamos facturar masivamente (y se vincularán al registro de Bandeja CFE creado).
Posee filtros tales como Socio del Negocio, Socio del Negocio a Facturar, Fecha del concepto, lista de precios, etc, para acotar la búsqueda de conceptos que deseemos facturar.

* Segundo paso: Generar Facturas desde Conceptos. Luego de haber seleccionado los conceptos, podemos verificar en la solapa Conceptos a facturar que se hayan vinculado todos los conceptos deseados. Posteriormente al elegir la opción de Generar Facturas desde Conceptos se abrirá una ventana emergente en la cual nos indicará en qué estado se crearán los documentos por cobrar (siempre definido como en borrador o en proceso). 

* Tercer paso: Completar Facturas Generadas. La instancia anterior genera los documentos por cobrar y permite verificarlos en la solapa Facturas. Si todos sus datos están correctos podemos seleccionar Completar Facturas Generadas lo cual cambiará a estado Completo en forma masiva a todas las facturas generadas.

La ventana de Bandeja CFE audita todo el proceso de Facturación electrónica, y asignará el tipo de comprobante de acuerdo al grupo de impuesto del Responsable de Pago (si posee RUT genera E-factura y si posee Cedula genera E-ticket).

**Bandeja CFE**

![Bandeja CFE](/assets/img/docs/education-management/edum-image10.png)

**Filtros Seleccionar Conceptos a Faturar**

![Filtros](/assets/img/docs/education-management/edum-image11.png)

### Generar Cálculo de Morosidad

Una vez realizado el proceso de facturación (de lo recurrente y no recurrente) el siguiente paso es crear cálculo de Morosidad (estado de cuenta a los clientes con lo adeudado).

* **Paso 1.** Se genera nuevo registro nivel Estado de Cuenta (y Morosidad = Estado de cuenta y check tildado en Mostrar todas las deudas).

Morosidad Tipo Estado de Cuenta: Este tipo de Morosidad tendrá el criterio de obtener todas las facturas que están pendientes de Pago para ese momento, generando un registro en la pestaña “Entrada” por cada Socio del Negocio que tenga al menos una factura pendiente.

Es posible crear otros tipos de Morosidad (en la ventana del mismo nombre) configurando las preferencias y nombre del tipo que se desee crear (Ejemplo: Morosidad o deuda atrasada, y pre setear controles como mostrar pagos o detener crédito).

En la ventana emergente del proceso se selecciona Organización, agente comercial, Moneda y check tildado de Solo facturas de ventas, en No muestra deuda e Incluir Payments.

Al aceptar, emite un mensaje con la cantidad de entradas generadas por cálculo de morosidad.

Desde cada Entrada es posible desde el botón de procesos generar el Estado de cuenta corriente, y desde las líneas es posible visualizar las facturas correspondientes a cada Entrada (cada SDN a facturar).

![Cálculo de Morosidad](/assets/img/docs/education-management/edum-image12.png)

* **Paso 2.** Para generar los registros en el Cálculo de Morosidad deberá oprimir en el botón de “Crear cálculo de Morosidad”

Al oprimir el botón se desplegará una ventana del proceso donde se deberán seleccionar los criterios o filtros del proceso a generar. En este caso se deberá definir la Organización, el Agente Comercial la Moneda, la fecha (definir un día más de la fecha de facturas) de las facturas que se desean filtrar y la Morosidad (Estado de Cuenta) de los Socios de Negocio.

![Crear Cálculo de Morosidad](/assets/img/docs/education-management/edum-image13.png)

Como resultado le deberá responder la cantidad de entradas que se generaron en el Estado de Cuenta.

Luego de correr el proceso podrá ir a las Entradas para ver todos los registros encontrados.

Dentro de cada Registro en la pestaña “Entrada” se podrá obtener el Reporte de “Estado de Cuenta” oprimiendo desde los procesos de la Barra de Herramientas.

![Entradas](/assets/img/docs/education-management/edum-image14.png)

![Estado de Cuenta](/assets/img/docs/education-management/edum-image15.png)

###  Envío de Estado de Cuenta Corriente

Este proceso buscará todas aquellas entradas de morosidad que existan a partir de los filtros que se le defina y generará el envío de los estados de cuenta correspondientes a cada uno de los Socio del Negocios.

**Definición de Correo**

Correo según Familia: Correo que esté definido en los miembros de la familia que tengan marcado el check de “Envio de mail”. En estos casos se podrá realizar más de un envío del estado de cuenta según tantos miembros tengan definidos.

#### Envío de Estado de Cuenta por Mail

Una vez se generaron todas las entradas en el cálculo de morosidad “Estado de Cuenta” se podrá ir al Proceso de Envío de Estado de Cuenta por Correo”.

En este proceso se deberá definir los filtros deseados y se buscará las Entradas de “Estado de Cuenta” que se desea enviar mediante correo.

Luego de seleccionar los Estados de Cuenta que se desean enviar, se debe seleccionar en los Parámetros del Proceso los criterios de envío.

Dentro de los criterios podemos seleccionar:

Representación Impresa del PDF: Formato de Impresión definido para el Estado de Cuenta. Esto por el momento será fijo para todos los estados de cuenta.

Template de Correo: Definición de la Plantilla de correo que se enviará como texto en el correo.

El envío de mails podrá verificarse en la ventana Cálculo de Morosidad (en el secuencial correspondiente a los envíos), pestaña Emails Enviados.

![Envío por Mail](/assets/img/docs/education-management/edum-image16.png)