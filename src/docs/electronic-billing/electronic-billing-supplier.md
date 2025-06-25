---
title: Invoicy - Plataforma Facturación Electrónica
category: Documentation
star: 9
sticky: 9
article: false
---

### Validación datos InvoiCy:

Luego de completado un e-Ticket/e-Factura, se puede chequear el CFE emitido en InvoiCy (<https://solopuy.migrate.info/InvoiCy>), e ingresando con los datos proporcionados por Solop.

Se despliega la página donde se puede ver la lista de todos los CFE (Comprobante Fiscal Electrónico) emitidos a la fecha.

En esta ventana y hacia la derecha de cada registro encontrará el icono de impresora y desde ahí también seleccionar el medio (A4, rollo de 80mm) e imprimir.

Haciendo clic en cualquiera de las líneas mostradas, se verá los detalles del documento igual a como se puede apreciar en la representación impresa, organizado por pestañas.

De igual forma se puede chequear para cada documento detalles como los totales, impuestos, descuentos, etc.

Finalmente, y en la parte inferior de la ventana de la ventana, hay controles que permiten realizar diferentes acciones.

### Estado del CFE:

Finalmente en esta parte, se encuentra el “Estado” de los CFE.

En el caso de un documento hubiera sido rechazado, es posible desde ahí editarlo para intentar el reenvío.

Utilizando el lápiz se puede editar el documento para volver a intentar el envío. Sugerimos buscar apoyo en nuestro soporte para validar la información antes de intentar cualquier cambio.

Si la empresa a la que se le está facturando también está en el sistema de Facturación Electrónica InvoiCy envía una copia del documento por email a esta Empresa (el cliente) y una copia a DGI.

### Envío Automático de documentos a clientes

Existen dos maneras de definir la dirección de envío de un CFE por correo electrónico a los clientes.

* Dirección que cada empresa declara ante DGI para recibir CFE que le son generadas a su nombre: 

En este caso el envío lo realiza Invoicy y es independiente del sistema Solop ERP.

* Dirección que un Proveedor le defina a sus Clientes de una Dirección de Correo electrónico diferente a la definida por DGI para asegurarse que el departamento de "Pagos del Cliente" reciba la Representación Impresa del CFE:

Esta segunda opción se configura a través de Solop ERP.
Para definir una nueva dirección de correo electrónico y enviar a Administración del Cliente se debe configurar el correo en la pestaña de Localización del Socio del Negocio en el campo "EMail Adress" (permite ingresar varios correos separados por coma y sin espacio).

![Casilla e mail Cliente](/assets/img/docs/electronic-billing/elb-billing4.png)

De esta forma, cuando se complete un documento por cobrar se enviará en forma automática la representación impresa del documento al cliente.
Es posible validar este envío ingresando en invoicy, consultando el comprobante emitido. En la solapa Receptor podrá visualizar en campo E mail receptor la/s casilla/s de destino. 
A su vez, desde esta consulta de invoicy es posible reimprimir la representación gráfica del documento así como también reenviarlo nuevamente al receptor.

El sistema permite deshabilitar este envío automático de documentos desde Solop ERP solicitándolo a nuestro Soporte (se trata de una configuración interna no visible por el usuario en la ventana Luy Sender, tildando el check "Deshabilitar Envío de mail a BP").

### Otros tipos de documentos:

También se puede consultar otros tipos de documentos, para verlos, en la ventana “Inicio” se pasa el mouse por encima de la barra que da acceso a filtros inmediatos de “Tipo” “Número”, “Fecha” y “Estado” y se selecciona.

De igual forma, si se necesita hacer un filtro más preciso, se puede seleccionar.

y desde ahí se ingresa los valores necesarios para el filtro.

Aquí se puede filtrar la información a fin de encontrar algún registro en particular, especialmente:

Serie.

* Número inicial y final.
* Periodo de tiempo
* Tipo de CFE

Con lo cual al filtrar se puede obtener una cantidad limitada de registros a consultar y así ubicar una información más rápidamente.

Al hacer clic en alguno de los campos de cualquier fila, se abre el documento mostrando sus detalles organizados en pestañas.

### Reportes de CFE:

Para acceder a la pantalla de los reportes diarios se debe hacer clic sobre el botón “Reporte Diario” en la pantalla de Reportes.

De igual forma, se puede filtrar la información, similar a como se hizo con los documentos CFE (filtrar estado, fechas)

Luego de colocar los filtros, se hace clic en el botón “Generar Reporte Diario”. Se abrirá la siguiente pantalla:

En esta pantalla basta especificar la fecha del reporte diario deseado y hacer clic en el botón “Generar” para que el reporte sea generado. Haciendo clic en el botón “Volver” la pantalla será cerrada y podrá ser observado en la parte superior de la tabla, el nuevo reporte diario.

Este reporte se puede

* Editar

* Actualizar

* Eliminar

* Enviar reporte a DGI

* Descargar

La pantalla de edición del reporte fue creada para solucionar problemas de emisión del reporte cuando los comprobantes que están en InvoiCy fueran emitidos erróneamente, y debe ser utilizada con cautela. En general, InvoiCy genera un reporte diario correctamente a partir de las informaciones de los CFE emitidos.

Cuando el reporte diario es rechazado, busque la orientación de nuestro soporte antes de editar la información del reporte e intentar reenviarlo, pues, probablemente el problema está en los CFE emitidos y estos deben ser corregidos antes del reporte en sí.

### CFE Recibidos:

En la pantalla de CFE recibidos serán mostrados todos los CFE emitidos para el RUT de la empresa, como muestra la figura más adelante:

Esta pantalla presenta los siguientes filtros:

* Tipo CFE
* Serie
* Número
* Fecha Inicial y Fecha Final: Correspondiente a fecha de emisión, firma o de importación
* RUT del emisor
* Emisor
* Estado del Sobre: Informa los posibles estados del sobre: sobre recibido o sobre rechazado
* Estado de la Respuesta: Pone a disposición los estados de la respuesta al CFE: No Respondido, Confirmado o Rechazado
* Número Secuencial Único.

Para ver los detalles de los CFE recibidos, hay que hacer clic sobre el link que se presenta al colocar el puntero del mouse sobre los registros mostrados en la cuadrícula.

Al final se mostrará una lista de Acciones sobre el CFE, así como el “Estado” del CFE:

* Descargar XML

* Imprimir una copia de la rep impresa del CFE

* Re-enviar e-mail con los archivos de Aceptación y Acuse de Recibo.

Lista de Empresas/Sucursales:

Para gestionar las empresas/sucursales registradas en InvoiCy, se puede utilizar la lista de empresas contenida en la parte superior de la pantalla del sistema, que se muestra en la siguiente imagen:

La primera empresa que aparece en la lista es la empresa que está actualmente seleccionada, al colocar el cursor del mouse y hacer un clic, ésta se expandirá y mostrará, en orden alfabética todas las empresas que a la que tiene acceso.

También es posible digitar para buscar una casa principal o sucursal. El contenido de esa lista puede ser cambiado haciendo clic en “Mostrar todos los registros”, la siguiente imagen muestra la pantalla que será exhibida:

### Notificaciones en InvoiCy:

InvoiCy posee un sistema de notificaciones para las más variadas situaciones del sistema. El ícono de las notificaciones se encuentra en el encabezado de la pantalla del sistema, como muestra la siguiente imagen:

Cuando alguna situación genera notificaciones, el icono de notificaciones tendrá una pequeña marca, como muestra la siguiente imagen:

Al pasar el cursor del mouse sobre ese ícono, se abrirá una ventana mostrando las notificaciones por grupo, como muestra la siguiente figura:

La notificación puede ser marcada como leída haciendo clic en siguiente botón:

Si se hace un clic en la notificación, lo llevará a la pantalla de InvoiCy, donde se podrá corregir o ejecutar alguna acción.

Para exhibir todas las notificaciones, se debe hacer clic en el link “Exhibir todas las notificaciones”:

La siguiente imagen muestra la pantalla con todas las notificaciones del sistema, su fecha de generación, su estado, su categoría y su descripción completa.

En la columna acciones, están las opciones:

Con este botón se marca la notificación como leída.

Con este botón se abrirá una nueva pantalla que posibilita solucionar el problema que generó la notificación.

### Aviso Límite de CAE

El aviso de límite de CAE por cantidad restante se configura y se emite directo desde la página de "Invoicy".

Esto se puede configurar desde: Panel de Control > Datos de la Sucursal

![Configuración](/assets/img/docs/electronic-billing/elb-billing5.png)

Se puede configurar de qué forma se recibirán las notificaciones (Modo de notificación) desde: Panel de Control > Configuración de las Notificaciones 

![Configuración de notificaciones](/assets/img/docs/electronic-billing/elb-billing6.png)

Según el modo de notificación elegido para cada notificación, los avisos serán enviados por mail, o serán mostrados en el ícono de notificaciones en Invoicy

![Configuración de notificaciones](/assets/img/docs/electronic-billing/elb-billing6.png)

### Carga de CAE Invoicy

Antes de cargar el CAE en InvoiCy, es necesario descargar el XML de CAE del DGI:

* Para descargar el XML de un CAE es necesario ingresar en los Servicios en Línea de DGI en la opción "eFactura - CAE - Consulta Autorizaciones Emitidas".

* En esa opción podrá ver cada uno de los CAE solicitados y descargar el respectivo XML.

Posteriormente, para cargar el CAE en el InvoiCy, es necesario ingresar en el 'Panel Control' > 'CAE'> 'Importar CAE'.

* Se debe seleccionar el botón 'Elegir archivo', seleccionar el XML descargado del portal Servicios en Línea DGI y confirmar la carga de datos del CAE.

![Cargar CAE](/assets/img/docs/electronic-billing/elb-billing8.png)

* Al cargar el archivo deberá seleccionar la opción que corresponda: 

* Atribuir CAE a una única sucursal

* Asignar CAE para varias sucursales y/o definir rangos por tipo de emisión

* En caso de gestionar solo una sucursal deberá seleccionar la primera opción y posteriormente deberá definir la sucursal correspondiente (estará definida por default la sucursal que utilicen) y la forma de emisión (en este caso web service).

* Al aceptar quedará cargado el nuevo CAE indicando el N° inicial, N° final y la cantidad de CFE disponibles.

### Vencimiento de CAE

cuando un CAE vence, se deben anular todos los números que no fueron utilizados de ese CAE.

* En InvoiCy, eso implica anular los número no utilizados de ese CAE y también los CFE que están con estado RECHAZADO en InvoiCy.

* Anular desde InvoiCy en la opción "Configuraciones > Anular rango de CFE" (tuerca del extremo superior derecho), informando el CAE que pertenece el CFE con el número inicial y final de los CFE que desea anular.

* Para confirmar el número inicial se deberá buscar en invoicy, "inicio" por el tipo de comprobante sin ingresar numero inicial, e indicando el número final del CAE vencido (ejemplo: 30000). Esto arrojará cual fue el último CFE emitido en ese CAE, por lo tanto, el número siguiente será el "inicial" y el final será el último número del CAE vencido (ver imagen de ejemplo).

Se deberán completar los datos:

* Tipo del CFE: el que corresponda al CAE vencido (por ejemplo Nota de Crédito e-ticket).

* Anular por: seleccionar "Anulación por Rango de CFE".

* CAE (destildar Nuevos campos para ver este campo): seleccionar el CAE vencido correspondiente al tipo del CFE seleccionado.

* Número inicial: El número posterior al último CFE emitodo para ese CAE.

* Número final: El último CFE correspondiente al CAE vencido.

* Invoicy posee una limitante de CFE a anular de 5000, por lo cual si deben anular un número superior, debe realizarse por "tramos" (en el ejemplo de la imagen se anularán del 21548 al 25000 y luego del 25001 al 30000).

![Anular CFE de CAE vencido](/assets/img/docs/electronic-billing/elb-billing9.png)

Al presionar Anular CFE, luego de realizar el proceso quedará anulado el lote CFE seleccionado.