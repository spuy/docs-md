---
title: Reportes de Órdenes
category: Documentation
star: 9
sticky: 9
article: false
---

## Reportes Comerciales (Órdenes)

Los reportes de órdenes son listados que denominamos "Comerciales".
Se utilizan para obtener una vista parametrizada (por fecha, por Socio del negocio, por estado, etc.) de los diferentes registros con su información detallada de entidades relacionadas, importes y estado.
Cada reporte mantiene sus particularidades y sirven a distintas finalidades (de acuerdo a su nivel de detalle).

### Listado de Ordenes

Este informe muestra todas las líneas de órdenes tanto Órdenes de Venta como Órdenes de Compra (indicando Transacción de Venta: SI/NO).

![Listado de Órdenes](/assets/img/docs/purchase-management/pum-reports1.png)

#### Vistas del Reporte de Ordenes:

* Ordenes de Compra por Tipo de Orden
* Ordenes por Moneda y Contrato
* Ordenes por Moneda Contrato y Proyecto

El listado de Ordenes detalla todas las órdenes existentes en el sistema, tanto de Venta como de Compra informando los siguientes importes:

* Importe Ordenado
* Importe Entregado
* Importe Facturado

* Importe Pendiente de Entregar
* Importe Pendiente de Facturar
* Importe Entregado No Facturado
* Importe Facturado No Entregado

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|        Estado          |       Estado actual del documento          |                  Indica el estado de un documento                |
| Categoría del Producto |        Categoría de un Producto            |      Identifica la categoría a la que pertenece el producto      |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|        Precio          |         Precio basado en la UM             | El precio ingresado convierte a precio real por conversión de UM |
|       Producto         |       Producto, Servicio, Artículo         |        Identifica un artículo que se compra o vende              |
|       Proyecto         |           Proyecto Financiero              | Permite rastrear y controlar actividades internas o externas     |
|   Socio del Negocio    |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|     Nro. Orden         |                Orden                       |                       Documento de control                       |
|       F. Orden         |           Fecha de pedido                  |          Indica la fecha en que se ordenó un artículo            |
|    Tipo de Orden       |          Tipo de documento destino         | Puede convertir tipos de documentos de oferta a pedido o factura |
|       Proveedor        |             Socio Comercial                |                 Socio comercial que abastece                     |
|      Total Neto        |   Monto de línea sin flete ni cargos       | Monto de línea según cantidad y precio (Cantidad * Precio actual)|

#### Finalidad del reporte

Se puede verificar que los importes definidos por este Reporte de “Listado de Órdenes” se pueda corresponder con los siguientes:

* **Importe Facturado:** Se puede validar con el reporte de “Diario de Ventas y Compras” clasificando según Socio del Negocio. El Importe Fuente en cada Moneda se podrá validar con el importe Facturado definido en el Reporte de “Listado de Órdenes”.
* **Importe Entregado No Facturado:** Se puede validar con el importe de “Unbilled” en moneda Fuente. Adicionalmente el Reporte de “Unbilled General” también mostrará su correspondiente conversión y esta a su vez se podrá corresponder con el saldo de la Cuenta Contable de Unbilled.
* **Importe Facturado no Entregado:** Se podrá validar en moneda fuente con el reporte de “Facturas Cliente sin Entregar” o “Facturas Proveedor sin Entregar” así como también con la columna de “Deferred” del Monitor tanto de Compras como de Ventas respectivamente.

**Pendiente de Entregar:** se corresponderá con la columna de “Compromiso” del Monitor de Compras o de Ventas respectivamente.

### Transacción de Orden

Este reporte presenta cabezales de las Órdenes de Compra o de Venta (seleccionando el check Transacción de venta SI/NO) entre determinadas fechas y con su correspondiente información y status.

![Transacción de Orden](/assets/img/docs/purchase-management/pum-reports2.png)

Muestra los cabezales de las Órdenes, tanto de Ventas como de Compras.

* Contrato
* Proyecto
* Orden Enlazada
* Importes Totales

#### Detalle de Columnas que integran el reporte

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|    No del Documento    |    Número de secuencia del documento       | El N° lo genera en automático el sistema por tipo de documento   |
|      Moneda Hacia      |            Moneda a convertir              |      Define la Moneda destino para esa tasa de conversión        |
|         Tasa           |      Tasa de conversión de moneda          |  define la tasa para convertir moneda fuente a moneda contable   |
|    Región de Venta     |       Región de cobertura de ventas        |         Indica un área de cobertura de ventas específica         |
|  Cálculo de comisiones |       Cálculo o proceso de comisiones      |   identificador único define ejecución específica de comisiones  |
|   Socio del Negocio    |      Identifica un Socio del Negocio       | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|       F. Orden         |           Fecha de la orden                |             Indica la fecha en que se ordenó un artículo         |
|      Descripción       |  Descripción corta opcional del registro   |            Descripción limitada a 255 caracteres                 |
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
|    Fecha Contable      |  Fecha de contabilización del registro     |   Indica la fecha a utilizar en cuentas de contabilidad general  |


### Órdenes no Entregadas

Es un reporte de órdenes que muestra aquellas que no fueron Entregadas o que no fueron Facturadas.