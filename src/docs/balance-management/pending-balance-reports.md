---
title: Reportes de Saldos Pendientes
category: Documentation
star: 9
sticky: 9
article: false
---

## Concepto

Los reportes de cuentas corrientes son documentos que resumen y detallan las transacciones financieras realizadas en una cuenta corriente durante un período específico. Estos reportes son herramientas importantes en la gestión financiera tanto a nivel personal como empresarial.

A continuación detallamos los reportes más utilizados en Solop ERP para la gestión financiera y control de saldos:

## Saldos Pendientes

Reporte que muestra los saldos que aún están pendientes de liquidación o conciliación en una cuenta o en varias cuentas de una empresa o individuo. 

Este tipo de reporte es fundamental para tener un control preciso de las obligaciones financieras y los saldos que deben ser cancelados en el futuro.

![Saldos Pendientes](/assets/img/docs/balance-management/bam-rep1.png)

#### Finalidad del reporte

* Control de cuentas por pagar y por cobrar: El reporte de Saldos Pendientes ayuda a mantener un registro detallado de las cuentas por pagar a proveedores y las cuentas por cobrar a clientes que aún no se han liquidado por completo. Esto es esencial para tener una visión clara de las obligaciones financieras pendientes y planificar la gestión de liquidez de manera efectiva.

* Identificación de saldos vencidos: Permite identificar rápidamente los saldos que están vencidos o que se han acumulado por un período prolongado, lo que facilita la toma de acciones para su pronta liquidación y evita posibles problemas de morosidad o retrasos en los pagos.

* Gestión de flujos de efectivo: Al tener un registro de los saldos pendientes, se puede gestionar de manera más eficiente el cash flow de la empresa, asegurando que se cuente con los recursos necesarios para cubrir las obligaciones financieras en el momento adecuado.

* Análisis de deudas y créditos: El reporte de Saldos Pendientes proporciona información valiosa para realizar un análisis detallado de las deudas y los créditos, identificando las relaciones comerciales más relevantes y evaluando la salud financiera de la empresa en términos de sus compromisos financieros.

* Previsión y planificación financiera: Basándose en los saldos pendientes, se pueden realizar proyecciones financieras y planificar estrategias para optimizar la gestión de deudas y créditos, garantizando un equilibrio financiero adecuado en el corto y largo plazo.

#### Vistas:

* Saldos Pendientes a la Fecha Simple
* Saldos Pendientes (con Proyecto y Referencia OC)
* Saldos pendientes por Moneda y Socio Del Negocio

#### Detalle de Columnas que integran el reporte (ejemplo vista por Moneda y SDN)

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|   Socio del Negocio    |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|       Documento        |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|         Número         |          Número del Documento              |          Número de secuencia del documento para cada registro    |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|        F. Doc.         |        Fecha impresa en la factura         |   La fecha de la factura indica la fecha impresa en la factura   |
|        F. Vto.         |           Fecha de Vencimiento             |  Fecha cuando el pago es vencido sin deducciones o descuento     |
|       Gran Total       |            Total del documento             |          Identifica el total, incluye impuestos y fletes         |
|       Asignado         |              Total Pagado                  |     Importe total o parcial pagado al momento de la consulta     |
|       Pendiente        |              Total Abierto                 |           Importe total abierto (pendiente) de la partida        |

## Saldos Abiertos a la Fecha

Reporte que muestra los saldos pendientes en cuentas específicas hasta una fecha determinada. Este tipo de reporte es fundamental en la contabilidad y gestión financiera para tener un registro preciso de los saldos que están aún abiertos o pendientes de liquidación en un momento dado.

![Saldos Abiertos a la fecha](/assets/img/docs/balance-management/bam-rep2.png)

#### Finalidad del reporte

* Control de saldos pendientes: El reporte muestra los saldos que están abiertos o pendientes de conciliación hasta una fecha específica, lo que permite tener un control detallado de las obligaciones financieras que aún no han sido liquidadas.

* Conciliación contable: Facilita la conciliación de cuentas y la identificación de discrepancias entre los registros contables y las transacciones reales hasta la fecha establecida en el reporte. Esto es esencial para garantizar la exactitud y veracidad de la información contable.

* Seguimiento de transacciones: Permite hacer un seguimiento detallado de las transacciones que han generado saldos abiertos en cuentas específicas, como cuentas por pagar, cuentas por cobrar, préstamos pendientes, entre otros. Esto proporciona una visión clara de las operaciones financieras hasta la fecha del reporte.

* Análisis de deudas y créditos: El reporte de Saldos Abiertos a una Fecha es útil para realizar un análisis detallado de las deudas y créditos de la empresa hasta ese momento, identificando las relaciones financieras más relevantes y evaluando la salud financiera en términos de compromisos financieros.

* Previsión financiera: Basándose en los saldos abiertos hasta una fecha específica, se pueden realizar proyecciones financieras y planificar estrategias para la gestión de deudas y créditos en el futuro, garantizando un cash flow adecuado y una planificación financiera sólida.

#### Vistas

* Saldos pendientes a fecha
* Saldos pendientes por moneda y SDN

#### Detalle de Columnas que integran el reporte (ejemplo vista saldos pendientes a fecha)

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|   Socio del Negocio    |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|       Documento        |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|         Número         |          Número del Documento              |          Número de secuencia del documento para cada registro    |
|       F. Factura       |        Fecha impresa en la factura         |   La fecha de la factura indica la fecha impresa en la factura   |
|      Vencimiento       |           Fecha de Vencimiento             |  Fecha cuando el pago es vencido sin deducciones o descuento     |
|         Total          |            Total del documento             |          Identifica el total, incluye impuestos y fletes         |
|          Pago          |              Total Pagado                  |     Importe total o parcial pagado al momento de la consulta     |
|       Pendiente        |              Total Abierto                 |           Importe total abierto (pendiente) de la partida        |

## Estado de Cuenta Corriente

que proporciona un resumen detallado de las transacciones y movimientos financieros realizados en una cuenta corriente durante un período específico. Este tipo de reporte es fundamental en la gestión financiera tanto a nivel personal como empresarial, ya que brinda información clave sobre el estado actual de la cuenta y su historial de operaciones.

![Estado de Cuenta Corriente](/assets/img/docs/balance-management/bam-rep3.png)

#### Finalidad del reporte

* Control de transacciones: Permite llevar un registro detallado de todas las transacciones realizadas en la cuenta corriente, incluyendo depósitos, retiros, transferencias, pagos de facturas, entre otros. Esto es esencial para tener un control preciso de los movimientos financieros y verificar la exactitud de las operaciones realizadas.

* Seguimiento de saldos: El reporte muestra el saldo inicial, los movimientos realizados y el saldo final en un período determinado, lo que facilita el seguimiento del saldo disponible en la cuenta y la identificación de posibles discrepancias o errores en los registros contables.

* Análisis de gastos e ingresos: Proporciona información detallada sobre los gastos realizados y los ingresos recibidos en la cuenta corriente, lo que permite realizar un análisis comparativo y evaluar la salud financiera en términos de cash flow.

* Identificación de cargos y abonos: El reporte de Estado de Cuenta Corriente muestra los cargos (retiros, pagos, comisiones, etc.) y los abonos (depósitos, ingresos, intereses, etc.), lo que ayuda a identificar de manera clara todas las transacciones realizadas en la cuenta.

* Verificación de operaciones: Es útil para verificar que todas las operaciones registradas en la cuenta corriente sean correctas y estén debidamente documentadas, lo que contribuye a mantener la integridad y precisión de la información financiera.

* Documentación para auditorías y análisis financiero: El reporte de Estado de Cuenta Corriente sirve como documentación importante en caso de auditorías internas o externas, así como para realizar análisis financieros y evaluar el desempeño económico de la cuenta en un período específico.

#### Vistas

* Estado de Cuenta Corriente
* Estado de Cuenta Deudor - Proveedor

#### Detalle de Columnas que integran el reporte (ejemplo vista Estado de Cuenta Deudor - Proveedor)

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|         Nombre         |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|     F. Transacción     |          Fecha de la Transacción           |          Indica la fecha en que se ejecutó la transacción   	 |
|       Documento        |        Tipo de documento o reglas          |  Determina la secuencia del documento y las reglas de proceso    |
|         Número         |          Número del Documento              |          Número de secuencia del documento para cada registro    |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|      Saldo Inicial     |                    Debe                    |                             Débitos                              |
|          Debe          |            Total del documento             |          Identifica el total, incluye impuestos y fletes         |
|          Haber         |                   Haber                    |                               Créditos                           |
|       Acumulado        |           Acumulado de la cuenta           |                   Importe acumulado de la cuenta                 |

## Antigüedad de Documentos

Reporte que muestra la edad o tiempo transcurrido desde la emisión o vencimiento de documentos financieros, como facturas, pagarés, cheques, entre otros. Este tipo de reporte es fundamental en la gestión financiera y administrativa de una empresa para monitorear y controlar el cumplimiento de los compromisos financieros y la liquidación oportuna de los documentos pendientes. 

![Antiguedad](/assets/img/docs/balance-management/bam-rep4.png)

#### Finalidad del reporte

* Control de cuentas por pagar: El reporte permite llevar un control detallado de las cuentas por pagar y la antigüedad de las facturas o documentos pendientes de pago. Clasifica las deudas según su antigüedad (por ejemplo, 30 días, 60 días, 90 días o más), lo que facilita la gestión de pagos y la identificación de deudas vencidas.

* Gestión de liquidez: Permite evaluar la liquidez de la empresa al mostrar el tiempo transcurrido desde la emisión o vencimiento de los documentos financieros. Esto es esencial para planificar la gestión de efectivo y garantizar que se cuenten con los recursos necesarios para cubrir las obligaciones financieras en el momento adecuado.

* Identificación de deudas vencidas: El reporte ayuda a identificar rápidamente los documentos financieros que están vencidos o que se han acumulado por un período prolongado sin ser liquidados. Esto permite tomar acciones para su pronta liquidación y evitar problemas de morosidad o retrasos en los pagos.

* Negociación de condiciones de pago: Al tener una visión clara de la antigüedad de los documentos pendientes, se pueden negociar condiciones de pago favorables con proveedores o acreedores, estableciendo plazos de pago que sean viables para la empresa y evitando posibles penalizaciones por pagos tardíos.

* Análisis de cash flow: El reporte de Antigüedad de Documentos es útil para realizar un análisis detallado del flujo de caja y evaluar el impacto de las deudas pendientes en la situación financiera de la empresa. Esto ayuda a tomar decisiones informadas sobre la gestión de liquidez y la planificación financiera.

#### Vistas

* Antiguedad
* Antiguedad por Socio del Negocio

#### Detalle de Columnas que integran el reporte (ejemplo vista Antiguedad)

|         Columna        |              Descripción                   |                            Ayuda                                 |  
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
|   Socio del Negocio    |      Identifica un Socio Comercial         | Persona con quien realiza transacciones. Cliente, proveedor, etc |
|      Proyecto          |          Proyecto Financiero               |          Permite realizar un seguimiento y control interno       |
|         Orden          |                ID Orden                    |                 Identificador único de la orden                  |
|        Factura         |               ID Factura                   |                Identificador único de la factura                 |
|     Total Factura      |            Total del documento             |                Identifica el total de la factura                 |
|     Saldo Abierto      |              Total Abierto                 |           Importe total abierto (pendiente) de la partida        |
|       Fecha Vto.       |           Fecha de Vencimiento             |  Fecha cuando el pago es vencido sin deducciones o descuento     |
|        Moneda          |      La moneda para este registro          | Moneda que se utiliza al procesar o informar sobre este registro |
|   Total No Vencido     |          Total de pagos debidos            |                    Cantidad completa del pago debido             |
|      Vto. 1-30         |        Total a vencer en ese plazo         |          Importe a vencer en el rango de plazo establecido       |
|      Vto. 31-60        |        Total a vencer en ese plazo         |          Importe a vencer en el rango de plazo establecido       |
|      Vto. 61-90        |        Total a vencer en ese plazo         |          Importe a vencer en el rango de plazo establecido       |
|      Días Vencida      |           Total de días vencido            | Cantidad de días transcurridos desde el vencimiento del documento|
|     Total Vencido      |              Total Vencido                 |                  Importe total Vencido del documento             |
|  Después de Vto. 1-30  |        Total vencido en ese plazo          |          Importe vencido en el rango de plazo establecido        |
| Después de Vto. 31-60  |        Total vencido en ese plazo          |          Importe vencido en el rango de plazo establecido        |
| Después de Vto. 61-90  |        Total vencido en ese plazo          |          Importe vencido en el rango de plazo establecido        |
| Después de Vto. > 90   |        Total vencido en ese plazo          |          Importe vencido en el rango de plazo establecido        |

## Antigüedad de Documentos con Pagos Revaluados

El reporte de Antigüedad con Pagos Revaluados es un documento contable que muestra la antigüedad de los saldos pendientes en una cuenta, teniendo en cuenta los pagos realizados y su impacto en la deuda restante (incluye los pagos sin asignar y la revaluación de los documentos). Este tipo de reporte es fundamental en la gestión financiera para evaluar de manera precisa la evolución de los saldos pendientes a medida que se realizan pagos y se aplican revaluaciones

![Antiguedad con Pagos Revaluados](/assets/img/docs/balance-management/bam-rep5.png)

#### Finalidad del reporte

* Seguimiento de pagos: El reporte permite llevar un registro detallado de los pagos realizados en una cuenta y su efecto en la deuda restante. Esto es esencial para tener un control preciso de los saldos pendientes y conocer la evolución de los mismos a lo largo del tiempo.

* Análisis de la deuda: Permite analizar la deuda de manera integral, teniendo en cuenta los pagos realizados y su impacto en la antigüedad de la deuda. Esto facilita la identificación de deudas vencidas o que se han acumulado por un período prolongado, así como la evaluación de la eficacia de los pagos realizados para reducir la deuda pendiente.

* Gestión de liquidez: El reporte ayuda a evaluar la liquidez de la empresa al mostrar cómo los pagos afectan los saldos pendientes y la antigüedad de la deuda. Esto es útil para planificar la gestión de efectivo y asegurar que se cuenten con los recursos necesarios para cubrir las obligaciones financieras de manera oportuna.

* Identificación de saldos revaluados: Permite identificar los saldos que han sido revaluados debido a cambios en las condiciones financieras, como tasas de interés, plazos de pago, entre otros. Esto ayuda a tener una visión más precisa de la deuda real y a realizar ajustes en la contabilidad si es necesario.

* Planificación financiera: El reporte de Antigüedad con Pagos Revaluados es útil para realizar proyecciones financieras y planificar estrategias para la gestión de la deuda, teniendo en cuenta los pagos realizados y su efecto en los saldos pendientes a futuro.

**Verificación con otros Reportes:**

El saldo pendiente de los documentos es igual a los saldos del reporte Saldos Abiertos a la Fecha
El saldo pendiente de los documentos menos el saldo de los Pago/Cobros sin asignar es igual al saldo del reporte Saldos Pendientes.


**Verificación con Cuentas Contables:**

Columna Saldo Contable de Factura = 12110-Cuentas por Cobrar Comerciales
Columna Saldo Contable del Pago = 11130 - Cheques Depósitos No Asignados

#### Vistas

* Antigüedad de Documentos con Pagos Revaluados

#### Detalle de Columnas que integran el reporte

En este caso, el detalle de campos es en general idéntico al de Antiguedad de Documentos, solo que se agregan dos columnas correspondientes a los pagos sin asignar y Diferencia por revaluación de documentos.

## Reporte de Asignación de Pago

El reporte de Asignación de Pago es un informe detallado que muestra cómo se han aplicado los pagos realizados por la empresa. Incluye información sobre los pagos recibidos, las facturas o deudas a las que se han aplicado estos pagos, y cualquier saldo pendiente que pueda existir.
Permite visualizar como es el detalle de todas las asignaciones generadas a un Socio del Negocio. En dicho reporte también podrá obtener diferentes vistas sobre la información. 

#### Finalidad del reporte

* Transparencia Financiera: Proporciona una visión clara y detallada de cómo se han asignado los pagos, lo que ayuda a mantener la transparencia en la gestión financiera de la empresa.

* Conciliación Bancaria: Ayuda a conciliar los pagos realizados con los registros bancarios, asegurando que no haya discrepancias entre los pagos registrados en el ERP y los extractos bancarios.

* Control de Cuentas por Pagar: Facilita el seguimiento de las cuentas por pagar, mostrando qué facturas han sido pagadas, cuáles están pendientes, y cómo se han distribuido los pagos.

* Gestión de Tesorería: Ayuda a la gestión de tesorería al proporcionar información sobre los flujos de efectivo salientes, permitiendo una mejor planificación y control del efectivo disponible.

* Auditoría y Cumplimiento: Sirve como documento de respaldo en auditorías financieras, proporcionando evidencia clara de las transacciones y pagos realizados, y asegurando el cumplimiento de las políticas y regulaciones financieras.

* Mejora en la Relación con Proveedores: Al mantener un registro detallado de los pagos, la empresa puede responder de manera más efectiva a las consultas de los proveedores sobre el estado de sus pagos, mejorando así las relaciones comerciales.

* Análisis Financiero: Proporciona datos valiosos para el análisis financiero, permitiendo identificar tendencias, patrones de pago, y áreas donde se pueden realizar mejoras en la gestión financiera.

#### Vistas

* Asignación por Factura: Si desea ver Factura por Factura la asignación correspondiente puede seleccionar la vista “Detalle de Asignación por Factura”.

* Asignación de pagos por Asignación: Si desea ver por Recibo o por Asignación puede seleccionar la vista “Detalle de Asignación por Asignación”

#### Detalle de Columnas que integran el reporte

