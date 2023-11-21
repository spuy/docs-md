---
title: Documentos por Cobrar Servicios
category: Documentation
star: 9
sticky: 9
tag:
  - Agencia
  - Educación
article: false

---

## Documentos por Cobrar Servicios

Este documento está destinado a definir las diferentes formas de facturar un Contrato de Servicios.
La explicación detallada sobre Contrato de Servicios se encuentra en la sección Gestión de Servicios, en el apartado Contrato de Servicio.

El Contrato es un acuerdo sobre determinadas condiciones entre nuestra organización y un cliente (o un proveedor). Dentro de esas condiciones se encuentra la manera en la cual será facturado respecto a su frecuencia (mensual, anual), respecto a si se trata de un pago único o en cuotas. Así como acuerdos de otra índole como pactar Honorarios sobre determinados productos/servicios.

### Generar Órdenes de Venta recurrente desde Contrato de Servicios

A partir de la definición de las líneas de un contrato se puede generar Órdenes de Venta según los Servicios Recurrentes que deban ser facturados según determinada recurrencia. De esta manera se podrán generar Órdenes de Venta según las mensualidades definidas en los Contratos.

El proceso será el siguiente:

Definición correcta del Contrato de Servicios: el primer paso para comenzar el proceso es verificar que todos los contratos estén correctamente definidos, tanto según las fechas del mismo como también las líneas.

Crear “Cuotas a Facturar”: a partir de la definición de líneas en los contratos con su recurrencia correspondiente e importe, se deberá proceder a generar las “Cuotas a Cobrar” a partir del mismo. Este proceso puede generarse tanto desde la ventana “Contrato de Servicios” mediante el Proceso “Generar Cuotas desde Contrato” ubicado en los procesos asignados al registro, de esta manera se generarán TODAS las Cuotas a Facturar desde 1 solo contrato. También se tiene la opción de realizarlo de manera masiva para todos los contratos desde el proceso “Generar Cuotas a Facturar desde Contrato” ubicado en el menú, en este caso podrá no seleccionar ningún Contrato de Servicios en especial generando así Cuotas para Todos los Contratos.

![Generar Cuotas desde Contrato](/assets/img/docs/sales-management/sam-agency1.png)

Generar Orden de Venta desde Cuota a Facturar de Contrato de Servicios: Una vez se tienen todas las “Cuotas a Facturar de los Contratos de Servicios” creadas, se podrá generar a partir de las mismas las Órdenes de Venta para que puedan ser ingresadas luego al Proceso de Facturación. Estas Órdenes de Venta se sugiere utilizar el Tipo de Documento “Orden de Venta Fee”. En el Proceso se podrán filtrar según el Socio del Negocio, la Organización o la Fecha de la Cuota a facturar. En este proceso se podrá definir un sólo Socio del Negocio o todos los que desee. Se recomienda filtrar según Fecha para asegurarse que se está generando las cuotas correspondiente al mes que desea. En los parámetros del proceso podrá ver que está editable la Fecha del Documento que desea generar.

IMPORTANTE: Para poder generar las Órdenes de Venta FEE desde el proceso “Generar OV desde Cuota de Contrato” es obligatorio que el Cliente tenga creado un Proyecto en el cuál tenga definido el check de “Es por defecto para FEE”.

![Generar OV desde Cuota de Contrato](/assets/img/docs/sales-management/sam-agency2.png)

### Orden de Venta a Facturar en Cuotas

Una Orden de venta podrá definirse que se pueda facturar en N Cuotas.

Para ello se definió el campo de “Regla de Facturación” donde se podrá escribir cómo se desea que una Orden de Venta sea facturada o bien como una Orden de compra deberá ser facturada por el Proveedor.

Para la generación de esta Orden de Venta o Compra, se sugiere definir una CANTIDAD que sea igual al número de cuotas que se deberá facturar y el importe unitario por el valor de dicha cuota.

**Para el caso que una Orden de Venta u Orden de Compra deba ser Facturada en diferentes “Cuotas” se deberá definir en la Fase del Proyecto:**

* **Producto a Facturar:** Como la facturación no se realizará producto a Producto que fue solicitado, se debe definir un Producto Genérico que será el que finalmente será facturado.
* **Descripción:** Escribir en la Descripción de la FASE cómo se desea que sea Facturado para que Administración se entere y
* **Cantidad:** Además en el Campo “Cantidad” de la Fase se deberá definir la Cantidad de Cuotas que se desea Facturar, ya sea por el Medio o al Cliente. Ver que como Precio Unitario se deberá visualizar el importe de cada una de las cuotas a ser Facturado.

## Facturación Recurrente de Servicios en cuotas

### Facturación de Cuotas del Contrato de Servicios

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

![Generar Factura desde Cuota de Contrato](/assets/img/docs/sales-management/sam-education3.png)

### **Generar Concepto a Facturar no Recurrente**

Para la generación de Servicios a Facturar que no son recurrentes, es decir como por ejemplo Natación, Talleres, etc, se podrá utilizar el proceso de “Generar Servicio a Facturar”.

Mediante este Navegador se podrá visualizar los contratos de servicio sobre los cuáles se desea generar el Servicio a Facturar. Opcionalmente podrá definir un filtro para seleccionar que Contratos visualizar, dentro de los filtros posibles se encuentra la Organización, la Actividad y la Familia. De esta manera si se desea generar un servicio de “Taller” a todos los contratos de una familia por ejemplo, simplemente puede aplicar el filtro correspondiente y sólo se presentará la familia seleccionada.

Una vez con todos los contratos filtrados pueden marcar todos o desmarcar si en algún caso no aplica.

Una vez seleccionados los Contratos sobre los que se desea generar el “Servicio a Facturar” se deberá definir en los Parámetros del Proceso el Servicio que se desea generar.

Se debe definir el Producto y la Versión de lista de precios deseada. El precio será tomado según el Precio de lista que tiene definido el Producto en la versión de lista de precios seleccionada. En caso que se desee definir un precio específico y no el definido en la lista de precios podrá definir el mismo en el campo “Precio”. Si este campo “Precio” queda en 0 el proceso tomará por defecto el precio de lista de la versión definida.

Para generar el Servicio a facturar se deberá definir la Fecha y la actividad (Definir la misma que el producto para reportes Contables). La Fecha se recomienda definir el primer día del mes así cuando se generan las facturas se puede filtrar por todos los servicios con fecha 1ro del mes y así le aparecerá estos servicios también.

![Generar Concepto a Facturar](/assets/img/docs/sales-management/sam-education2.png)

### Facturación Electrónica de servicios en cuotas recurrentes/no recurrentes (Bandeja CFE)

Bandeja CFE audite toda la transacción. La ventana "Bandeja CFE" audita toda la transacción respecto al proceso de facturación electrónica.
Se deberán primero importar todos los Informes de gasto que se desean facturar para luego generar el proceso de facturación masivamente.

::: note
Los Tipo de Documento de CFE se asignan automáticamente según el tipo de Documento de cada Socio del Negocio:
RUT: Tipo de documento e-factura
Cédula: Tipo de documento e-ticket
:::
