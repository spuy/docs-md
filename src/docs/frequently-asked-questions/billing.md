---
title: Procesos de Facturación
category: Documentation
star: 9
sticky: 9
article: false
---

## Mantenimientos

### ¿Por que motivo no se visualiza una Orden de Venta para Facturar?

Puede ser por 3 motivos:

* Que NO esté COMPLETA
* Que no tenga el check de “Permite facturar”
* Ver que Regla de facturación tiene la misma
* Verificar en la línea de la Orden que no tenga Cantidades facturadas

## Acciones

### ¿Puedo modificar los importes de una factura si el proveedor no entrega exactamente lo solicitado?

Es posible, en el caso que el proveedor **no entrega** exactamente lo solicitado:

El sistema permite modificar las cantidades en las líneas.

El sistema NO permite modificar importes.

Por lo tanto, para modificar un importe será necesario modificar las cantidades.

Si lo que se conoce de una factura al registrarla es únicamente el importe final, se deberá definir en cantidad la cantidad exacta (con decimales) para que el importe de la factura del proveedor coincida.

Ajuste del registro de la factura proveedor al comprobante físico.

Existen 2 maneras de ajustar el registro de la factura al documento físico:

* Ajustando las cantidades, y el importe se ajustará automáticamente
* Incorporando una línea adicional por el concepto “Ajuste”

### ¿Cómo genero una Factura Cliente (Documento por Cobrar) a Crédito manualmente?

selecciona el botón forma de pago “A credito”, una vez seleccionado, se despliega el campo “Término de pago”, donde definirá el término deseado. Esta conducta se puede definir en las propiedades del Socio del Negocio para el siguiente Documento por cobrar. Luego de ingresados todos los datos, se da clic en “Completar”.

### Cómo generar una Nota de crédito

### Solicitud de Nota de Crédito

La Solicitud de Notas de Crédito por parte de los usuarios a ADministración se realiza en Solop ERP mediante la creación de una Solicitud de Devolución de Cliente. Administración recepciona todas las Autorización de Devolución de Cliente para definir cuáles corresponden y si se les debe generar una Nota de Crédito sobre las cantidades definidas.

Para ello hay que tener creado los Tipos de Documento de “Solicitud de Devolución” donde el Usuario definirá la “Entrega” que el Cliente solicita su NC. Dicho Documento debe tener el Tipo de Documento de Recepción así como también el Tipo de Documento de Facturación (en este caso Nota de Crédito).

Luego desde la Ventana se realiza la Devolución correspondiente y desde la misma se puede generar la Nota de Crédito al Cliente en cuestión. 

### Procedimiento para realizar una Nota de Crédito

Hay varios procesos de generar Notas de Crédito (Nota de Débito es otra cosa, es similar a una factura). 

1. Crear Desde (Orden de venta, Factura o Devolución)
2. Copiar Líneas. (Factura)
3. Proceso de Crear NC desde Devolución.

::: note
Educación y Agencia utilizan el 1 generalmente.
:::

### Nota de Crédito Cliente/Proveedor utilizando la opción de Copiar líneas

Para generar una Nota de Crédito Cliente o  Proveedor se utilizará la ventana Documentos por Cobrar o Pagar respectivamente.

Se deberá ingresar:

* Tipo de Documento: Nota de Crédito
* Socio de Negocio: Proveedor que nos facturará
* Dirección de Socio de Negocio

Luego se deberá seleccionar el botón “Copiar líneas”, ubicado en la parte inferior de la pantalla.

Esta opción copiará todas las líneas de la factura a la Nota de crédito, donde se podrán modificar las cantidades y los importes para luego completarla.

### Nota de Crédito Cliente utilizando la opción “Crear desde”

Para generar una Nota de Crédito Cliente se utilizará la ventana Documentos por Cobrar.

Se deberá ingresar:

* Tipo de Documento: Nota de Crédito
* Socio de Negocio: Proveedor que nos facturará
* Dirección de Socio de Negocio

Luego se deberá seleccionar el botón “Crear desde”:

Este botón permitirá crear la Nota de crédito desde una Orden de venta, Factura o Recibo.

Luego de ingresado el documento permitirá modificarse en la línea de la factura, las cantidades y los importes de la misma para luego proceder a completarla.

Como asignar Nota de crédito a su factura de manera automática:

### Asignar una Nota de Crédito con su correspondiente Factura relacionada de manera automática

* 1. Desde el proceso de copiar líneas o Crear Desde, además de definir las líneas se agrega dicho Documento por Pagar en la pestaña de "CFE Relacionado".
* 2. Si un Documento por Pagar está definido en la pestaña de CFE relacionado se genera automáticamente la asignación (si es por el 100% del documento).

### Funcionalidad de la Nota de débito en el sistema

Las notas de débito se hacen cuando una empresa ingresa o genera documentos pero que es sólo un traspaso de gasto. 

Las Notas de Débito Proveedor que ingresa WPP son Facturas que el Proveedor le emite al CLIENTE, es decir pone el RUT del Cliente, pero la Organización las ingresa al sistema ya que ellos le pagan al proveedor.

Para luego cobrarle al cliente se genera una Nota de Débito al Cliente por este mismo importe.

::: note
Estas Notas de Débito NO TIENEN IVA, son todas exentas, ya que el que descuenta el iva compras  es el Cliente.
:::

### Nota de crédito manual.

Error: Monto total asignado de facturas no puede ser mayor al monto de la nota de crédito

Cuando las Notas de crédito se crean desde el Botón Crear desde en el cabezal de la ventana se crean los registros en la pestaña CFE Referidos y quedarán las lineas de la factura con el monto asignado correcto.

El problema surge cuando la Nota de crédito se crea manualmente, aquí hay que ajustar manualmente el campo Total asignado de la pestaña CFE Referidos en la Nota de crédito, ya que el importe asignado de la factura quedará como todo el disponible de la misma, siendo mayor al de la Nota de crédito.

## Procesos

### Generar factura desde Línea de Orden

### Varios Términos de Pago en las Órdenes de Venta seleccionadas

Cuando se están facturando en una misma factura varias Órdenes de Venta que tienen diferentes Términos de Pago no permitirá generar una única factura y emitirá mensaje de Error:

Esto se debe a que no puede determinar que término de pago se desea definir en la Factura a Generar.

**Solución:** Para solucionarlo lo ideal sería abrir en la ventana de “Órdenes de Venta” todas las Ordenes de venta que se están intentando facturar Varios Términos de Pago en las Órdenes de Venta seleccionadas.

::: note
Ver las mismas en formato “Grilla” para identificar qué Orden de Venta tiene un Término de Pago diferente.
Para modificarlo deberá Rectivar la Orden, modificar el Término de Pago y luego completarla nuevamente.
:::

### Campo OC cliente debe ser el mismo para todas las órdenes del grupo

Al generar factura desde línea de orden, si se seleccionan diferentes órdenes, el sistema valida que el campo Referencia de orden del socio de negocio posea el mismo dato en las diferentes órdenes seleccionadas para la generación de factura.


### Varios Agentes Comerciales definidos en las Órdenes de Venta

En principio el proceso definirá el Agente Comercial en la Factura según el Agente que esté definido en la Orden de Venta en cuestión.

En caso de que existan diferentes Agentes Comerciales definidos en las Órdenes de Venta el proceso tomará el Agente Comercial definido en el Socio del Negocio.

Si no tiene ninguno definido en el Socio del Negocio tomará el Agente Comercial definido en las Ordenes de Venta. Si estos son diferentes dará un error.

### ¿Por qué motivo puede no referenciarse un Proyecto en una factura?

El Proyecto se referenciará en la factura siempre que el criterio de agrupación que se haya elegido para agrupar las lineas de Orden al correr el proceso Generar factura desde línea de Orden haya sido “Proyecto”.

Por ejemplo se puede tener N proyectos por Contrato pero solo Un Contrato por cada proyecto. Por lo que si se agrupa por Contrato, como las lineas de orden pueden ser de varios proyectos, al generar la factura no establece el campo de Proyecto en el cabezal.

Respecto al Tipo de documento, el sistema controlará si el Socio del Negocio a quien se está facturando tiene definido un RUT o una Cédula y le generará una e-Factura o un e-ticket según corresponda.

### Precios de factura son modificados debido a Lista de precios diferente entre Orden de Venta y Documento por Cobrar

Cuando se selecciona el criterio de agrupación facturación “Contrato” para poder facilitar y evitar trancar el proceso, se toman varios datos según el Contrato de Servicios y no directamente desde la orden de venta en cuestión. Dentro de estos campos que se toman del contrato está por ejemplo el Agente Comercial que se define, el término de pago y también la Lista de Precios. 

### Controles para Facturar Orden de Venta

* Check “Permite Facturar”: Para poder facturar una orden de venta luego de completarla debe tener el check de permite facturar, y su regla de facturación debe ser inmediata.

### Como Generar Factura desde Cuota de Contrato

Este proceso tomará todos los Informes de Gastos (Conceptos a Facturar) que existan creados en los contratos y generará la factura al “SDN a Facturar” que ellos tengan definido.

Importante: El proceso de Facturación, si bien en el Contrato se define un Precio de Lista, al generar la Factura el Precio de lista se define automáticamente directo desde la Versión de Lista de Precios vigente para la fecha y no la obtendrá desde la Línea del Contrato. Esto puede llevar a que si no se Actualiza correctamente los precios de las Líneas del Contrato (tanto Precio de Lista como Precio), si bien el precio si será definido según el definido en la línea y en la Cuota del Contrato (Informe de Gastos), no así el Precio de Lista, definiendo siempre el ACTUALIZADO. 
Esto puede llevar a que el % de Descuento REAL definido en la línea de La Factura quede desactualizado (ya que el Precio es el "con descuento" pero según un Precio de lista viejo, y el Precio de Lista que se defina en la factura será uno nuevo).

### ¿Existe algún control sobre las líneas de factura en el proceso de Importar Documentos CxC/CxP?

Posee un control antes de ejecutarse la acción sobre cada factura (dejar Completo o En Proceso), que verifica si la factura tiene la cantidad de líneas que debe tener (se obtiene la cantidad de líneas desde la tabla de importación, para el mismo número. de documento, Socio del Negocio y tipo de documento).

Si la cantidad de líneas de la factura no es la que debe tener, entonces se borra la factura, y al final del proceso se muestra el contador de facturas borradas por error en sus líneas.

### ¿Dónde se define el cargo de una factura importada?

la obtención del cargo para el Socio del Negocio se realiza en el proceso "Importar CFE Recibidos".

### Bandeja CFE 

### Generar Factura desde Conceptos

**¿Cómo se define el Tipo de documento CFE al momento de generar las facturas?**
Los Tipo de Documento de CFE se asignan automáticamente según el tipo de Documento de cada Socio del Negocio:

RUT: Tipo de documento e-factura

Cédula: Tipo de documento e-ticket