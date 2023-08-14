Purchases/Sales

## Funcionalidad General del Sistema

### ¿Cómo me doy cuenta que es un proceso?

Básicamente por el icono del menú y que al abrirlo se muestra un proceso y no una ventana con Campos. Da la opción de dar check y tiene ciertos parámetros con un título y descripción debajo


### ¿Cómo solicitar un Update de un Registro (actualización)?

Se debe solicitar un update cuando se desea modificar un dato en un documento y el mismo ya está Completo o el campo está Sólo lectura. (verificar antes si el dato no puede ser modificado de otra manera, por ejemplo si el registro no está INACTIVO o si se puede borrar y generar nuevamente.) Se debe intentar generar lo menos posible

**Datos a solicitar:** 

* Id del Registro que se quiere cambiar (Tabla del registro con su ID). 
  * Se obtiene al hacer click en la esquina inferior derecha donde está la auditoría
* Campo que se quiere cambiar (ID del campo que se quiere actualizar) 
  * Botón derecho en el campo, seleccionar Bitácora de Cambios. copiar el nombre del campo.
* Busco el ID del Registro que se quiere definir en el campo de la tabla mediante una actualización y lo aclaro.

\*(No siempre es un ID lo que se quiere actualizar, también puede ser un código por ejemplo o cualquier campo de una tabla.)

### ¿Qué puede suceder si luego de generar un Documento, bajo a la pestaña hija y al volver a subir no lo veo?

Si se abre una ventana desde el menú, el sistema lo hace mostrando todos los registros de la misma, sin aplicar ningún filtro. 

Si ésta se abre desde el Acceso Rápido de "Últimos Documentos" o se navega a la misma desde un campo en especial, la ventana se abre pero con un "FILTRO APLICADO".

El problema se da cuando desde una ventana con un filtro aplicado, generan un NUEVO REGISTRO, el mismo se podrá editar y guardar sin problema siempre y cuando estemos en la misma Pestaña; ahora si se baja a una pestaña Hija al volver a subir a la pestaña PADRE, se volverá a aplicar el Filtro Inicial que teníamos definido; si este filtro NO INCLUYE el nuevo Registro que habíamos generado, el mismo no se verá.