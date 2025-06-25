---
title: Documentos CFE
category: Documentation
star: 9
sticky: 9
article: false
---

### Creación de CFE

La creación de CFE se refiere a la generación de documentos electrónicos generados desde Solop ERP que se envían a la entidad fiscal (siguiendo la estructura y requisitos de cada país).

#### |Documentos por Cobrar|:

Existen diferentes maneras (ventanas) de generar los CFE para enviar al organismo fiscal. 
El circuito estándar del sistema es crear un documento por cobrar (desde la ventana de mismo nombre o desde un proceso) y generar el envío al completar el registro.

Los pasos son los siguientes:

* Elegí el |socio del negocio|.

* Asegurate de que el |tipo de documento| seleccionado tenga marcada la opción:

“¿Maneja facturación electrónica?” → Sí

“¿Enviar después de completar?” → Sí

* Seleccioná el |tipo de documento| fiscal que corresponda.

#### Agregar líneas al documento

El agregado de líneas a un documento por cobrar puede realizarse manualmente (registro nuevo) o bien, desde el cabezal, utilizando la función de |Crear desde|, en donde se selecciona el documento sobre el cual se crearán las líneas de la factura cliente (ejemplo: desde orden, desde recibo).

Los pasos son los siguientes al agregar manualmente:

* Seleccioná un |producto| y la |cantidad|.

* Al guardar la línea, el sistema actualizará automáticamente los totales del documento.

#### Completar y enviar

* Hacé clic en |Completar|.

* Si la configuración es correcta, el sistema enviará automáticamente el documento a la entidad fiscal.

### Anulación de comprobantes

Solo se puede anular si el comprobante fue rechazado por la entidad fiscal.

En ese caso, el sistema permite marcarlo como “anulado” y liberar el documento.

Si fue aceptado y firmado, no se puede anular (en este caso se debe aplicar Nota de crédito)

::: warning
Las facturas anuladas por el organismo fiscal deben ser anuladas manualmente en el ERP
:::

### Nota de crédito

Los documentos por cobrar que hayan sido enviados a la entidad fiscal no pueden ser anulados (excepto que sean rechazados por el organismo).
Para estos casos (en los cuales por defecto de la factura) si debe volverse a facturar, es posible aplicar nota de crédito sobre el documento.

Para emitir una nota de crédito:

* Hacer copia del documento original.

* Cambiar el tipo a |Nota de crédito|.

* Utilizar la función de |Crear Desde| para ligar las líneas de factura.

* En el campo |Factura asignada|, debe quedar definida la factura original. Este dato es obligatorio.

* Completar el documento.

::: note
❗ Si no queda definida la factura asignada, el sistema no debería permitir completar la nota de crédito.
:::

### Campo |Adenda| y |Descripción|

* Estos campos permiten enviar información adicional en el comprobante.

* Aparecen en la representación impresa como texto informativo adicional.

### Guía rápida 

Emisión de Facturación Electrónica:

* Seleccionar el socio de negocio correcto

* Asegurarse de que tenga un 'grupo de impuesto' asignado con tipo de CFE definido (e-ticket, e-factura, etc.).

#### Tipo de documento fiscal

El documento debe tener:

* Tipo de CFE válido

* “¿Maneja facturación electrónica?” = Sí

* “¿Enviar después de completar?” = Sí

* Ingresar líneas de productos
Al guardar la línea, el sistema actualiza los totales.

* Completar el documento
Se genera la numeración fiscal y se envía automáticamente a la DGI si está correctamente configurado.

* Verificar en la bitácora
Consultar el estado de envío, firma, errores, QR, y URL de descarga en la |Bitácora de Documento Electrónico|.

* Imprimir
Usar solamente el botón “Imprimir Comprobantes Fiscales” o la URL de descarga generada.

* Errores o reenvíos
Si no se envió, ejecutar:

|Autorizar documento por cobrar| con opción “Enviar”

Luego: |Enviar factura a servicio de facturación electrónica|