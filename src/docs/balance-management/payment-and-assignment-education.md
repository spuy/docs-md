---
title: Pago y Asignación Educación
category: Documentation
star: 9
sticky: 9
article: false
---

# **Pago y Asignación Educación**

# **Cobro por anticipo (Anualidad)**

Cuando un Responsable de Pago genera un pago por anticipado de la anualidad completa de un Contrato de Servicio, se debe generar un Cobro marcando el check de “Anticipo”.

Para realizar un Cobro de Anualidad se deberá ingresar a la ventana Pago/Cobro.

En el cabezal de la ventana deberemos indicar:

* Tipo de Documento: Cobro.
* Socio del negocio: Se deberá ingresar el cliente a quién se le cobrará.
* **Es importante indicar aquí también el check de Anticipo ya que es lo que diferenciará a este documento de otro tipo de Pago/Cobro.**

En la sección Totales deberemos definir el Importe del cobro en el campo “Total del pago” además de la Moneda en cuestión.

Por último en la sección Documento seleccionaremos en el campo Tipo de pago el medio de pago con el que le cobraremos al cliente, además de los campos relacionados a éste.

Luego de esto podemos proceder a completar el documento seleccionando el botón Completar.

# **Asignación Masiva Automática con Exclusión**

Para realizar una Asignación Masiva Automática con Exclusión se deberán seguir los siguientes pasos:

## **1\. Generar Servicio a Facturar de SDN con ANUALIDAD**

**NOTA:** Para visualizar los Socios del Negocio con anualidad podemos ir al proceso Generar factura desde cuota de contrato. En los filtros vamos a definir la opción “Familiar Anualidad” en el campo “Grupo SDN” y la fecha en cuestión en el campo “Fecha del concepto”. Luego generaremos la búsqueda smartbrowser.

Desde el Proceso **Generar Servicio a Facturar** generaremos los servicios a Facturar No Recurrentes filtrando por las Familias correspondientes a los Socios del Negocio que filtramos anteriormente.

(Este proceso ya está explicado en la guía de Facturación de servicios).

## **2\. Generar Servicio a Facturar de SDN sin ANUALIDAD**

De igual forma generaremos los servicios a Facturar No Recurrentes filtrando por las Familias correspondiente a los Socios del Negocio que pagan de forma mensual.

## **3\. Proceso Generar factura desde Cuota de contrato (Anualidades)**

En el caso de las ANUALIDADES es IMPORTANTE que se facture primero un servicio recurrente y luego el NO recurrente, o viceversa, es decir, **no importa el orden pero si que se facturen por separado**.

En el filtro Grupo SDN deberemos indicar “Familiar Anualidad”.

## **4\. Verificar check de “No Recurrente” en DxC**

Luego de generar las facturas es importante corroborar el check de “No Recurrente” en los Documentos por cobrar ya que éstas no deberán ser tomadas en cuenta posteriormente en el proceso de Asignación Automático (Con exclusión).

## **5\. Correr proceso de “Asignación Automático (Con exclusión)”**

Por último procederemos a correr el proceso Asignación (Asignación Automática con Exclusión).

Este proceso asignará únicamente las facturas cuyos servicios sean RECURRENTES y se debe utilizar para el Grupo SDN “Familiar Anualidad”, por lo que indicaremos esta opción en los filtros del proceso.

En el caso que se desee hacerlo para un Socio de negocio en particular este se define también en el filtro Socio del negocio.

Al generar la Asignación si navegamos a la factura en cuestión va a tener el check Pagado en “Y”.

Luego si navegamos a la asignación desde la pestaña Facturas pagadas veremos que la misma informará en el campo “Descripción”, que esta se hizo automáticamente. En la pestaña Asignaciones de esta ventana veremos que este Pago se canceló con la Factura generada.

Si voy a la factura NO RECURRENTE puedo corroborar que esta no quedó paga aún, lo mismo podemos verificar en el reporte de Saldos pendientes.

# **Asignación (Automática)**

El proceso de Asignación automática permite generar de manera masiva asignaciones entre Facturas con Saldo Abierto contra Pago/Cobro que aún no estén asignados.

## **Filtros:**

* Grupo de Socio del Negocio: Seleccionar un Grupo de Socio del Negocio para que se genere el proceso sólo para ellos.
* Socio del Negocio: Seleccionar un Socio del Negocio para que genere el proceso sólo para documentos de dicho Socio del Negocio.
* Cuentas por Pagar - Cuentas por Cobrar: Se permite elegir Cuentas por Pagar (CxP), cuentas por Cobrar (CxC) o ambos.

## **Criterios:**

* Asignación a las Primeras: el proceso generara las asignaciones consultando los documentos por orden cronológico desde el más viejo al mas nuevo.
* Factura Asignada totalmente: Sólo se generará la asignación si la Factura en cuestión quede totalmente asignada. En caso de no quedar completamente asignada no se genera asignación ninguna, quedando tanto la factura como el Pago con saldo abierto. El proceso no generará ninguna asignación parcial.

## **Descripción:**

Cada Asignación generada desde el proceso de Asignación (Automático) tendrá definido en su Descripción el texto de “Asignación Auto”

## **Preguntas Frecuentes**

El proceso de Asignación (automático) considera Notas de Crédito?

No, el proceso sólo generará asignaciones entre Facturas y Pagos

El proceso de Asignación (automático) considera Documentos por Pagar contra Documentos por Cobrar?

No, el proceso sólo considerará DxC con Cobros y DxP contra Pagos.