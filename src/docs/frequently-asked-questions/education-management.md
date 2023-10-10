---
title: Gestión de Educación
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión de Educación

#### Definición del Socio del Negocio a Facturar en un Contrato de Servicios

Para poder seleccionar a un Socio del Negocio diferente al definido en el Contrato se deberá establecer una Relación entre ambos Socios del Negocio.

En el caso de Educación esta relación se define en la ventana “FAMILIA” y en la pestaña miembros se debe definir al “Socio del Negocio” que se desea definir como “Socio del Negocio a Facturar” como “Responsable de Pago = SI”. Luego de haber marcado este check se debe refrescar el campo del “SDN a Facturar” en el Contrato y seleccionar el mismo

### ¿Cómo Modificar un Producto?

El sistema posee un control por el cual solo se podrán editar Productos de tipo “Artículo”.

En el caso que se quiera modificar un producto de tipo “Servicio” se deberá cambiar el tipo de producto a “Articulo”, modificar los campos que se deseen y volver a definirlo como “Servicio”.

### ¿Cómo se define el centro de costos en un Producto de Servicio?

La actividad se toma desde el "Grupo" del producto, mediante un callout en la línea de contrato al momento de seleccionar el producto.

### Errores Frecuentes

**Documentos generados al Alumno en vez de al responsable de pago**

#### ERROR en envío de emails (EDUCACIÓN)

El motivo del error puede ser que la casilla de gmail no está permitiendo la conexión del sistema con el gmail.

SOLUCIÓN:

En acceso de Aplicaciones poco seguras se debe Permitir el acceso de aplicaciones poco seguras.

Se debe marcar este check en Y.

Puede pasar de que al enviar correos una vez por mes de esta manera, se desactiva automáticamente. En estos casos se debería verificar antes de enviar que el correo esté con este permiso habilitado.

### Parametrización

1. A nivel de Compañía se define la configuración del Servidor de Correo, cuenta y contraseña de envío:
2. Realizar prueba de envío para verificar que pueda conectarse al servidor de correo con dicha cuenta, enviará un email de prueba.
3. Al modificar una solicitud, primero se revisará si el usuario tiene un correo con contraseña definido y realiza el envío con su correo:
4. Si el usuario no tiene parametrizado estos datos, va a obtener el correo de la Compañía para realizar el envío.
5. Realizará el envío a los correos de los usuarios que están parametrizados en estos campos.

#### Mejora: Servidor de Correo para el Usuario

* Al momento de realizar un envío de email con el correo de un usuario, este no tiene la configuración de correo por lo que obtiene la información del servidor desde la Compañía, esto causa que de un error cuando el usuario tiene un correo que debería utilizar una configuración de servidor de correo diferente. e.g.: Compañía usa gmail, y el usuario utiliza un correo de la empresa.

* Solución:
  * Definir a nivel de usuario la configuración de servidor de correo como se implementó a nivel de Compañía para esta cuenta de correo
  * Definir un check que indique si el usuario al enviar un email utiliza el correo de la Compañía o si utiliza su propio email, en caso de utilizar el suyo se deberán cargar los campos:
    * Configuración de servidor de correo
    * ID Usuario (la cuenta de correo)
    * Su respectiva contraseña

#### Adjunto con nombre poco legible

* Al realizar el envío por mail de un pdf de una ventana, el PDF que se envía como adjunto tiene un nombre poco legible
* Solución:
  * Definir con un archivo temporal de Java un archivo con prefijo que cumpla el siguiente patrón:
    * Compañía
    * Ventana transaccional: tipo y número de documento. Otra ventana: Formato de impresión (nombre)
    * Timestamp Actual
  * Sufijo:
    * .pdf (o la extensión que corresponda)

### Piques Eficiencia

Como definir valor de preferencia en campo

#### Definir “Valor de Preferencia” en Campo

En cada documento si queres definir una opción de un campo por defecto puede realizarse oprimiendo botón derecho sobre el campo y seleccionando “Valor de Preferencia”. Ahora cada vez que ingreses a dicha ventana te aparecerá definido en el campo el valor seleccionado. 

#### ¿Por qué al modificar los permisos de un ROL el usuario sigue sin ver la Ventana, Proceso, Smartbrowser o Reporte?

Si una Ventana, Proceso, Smartbrowser o Reporte no se encuentra en el arbol del menú para determinado ROL, por mas que se le de permiso en el rol, el usuario no lo va a ver. Por lo tanto se debe agregar al MENU que usan esos roles, mediante SYSTEM.

#### ¿Cómo saber si un registro está guardado?

En un documento podemos saber si un registro está guardado visualizando el mismo abajo a la derecha. En este caso por ejemplo, aparece un *1 esto quiere decir que aún no tiene número de registro guardado.

### Proceso de Asignación

El proceso de Asignación (automático) considera Notas de Crédito?

No, el proceso sólo generará asignaciones entre Facturas y Pagos

El proceso de Asignación (automático) considera Documentos por Pagar contra Documentos por Cobrar?

No, el proceso sólo considerará DxC con Cobros y DxP contra Pagos.