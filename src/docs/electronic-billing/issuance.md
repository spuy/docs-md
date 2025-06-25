---
title: Emisión CFE
category: Documentation
star: 9
sticky: 9
article: false
---

Una vez generados los documentos por cobrar desde Solop ERP, es posible verificar el proceso de envío a la entidad fiscal para los casos en los cuales hubiese un defecto de la factura que impidiera la generación del CFE (por ejemplo: que un dato obligatorio para el organismo fiscal no se encuentre definido en el documento).

### Verificación Envío CFE

Una vez enviado, podés consultar el estado en la ventana:

"Bitácora de documento electrónico", donde se muestra:

* QR

* URL de descarga

* Número fiscal asignado

* Código de seguridad

* Estado de firma y envío

* Observaciones o errores (si existen)

✔ Si el estado indica "Archivo firmado correctamente", significa que el documento fue aceptado por la entidad fiscal.

❗ Si hubo un error (por ejemplo, rechazo del comprobante), aparecerá en la sección “Notas” o “Información adicional”.

### Consideraciones sobre numeración

Una vez asignado un número por el facturador electrónico, no se puede reutilizar.

Si el documento es rechazado, se pierde ese número y el siguiente será el próximo disponible.

Esto garantiza que no se repitan ni se pisen numeraciones.

### Visualización e impresión

La representación impresa de la factura se puede obtener de dos formas:

* Desde el botón “Imprimir comprobante fiscal” (único habilitado).

* Desde la URL de descarga, que abre el PDF del comprobante generado.

::: note
❗ No se deben usar otros botones de impresión que aparecen por defecto en la interfaz, ya que no están soportados
:::

## Procesamiento de Documentos

Esta sección detalla cómo funciona el proceso de envío de facturas electrónicas, la validación de documentos, y la gestión de colas de envío para el procesamiento masivo.

### 1. Validaciones previas al envío

Antes de iniciar el envío de facturas electrónicas, es importante verificar:

 a. El emisor debe tener una ubicación configurada

           El proveedor de CFE exige que el emisor tenga una dirección registrada.
           Si no se configura, se producirá un error al intentar enviar la primera factura.

 b. El documento debe estar marcado como electrónico

            Solo se enviarán documentos que tengan habilitado el check
            “Maneja Facturación Electrónica”
            en su tipo de documento.

 Si no está marcado, se descartará automáticamente del proceso de envío.

### 2. Envío documentos electrónicos

Si una factura no fue enviada automáticamente (por ejemplo, porque se completó antes de habilitar FE), se puede enviar manualmente:

    a. Ir al proceso:
     “Enviar factura a servicios de facturación electrónica”

    b. Seleccionar la factura pendiente.

    c. Ejecutar el proceso.

      El sistema validará que:

     El documento esté marcado como electrónico.

     No haya sido enviado previamente.

     Cumpla con todos los requisitos fiscales.

     Si no cumple, mostrará mensajes como:
      
    “Error: el documento no es electrónico”
     y no permitirá continuar.

### 3. Cola de procesamiento

Si el envío automático está desactivado (el check “Enviar después de completar” está desmarcado),
los documentos se agregan a una cola de procesamiento electrónico.

     Esta cola de procesamiento:

     a. Se puede configurar para ejecutarse cada cierto tiempo.

     b. Permite el envío masivo y paralelo de documentos.

     c. Es ideal para grandes volúmenes o procesos en segundo plano.

### 4. Configuración cola procesamiento

 Para verificar cómo funciona:

    a. Ir a Tipo de Cola.

    b. Seleccionar la cola de facturación electrónica.

    Esta cola específica está configurada con:
    “Procesamiento en paralelo”
   Esto significa que los documentos no esperan uno al otro y se procesan simultáneamente, ahorrando tiempo.

Recomendaciones finales:
✔️ Siempre configurar ubicación del emisor antes del primer envío.
✔️ Validar que el tipo de documento tenga el check de FE activo.
✔️ Utilizar la cola para optimizar el procesamiento en grandes volúmenes.
✔️ Las validaciones automáticas garantizan integridad fiscal y evitan errores en producción.