---
title: Reportes de Órdenes
category: Documentation
star: 9
sticky: 9
article: false
---

## Concepto

Los reportes de órdenes son listados que nos brindan información detallada sobre las diferentes órdenes de Venta o Compra.
Se utilizan para obtener una vista parametrizada (por fecha, por Socio del negocio, por estado, etc.) de los diferentes registros con su información detallada de entidades relacionadas, importes y estado.
Cada reporte mantiene sus particularidades y sirven a distintas finalidades (de acuerdo a su nivel de detalle).

### Listado de Ordenes

Reporte que muestra información detallada sobre las órdenes de venta y compra realizadas por una empresa o entidad en un periodo específico. Estas órdenes representan compromisos de compra o venta de productos o servicios y son parte fundamental de la gestión comercial de una empresa.

Este informe muestra todas las líneas de órdenes tanto Órdenes de Venta como Órdenes de Compra (indicando Transacción de Venta: SI/NO) existentes en el sistema, informando los siguientes importes:

* Importe Ordenado
* Importe Entregado
* Importe Facturado

* Importe Pendiente de Entregar
* Importe Pendiente de Facturar
* Importe Entregado No Facturado
* Importe Facturado No Entregado

![Listado de Órdenes](/assets/img/docs/purchase-management/pum-reports1.png)

#### Finalidad del reporte

El reporte de Órdenes de Venta y Compra sirve para varios propósitos importantes:

Seguimiento de órdenes: Permite llevar un registro detallado de todas las órdenes de venta y compra realizadas por la empresa, incluyendo información como la fecha de la orden, el cliente o proveedor involucrado, la descripción de los productos o servicios, las cantidades solicitadas, los precios acordados y los plazos de entrega o pago.

Control de inventario y producción: Facilita el control del inventario y la producción al proporcionar información sobre las órdenes de compra de materias primas o productos para la fabricación, así como las órdenes de venta de productos terminados o servicios a clientes.

Gestión de clientes y proveedores: Permite gestionar de manera eficiente las relaciones con clientes y proveedores al tener un registro organizado de las órdenes de venta y compra realizadas con cada uno de ellos, lo que facilita el seguimiento de pagos, entregas y acuerdos comerciales.

Análisis de ventas y compras: Sirve como herramienta para analizar las tendencias de ventas y compras de la empresa, identificar patrones de demanda, evaluar la efectividad de las estrategias comerciales y tomar decisiones informadas sobre inventario, producción y relaciones comerciales.

Se puede verificar que los importes definidos por este Reporte de “Listado de Órdenes” se pueda corresponder con los siguientes:

* **Importe Facturado:** Se puede validar con el reporte de “Diario de Ventas y Compras” clasificando según Socio del Negocio. El Importe Fuente en cada Moneda se podrá validar con el importe Facturado definido en el Reporte de “Listado de Órdenes”.
* **Importe Entregado No Facturado:** Se puede validar con el importe de “Unbilled” en moneda Fuente. Adicionalmente el Reporte de “Unbilled General” también mostrará su correspondiente conversión y esta a su vez se podrá corresponder con el saldo de la Cuenta Contable de Unbilled.
* **Importe Facturado no Entregado:** Se podrá validar en moneda fuente con el reporte de “Facturas Cliente sin Entregar” o “Facturas Proveedor sin Entregar” así como también con la columna de “Deferred” del Monitor tanto de Compras como de Ventas respectivamente.

**Pendiente de Entregar:** se corresponderá con la columna de “Compromiso” del Monitor de Compras o de Ventas respectivamente.

#### Vistas del Reporte de Ordenes (aplican al ordenamiento de datos, y se pueden crear las que sean necesarias):

* Ordenes de Compra por Tipo de Orden
* Ordenes por Moneda y Contrato
* Ordenes por Moneda Contrato y Proyecto

#### Detalle de Columnas que integran el reporte (Ejemplo vista por Proyecto)

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|       Proyecto         |           Proyecto Financiero              | Permite rastrear y controlar actividades internas o externas     |
|   Socio del Negocio    |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|       F. Orden         |           Fecha de pedido                  |          Indica la fecha en que se ordenó un artículo            |
|    Tipo de Orden       |          Tipo de documento destino         | Puede convertir tipos de documentos de oferta a pedido o factura |
|     Nro. Orden         |                Orden                       |                       Documento de control                       |
|       Producto         |       Producto, Servicio, Artículo         |        Identifica un artículo que se compra o vende              |
| Categoría del Producto |        Categoría de un Producto            |      Identifica la categoría a la que pertenece el producto      |
|        Precio          |         Precio basado en la UM             | El precio ingresado convierte a precio real por conversión de UM |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|      Total Neto        |   Monto de línea sin flete ni cargos       | Monto de línea según cantidad y precio (Cantidad * Precio actual)|
|       Proveedor        |             Socio Comercial                |                 Socio comercial que abastece                     |
|        Estado          |       Estado actual del documento          |                  Indica el estado de un documento                |



### Transacción de Orden

Reporte que detalla las transacciones asociadas a las órdenes de venta y compra realizadas por una empresa. Este reporte proporciona información específica sobre las transacciones financieras, logísticas y comerciales relacionadas con cada orden de venta o compra.

Este reporte presenta cabezales de las Órdenes de Compra o de Venta (seleccionando el check Transacción de venta SI/NO) entre determinadas fechas y con su correspondiente información y status.

![Transacción de Orden](/assets/img/docs/purchase-management/pum-reports2.png)

Muestra los cabezales de las Órdenes, tanto de Ventas como de Compras.

* Contrato
* Proyecto
* Orden Enlazada
* Importes Totales

#### Finalidad del reporte

El propósito principal del reporte de "Transacción de la Orden de Venta y Compra" es brindar una visión detallada de cómo se ha llevado a cabo cada orden de venta o compra, incluyendo:

Información de la orden: Incluye detalles sobre la orden de venta o compra, como el número de orden, la fecha de la orden, los productos o servicios involucrados, las cantidades, los precios unitarios, los descuentos aplicados y los impuestos.

Transacciones financieras: Muestra todas las transacciones financieras asociadas a la orden, como los pagos recibidos por las ventas o los pagos realizados por las compras, junto con los métodos de pago utilizados y las fechas de pago.

Procesamiento logístico: Informa sobre el procesamiento logístico de la orden, incluyendo la preparación de la mercancía, los envíos realizados, las fechas de entrega, las devoluciones o cancelaciones, y cualquier incidencia logística relacionada.

Estado de la orden: Indica el estado actual de la orden de venta o compra, como si está en proceso, completada, cancelada o pendiente de aprobación, proporcionando una visión general del progreso de la transacción.

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|    No del Documento    |    Número de secuencia del documento       | El N° lo genera en automático el sistema por tipo de documento   |
|   Socio del Negocio    |      Identifica un Socio del Negocio       | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|       F. Orden         |           Fecha de la orden                |             Indica la fecha en que se ordenó un artículo         |
|    Agente Comercial    |           Agente de la Compañía            |           Indica el agente comercial para esa región             |
|        Almacén         |          Almacén y punto de servicio       |    Indica locación única donde los productos son almacenados     |
|  Regla de Facturación  |    Frecuencia y métodos de facturación     |  Define forma y frecuencia de facturación a un socio del negocio |
|      Proyecto          |          Proyecto Financiero               |          Permite realizar un seguimiento y control interno       |
|   Lista de Precio      |     Identificador de Lista de Precio       | Determinan el precio, margen y costo de artículos (compra/venta) |
|        Moneda          |             Moneda del registro            | Indica moneda utilizada cuando se procesa o informa el registro  |
|   Total de Líneas      |  Total de todas las líneas del documento   |  Despliega total de todas las líneas en la moneda del documento  |
|      Gran Total        |           Total del Documento              | Identifica el total incluyendo impuestos en moneda del documento |
|  Estado del Documento  |        Estado Actual del Documento         |     Indica el estado del documento en un momento determinado     |
|   Tipo de Documento    |        Tipo de documento o reglas          |    Determina la secuencia del documento y reglas del proceso     |
|         Tasa           |      Tasa de conversión de moneda          |  define la tasa para convertir moneda fuente a moneda contable   |
|    Región de Venta     |       Región de cobertura de ventas        |         Indica un área de cobertura de ventas específica         |
|  Cálculo de comisiones |       Cálculo o proceso de comisiones      |   identificador único define ejecución específica de comisiones  |
|      Descripción       |  Descripción corta opcional del registro   |            Descripción limitada a 255 caracteres                 |	
|    Fecha Contable      |  Fecha de contabilización del registro     |   Indica la fecha a utilizar en cuentas de contabilidad general  |