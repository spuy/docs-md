---
title: Gestión de Morosidad
category: Documentation
star: 9
sticky: 9
article: false
---
# **Gestión de Morosidad**

# **Estado de Cuenta por Cliente**

# **Envío masivo de Estado de Cuenta**

Una vez se generaron todas las entradas en el cálculo de morosidad “Estado de Cuenta” se podrá ir al Proceso de Envío de Estado de Cuenta por Correo”.

En este proceso se deberá definir los filtros deseados y se buscará las Entradas de “Estado de Cuenta” que se desea enviar mediante correo.

Luego de seleccionar los Estados de Cuenta que se desean enviar, se debe seleccionar en los Parámetros del Proceso los criterios de envío.

Dentro de los criterios podemos seleccionar:

**Representación Impresa del PDF:** Formato de Impresión definido para el Estado de Cuenta. Esto por el momento será fijo para todos los estados de cuenta.

**Template de Correo:** Definición de la Plantilla de correo que se enviará como texto en el correo.

**Check de “Send EMail”:** Este check podrá ser desmarcado para realizar pruebas de envios sin enviar realmente el correo al Socio del Negocio. Este envio se pdorá visualizar en la ventana de Bitácora de Emails. Si se define el check en “Y” se enviará también el correo a los usuarios definidos como que se envie mail en la Familia del Responsable de Pago.

# **Reporte de Estado de Cuenta**

Luego de generado el Cálculo de Morosidad, dentro de cada Registro en la pestaña “Entrada” se podrá obtener el Reporte de “Estado de Cuenta” oprimiendo desde los procesos de la Barra de Herramientas.

Luego, nos figurará el siguiente cuadro al que confirmaremos mediante el botón de OK para así generar el reporte

# **Bitácora de Emails**

Por cada Proceso que se genere desde el “Enviar Estado de Cuenta por Correo” se generará un Lote en la ventana “Bitácora de Emails”. Dentro de este lote se detallarán en la pestaña de Emails cada uno de los correos que se enviaron detallando:

* Correo Emisor
* Correo Receptor
* Asunto
* Mensaje
* Template de Correo utilizado
* Estado: Si el envío se realizó con éxito (Enviado), Pendiente de envio o Error.
* Texto de Respuesta: En caso de que haya tenido Error, el detalle de la razón del mismo podrá verse en este campo de Respuesta.
* Adjunto: se podrá visualizar el Reporte que se envió como Adjunto en el correo como adjunto en el registro de Email.