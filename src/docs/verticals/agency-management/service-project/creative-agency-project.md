---
title: Proyecto de Agencia Creativa
category: Documentation
star: 9
sticky: 9
tag: 
  - Agencia
article: false
---

## Proyecto de Agencia Creativa

El Proyecto de Agencia Creativa será donde se deba ingresar todo pedido realizado por el cliente. Desde el Proyecto se vinculará todos los documentos que se haya generado a causa dicho Pedido a lo largo de toda la organización (Solicitudes, Orden de Compra, Orden de Venta, Cotizaciones, Tareas, etc) y será desde donde se defina la facturación a realizar.

Cada Proyecto de Agencia podrá tener un Brief, este será la descripción del servicio solicitado por el Cliente. Este se puede definir tanto en un Campo Texto o bien adjuntando un archivo directo en el Proyecto. Según el tamaño y complejidad del mismo, este podrá Fases, Tareas y Solicitudes vinculadas separando así el trabajo a realizar.

A su vez, directo desde un Proyecto se podrá generar las Órdenes de Venta definiendo lo que deberá facturar en relación al mismo.

Se deberán definir obligatoriamente en el cabezal los siguientes Campos:

Socio del Negocio Nombre Marca Categoría del Proyecto Nivel de línea Fecha Inicio (creación) Fecha Límite Lista de Precios

Campos Automáticos:

Según la Lista de precio seleccionada:

Moneda

![Proyecto de Agencia](/assets/img/docs/project-management/prm-project1.png)

Según el Cliente seleccionado:

Término de pago. Almacén del Cliente: El almacén en un proyecto se definirá de manera automática según el almacén que tenga definido el Cliente en la pestaña Cliente ventana Socio del Negocio. Contrato de Servicio: (En caso que el Cliente posea más de uno, el sistema tomará el primer Contrato creado que encuentre, por lo que se sugiere en estos casos elegir el Contrato en este campo de forma manual). Sello. Sello Origen: Cuando se guarda un proyecto se realiza lo siguiente:

Según la Categoría de Proyecto se definirá el Sello Origen correspondiente que tenga definido el contrato en sus “Partes del Contrato”.

Según las siguientes Categoría de Proyecto se obtendrá el sello definido para el siguiente tipo de empresa:

Categoría de Proyecto

Tipo de Empresa

Proyecto de Agencia

Agencia Creativa

Proyecto de Medios

Agencia de Medios

Proyecto RRPP

Agencia RRPP

Proyecto de Medios Digitales

Agencia de Medios Digitales

\*Si no se obtuvo sello de origen se lanza una excepción.

![Partes del Contrato](/assets/img/docs/project-management/prm-project2.png)

Según el usuario logueado en el sistema:

Agente Comercial: Este campo en el cabezal de un Proyecto tomará de forma automática al usuario logueado en el sistema siempre que este tenga el check de “Agente comercial” en “Y”, en la Pestaña “Empleado” de la ventana “Socio de negocio”.

### Cotización para Clientes

El Ejecutivo de Cuentas creará un Proyecto en el cual definirá lo solicitado por el cliente. En caso de que el mismo incluya realizar una Cotización de determinados servicios/productos a diferentes proveedores externos se deberá seleccionar un Tipo de Proyecto que contemple la “Cotización”.

Los Tipos de Proyecto pueden ser:

Producción Interna + Cotización: En caso que se necesite trabajos de creatividad como también cotización a proveedores. Al seleccionarla se crearán automáticamente 2 Fases:

Cotización: En caso que sólo se deba gestionar la cotización de determinados servicios o trabajos. Al seleccionarla se creará automáticamente 1 Fase:

En ambos Tipos de Proyecto se deberá también definir el Nivel de Línea “Tarea”.

Dentro de la Fase *Producción*, el Ejecutivo de Cuenta deberá crear como TAREAS todos las diferentes Cotizaciones que se deberán realizar clasificando según “Tema a Cotizar”.

En cada TAREA se podrá definir una *Categoría* de “Cotización a Proveedores” para que facilite su identificación. Además se podrá asignar a un *Responsable* de la misma (Considerar que para poder asignar como responsable a un usuario, el mismo deberá estar definido como “Miembro del Proyecto”).

Fase generada automáticamente. Sólo se deberá agregar en el campo “Detalle Cotización” el detalle de lo que se desea Cotizar.

*Descripción*: se deberá definir el el texto que se enviará al Proveedor en la Solicitud de Cotización. Este podrá ser modificado si se desea luego por Producción.

Campo “Ayuda”: se podrá agregar un comentario para que Producción considere en caso de ser necesario para realizar la cotización.

### Generar Orden de Venta desde Solicitud de Cotización

Una vez generada la Solicitud de Cotización (RFQ-Request for Quotation), evaluadas las respuestas, y aceptado una Respuesta de Cotización por el Cliente, se deberá proceder a generar una Orden de Venta al Cliente para que la misma se pueda aprobar mediante el flujo de aprobación estándar de la Orden de Venta.

La Orden de Venta se podrá generar directo desde la Solicitud de Cotización desde el botón “Crear Orden de Venta”.

Seleccione el Tipo de Orden de Venta “Orden de Venta con Aprobación”. Esta se generará con las líneas de la Solicitud de Cotización en cuestión, tomando la Respuesta de Cotización seleccionada como “Ganador Seleccionado” para definir los campos *Precio* según el definido en el campo “Precio Factura” y como “Socio del Negocio de Entrega Directa” al Proveedor de la misma.

Luego de generarla desde el proceso ubicado en el botón “Crear Orden de Venta”. Se podrá navegar a la misma desde el campo “Orden de Venta” existente al lado del botón.

Al Completar la Orden de Venta luego de la aprobación del Cliente, automáticamente se generará la Orden de Compra Enlazada según Entrega Directa.

### Orden de Venta con Margen

En caso de contar con “% de Margen” (Mark-Up), el precio real enviado por la Cotización se definirá en la línea de la Orden de Compra. En caso de no existir “Mark-Up” los precios de la Orden de Venta y los precios de la Orden de Compra serán iguales.

### Compra Directa a un Proveedor en nombre de Cliente

Cuando el Proyecto incluya realizar una compra específica a un proveedor pero que no es necesario pasar por el proceso de generar una Solicitud de Cotización (RFQ), se podrá gestionar la misma de forma directa desde una Fase.

En este caso, los pasos a seguir serán:

Definir el Proyecto mínimo con Nivel de Línea “Fase”

En la Fase activar el check Entrega Directa

Definir un Proveedor como “Socio del Negocio de Entrega Directa”

En las Líneas de Tarea definir el Producto, precio y cantidad

Desde la Fase generar una Orden de Venta al Cliente pero Generar la Orden desde el botón de Generar Orden de Venta ubicado en la Fase.

Seleccionar Tipo de Orden “Orden de Venta con Aprobación”

Dicho Proceso generará una Orden de Venta con el Proveedor definido como Entrega Directa. Esto hará que al completarse la Orden de Venta, se genera automáticamente una Orden de Compra al Proveedor enlazada con esta Orden de Venta.

La Orden de Compra se podrá encontrar en el campo “Orden enlazada” de la Orden de Venta.

IMPORTANTE: Tener en cuenta que el Producto definido en la línea de la Orden de Venta, deberá estar definido tanto en la Lista de Precios de la Orden de Venta, como también en la Lista de Precios que el Proveedor tenga definida por defecto en su definición de Socio del Negocio. Para evitar esto podemos dejar el campo Lista de Precios de Compra del Proveedor vacío.

### Checking

Luego de contar con una “Orden de Compra” en Estado “Completo”, la misma se deberá confirmar mediante su delivery mediante el Checkin.

El checking se puede acceder de dos maneras:

1. Barra de Herramientas/Procesos (engranaje). Desde los Procesos definido en el Proyecto que se estará verificando el delivery. Para ver los procesos del Proyecto se deberá oprimir el botón de proceso ubicado en la Barra de Herramientas seleccionando “Checkin”.
2. Menú. Desde el proceso Checkin ubicado en el menú, en este caso se podrá filtrar según desee pudiendo ver más de un proyecto a la vez para confirmar.

Documentos sobre los que se debe realizar checking:

* Se debe realizar checking sobre todas las órdenes de venta inversión del cliente menos la “OV compra paquete” dónde el checking se realiza sobre las órdenes de consumo.

Los Procesos desde la Barra de Herramientas no se actualizan automáticamente, por lo que si lo presionó desde la Fase, recordará los Procesos de la Fase. para solucionarlo deberá ingresar nuevamente a la ventana y presionar “Procesos” desde la pestaña de proyecto.

### Nivel de Línea: Proyecto (Creativo Simple) / Primer Nivel

El Nivel Proyecto se deberá utilizar cuando la Campaña o Trabajo (Job) a realizar es simple. Esto quiere decir que el Proyecto tendrá directamente los “To-Do” a realizar, sin contar con ningún nivel o agrupación intermedia.

* Proyecto
  * “To-Do” (Solicitud)
  * “To-Do” (Solicitud)
  * “To-Do” (Solicitud)

### Nivel de Línea: Fase (Campaña Multimedia) / Segundo Nivel

La Fase es el segundo nivel del Proyecto. Se deberá utilizar en los siguientes casos:

Cuando una Campaña cuente con diferentes “Materiales” se deberá definir el nivel de Fases con el fin de contar con una Fase por cada Material de la Campaña (Proyecto).

* Proyecto
  * Material 1 (FASE)
    * Solicitud (“To-Do”)
    * Solicitud (“To-Do”)
    * Solicitud (“To-Do”)
  * Material 2 (FASE)
    * Solicitud (“To-Do”)

![Nivel Fase](/assets/img/docs/project-management/prm-project3.png)

### Nivel de Línea: Tarea (Producción o Campaña Multimedia) / Tercer Nivel

El Nivel de Proyecto hasta TAREA agrega un nivel adicional (3er Nivel) al Proyecto antes de llegar a la definición de Solicitudes (To-Do).

Este nivel se utilizará por ejemplo cuando existan Fases de Producción, donde se deba realizar Cotizaciones de Proveedores.

En este caso los niveles serán clasificados de la siguiente manera:

FASE: se clasificará el trabajo “Creativo” y “Producción” tendrá dentro las Solicitudes de Creatividad a realizar.

TAREAS: Dentro de cada Fase se crearán las diferentes TAREAS a realizar. En el caso de Producción, se deberá crear una Tarea por Cada Cotización a realizar.

* Proyecto (Tipo de Proyecto: Creativo)
  * Material 1 (FASE)
    * TAREA 1
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
    * TAREA 2
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
  * Material 2 (FASE)
    * TAREA 2
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
* Proyecto (Tipo de Proyecto: Cotización)
  * Producción (FASE)
    * TAREA 1 (Tema a Cotizar)
    * TAREA 2 (Tema a Cotizar)
    * TAREA 3 (Tema a Cotizar)

### Miembros del Proyecto

En cada Proyecto se podrá agregar Miembros. Los Miembros del Proyecto serán todos aquellos usuarios, internos como externos que estén involucrados con el Proyecto.

Estos pueden ser definidos manualmente desde el botón “Crear Desde” ubicado en el cabezal del Proyecto, como también automáticamente.

Al crearle un Proyecto a un Cliente, automáticamente se definirá como Miembros del Proyecto a todos los usuarios que que dicho Cliente tenga asignados a su Cuenta.

La asignación de Miembros de una Cuenta se definirá dentro de la Ventana *Socio del Negocio*, Pestaña *Miembros por Defecto*.

\*Pestaña “Miembros por Defecto” en Ventana Socio del Negocio.

### Solicitudes del Proyecto

Dentro de cada Proyecto se podrá crear diferentes Solicitudes asociadas al mismo. La ventaja de generar las Solicitudes desde un Proyecto, Fase o Tarea es que tomará del contexto toda la información que necesite, como Proyecto, Cliente, etc.

Desde la ventana Proyecto se podrá visualizar todas las Solicitudes relacionadas, tanto desde la Pestaña de Solicitudes correspondiente como desde la Barra de herramientas (Ver todas las solicitudes).

## Proyecto Pestaña Solicitudes de Fase

### Solicitud (To-Do)

Una Solicitud refiere a una Tarea específica (To-Do) que tiene determinado *Asunto*, *Descripción* y está *Asignado A* un Usuario con determinada *Fecha de Siguiente Acción* y *Fecha de Fin*.

Esta Solicitud a su vez, puede estar vinculada a diferentes documentos a lo largo del sistema, como por ejemplo un Proyecto, un Cliente, una Orden de Venta, una Factura, una Marca, un Sello, etc.

Dentro de una Solicitud se podrá agregar *Comentarios* y modificar el “*Asignado A”* o el *Estado* de la misma a medida que avanza el desarrollo de la misma. Cada Solicitud se podrá visualizar el histórico de Actualizaciones que la misma tuvo desde la pestaña de *“Actualizaciones”* detallando la Fecha-Hora, Usuario, Comentario así como demás cambios en los campos que fue realizando.

Cada Actualización que se realice sobre la Solicitud, el sistema estará enviando automáticamente notificaciones a cada usuario que esté vinculado a la misma. El tipo de Notificación a enviar dependerá de la Configuración de Notificaciones que cada usuario tenga definida (e-mail o aviso interno).

*\*para ver más en detalle sobre las notificaciones ver “Notificaciones del Sistema”.*

## **Ventana Todas las Solicitudes**

### **Solicitudes Asignadas a uno**

Esta ventana será la que el usuario siempre ingresará para ver todo lo que tiene pendiente de realizar, viendo claramente todo lo que tiene pendiente.

En la ventana “Solicitudes” se podrán visualizar todas las Solicitudes que estén asignadas a uno mismo (su Usuario) o al Departamento que uno pertenece.

### Ventana Solicitud (acceso directo a la ventana)

Esta ventana será de muy fácil acceso, existiendo un acceso directo desde la Bandeja de Entrada del usuario con el Botón “Solicitudes”. Al costado del nombre del botón se podrá visualizar la cantidad de sus Solicitudes que tiene “Vencidas”

### Todas las Solicitudes

En esta Ventana de “Todas las Solicitudes” se podrá visualizar todas las Solicitudes que estén creadas en el sistema. Cada usuario podrá ver las que le permita su Rol y en la misma se podrá aplicar los filtros deseados para buscar las que necesite ver.

### Solicitudes de Cuentas

La Ventana de “Solicitudes de Cuentas” está creada para que los Ejecutivos de cuenta específicamente (que serán “Gerentes de Proyecto” de todos aquellos proyectos que estén bajo su control) puedan visualizar en una misma ventana todas las Solicitudes que están pendientes dentro de los sus Proyectos.

Estas podrán estar asignadas a ellos o a cualquier otro usuario.

### Historial de Actualizaciones de Solicitud (Feed)

Dentro de cada Solicitud se podrá visualizar el historial de actualizaciones que tuvo la misma a lo largo del tiempo. En cada Actualización se podrá visualizar el cambio realizado y por quién fue realizado. En caso de haber adjuntado una imagen la misma se podrá visualizar en modo “Registro único” sin tener que ver el adjunto en la Barra de Herramientas.

### Notificaciones de Actualización

Cada Solicitud envía notificaciones de sus actualizaciones a los usuarios definidos como:

* Asignado A
* Creado Por
* Departamento
* Aviso de Actualización

Como verá, además de los usuarios vinculados, dentro de cada Solicitud se podrá agregar diferentes usuarios para que les llegue vía correo electrónico las notificaciones por actualización de las mismas, independientemente de los demás criterios. Para ello simplemente se deberá navegar a la pestaña “Aviso de Actualización” y agregar manualmente el o los usuarios a recibir notificaciones.

### Solicitud Pestaña Aviso de Actualizaciones

### Tipo de Proyecto

El sistema brinda diferentes “Plantillas” donde se puede definir una estructura Tipo en la cual basarse para crear un Proyecto. Esta puede utilizarse o no, según desee el usuario. La principal ventaja sería la creación automática de Fases o Tareas según el Tipo de Proyecto seleccionado ahorrando a uno crearlas manualmente. Principalmente es útil para los Proyectos donde existan cotizaciones.

Dentro de los diferentes Tipos de proyecto encontramos:

* **Creativo:** Estructura más simple, al seleccionarlo no se crean ninguna Fase ni Tarea por defecto. Simplemente define un conjunto de Estados de Proyecto así como también categoriza el proyecto en cuestión.
* **Creativo + Cotización:** Utilizado cuando existe Creatividad y Cotización. Crea una Fase para cada una. Se necesita nivel de Proyecto “Tarea”
* **Cotización:** Utilizado cuando es sólo para realizar una Cotización al Cliente. Crea una Fase de Cotización. Se necesita nivel de Proyecto “Tarea”

### Orden de Venta desde Proyecto

En cada Proyecto, cuando un trabajo deba ser facturado al Cliente, se deberá generar una Orden de Venta vinculada al mismo.

Para generar una Orden de Venta desde un Proyecto, se deberá definir en la Línea del Proyecto:

* el Producto/Servicio
* el Precio
* la Cantidad
* una Descripción

La ubicación de la Pestaña de “Línea” dependerá del *Nivel de Línea* seleccionado en el Proyecto, desplegando según corresponda Línea del Proyecto, Línea de la Fase o Línea de la Tarea.

Una vez definido el *Producto/Servicio* en la Línea que corresponda, se deberá generar una Orden de Venta desde el Botón “Generar Orden” ubicado en el Cabezal del Proyecto, en el Grupo de Campos “Acción”. La misma será generada tomando toda la información que se haya definido en las Líneas.

Las Órdenes de Venta generadas desde un Proyecto se pueden visualizar de diferentes maneras.

### Vista de la Orden de Venta desde la Pestaña del Proyecto

Una opción es desde la pestaña de “Orden de Venta” def