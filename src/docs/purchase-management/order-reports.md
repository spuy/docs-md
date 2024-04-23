---
title: Reportes de Órdenes
category: Documentation
star: 9
sticky: 9
article: false
---

## Reportes de Órdenes

### Listado de Ordenes

* Nombre Reporte: Listado de Órdenes
* Descripción del Reporte: Detalle de líneas de órdenes
* Ayuda del Reporte: Este informe muestra todas las líneas de órdenes (no incluyen las de inversión, honorarios y comisiones). También muestra datos relacionados al reconocimiento de la orden, para aquellas líneas que tengan plan de reconocimiento.
* Nombre en Menú: Listado de Órdenes

* Documentación: Este informe muestra las **líneas de las Órdenes**, tanto Órdenes de Venta como Órdenes de Compra (indicando Transacción de Venta: SI/NO)

Este listado **no** muestra las órdenes de inversión, honorarios, comisiones.

#### Parámetros:

![Listado de Órdenes](/assets/img/docs/sales-management/sam-report1.png)

#### Vistas del Reporte de Ordenes:

* Ordenes de Compra por Nro de Orden
* Ordenes de Compra por Tipo de Orden
* Ordenes por Moneda y Contrato
* Ordenes por Moneda Contrato y Proyecto
* Ordenes por Contrato y Moneda
* Ordenes por Moneda Contrato y Categoría
* Ordenes por Moneda Contrato y Soporte
* Ordenes por Moneda y Proyecto

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

### Listado de Ordenes Completo

* Nombre Reporte: Listado de Órdenes Completo
* Descripción del Reporte: Detalle de líneas de órdenes
* Ayuda del Reporte: Este informe muestra todas las líneas de órdenes (incluyen las de inversión, honorarios y comisiones). También muestra datos relacionados al reconocimiento de la orden, para aquellas líneas que tengan plan de reconocimiento.
* Nombre en Menú: Listado de Órdenes Completo

* Documentación: Este informe muestra la totalidad de las Órdenes incluyendo las de inversión, honorarios, comisiones. También se muestran datos relacionados al reconocimiento de la orden, para los casos en que la línea tenga plan de reconocimiento.

![Listado de Órdenes Completo](/assets/img/docs/sales-management/sam-report2.png)

Diferentes Vistas: 

* Listado de Ordenes Completo por Moneda y Contrato
* Listado de Ordenes Completo por Moneda, Contrato y Proyecto
* Listado de Ordenes Completo por Moneda, Contrato y Socio del Negocio (Para Compras)
* Listado de Ordenes Completo por Moneda, Contrato, Proyecto y Socio del Negocio (Para Compras)

**Detalle de Columnas**: es muy similar al detalle de columnas del listado de órdenes (simple)

### Transacción de la Orden

* Nombre Reporte: Transacción de Órdenes
* Descripción del Reporte: Informe de transacciones de las órdenes.
* Ayuda del Reporte: Este informe muestra todos los cabezales de órdenes con su información y status.
Nombre en Menú: Transacción de Órdenes

* Documentación: Reporte que presenta cabezales de las Órdenes de Compra o de Venta (seleccionando el check Transacción de venta SI/NO) entre determinadas fechas.

Filtros: 

* Organización
* Fecha de la Orden Desde-hasta
* Tipo de Documento
* Estado de la Orden

Muestra los cabezales de las Órdenes, tanto de Ventas como de Compras.

* Contrato
* Proyecto
* Orden Enlazada
* Importes Totales

Parámetros:

![Transacción de la Orden](/assets/img/docs/sales-management/sam-report3.png)

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

Reporte de órdenes que muestra aquellas que no fueron Entregadas o que no fueron Facturadas.

![Órdenes no Entregadas](/assets/img/docs/sales-management/sam-report4.png)

