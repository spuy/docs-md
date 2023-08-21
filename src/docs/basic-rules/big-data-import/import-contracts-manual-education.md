---
title: Carga de contratos manual (Educación)
category: Documentation
star: 9
sticky: 9
article: false
---

## Carga de Alumno-Contrato (Educación)

### Primer paso: Datos Alumno y Localización

Mediante esta ventana se permite hacer la importación de un contrato y todas sus entidades relacionadas (alumno, familia, miembros, contactos), pero de forma manual, en vez de utilizar una planilla excel.

* Socio del Negocio y Localización:

En este grupo de datos se define la información del ALUMNO (hijo) y su localización. La mayoría de los datos son obligatorios.

Se controla que el SDN alumno no exista, mediante el código de SDN igual a nro. de identificación, email y nombre (se intenta obtener mediante esas 3 vías), en caso de existir se asigna el mensaje de error correspondiente en la línea y no se procesa ese registro
![Datos de Socio del Negocio](/assets/img/docs/basic-rules/bid-import-SDN.png)

![Datos de Localización](/assets/img/docs/basic-rules/bid-import-location.png)

### Segundo paso: Datos Contrato

* Contrato

Aquí se definen los datos relacionados al contrato y la familia. Para la familia se puede seleccionar una ya existente en el campo "Familia", o ingresando el nombre de familia en "Nombre de Familia" se creará una nueva.
![Datos del Contrato](/assets/img/docs/basic-rules/bid-import-contract.png)


### Tercer paso: Datos Contactos (RP y familiares)

* Contactos

Existen tres grupos de contacto, donde "Contacto 1" es destinado al responsable de pago.

Se busca obtener el SDN a facturar (con el mismo método usado para el alumno), si el mismo no existe entonces se crea.

Si se ingresa nombre de contacto 1, 2 o 3, se ponen como obligatorios los demás campos necesarios para su creación.
![Datos de Contactos](/assets/img/docs/basic-rules/bid-import-contact.png)

### Cuarto paso: Ejecutar importación

**Ejecución del proceso de importación:**

Para proceder a importar el contrato y demás entidades, se debe ir a la opción "Importación de Contrato", ubicada en el ícono de Procesos, según imágen siguiente
![Proceso de Importación](/assets/img/docs/basic-rules/bid-import-importation.png)

![Datos de Acción sobre Documento](/assets/img/docs/basic-rules/bid-import-doc-action.png)

La "Acción del Documento" que se seleccione, aplicará al Contrato, según se desee que el mismo queden en estado 'Completo' o 'En Proceso'.

Luego de finalizado el proceso, se mostrará un aviso con la información de lo que se generó en el sistema, y para el caso de registros que hayan tenido error, los mismos se podrán visualizar en el siguiente campo:
![Mensajes de Error](/assets/img/docs/basic-rules/bid-import-error-message.png)

**NOTA:** este funcionamiento es similar al de todos los demás procesos de importación en el sistema (diario contable, estados de cuenta, etc).