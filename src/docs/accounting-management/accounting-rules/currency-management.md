---
title: Conversión de Moneda
category: Documentation
star: 9
sticky: 9
article: false
---
## **Conversión de Moneda**

### **Analizando la Diferencia de Cambio no Realizada**

El proceso para realizar la verificación Contable con los Saldos Abiertos que existe en los Auxiliares se puede realizar mediante los siguientes pasos:

### **Verificación del Ajuste Cuentas por Pagar y por Cobrar**

1. Verificar que todos dan igual según Importe Fuente (Opcional)
   1. Obtención de Reporte de Saldos Abiertos cuentas por Cobrar
   2. Balance de Prueba Cuenta “Cuentas por Cobrar Comerciales”
   3. Obtención de Reporte de Saldos Abiertos cuentas por Pagar
   4. Balance de Prueba Cuenta “Cuenta por Pagar Comerciales”
2. Proceso de “Ajuste de Diferencia de Cambio No Realizada” (Factura Pérdida/Ganancia No Realizada)
3. Verificar que da igual reportes Auxiliares y Balance
   1. Obtención de Reporte de Saldos Abiertos cuentas por Cobrar
   2. Balance de Prueba Cuenta “Cuentas por Cobrar Comerciales”
   3. Obtención de Reporte de Saldos Abiertos cuentas por Pagar
   4. Balance de Prueba Cuenta “Cuenta por Pagar Comerciales”

### **Explicación del Ajuste realziado por el Proceso de DIferencia de Cambio No Realizada**

El proceso de diferencia de cambio No Realizada puede controlarse, para ello deberá exportar a Excel el Reporte que brinda el proceso del cálculo de Diferencia de Cambio No Realizada al momento que la ejecuta. Cuidado, este reporte presentará el cálculo realizado y no podrá obtenerse nuevamente a menos que genere el proceso una vez más, generando así el Asiento del Ajuste nuevamente.

En la planilla verá documento por documento sus aplicaciones en moneda fuente, en moneda esquema, los importes revaluados considerando la tasa de cambio seleccionada y las diferencias a revaluar.

## **Comprobación de Cálculo de Diferencia de Cambio no Realizada**

Como forma de comprobación del proceso realizado usted podrá emitir los siguientes reportes:

### **En Documentos por Pagar y Documentos por Cobrar**

Emitir Reportes de Saldos Abiertos a la Fecha del proceso de:

* Transacciones de Ventas incluyendo Cheques Diferidos
* No Transacciones de Venta incluyendo Cheques Diferidos

Considerar sólo las operaciones en Monedas Extranjeras (no hay filtro de MONEDA, las deberá excluir en una planilla externa)

## **Verificación de Diferencias de Cambio Cuentas por Pagar y Cuentas por Cobrar**

Obtener el Informe Financiero “Balancete de Cuentas Contables” a fecha de Cierre de Ejercicio

Verificación de Saldos Contables de Cuentas de Documentos:

En estos casos, las líneas de Ganancia/Pérdida por Diferencia de Cambio Realizada se realizan SIEMPRE con Moneda del Esquema Contable, de manera que no estarán clasificadas como con Moneda USD sino con UYU si su esquema contable está en UYU.

1. Seleccione Organización
2. Transacción de Ventas: SI
3. A Fecha de cierre de fecha de Período Financiero
4. Con Cheques Diferidos

* **Esquema Contable:** Seleccionar el Esquema Contable que se quiere registrar la Diferencia de Cambio.
* **Tipo de Conversión de Revaluación:** Tipo de Conversión de la revaluación.
* **Fecha de Revaluación:** Fecha a realizar proceso
* **CP-CC: Cuentas por Pagar:** (incluye documentos a Pagar como son los cheques diferidos , Cuentas por Cobrar o ambas.
* **Incluir Todas las Monedas:** No hacer click. Dejar Vacío
* **Moneda:** Dejar Vacío
* **Revalorización Tipo de Documento:** donde genera el asiento de revaluación (GL Document)- General Ledger (Contabilidad)

Dicho proceso realizará el cálculo necesario para actualizar la aplicación contable de los Saldos de todos aquellos Documentos por Cobrar y Documentos por Pagar que se encuentren Pendientes de Pago/Cobro a la fecha de Revaluación.

El Resultado lo mostrará en el Reporte de Diferencia de Cambio No Realizada detallando línea a línea los Documentos con el cálculo realizado.

### **Reporte de Diferencia de Cambio Documentos por Cobrar y Documentos por Pagar no Realizada**

La emisión del Reporte genera un Asiento Contable en borrador detallando línea a línea los ajustes que se estarían realizando documento por documento.

Este mismo lo podrán encontrar en la Ventana de Diario Contable, en forma de Asiento Contable

El Lote del Asiento Contable deberá completarse

### **Anular el Asiento de Revaluación**

Si desea anular un Asiento ya Completo deberá Anular y Corregir para que la fecha de anulación sea la misma que la del asiento.

CUIDADO La acción Anular y Causación crea el asiento con la fecha de hoy.

Si es necesario, puede realizar la revaluación de las cuentas de Cuentas por cobrar más de una vez durante el mismo período. La revaluación posterior en el mismo período ajusta los resultados de la revaluación anterior, y cada revalorización genera un lote de asientos de extorno automáticamente.

### **Asiento de revaluación de Cuentas por Cobrar**

Cuando se realiza una revaluación de Cuentas por cobrar, el sistema crea un lote de Contabilidad general con los resultados de la revaluación. El lote actualiza la cuenta de ganancia (o pérdida) no realizada especificada para la moneda con el monto de ganancia (o pérdida) calculada en el formulario

Como resultado del proceso de revaluación, el sistema calcula las ganancias y pérdidas no realizadas y crea un asiento de revaluación con inversión automática. Las ganancias y pérdidas no realizadas resultantes se registran en las cuentas del Libro que especifique

Usted especifica las cuentas en las que se publican las ganancias y pérdidas no realizadas en los recuadros Cuenta de ganancia no realizada y Cuenta de pérdida no realizada .

## **Ajuste por Diferencia de Cambio de Entregas y Recepciones no Facturados**

El sistema cuenta con un Proceso de Ajuste de Diferencia de Cambio de aquellas Entregas o Recepciones que aún no fueron Facturadas. El proceso lo que realizará es simplemente para la Exposición al cierre de un período o ejercicio, ajustar aquellas Recepciones o Entregas que todavía no llegó su Factura o no ah sido Facturada adelantando así su revaluación al tipo de cambio de cierre de ejercicio.

Considerar que este al ser un asiento de exposición al cierre de período, el mismo debe extornarse al período siguiente para permirir que se relaicen correctamente los procesos estándar re revaluación directo en los documentos.

### **Ajuste Diferencia de Cambio Entregas y Recepciones sin Facturar**

Para comenzar este proceso se deberán realizar los siguientes pasos

1. Reporte de Unbilled ventas con TC Spot
2. Balance de prueba con vista de Moneda y SDN
3. Verificar que esté cargada Tasa de Cambio “Cierre de Mes”
4. Reporte de Unbilled Ventas con TC Cierre de Mes
5. Reporte de Unbilled Compras con TC Spot
6. Balance de prueba con vista de Moneda y SDN Cuenta “Recepciones sin Factura”
7. Reporte de Unbilled Compras con TC Cierre de Mes

## **Ajuste Diferencia de Cambio con Cheque Diferido**

**Documento por Pagar**

**Pago Diferido**

**Explicación del Ajuste**

**Asignación**

## **Diferencias de Cambio sobre Documentos por Cobrar o Pagar**

Si su compañía usa diferentes monedas como monedas base, es posible que deba re expresar los saldos de las cuentas de la moneda base a cualquier moneda extranjera configurada para su uso en contabilidad. Esta operación se llama Conversión de Monedas.

Una cuenta de Pérdida o Ganancia se genera cuando usted tiene transacciones de Cuenta por Pagar o Cuenta por Cobrar en una moneda diferente a la de su contabilidad y hay un cambio en la tasa de conversión de la moneda entre las fechas de realización de la transacción mediante el Documento por pagar/Cobrar y su correspondiente pago/Cobro.

La Diferencia de Cambio Realizada es la determinada entre la fecha de origen del activo o pasivo en moneda extranjera y la fecha en que se recibe o efectúa el abono parcial o total.

La Pérdida o Ganancia realizada se genera con base en los Pagos y Cobros ya realizados. La Pérdida o Ganancia realizada se genera cuando se hace un pago en una moneda diferente a su moneda contable y la tasa de conversión de moneda es diferente en el momento del pago a la que tenía cuando el documento fue aplicado.

Por ejemplo, suponga que una factura de Proveedor se generó por 100.00 USD con una tasa de conversión de 30. Esto es convertido a la moneda contable dando un valor de 3.000 UYU.

**Diferencia No Realizada**

Si posteriormente la Tasa de Conversión es de 32, cuando se ejecuta la conversión a la moneda contable se obtiene un valor de 3.200 UYU. Una pérdida de 20 UYU es Aplicada a la cuenta de Pérdida no Realizada. Esto es realizado con el Proceso de “Ganancia Pérdida Ganancia”

**Diferencia Realizada**

Posteriormente, cuando la factura es pagada. En ese momento la Tasa de Conversión es de 27 lo que da un valor de 2.700 UYU. Cuando se aplica el pago la pérdida no realizada se restaura y una Ganancia Realizada de 300 UYU es aplicada.

El sistema advierte en el momento de realizar el asiento contable correspondiente a la Asignación (entre el Documento por Pagar/Cobrar y el Pago/Cobro) si existe variación en la Tasa de cambio entre la fecha de Factura y la fecha del Cobro (lo mismo sucede con el Pago). En caso de existir diferencia aplicará en ese momento el ajuste correspondiente a la Diferencia de Cambio Realizada correspondiente.

El Documentos que presentan las conversiones y realizan estos cálculos es la Asignación

### **Asignación**

El documento “Asignación” es el responsable de realizar el cálculo de Diferencia de Cambio Realizada al momento de cancelar el saldo abierto de los Documentos (DxC, DxP, Pago, Cobro, Pago Diferido, Cobro Diferido).

El Ajuste se realiza siempre según la fecha de la Asignación realizada. A dicha fecha se comparará los Montos Fuentes de las transacciones que se estén cancelando según el % de la misma (Pueden ser asignaciones parciales donde se calculará el % correspondiente o bien asignaciones totales) por la Tasa de Cambio de Tipo “Spot” de a la fecha de la Asignación contra el importe que dicho documento fue originalmente contabilizado en su creación.

Muy importante considerar que el Ajuste se realizará llevando los Montos Fuentes a la TASA DE CAMBIO DE LA ASIGNACIÓN, no necesariamente siendo la misma que la del Pago/Cobro con quién se esté asignando.

### **Asientos Contables Documentos por Diferencia de Cambio**

**Documento por Cobrar (Moneda USD)**

**Cobro (Moneda USD)**

**Asignación**

### **Explicación del Ajuste**

**Ajuste del Impuesto**

Para los Ajustes de Impuesto se tomará la Cuenta Contable definida en el Campo “Impuesto Pagado” o “Impuesto Acreditado según sea Documentos por Cobrar o Documentos por Pagar correspondientemente.

**Criterio de Definición de Cuentas Contables Resultado**

## **Perdidas y Ganancias por Diferencias de Cambio Realizada**

Una Pérdida o Ganancia se genera cuando usted tiene transacciones de Cuenta por Pagar o Cuenta por Cobrar en una moneda diferente a la de su contabilidad y hay un cambio en la tasa de conversión de la moneda entre las fechas de realización de la transacción mediante el Documento por pagar/Cobrar y su correspondiente pago/Cobro.

Estas diferencias de cambio pueden ser:

* Diferencias de Cambio realizadas
* Diferencias de Cambio no realizadas

Solop ERP gestiona tanto las diferencias de cambio realizadas como las no realizadas.

### **Diferencia de Cambio Realizada**

Es la determinada entre la fecha de origen del activo o pasivo en moneda extranjera y la fecha en que se recibe o efectúa el abono parcial o total.

La Pérdida o Ganancia realizada se genera con base en los Pagos y Cobros efectivamente realizados. La Pérdida o Ganancia realizada se genera cuando:

* se realiza un pago en una moneda diferente a su moneda contable.
* la tasa de conversión de moneda es diferente en el momento del pago a la que tenía cuando el documento fue aplicado.

### **Ejemplo Diferencia de Cambio Realizada y No Realizada**

Por ejemplo, suponga que una factura de Proveedor se generó por 100 USD con una tasa de conversión de 30. Esto es convertido a la moneda contable dando un valor de 3.000 UYU.

**Diferencia No Realizada**

Si posteriormente la Tasa de Conversión es de 32, cuando se ejecuta la conversión a la moneda contable se obtiene un valor de 3.200 UYU. Una pérdida de 20 UYU es Aplicada a la cuenta de Pérdida no Realizada. Esto es realizado con el Proceso de “Ganancia Pérdida Ganancia”

**Diferencia Realizada**

Posteriormente, cuando la factura es pagada. En ese momento la Tasa de Conversión es de 27 lo que da un valor de 2.700 UYU. Cuando se aplica el pago la pérdida no realizada se restaura y una Ganancia Realizada de 300 UYU es aplicada.

El sistema advierte en el momento de realizar el asiento contable correspondiente a la Asignación (entre el Documento por Pagar/Cobrar y el Pago/Cobro) si existe variación en la Tasa de cambio entre la fecha de Factura y la fecha del Cobro (lo mismo sucede con el Pago). En caso de existir diferencia aplicará en ese momento el ajuste correspondiente a la Diferencia de Cambio Realizada correspondiente.

En el caso que esa diferencia de cambio realizada esté gravada por impuestos de venta o compra, Solop ERP realizará el cargo correspondiente a los impuestos por Pagar o Impuestos por Cobrar.

## **Proceso de Revaluación de Cuentas Integrales - Cuentas Monetarias**

Este Proceso tomará todas las Cuentas Contables Integrales definidas como Moneda Extranjera considerando la moneda que tenga definida dicha Cuenta Contable.

Abajo se muestra la parametrización que debe tener el elemento contable para que esta Cuenta Contable sea considerada en el Proceso de Revaluación de Cuentas Integrales.

* Cuenta de Banco: SI
* Cuenta en Moneda Extranjera: SI
* Moneda: USD

No tomará las diferencias que existan en Cuentas Contables Integrales que sean afectadas por Documentos por Pagar o Documentos por Cobrar.

(Estas diferencias serán ajustadas desde el proceso de Diferencia de cambio No Realizada de Documentos a Pagar y Cobrar).

Monedas: moneda a considerar en revaluación

Revalorización Tipo de Documento: donde genera el asiento de revaluación

Tipo de Conversión: Tipo Conversión utilizada en el proceso

Revalorización Tipo de Documento: GL (General Ledger) donde genera el asiento de revaluación

### **Comprobación del Proceso de Diferencia de Cambio de Cuentas Monetarias**

Compare el saldo actual (en la moneda esquema) de las cuentas contables monetarias y el saldo que debería tener a la fecha de cierre del Período como producto de multiplicar los saldos en moneda extranjera por la Tasa de Cambio de cierre del Período.

Ese producto debería ser el valor de la diferencia de cambio.

La emisión del Reporte genera un Asiento Contable en estado borrador con la Descripción Diferencia de Cambio Cuentas Integrales, detallando línea a línea los ajustes que se estarían realizando en las diferentes Cuentas Contables.

El mismo lo podrán encontrar en la Ventana de Diario Contable

El Lote del Asiento Contable deberá completarse

Ejemplo:

1. Saldo Bancario en USD
2. Reporte antes de la Revaluación
3. Asiento de Revaluación
4. Reporte después de la Revaluación