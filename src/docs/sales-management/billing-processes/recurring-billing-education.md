---
title: Facturación Recurrente Educación
category: Documentation
star: 9
sticky: 9
tag:
  - Educación
article: false
---

# **Facturación Recurrente Educación**

# **Nota de Crédito Cliente**

La Nota de Crédito se generará desde la ventana Documentos por Cobrar a través de la opción “Crear desde”.

En el cabezal de la ventana Documentos por cobrar debemos ingresar:

* Tipo de Documento: Nota de Crédito
* Socio de Negocio: Cliente al que se facturará
* Tipo Autorización Devolución: Motivo por el cual se hace la Nota de Crédito

Guardaremos el cabezal y seleccionaremos el botón “Crear desde”

Este botón permitirá crear la Nota de crédito desde una Orden de venta, Factura o Recibo.

Seleccionaremos el tipo de documento, el documento en cuestión y realizaremos la búsqueda smartbrowser.

Esta búsqueda nos mostrará todas las líneas del documento, las cuales podemos seleccionar mediante un “check” modificando sus cantidades si se desea.

Luego correremos el proceso seleccionando el botón de OK.

Inmediatamente el sistema cargará las líneas a la Nota de crédito (donde se podrán modificar las cantidades y los importes) y definirá en la pestaña CFEs Referidos la factura que estoy asignando.

Por último procederemos a completar la Nota de Crédito.

La misma quedará con el check “pagado” siempre que haya sido por el total de la factura.

**NOTA: Para ingresar una Nota de crédito Proveedor se utiliza el mismo procedimiento de ingreso de una factura de compra, indicando como Tipo de documento una Nota de crédito.**

# **Generar Concepto a Facturar no Recurrente**

Para la generación de Servicios a Facturar que no son recurrentes, es decir como por ejemplo Natación, Talleres, etc, se podrá utilizar el proceso de “Generar Servicio a Facturar”.

Mediante este Navegador se podrá visualizar los contratos de servicio sobre los cuáles se desea generar el Servicio a Facturar. Opcionalmente podrá definir un filtro para seleccionar que Contratos visualizar, dentro de los filtros posibles se encuentra la Organización, la Actividad y la Familia. De esta manera si se desea generar un servicio de “Taller” a todos los contratos de una familia por ejemplo, simplemente puede aplicar el filtro correspondiente y sólo se presentará la familia seleccionada.

Una vez con todos los contratos filtrados pueden marcar todos o desmarcar si en algún caso no aplica.

Una vez seleccionados los Contratos sobre los que se desea generar el “Servicio a Facturar” se deberá definir en los Parámetros del Proceso el Servicio que se desea generar.

Se debe definir el Producto y la Versión de lista de precios deseada. El precio será tomado según el Precio de lista que tiene definido el Producto en la versión de lista de precios seleccionada. En caso que se desee definir un precio específico y no el definido en la lista de precios podrá definir el mismo en el campo “Precio”. Si este campo “Precio” queda en 0 el proceso tomará por defecto el precio de lista de la versión definida.

Para generar el Servicio a facturar se deberá definir la Fecha y la actividad (Definir la misma que el producto para reportes Contables). La Fecha se recomienda definir el primer día del mes así cuando se generan las facturas se puede filtrar por todos los servicios con fecha 1ro del mes y así le aparecerá estos servicios también.

A continuación presentamos un gif con un ejemplo del proceso

# **Facturación de Cuotas del Contrato de Servicios**

Para generar facturas de manera masiva se deberá utilizar el proceso de “Generar Factura desde Cuota de Contrato”.

El primer paso será realizar la búsqueda “smartbrowser” utilizando los siguientes filtros:

* Socio del Negocio
* Servicio
* Fecha del Concepto

SB Generar Factura desde Cuota de Contrato

Luego se deberán seleccionar mediante los checks de la izquierda izquierda todas las cuotas que se deseen facturar.

Seleccionar Líneas

Las Facturas serán generadas al momento de marcar el check de OK en la sección inferior de los “Parámetros”.

Se deberá definir la Fecha de facturación, el Tipo de Documento que se desea emitir así como la acción que se desea realizar al documento (preparar, completar).

En el caso que se elija la acción de Preparar, deberá completar manualmente el documento luego.

El Proceso generará un único documento por cada Socio de negocio a facturar.