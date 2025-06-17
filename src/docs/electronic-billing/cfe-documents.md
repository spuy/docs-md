---
title: Documentos CFE
category: Documentation
star: 9
sticky: 9
article: false
---

## Guía de uso - Facturación Electrónica

### 1. ¿Qué es la Facturación Electrónica?

La facturación electrónica consiste en la emisión de comprobantes fiscales que deben ser reportados y enviados a la entidad fiscal correspondiente (como la DGI en Uruguay), cumpliendo con la normativa vigente del país. Este proceso se realiza automáticamente a través del sistema una vez que el documento ha sido correctamente configurado y completado.

### 2. Acceso a la Facturación Electrónica

Se puede ingresar desde dos lugares principales:

* Ventana de documentos por cobrar

* Punto de venta (POS)

### 3. Configuración previa necesaria

#### 3.1 Socio de negocio

Es indispensable elegir un socio de negocio válido (cliente) antes de emitir un documento. Ejemplo: Casa Gutiérrez.

#### 3.2 Grupo de impuestos del socio

El grupo de impuestos asociado al socio de negocio define el tipo de documento fiscal electrónico que se utilizará. Algunos ejemplos:

Cédula/DNI/Pasaporte/Otros → e-Ticket

Empresas u organizaciones → e-Factura

Se debe verificar que estos tipos estén correctamente definidos en el grupo de impuestos correspondiente. Si no hay uno definido, el sistema no podrá completar ni enviar correctamente el documento.

::: note
❗ Importante: Solo debe haber un tipo de documento fiscal por instancia, y no por organización.
:::

### 4. Creación del documento de venta (factura)

#### 4.1 Desde la ventana “Documentos por cobrar”:

* Elegí el socio de negocio.

* Asegurate de que el tipo de documento seleccionado tenga marcada la opción:

“¿Maneja facturación electrónica?” → Sí

“¿Enviar después de completar?” → Sí

* Seleccioná el tipo de documento fiscal que corresponda.

#### 4.2 Agregar líneas al documento

* Seleccioná un producto y la cantidad.

* Al guardar la línea, el sistema actualizará automáticamente los totales del documento.

#### 4.3 Completar y enviar

* Hacé clic en “Completar”.

* Si la configuración es correcta, el sistema enviará automáticamente el documento a la entidad fiscal.

### 5. Verificación del envío

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

### 6. Consideraciones sobre numeración

Una vez asignado un número por el facturador electrónico, no se puede reutilizar.

Si el documento es rechazado, se pierde ese número y el siguiente será el próximo disponible.

Esto garantiza que no se repitan ni se pisen numeraciones.

### 7. Visualización e impresión

La representación impresa de la factura se puede obtener de dos formas:

* Desde el botón “Imprimir comprobante fiscal” (único habilitado).

* Desde la URL de descarga, que abre el PDF del comprobante generado.

::: note
❗ No se deben usar otros botones de impresión que aparecen por defecto en la interfaz, ya que no están soportados
:::

### 8. Reenvío y errores comunes

Si un documento queda “completo” pero no fue enviado:

* Usar el proceso: "Autorizar documento por cobrar".

* Elegir tipo de autorización: Enviar.

* Luego ejecutar: “Enviar factura a servicio de facturación electrónica”.

* Esto permite volver a enviar un documento que por error quedó sin transmisión.

### 9. Anulación de comprobantes

Solo se puede anular si el comprobante fue rechazado por la entidad fiscal.

En ese caso, el sistema permite marcarlo como “anulado” y liberar el documento.

Si fue aceptado y firmado, no se puede anular.

### 10. Nota de crédito

Para emitir una nota de crédito:

* Hacer copia del documento original.

* Cambiar el tipo a “Nota de crédito”.

* Utilizar la función de "Crear Desde" para ligar las líneas de factura.

* En el campo “Factura asignada”, debe quedar definida la factura original. Este dato es obligatorio.

* Completar el documento.

::: note
❗ Si no queda definida la factura asignada, el sistema no debería permitir completar la nota de crédito.
:::

### 11. Campo “Adenda” y “Descripción”

* Estos campos permiten enviar información adicional en el comprobante.

* Aparecen en la representación impresa como texto informativo adicional.

### 12. Recomendaciones finales

* Verificar siempre que el grupo de impuestos esté correctamente definido antes de emitir un documento.

* No completar documentos si no se visualiza el tipo fiscal correctamente en el cabezal.

* Usar siempre los botones habilitados y descriptos en esta guía.

* Documentar todo evento o incidencias reproducibles y reportarlos al equipo de soporte.

### ✅ Guía rápida para emitir una Factura Electrónica

* Seleccionar el socio de negocio correcto
* Asegurarse de que tenga un grupo de impuestos asignado con tipo de CFE definido (e-ticket, e-factura, etc.).

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
Consultar el estado de envío, firma, errores, QR, y URL de descarga en la Bitácora de Documento Electrónico.

* Imprimir
Usar solamente el botón “Imprimir Comprobantes Fiscales” o la URL de descarga generada.

* Errores o reenvíos
Si no se envió, ejecutar:

“Autorizar documento por cobrar” con opción “Enviar”

Luego: “Enviar factura a servicio de facturación electrónica”


## 🧾 Cola de Envío y Procesamiento de Documentos

📦 Esta sección detalla cómo funciona el proceso de envío de facturas electrónicas, la validación de documentos, y la gestión de colas para el procesamiento masivo.

### ✅ 1. Validaciones previas al envío

Antes de iniciar el envío de facturas electrónicas, es importante verificar:

 a. El emisor debe tener una ubicación configurada

           El proveedor de CFE exige que el emisor tenga una dirección registrada.
           Si no se configura, se producirá un error al intentar enviar la primera factura.

📄 b. El documento debe estar marcado como electrónico

            Solo se enviarán documentos que tengan habilitado el check
            “Maneja Facturación Electrónica”
            en su tipo de documento.

 Si no está marcado, se descartará automáticamente del proceso de envío.

### 🛠️ 2. Envío manual de documentos electrónicos

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
      
    ❌ “Error: el documento no es electrónico”
     y no permitirá continuar.

### 🔄 3. Uso de la cola de procesamiento

📬 Si el envío automático está desactivado (el check “Enviar después de completar” está desmarcado),
los documentos se agregan a una cola de procesamiento electrónico.

     🗂️ Esta cola:

     a. Se puede configurar para ejecutarse cada cierto tiempo.

     b. Permite el envío masivo y paralelo de documentos.

     c. Es ideal para grandes volúmenes o procesos en segundo plano.

### ⚙️ 4. Configuración técnica de la cola

 Para verificar cómo funciona:

    a. Ir a Tipo de Cola.

    b. Seleccionar la cola de facturación electrónica.

    Esta cola específica está configurada con:
    “Procesamiento en paralelo”
   Esto significa que los documentos no esperan uno al otro y se procesan simultáneamente, ahorrando tiempo.

🧠 Recomendaciones finales:
✔️ Siempre configurar ubicación del emisor antes del primer envío.
✔️ Validar que el tipo de documento tenga el check de FE activo.
✔️ Utilizar la cola para optimizar el procesamiento en grandes volúmenes.
✔️ Las validaciones automáticas garantizan integridad fiscal y evitan errores en producción.