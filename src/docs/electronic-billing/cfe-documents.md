---
title: Documentos CFE
category: Documentation
star: 9
sticky: 9
article: false
---

# **e-Factura**

Si se requiere generar una e-Factura, es requisito que el Cliente disponga de un RUT definido en la definición del Socio del Negocio.

Ventana Socio del Negocio:

* **Grupo de Impuestos:** Debe seleccionarse “RUT”
* **Número de Identificación:** Debe ir el número del RUT

# **e-Ticket**

Para los “e-ticket” no es requisito identificar el cliente a quién se está realizando el mismo (siempre y cuando no supere los 10.000 UI) permitiendo en estos casos generar e-Ticket a un Cliente por defecto (por ej: Mostrador) donde la venta sería un “Consumidor Final”.

Sólo para aquellos casos que supere los 10.000 UI se deberá identificar el Cliente con su Nombre y Número de Cédula.

**¿Cómo defino el número de Cédula en un Cliente?**

En el caso de que se requiera incluir la Cédula en un Cliente, se puede hacer desde la ventana “Socio del Negocio”

* **En el campo “Número de Identificación” se coloca la cédula del SDN.**

# **Envío del Comprobante Fiscal a DGI**

El Envío del Comprobante Fiscal Electrónico (CFE), ya sea e-Factura o e-Ticket se genera cuando se “Completa” el Documento en cuestión desde Solop ERP.

Para el caso de Retail, al completar una Orden de Venta del Tipo “POS Order” desde el Punto de Venta se genera automáticamente el Documento por Cobrar correspondiente y envía a DGI el mismo.

Al confirmar con el botón del check desde el “POS” o con el botón “Completar” desde la ventana “Documentos por Cobrar”, y de forma automática el sistema:

* **Genera la Orden de Venta y la completa.**
* **Genera el Cobro definido según la Forma de pago seleccionada en la Caja definida en el Punto de Venta.**
* **Genera la Factura y la completa, realizando el envío a Invoicy y generando la Representación Impresa del CFE.**
* **Si en InvoiCy todo esta OK, esta devuelve la representación impresa en una nueva pestaña.**

**NOTA:** Este lapso entre que el documento va a InvoiCy y DGI y es devuelto puede tener un tiempo de espera que variara dependiendo de diversas condiciones (ancho de banda del ISP, estado de procesamiento en DGI, etc.)

# **Datos del CFE en Solop ERP:**

Todos la información referente a la Facturación Electrónica del CFE se puede visualizar en la Pestaña CFE ubicada en la Ventana de Documentos por Cobrar.

**Serie de CFE:** Letra inicial del CFE

**Número de Serie CFE:** Número de CAE que utilizó el CFE

**Descripción Mensaje CFE:** Se visualizará el 1er estado que respondió Invoicy.

**Representación Impresa CFE:** Enlace con el cual puede abrir la representación impresa del documento generado.

**Información extra de CFE:** Aquí se listaran los estatus del envío del documento a InvoiCy y DGI.

**Estado del CFE:** Para visualizar el Estado actualizado del Envío del CFE a DGI se deberá ingresar a la Plataforma de Facturación Electrónica. Por Solop ERP sólo se podrá contar con la respuesta inicial, si es Firmado OK o si es Rechazado por algún error.

Los mensajes de Error si no se logra Firmar el CFE se podrán visualizar en el campo “Información Extra del CFE”.

# **Nota de Crédito en Facturación Electrónica**

La opción de Nota de Crédito para la ventana del POS aun no esta implementada, para generarla, se ingresa en Solop ERP mediante la ventana “Factura Cliente Simple” y se ingresa la información obligatoria como se muestra.

Para seleccionar la Factura a la que se le hace el descuento, se puede usar el botón “Copiar Líneas”, del área “Estado”, esto traerá un popup similar al siguiente donde se selecciona la factura.

Si sabemos el no. de la factura se ingresa aqui, de lo contrario se da clic en el botón a la derecha del campo “Factura” y se abrirá una ventana con todos los documentos.

Es posible que si la factura ya ha sido pagada, si el check “Pagado” no está seleccionado, el documento no aparezca, de ser así, seleccionarlo, la ventana se refrescara y aparecerá el documento para seleccionarlo.

Se selecciona la Factura en cuestión y se da clic en el check. Se volverá a la ventana anterior con el número de la factura.

Al seleccionar una Factura desde Copiar Líneas el proceso copiará todas las líneas que ésta tenga al Documento que estoy generando. Se podrá verificar que el importe total del documento será el mismo que la Factura que seleccioné.

En caso que se desee realizar una Nota de Crédito por alguna línea en especial se deberá ir a la pestaña de Líneas para realizar la modificación pertinente.

*Recomendación: InvoiCy recomienda anular toda la factura de ser posible en vez de hacer anulaciones parciales.*

Hasta este punto el documento está en estado “Borrador” (campo “Estado del Documento“), para que sea válido para DGI, el documento debe estar “Completo”, antes de tratar de completar, para este caso con una Nota de Crédito/Débito, DGI requiere que se haga referencia al documento que se está anulando, para ello, se selecciona la pestaña “CFE Referidos” y se ingresa la información:

Este paso, si se generó las Líneas desde el Proceso de “Copiar Líneas”, no será necesario ya que el documento se habrá definido de manera automática en el campo “Documento Asignado”.

## **Asignación Automática de Nota de Crédito**

Si una Nota de Crédito se define el Documento que está referenciado mediante el campo de “Documento Asignado”, al Completar la misma se realizará de manera automática la asignación entre la misma y la Factura asignada. De esta manera, el saldo pendiente de la Factura se verá cancelado por el importe de la Nota de Crédito.

Luego de guardado, se puede completar el Documento para enviar a DGI.

Al hacer clic en el botón de Procesar Documento aparecerá la ventana.

Dar clic en el botón del check para procesar.

Al completar, se hace el envio a InvoiCy y posteriormente a DGI. Al completar, el estado del documento queda como “Completo”.

Las Notas Crédito también se pueden generar desde la ventana “Documentos por Cobrar”.

Recordar que en el caso en que se desee generar una e-Factura, el Cliente debe tener RUT y dirección bien definidos, de lo contrario, al intentar completar el documento, se generará un error indicando qué información queda pendiente por ingresar para poder continuar.

En la representación impresa se puede apreciar los distintos datos del e-Ticket.

En la ventana de la representación impresa puede utilizar el icono de la impresora para enviar el documento a imprimir.