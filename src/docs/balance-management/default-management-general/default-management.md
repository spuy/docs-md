---
title: Gestión de Morosidad
category: Documentation
star: 9
sticky: 9
article: false
---
## **Gestión de Morosidad**

### **Cálculo de Morosidad**

El cálculo de Morosidad es un proceso que se inicia con el objeto de tener una foto de los pendientes por cobrar/pagar y que luego se convierte en una carta de deuda o estado de cuenta por cada cliente/familia morosa. 
Se genera a los efectos de presentar todos los Documentos por Pagar o Cobrar que se encuentran con saldo abierto en el momento que se corre según la fecha que se defina.

Las condiciones exactas que serán consideradas al correr un Cálculo de Morosidad dependerá de la Morosidad que se seleccione así como también su Nivel de Morosidad definido. (Morosidad como concepto se refiere a una característica propia del SDN y es en este maestro donde se define esta cualidad (en general se configura como estado de cuenta), a su vez, en el maestro de morosidad puede setearse en esta característica diversos parámetros como ser mostrar todas las deudas, o bien no mostrarlos y solo enviar un aviso de deuda sin importes, o enviar deudas por rangos fecha, etc)

A partir de un Cálculo de Morosidad se generarán tantas entradas como Socios del Negocio con deuda se encuentren según las condiciones y parámetros aplicados en el proceso.

En la entrada se podrá visualizar para cada Socio del Negocio, el importe total de lo adeudado así como también la cantidad de documentos pendientes. En la pestaña entradas se visualizan tantas líneas como Socios de negocio/familias se encuentren con deuda de acuerdo a los parámetros ingresados.  
Dentro de cada entrada de morosidad se podrá ver en sus líneas cada uno de esos documentos que se encontró con saldo abierto y se podrá visualizar en cada uno de ellos, el número de documento así como también los Dïas de vencido y el importe pendiente.

La idea de este documento de Cálculo de Morosidad será generar masivamente los reportes de Saldos Pendientes para cada uno de los Socios del negocio (Reporte que normalmente realiza el departamento de cuentas corrientes cliente por cliente) y a su vez lo agrega en un formato de impresión definido que se puede considerar como una “Carta de Morosidad” o estado de cuenta que se podrá enviar al cliente.  
  
El envío de estas cartas de morosidad o estados de cuenta podrá ser realizado masivamente también gracias al proceso de “Envío de Estado de Cuenta Corriente”. Para el envío masivo es importante cómo se encuentren configurados los SDN (con casilla mail) y las familias (marcados como “envía email” aquellos familiares responsables).

Cada envío será realizado con un proceso de envío de notificaciones del sistema llamado “Notificaciones”. El proceso generará todas las notificaciones necesarias pero las mismas no serán enviadas todas en simultáneo, sino que un proceso posterior que corre según se tenga configurado (Automático o manual) irá realizando el envío del lote que se tenga definido. Normalmente se tiene definido enviar 20 notificaciones cada 5 minutos.

Una vez generado el envío, se crearán tantas Notificaciones como corresponda donde se podrá ver en ellas el Usuario destino, el texto del Correo así como también el Reporte adjunto y el correo destinatario y el correo remitente (este correo remitente varía según la Compañía / Organización / Usuario) 

Dentro del cabezal del Cálculo de Morosidad se podrá visualizar la cantidad de Notificaciones que dicho cálculo tiene generada y se podrán ver cada una de ellas en la pestaña de “Correos para enviar” ubicada como hija del cabezal. Un 2do campo de “correos enviados” se podrá ver también en el cabezal donde se sumarán todas aquellas notificaciones que ya han sido enviadas por el proceso de cola de envío de notificaciones.

Puede darse el escenario de que todas las notificaciones estén marcadas por la aplicación como “procesadas” pero esto no significa que se hayan enviado todas, sino que se debe consultarlas para confirmar que no existan rebotes por error en la dirección de mail por ejemplo.

### **Estado de Cuenta por Cliente**

### **Envío masivo de Estado de Cuenta**

Una vez se generaron todas las entradas en el cálculo de morosidad “Estado de Cuenta” se podrá ir al Proceso de Envío de Estado de Cuenta por Correo”.

En este proceso se deberá definir los filtros deseados y se buscará las Entradas de “Estado de Cuenta” que se desea enviar mediante correo.

Luego de seleccionar los Estados de Cuenta que se desean enviar, se debe seleccionar en los Parámetros del Proceso los criterios de envío.

Dentro de los criterios podemos seleccionar:

**Representación Impresa del PDF:** Formato de Impresión definido para el Estado de Cuenta. Esto por el momento será fijo para todos los estados de cuenta.

**Template de Correo:** Definición de la Plantilla de correo que se enviará como texto en el correo.

**Check de “Send EMail”:** Este check podrá ser desmarcado para realizar pruebas de envios sin enviar realmente el correo al Socio del Negocio. Si se define el check en “Y” se enviará también el correo a los usuarios definidos como que se envie mail en la Familia del Responsable de Pago.

### **Reporte de Estado de Cuenta**

Luego de generado el Cálculo de Morosidad, dentro de cada Registro en la pestaña “Entrada” se podrá obtener el Reporte de “Estado de Cuenta” oprimiendo desde los procesos de la Barra de Herramientas.

Luego, nos figurará el siguiente cuadro al que confirmaremos mediante el botón de OK para así generar el reporte

### Notificaciones

* Notificación desde Cálculo de Morosidad

En la opción de Cálculo de Morosidad se generan las diferente entradas por deuda.

Luego, el envío de estado de morosidad se realiza desde "Envío de Estado de cuenta por correo".

Este proceso busca líneas de morosidad a enviar. Permite seleccionar por nivel de morosidad, por socio de negocio, por fecha. Y como parámetro se define el patrón de correo (de la organización correspondiente): generación de notificaciones desde línea de morosidad.

#### Proceso de Envío de Cola de Notificaciones

El registro de cola de notificación se genera con un destinatario (es uno a uno). El estado de procesado = NO cambia a "SI" cuando se realiza el envío de la notificación. En el caso de fallar o emitir error por envío, queda configurado como Procesado = NO (descripción del error) y Activo = no para que no ingrese en el siguiente lote de envío.

#### Cola de Notificación

Cuando se dispara una notificación desde el ERP, al generar registro de cola de notificación, se graba como procesado = No (no enviado) y con el check de Activo = SI

El envío de notificación tiene diferentes funcionalidades: se puede generar desde

El usuario

La organización

La compañia

From Account name: desde donde se origina la notificación.

#### Recipientes de Cola de Notificación

Es un registro de notificaciones generados dentro del sistema y con sus diferentes destinatarios. 

Genera auditoría o historial de envíos de notificación con sus correspondientes estados y descripción de error (en el caso de no haber sido enviados).