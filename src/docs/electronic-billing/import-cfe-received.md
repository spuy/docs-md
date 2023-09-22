---
title: Importación CFE Recibidos
category: Documentation
star: 9
sticky: 9
article: false
---

## Importación CFE Recibidos

Cuando una empresa inicia actividad como Emisor Electrónico, se habilita la posibilidad de recibir las facturas digitales emitidas por sus proveedores. Esto permite generar la creación de esos Documentos por Pagar a partir de la importación automática de los comprobantes fiscales electrónicos (CFE).

Para poder realizar este proceso se deberán realizar los siguientes pasos:

### 1. Importar CFE Recbidos

Este proceso se deberá realizar por organización y se podrá seleccionar Fecha desde - Fecha Hasta para obtener los CFE Recibidos que existan y que aún no hayan sido importados (también es posible filtrar por período). Al correr el proceso, se generarán todas las líneas de los CFE Recibidos en una ventana de “Importar Documentos por Pagar”. La ventana del proceso muestra un Log con el resultado de la carga de dato correspondientes a los CFE recibidos en invoicy (informa las facturas cargadas, sus líneas así como los errores que puedan haberse generado).

Esto genera una carga de datos por los documentos recibidos en una tabla intermedia (en este paso aun no se realiza la importación de documentos al sistema).

Como un control interno, es posible previamente visualizar aquellos CFE recibidos desde invoicy (plataforma de comunicación con entidad fiscal) a los efectos de corroborar que coincida la cantidad de documentos.

![Importar CFE Recibidos](/assets/img/docs/electronic-billing/elb-billing1.png)

### 2. Importar Documentos por Pagar

La ventana “Importar Documentos por Pagar” refleja los datos por línea de la tabla intermedia tal como están definidas en la Facturación electrónica y donde el sistema brinda la posibilidad de agregarle información para lograr que puedan terminar de importarse los Documentos por pagar correctamente identificados e imputados en el sistema.

**Identificación del Proveedor.**

A partir del Rut del Emisor de los CFE Recibidos es que se buscará si existe en el sistema un Proveedor con dicho Número de identificación. En caso de existir, automáticamente se definirá el Socio del Negocio en la línea de Importar documentos por pagar.

**Líneas**

En el caso de las líneas, existirán las siguientes opciones posibles para realizar la correspondiente aplicación del concepto a definir:

* Definición de Cargo por Defecto

Para aquellos casos que un proveedor siempre nos facture determinado concepto, se puede aplicar un automatismo de definir un Cargo al Socio del Negocio para que el mismo sea utilizado en cada una de las líneas de los Documentos por Pagar que nos genera. De esta manera, se podrá contar con un matcheo inmediato y la creación e imputación del concepto del gasto en todas las facturas que este proveedor nos genere, quedando sólo pendiente la correcta verificación de la misma para luego Completar el Documento por Pagar. Para definir el Cargo por defecto en el Socio del Negocio deberá crear el cargo y definir el Socio del Negocio en el campo “Socio del Negocio” ubicada en la ventana “Cargo”.

* Creación de Documento por Pagar con importe en borrador

En el caso que el proveedor varíe en los conceptos que le factura y desea identificar sus líneas con su correspondiente producto o servicio, podrá generar el Documento por Pagar definiendo su importe total así como sus líneas con su descripción cantidad y precio, dejando simplemente la identificación de producto en cada una de las líneas para que sea realizado de forma manual. Este proceso agiliza la acción de ingreso manual de documentos por pagar y le permite flexibilidad para definir el concepto o producto que desee.

* Creación de Documento por Pagar con sus productos

Para poder utilizar esta opción, es necesario contar con los productos creados con los códigos que el proveedor identifica cada producto. De esta manera, las facturas proveedor serán generadas completamente en el sistema, definiendo en las líneas tanto la cantidad, el precio, como el producto que corresponda. La asociación del producto será según el Código de Proveedor que sea definido en la pestaña Compras de cada Producto.

* Creación de Documento por Pagar según Orden de Compra

Para aquellos casos que se generan órdenes de compra y esta es obligatoria para la creación de las Facturas proveedor, se podrá utilizar este documento para validar precios así como la definición de qué producto utilizar en cada línea de facturas de los CFE Recibidos. Para que esto sea posible es necesario que el  proveedor detalle la Orden de Compra a la que corresponde la factura en el campo de “Orden de Compra” del CFE. La lógica a aplicar para la identificación de qué línea de Orden de Compra corresponde a qué línea de factura se realizará a partir de un algoritmo de Código Proveedor, Precio, Cantidad, número de línea y Descripción.

![Importar CFE Recibidos](/assets/img/docs/electronic-billing/elb-billing2.png)

### 3. Completar Datos de Factura Importada

Desde el botón de acción "Procesos" se selecciona **Completar Datos de Factura recibida**. Esto abre un smart browser (buscador inteligente) con filtros de búsqueda, tales como impuesto, Fecha de facturación, Número de Documento, Número de Identificación.

Al ejecutar este proceso se mostrarán todas las líneas que le falte setear un dato obligatorio (Socio del Negocio, Producto o Cargo).

En este paso se deberán seleccionar las diferentes líneas y aplicar el dato faltante que corresponda a cada registro para luego poder realizar efectivamente la importación de Documentos por pagar (utilizando los campos de la parte inferior de la ventana).

![Importar CFE Recibidos](/assets/img/docs/electronic-billing/elb-billing3.png)

### 4. Importación de Facturas

Una vez completados los datos de cada registro de los documentos por pagar a importar, se Selecciona el Proceso Importación de Facturas.

Esto abre una ventana emergente para configurar la Organización, y la acción a definir sobre el documento (Preparar o Completar).

Al aceptar genera un Log en ventana emergente con el resultado del proceso (cantidad de facturas importada, cantidad de líneas y cantidad de errores según corresponda).

En el caso de los posibles errores, se podrá visualizar el motivo de cada registro en la columna "Mensaje Error Importación" (en la misma ventana de Importar Documentos por Pagar).

Esta última acción genera los registros por cada Documento por Pagar en el sistema con sus correspondientes líneas (en estado Borrador o Completo según se haya definido previamente).