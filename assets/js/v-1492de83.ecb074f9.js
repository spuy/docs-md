"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1680],{38809:(e,a,i)=>{i.r(a),i.d(a,{default:()=>d});var o=i(53633);const n=[(0,o.Fv)('<h2 id="definicion-de-notificaciones" tabindex="-1"><a class="header-anchor" href="#definicion-de-notificaciones" aria-hidden="true">#</a> Definición de Notificaciones</h2><p>Por definición entendemos que una notificación es un Mensaje con una determinada información enviada a través de un vehículo seleccionado, con un formato definido y siempre a un destinatario predeterminado.</p><p>Existen determinados eventos que generan notificaciones automáticas desde el ERP.</p><p>Estas notificaciones pueden originarse por solicitudes entre diferentes usuarios del sistema, también por la ejecución de cálculo de morosidad con envío de estado de cuenta al cliente (envío de facturas o cuotas adeudadas), desde Proyectos o bien desde reportes.</p><h2 id="configuracion-de-notificaciones-por-usuario" tabindex="-1"><a class="header-anchor" href="#configuracion-de-notificaciones-por-usuario" aria-hidden="true">#</a> Configuración de Notificaciones por Usuario</h2><p>En la opción de Solicitudes, pestaña Aviso de Actualización puede observarse a aquellos usuarios que serán notificados por cambios en una determinada solicitud (ya sea por autor, por asignado, o por seguidor, y las diferentes modificaciones de la solicitud).</p><p>Desde la solicitud será posible la carga de horas por usuario (timesheet).</p><h3 id="plantilla-de-correo" tabindex="-1"><a class="header-anchor" href="#plantilla-de-correo" aria-hidden="true">#</a> Plantilla de Correo</h3><p>En la opción de Plantilla de notificación es posible configurar templates por tipo de plantilla (ejemplo: solicitudes, proyectos).</p><p><img src="/assets/img/docs/basic-rules/bar-not-plantilla1.png" alt="Plantilla de Correo"></p><h2 id="tipos-de-notificaciones" tabindex="-1"><a class="header-anchor" href="#tipos-de-notificaciones" aria-hidden="true">#</a> Tipos de Notificaciones</h2><h3 id="notificacion-desde-calculo-de-morosidad" tabindex="-1"><a class="header-anchor" href="#notificacion-desde-calculo-de-morosidad" aria-hidden="true">#</a> Notificación desde Cálculo de Morosidad</h3><p>En la opción de Cálculo de Morosidad se generan las diferente entradas por deuda.</p><p><strong>Para mayor información sobre Cálculo de Morosidad:</strong> - <a href="../balance-management/default-management-general/default-management">Gestión de Morosidad</a></p><p>Luego, el envío de estado de morosidad se realiza desde &quot;Envío de Estado de cuenta por correo&quot;.</p><p>Este proceso busca líneas de morosidad a enviar. Permite seleccionar por nivel de morosidad, por socio de negocio, por fecha. Y como parámetro se define el patrón de correo (de la organización correspondiente): generación de notificaciones desde línea de morosidad.</p><p>Una vez ejecutado el proceso, es posible visualizar la cantidad enviada desde el cálculo de morosidad, pestaña Ejecutar Morosidad, en el campo Cantidad Entregada (también es posible realizar el seguimiento de envíos desde las opciones de Cola de Notificación y Recipiente de Cola de Notificación)</p><p><img src="/assets/img/docs/basic-rules/bar-not-estado1.png" alt="Envio de Estado de cuenta por Correo"></p><h3 id="notificacion-desde-solicitudes" tabindex="-1"><a class="header-anchor" href="#notificacion-desde-solicitudes" aria-hidden="true">#</a> Notificación desde Solicitudes</h3><p>Generación de notificaciones desde solicitudes de trabajo (task, issues, request): es una entidad que puede vincularse a diferentes actores (usuarios) o documentos (proyecto, orden de venta, compra, facturas, etc.). Se puede generar desde cualquier documento.</p><p>Se trata de comunicaciones entre los documentos del ERP. Tiene como objetivo una conexión total en la organización.</p><p>Al crear solicitud deben llenarse campos obligatorios como organización, tipo de solicitud, asunto (título), resumen (texto sobre el origen de la solicitud), fecha de siguiente acción (o en la cual se espera una primera respuesta), tipo de vencimiento, prioridad, departamento y final de tiempo o fecha de vencido.</p><p>Una vez guardada la solicitud, desde la opcipon de Recipiente de cola de notificación se podrán visualizar las diferentes solicitudes creadas y su estado.</p><p><img src="/assets/img/docs/basic-rules/bar-not-solicitud1.png" alt="Solicitud"></p><h3 id="ventana-todas-las-solicitudes" tabindex="-1"><a class="header-anchor" href="#ventana-todas-las-solicitudes" aria-hidden="true">#</a> Ventana Todas las Solicitudes</h3><h3 id="solicitudes-asignadas-a-uno" tabindex="-1"><a class="header-anchor" href="#solicitudes-asignadas-a-uno" aria-hidden="true">#</a> Solicitudes Asignadas a uno</h3><p>Esta ventana será la que el usuario siempre ingresará para ver todo lo que tiene pendiente de realizar, viendo claramente todo lo que tiene pendiente.</p><p>En la ventana “Solicitudes” se podrán visualizar todas las Solicitudes que estén asignadas a uno mismo (su Usuario) o al Departamento que uno pertenece.</p><h3 id="ventana-solicitud-acceso-directo-a-la-ventana" tabindex="-1"><a class="header-anchor" href="#ventana-solicitud-acceso-directo-a-la-ventana" aria-hidden="true">#</a> Ventana Solicitud (acceso directo a la ventana)</h3><p>Esta ventana será de muy fácil acceso, existiendo un acceso directo desde la Bandeja de Entrada del usuario con el Botón “Solicitudes”. Al costado del nombre del botón se podrá visualizar la cantidad de sus Solicitudes que tiene “Vencidas”</p><h3 id="todas-las-solicitudes" tabindex="-1"><a class="header-anchor" href="#todas-las-solicitudes" aria-hidden="true">#</a> Todas las Solicitudes</h3><p>En esta Ventana de “Todas las Solicitudes” se podrá visualizar todas las Solicitudes que estén creadas en el sistema. Cada usuario podrá ver las que le permita su Rol y en la misma se podrá aplicar los filtros deseados para buscar las que necesite ver.</p><h3 id="solicitudes-de-cuentas" tabindex="-1"><a class="header-anchor" href="#solicitudes-de-cuentas" aria-hidden="true">#</a> Solicitudes de Cuentas</h3><p>La Ventana de “Solicitudes de Cuentas” está creada para que los Ejecutivos de cuenta específicamente (que serán “Gerentes de Proyecto” de todos aquellos proyectos que estén bajo su control) puedan visualizar en una misma ventana todas las Solicitudes que están pendientes dentro de los sus Proyectos.</p><p>Estas podrán estar asignadas a ellos o a cualquier otro usuario.</p><h3 id="historial-de-actualizaciones-de-solicitud-feed" tabindex="-1"><a class="header-anchor" href="#historial-de-actualizaciones-de-solicitud-feed" aria-hidden="true">#</a> Historial de Actualizaciones de Solicitud (Feed)</h3><p>Dentro de cada Solicitud se podrá visualizar el historial de actualizaciones que tuvo la misma a lo largo del tiempo. En cada Actualización se podrá visualizar el cambio realizado y por quién fue realizado. En caso de haber adjuntado una imagen la misma se podrá visualizar en modo “Registro único” sin tener que ver el adjunto en la Barra de Herramientas.</p><h3 id="notificaciones-de-actualizacion" tabindex="-1"><a class="header-anchor" href="#notificaciones-de-actualizacion" aria-hidden="true">#</a> Notificaciones de Actualización</h3><p>Cada Solicitud envía notificaciones de sus actualizaciones a los usuarios definidos como:</p><ul><li>Asignado A</li><li>Creado Por</li><li>Departamento</li><li>Aviso de Actualización</li></ul><p>Como verá, además de los usuarios vinculados, dentro de cada Solicitud se podrá agregar diferentes usuarios para que les llegue vía correo electrónico las notificaciones por actualización de las mismas, independientemente de los demás criterios. Para ello simplemente se deberá navegar a la pestaña “Aviso de Actualización” y agregar manualmente el o los usuarios a recibir notificaciones.</p><h3 id="notificacion-desde-proyectos" tabindex="-1"><a class="header-anchor" href="#notificacion-desde-proyectos" aria-hidden="true">#</a> Notificación desde Proyectos</h3><p>Es posible vincular una solicitud a un proyecto (así como a otras entidades). O bien, en sentido contrario, es posible generar una solicitud que posteriormente será origen de un proyecto (en ambos casos quedarán vinculados).</p><p>La ventaja de generar las Solicitudes desde un Proyecto, Fase o Tarea es que tomará del contexto toda la información que necesite, como Proyecto, Cliente, etc.</p><p>Desde la ventana Proyecto se podrá visualizar todas las Solicitudes relacionadas, tanto desde la Pestaña de Solicitudes correspondiente como desde la Barra de herramientas (Ver todas las solicitudes).</p><p>El objetivo de la vinculación entre proyecto y solicitud responde a la necesidad de ligar las diferentes tareas y requerimientos que se vayan generando a diferentes usuarios, y que tengan relación con un determinado proyecto.</p><p><img src="/assets/img/docs/basic-rules/bar-not-proyecto1.png" alt="Proyecto"></p><h3 id="notificacion-desde-reportes" tabindex="-1"><a class="header-anchor" href="#notificacion-desde-reportes" aria-hidden="true">#</a> Notificación desde Reportes</h3><p>Desde las diferentes entidades del ERP existe una opción en la barra de comandos denominada &quot;Informes&quot;. Desde allí es posible generar un reporte con aquella información que se esté visualizando en pantalla, seleccionar una extensión (ejemplo, PDF, HTML,, excel) y luego exportarlo. A su vez, esta exportación es posible enviarla por mail desde el sistema. Esto genera un registro de cola de notificación).</p><p><img src="/assets/img/docs/basic-rules/bar-not-report3.png" alt="Informe"></p><pre><code>![Reporte](/assets/img/docs/basic-rules/bar-not-report4.png)\n</code></pre><h3 id="plantilla-de-correo-por-evento-¿que-se-envia" tabindex="-1"><a class="header-anchor" href="#plantilla-de-correo-por-evento-¿que-se-envia" aria-hidden="true">#</a> Plantilla de Correo por Evento (¿Qué se envía?)</h3><p>Permite configurar diferentes formatos o templates por cada evento de aquella información que deseamos enviar por cada notificación. Motor de Templates para reemplazo de campos en template</p><p>El template admite poder referenciar campos locales y referentes en otras tablas, se debe ingresar como texto en el template el nombre de la columna entre @ (arrobas), a su vez podrá referenciarse información desde otra tabla indicando el nombre de la tabla, punto, el nombre del campo.</p><p><img src="/assets/img/docs/basic-rules/bar-not-event1.png" alt="Plantilla de Correo por Evento"></p><h3 id="¿cuando-se-genera-cada-notificacion" tabindex="-1"><a class="header-anchor" href="#¿cuando-se-genera-cada-notificacion" aria-hidden="true">#</a> ¿Cuando se genera cada Notificación?</h3><p>Al crearse un evento (al grabar solicitud por ejemplo) dentro de la aplicación que aplique un envío de información (una solicitud o bien, un envío de estado de cuenta de educación), se genera un registro de cola de notificación. Luego, un programador de procesos arma la cola de notificación (cada cinco minutos corre el proceso automático). Se limita el envío a 20 notificaciones por lote.</p><p>Solicitudes automáticas: se está avanzando en la automatización de solicitudes ante escenarios específicos que se van generando en el ERP. Puede ser el caso de una factura recibida que no cuadre su importe con la orden. En este caso se cerrará la orden y se emitirá una solicitud (automática) para pedir la generación de nota de crédito (esto generará notificaciones por correo).</p><h3 id="¿a-quien-se-envia-notificacion" tabindex="-1"><a class="header-anchor" href="#¿a-quien-se-envia-notificacion" aria-hidden="true">#</a> ¿A quién se envía notificación?</h3><p>Es posible confirmar quienes son los destinatarios de una notificación desde la opción de Solicitudes, pestaña Aviso de Actualización (usuarios que serán notificados) por cambios en determinada solicitud por ejemplo.</p><p>Cada Solicitud envía <strong>notificaciones</strong> de sus actualizaciones a los usuarios definidos como:</p><ul><li>Asignado A</li><li>Creado Por</li><li>Departamento</li><li>Aviso de Actualización</li></ul><p>Además de los usuarios vinculados, dentro de cada Solicitud se podrá agregar diferentes usuarios para que les llegue vía correo electrónico las <strong>notificaciones</strong> por actualización de las mismas, independientemente de los demás criterios. Para ello simplemente se deberá navegar a la pestaña “Aviso de Actualización” y agregar manualmente el o los usuarios a recibir notificaciones.</p><p><img src="/assets/img/docs/basic-rules/bar-not-act1.png" alt="Aviso de Actualización"></p><h3 id="proceso-de-envio-de-cola-de-notificaciones" tabindex="-1"><a class="header-anchor" href="#proceso-de-envio-de-cola-de-notificaciones" aria-hidden="true">#</a> Proceso de Envío de Cola de Notificaciones</h3><p>El registro de cola de notificación se genera con un destinatario (es uno a uno). El estado de procesado = NO cambia a &quot;SI&quot; cuando se realiza el envío de la notificación. En el caso de fallar o emitir error por envío, queda configurado como Procesado = NO (descripción del error) y Activo = no para que no ingrese en el siguiente lote de envío.</p><h3 id="cola-de-notificacion" tabindex="-1"><a class="header-anchor" href="#cola-de-notificacion" aria-hidden="true">#</a> Cola de Notificación</h3><p>Cada evento que ejecuta un envío de información desde el sistema genera un registro de &quot;cola de notificación&quot;. Este registro define el tipo de aplicación (ejemplo: correo electrónico) y la aplicación soportada (linkedin, facebook, etc).</p><p>Cuando se dispara una notificación desde el ERP, al generarse registro de cola de notificación, se graba como procesado = No (no enviado) y con el check de Activo = SI</p><p>El envío de notificación tiene diferentes funcionalidades: se puede generar desde</p><ul><li>El usuario</li><li>La organización</li><li>La compañia</li></ul><p>From Account name: desde donde se origina la notificación.</p><p><img src="/assets/img/docs/basic-rules/bar-not-notification1.png" alt="Cola de Notificación"></p><h4 id="parametrizacion-de-cola-de-notificacion" tabindex="-1"><a class="header-anchor" href="#parametrizacion-de-cola-de-notificacion" aria-hidden="true">#</a> Parametrización de Cola de Notificación</h4><p>La Cola de Notificaiones funciona como una aplicación que se configura en el Registro de Aplicaciones de Solop ERP y utiliza para el envío de correos la configuración de envío de correos de la Compañía y/o Organización.</p><p>Siguiendo los siguientes pasos se podrá realizar la configuración inicial de este aplicativo.</p><p><strong>Configuración Inicial de Cóla de Notificaciones</strong></p><ul><li><p>Se deben crear 2 App Registrations</p></li><li><p>Y una entrada en el Programador de Procesos</p></li></ul><p>Al configurar la Cola de Notificaciones se deberá también realizar la configuración de Correo de la Compañía y/o de la Organización para que las notificaciones por correo sean enviadas y no queden registradas con error en el Programador de Procesos</p><h3 id="recipientes-de-cola-de-notificacion" tabindex="-1"><a class="header-anchor" href="#recipientes-de-cola-de-notificacion" aria-hidden="true">#</a> Recipientes de Cola de Notificación</h3><p>Es un registro de notificaciones generados dentro del sistema y con sus diferentes destinatarios.</p><p>Es como una auditoría o historial de envíos de notificación con sus correspondientes estados y descripción de error (en el caso de no haber sido enviados).</p><p><img src="/assets/img/docs/basic-rules/bar-not-recipient1.png" alt="Recipiente de Cola de Notificación"></p>',83)],s={},d=(0,i(89456).A)(s,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,n)}]])},74520:(e,a,i)=>{i.r(a),i.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-1492de83","path":"/docs/basic-rules/notifications.html","title":"Notificaciones","lang":"es-ES","frontmatter":{"title":"Notificaciones","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Definición de Notificaciones Por definición entendemos que una notificación es un Mensaje con una determinada información enviada a través de un vehículo seleccionado, con un forma","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/basic-rules/notifications.html"}],["meta",{"property":"og:title","content":"Notificaciones"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-07-03T21:31:23.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-07-03T21:31:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Definición de Notificaciones","slug":"definicion-de-notificaciones","children":[]},{"level":2,"title":"Configuración de Notificaciones por Usuario","slug":"configuracion-de-notificaciones-por-usuario","children":[{"level":3,"title":"Plantilla de Correo","slug":"plantilla-de-correo","children":[]}]},{"level":2,"title":"Tipos de Notificaciones","slug":"tipos-de-notificaciones","children":[{"level":3,"title":"Notificación desde Cálculo de Morosidad","slug":"notificacion-desde-calculo-de-morosidad","children":[]},{"level":3,"title":"Notificación desde Solicitudes","slug":"notificacion-desde-solicitudes","children":[]},{"level":3,"title":"Ventana Todas las Solicitudes","slug":"ventana-todas-las-solicitudes","children":[]},{"level":3,"title":"Solicitudes Asignadas a uno","slug":"solicitudes-asignadas-a-uno","children":[]},{"level":3,"title":"Ventana Solicitud (acceso directo a la ventana)","slug":"ventana-solicitud-acceso-directo-a-la-ventana","children":[]},{"level":3,"title":"Todas las Solicitudes","slug":"todas-las-solicitudes","children":[]},{"level":3,"title":"Solicitudes de Cuentas","slug":"solicitudes-de-cuentas","children":[]},{"level":3,"title":"Historial de Actualizaciones de Solicitud (Feed)","slug":"historial-de-actualizaciones-de-solicitud-feed","children":[]},{"level":3,"title":"Notificaciones de Actualización","slug":"notificaciones-de-actualizacion","children":[]},{"level":3,"title":"Notificación desde Proyectos","slug":"notificacion-desde-proyectos","children":[]},{"level":3,"title":"Notificación desde Reportes","slug":"notificacion-desde-reportes","children":[]},{"level":3,"title":"Plantilla de Correo por Evento (¿Qué se envía?)","slug":"plantilla-de-correo-por-evento-¿que-se-envia","children":[]},{"level":3,"title":"¿Cuando se genera cada Notificación?","slug":"¿cuando-se-genera-cada-notificacion","children":[]},{"level":3,"title":"¿A quién se envía notificación?","slug":"¿a-quien-se-envia-notificacion","children":[]},{"level":3,"title":"Proceso de Envío de Cola de Notificaciones","slug":"proceso-de-envio-de-cola-de-notificaciones","children":[]},{"level":3,"title":"Cola de Notificación","slug":"cola-de-notificacion","children":[]},{"level":3,"title":"Recipientes de Cola de Notificación","slug":"recipientes-de-cola-de-notificacion","children":[]}]}],"git":{"createdTime":1693495622000,"updatedTime":1720042283000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":10}]},"readingTime":{"minutes":5.87,"words":1761},"filePathRelative":"docs/basic-rules/notifications.md","localizedDate":"31 de agosto de 2023"}')}}]);