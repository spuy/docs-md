---
title: Reportes de Facturas
category: Documentation
star: 9
sticky: 9
article: false
---

## Reportes Comerciales (Facturas)

Los reportes de facturas son listados que denominamos "Comerciales".
Se utilizan para obtener una vista parametrizada (por fecha, por Socio del negocio, por estado, etc.) de los diferentes registros con su información detallada de entidades relacionadas, importes y estado.
Cada reporte mantiene sus particularidades y sirven a distintas finalidades (de acuerdo a su nivel de detalle).

### Unbilled General

Este reporte muestra todas las Entregas/Recepciones que tengan líneas que aún no cuenten con un Match invoice realizado, que lo vincule con una Factura. O sea, Entregas/Recepciones pendiente de facturar

Se podrá obtener el mismo reporte tanto para Ventas como para Compras mediante el check de “Transacción de Ventas = SI/NO”

**Devoluciones (de Cliente/Proveedor)**

Las devoluciones de cliente y proveedor se muestran de igual manera que entregas y recepciones, pero con signo negativo.

Vistas:

* Unbilled General por Moneda y SDN
* Unbilled General por Contrato Moneda y Proyecto
* Unbilled General por Sello, Moneda y Proyecto

**Unbilled General por Contrato y Moneda**

Muestra el total pendiente de facturar en moneda contable, agrupado por contrato.

Se utiliza para comparar con el IF 120 Monitor de Venta columna Unbilled

**Unbilled General por Contrato, Moneda y Proyecto**

Muestra el total pendiente de facturar en moneda contable, agrupado por Proyecto

Se utiliza para comparar con el IF 121 Monitor de Venta por Proyecto, ingresando su contrato,  columna Unbilled.

**FIltros de OV que considera**

Estos son los tipos de documentos que filtra:

* "Orden de Venta (Compra y Consumo)"
* "OV Compra Consumo (Factura Medio-Cliente)"
* "OV Consumo Paquete"
* "OV Split Manual"
* "Orden de Venta con Aprobación"
* "Orden de Venta Intercompany"
* "Orden de Venta Honorarios"
* "Orden de Venta Fee"

### Facturas Cliente sin Entrega

Muestra Documentos Órdenes de Venta (Estado Completo o Cerrado) que ya tienen Factura emitida al Cliente (completa) pero que aún no se han Entregado al cliente (no tiene una entrega completa). O sea, Órdenes con factura y con entrega pendiente.

Columnas:

* Organización
* Sello Proyecto
* Proyecto
* Sello Orígen
* SdN
* SdN entrega Directa
* Nro.OV
* Nro. Factura
* Moneda
* Monto OV
* Monto Factura
* Monto entregado
* Monto facturado no entregado

### Facturas Proveedor sin Entregar

Funcionamiento idéntico a “Facturas Clientes sin Entregar”, pero aplicado para documentos de proveedor (Documentos ordenes de compra en estado completo/cerrado con factura proveedor emitida pero sin recepción). O sea, Órdenes con factura y con entrega pendiente.

No se consideran en el reporte los tipos de documento de factura que tienen categoría de contabilidad “AP Invoice - Nota de Débito”.

Vistas:

* Unbilled General por SDN y Moneda, Contrato y Proyecto
* Unbilled General por Moneda y SDN
* Unbilled General por Moneda, Contrato y Proyecto

### Trade Creditors

* Nombre Reporte: Trade Creditors
* Descripción del Reporte: Órdenes de compra con factura pendiente de pago.
* Ayuda del Reporte: Muestra Órdenes con factura emitidas e impagas.
* Nombre en Menú: Trade Creditors

* Documentación: Muestra Órdenes de Compra que tienen un Proyecto asociado de Categoría (Agencia Creativa), cuyo Documento por Pagar aún está pendiente de Pago y tiene al menos una Recepción. O sea Órdenes con factura emitidas e impagas

Vistas:

* Unbilled General por SDN y Moneda
* Unbilled General por Moneda y SDN
* Unbilled General por Moneda, Contrato y Proyecto

### Billing de Cliente por Producto

Este Listado clasifica la facturación por Cliente desglosando lo facturado según Categoría de Producto y el Soporte.

Vistas:

* Billings por Producto y Moneda
* Billings por Tipo de Billing
* Billings por Grupo de Productos

### Detalles de Facturas y Margen

El informe refleja los detalles de las facturas de clientes y proveedores con márgenes (descuentos).
Muestra todas las facturas y sus líneas vinculadas con sus Órdenes.

En este reporte se podrán obtener todas las facturas emitidas entre determinadas fechas.
Podrán ser Documentos por cobrar o por pagar, dependiendo si se selecciona Transacción de Ventas SI o NO.

![Detalles de Facturas y Margen](/assets/img/docs/purchase-management/pum-reports3.png)

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|   Socio del Negocio    |       Identifica un Socio del Negocio      | Persona con quien realiza transacciones. Cliente, proveedor, etc |
| Grupo de Socio del Neg |     ID del Grupo de Socio del Negocio      | Proporciona un método de definir valores para conjuntos de SDN   |
|       Producto         |       Producto, Servicio, Artículo         |        Identifica un artículo que se compra o vende              |
| Categoría del Producto |          Categoría de ese producto         |   Identifica Categoría del Producto para cálculo de precio       |
|        Cantidad        |  La cantidad se basa en la UM seleccionada |  La cantidad se convierte a la cantidad baja de UM del producto  |
|        Precio          |         Precio basado en la UM             | El precio ingresado convierte a precio real por conversión de UM |
|   Precio de Lista      |          Valor de Lista de Precio          |    Es el precio de lista oficial en la moneda del documento      |
|    Neto de Línea       |    Monto de línea sin flete ni cargos      | Monto de línea según cantidad y precio (Cantidad * Precio actual)|
|     Importe Margen     |             Valor Margen                   |    Diferencia entre precio Actual y Límite * por la Cantidad     |
|     Tipo Documento     |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|        Factura         |      	Identificador de la factura       |  La ID de Factura identifica únicamente un documento de Factura  |
| Transacción de Ventas  |    Identifica tipo de transacción          |      Informa si la transacción es de Venta o Compra (SI/NO)      |

### Facturas Cobradas sin pagar a Proveedores

Este reporte visualiza las Órdenes de Venta cuyos Documentos por Cobrar se encuentren en un recibo de cobro en estado completo (cobrados), en relación a Documentos por Pagar completos, asociados a las Órdenes de Compra enlazadas a dichas Orden, que aún no estén pagados. Es decir, Facturas de Proveedor en relación a facturas de Cliente cobradas

### Facturas Cobradas a Cliente sin recibir Factura Proveedor

Este reporte mira los Documentos por Cobrar vinculados a las Órdenes de Venta que estén en un recibo de cobro Completo. A su vez, muestra registros si las respectivas Órdenes de Compra tienen líneas que no estén vinculadas a líneas de Documentos por Pagar. Si la Orden de Compra tiene todas sus líneas vinculadas a Documento por Cobrar, entonces no aparecerá en el reporte.

### Diario Compras y Ventas

Este informe muestra todos los Documentos por Pagar o Documentos por Cobrar emitidos, mostrando de forma separada los importes fuentes, tasas de cambio del documento y los valores contables.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports4.png)

Vistas:

* Por Documento
* Por Día
* Por Impuesto

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|         Número         |          Número del Documento              |          Número de secuencia del documento para cada registro    |
|     Tipo Documento     |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|   Socio del Negocio    |       Identifica un Socio del Negocio      | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|       F.Facturación    |        Fecha impresa en la factura         |   La fecha de la factura indica la fecha impresa en la factura   |
|      	Impuesto         |         Identificador del Impuesto         |    Indica el tipo de impuesto para esta línea del documento      |
|          Tasa          |   	  Tasa, impuesto o conversión         |	Porcentaje a ser multiplicado por la fuente para la conversión   |
|Total Base del Impuesto |  Base para calcular el total del impuesto  |   Indica el total base usado para calcular el total de impuesto  |
|    Total Impuesto      |   Total del impuesto para un documento     |         Despliega el total de impuesto para un documento         |


### Reporte de Notas de Crédito Emitidas a Clientes

Este informe muestra las Notas de Crédito emitidas a clientes con asignación.

### Transacción de Facturas

Este informe muestra los cabezales de facturas por fecha contable, incluyendo su información detallada y estado.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports5.png)

### Resumen de Facturas

Este informe muestra los cabezales de facturas por fecha de factura, incluyendo su información detallada y estado.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports6.png)

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|         Número         |          Número del Documento              |          Número de secuencia del documento para cada registro    |
|     Tipo Documento     |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|   Socio del Negocio    |       Identifica un Socio del Negocio      | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|         Moneda         |          Moneda para este registro         |    Indica la moneda a ser usada cuando se informe el registro    |
|       Gran Total       |            Total del documento             |          Identifica el total, incluye impuestos y fletes         |
|  Tipo de Conversión    |   Tipo de í­ndice de conversión de moneda   |I­ndice de conversión de monedas permite definir diferentes tarifas|
|     Fecha Contable     |   Fecha de contabilización del documento   |indica la fecha a ser usada en las cuentas de contabilidad general|
|      Descripción       |  Descripción corta opcional del registro   |         Una descripción esta limitada a 255 caracteres           |

### Facturación Diaria

Este informe muestra totales de facturas por Socio de negocio y por día.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports7.png)

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| Transacción de Ventas  |    Identifica tipo de transacción          |      Informa si la transacción es de Venta o Compra (SI/NO)      |
|   Socio del Negocio    |       Identifica un Socio del Negocio      | Persona con quien realiza transacciones. Cliente, proveedor, etc |
| Grupo de Socio del Neg |     ID del Grupo de Socio del Negocio      | Proporciona un método de definir valores para conjuntos de SDN   |
|       F.Facturación    |        Fecha impresa en la factura         |   La fecha de la factura indica la fecha impresa en la factura   |
|    Neto de Línea       |    Monto de línea sin flete ni cargos      | Monto de línea según cantidad y precio (Cantidad * Precio actual)|
|% de Descuento de Línea |   Descuento de línea como un porcentaje    |       Indica el descuento para esta línea como un porcentaje     |
|   Agente Comercial     |           Agente de la Compañía            |            Indica el Agente comercial para esta región           |
| Tipo Documento Destino | Documento Destino para convertir Documentos|      La conversión documento es reflejada en el tipo actual      |

### Facturación Semanal

Este informe muestra un total de factura por Socio del negocio y por semana.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports8.png)

#### Detalle de Columnas que integran el reporte

El despliegue de campos es idéntico al reporte de Facturación Diaria. Lo que se modifica es la forma de reflejar la información. En este caso muestra la facturación "Por semana".

### Facturación Semanal de Producto

Este informe muestra un total de facturas por semana y por categoría de producto

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports9.png)

### Facturación Mensual

Este informe muestra los totales de facturas por mes y por Socio del Negocio

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports10.png)

### Facturación Mensual de Producto

Este informe muestra totales de facturas mensual por categoría de Producto

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports11.png)

### Facturación Mensual de Proveedor

Este informe muestra totales de facturas mensual por proveedor y categoría de producto.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports12.png)

### Producto Facturado Mensualmente

Este informe muestra la cantidad facturada mensualmente por producto.

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports13.png)

### Facturación Trimestral a Clientes por Proveedor

Este informe muestra totales de facturas por Proveedor y Cliente de productos por trimestre

![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports14.png)

### Facturación Trimestral a Clientes por Producto

 Este informe muestra totales de facturas en forma trimestral por cliente y categoría de producto

 ![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports15.png)

### Facturación Trimestral por Producto

Este informe muestra totales de facturas en forma trimestral por producto y por Socio del Negocio

 ![Diario Compras y Ventas](/assets/img/docs/purchase-management/pum-reports16.png)