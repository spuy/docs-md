---
title: Gestión Financiera
category: Documentation
star: 9
sticky: 9
article: false
---

## Acciones

### Gestión de Cheques Diferidos

### Libretas/Resmas de Cheques Propios

Cómo primer paso para emitir cheques manuales en libretas, se deberán crear las libretas/resmas en el sistema, así como las secuencias para las mismas en las ventanas “Libreta/Resma Cheques” y “Secuencia de Documentos Controlados”.
Se debe generar un nuevo registro en la ventana “Libreta/Resma Cheques”, completando el Nombre y la cuenta bancaria de la misma.

1. Navegar en el campo “Numeración de Libreta”, abriendo la ventana Secuencia de Documentos Controlados.
2. Aquí se debe ingresar el nombre, descripción opcional, número de inicio y fin de la libreta, y si fuera necesario un sufijo o prefijo para la numeración.
3. Guardar el registro, mediante el botón “Generar Líneas”
4. De regreso en la ventana de libreta/resma de cheques, se debe ingresar el nombre, nombre a ser impreso, cuenta bancaria y la secuencia del documento (definida anteriormente).

En la pestaña “Cheques” se visualiza el estado de los mismos.

### Cheque Diferido Por Pagar

La emisión de cheques diferidos propios se debe realizar mediante la ventana “Cheque Diferido Por Pagar”. 
En el cabezal de la misma se deberá completar los siguientes campos:

Libreta, Nro. Cheque, Fecha Emisión, Socio del Negocio, Dirección del Socio de Negocio.

Luego, debe ingresar a la pestaña embebida y abrir una “Línea” accionando Nuevo, clickeando en la línea, se debe ingresar el importe del cheque (el Cargo aparecerá de manera predeterminada).

### Anular un cheque diferido por pagar

Para anular un cheque diferido por pagar el mismo NO debe estar en Estado de Cheque "Entregado".

El estado del cheque se modifica cuando el mismo se "Entrega" en un Recibo de Pago.

Para anular el cheque primero hay que anular el recibo y luego si permitirá anular el Cheque diferido por pagar.

### Depósito de un cheque diferido

Para hacer un depósito de cheque diferido vamos a la ventana “Depósito de cheques” aplicamos los filtros que deseemos aplicar y realizamos la búsqueda “Smart browser”.

Luego seleccionamos los cheques a depositar indicando la Cuenta bancaria destino y la Fecha de la transacción y hacemos click en la opción “OK”.
  
### Check Conciliado al Anular un Pago/Cobro

Al anularse un depósito de cheque de tercero, al reversar el documento se consulta si para el payment hay una linea de conciliación con dicho payment, si no la hay entonces se le marca el check de conciliado a ambos documentos.

### Rechazo de Cheque

Para hacer un rechazo de un pago/cobro se debe utilizar el siguiente proceso:

En el mismo se debe indicar el tipo de documento de rechazo y la fecha.

En este caso se indicó que el nuevo cheque es el 1235, al momento de hacer el depósito.

### Cuándo se crea un Cheque Diferido por Cobrar ¿Qué BANCO se define? 

Se define un Banco, no una Cuenta Bancaria.

El banco que se define es el del “CHEQUE DIFERIDO” que el cliente nos está entregando. 

Las cuentas bancarias son con Nro de cuenta y no es necesario al momento de crear un cheque diferido del cliente.

Ahora cuando se deba depositar este cheque diferido si necesitaremos saber exactamente la cuenta bancaria NUESTRA donde se debe depositar.

### ¿Cómo sé si una cuenta bancaria es propia o de un cliente?

Todas las cuentas bancarias esas son propias.

Las Cuentas bancarias del Cliente se definen en la ventana del SDN, pestaña Cuenta bancaria

### ¿En qué afecta cambiarle el número o nombre a una cuenta contable?

Los registros y las definiciones se rigen por ID de cuenta, no por nombre ni número; lo mismo con los SDN, Productos, etc

Como las cuentas se manejan por ID, y no por el número ( a diferencia de Memory por ejemplo); cambiarle el número o el nombre no afecta en nada en toda la definición, el histórico va a pasar a ese número o nombre también. 

### ¿Qué Socio del Negocio se debe definir si se quiere hacer una transferencia entre cuentas propias?

Se debería definir el Socio del Negocio definido en cada Organización. Si no tiene un Socio del Negocio creado con el nombre de la Organización debería generarlo para estos casos.

### ¿Cómo encontrar un pago en una conciliación?

Desde la conciliación: Para buscarlo hay que saber en qué Línea de la Conciliación está el Pago, luego ese nro. se puede ver en la descripción.

Desde el Pago: si el pago está conciliado entonces se podría visualizar la la línea de Conciliación donde se encuentra conciliado en la pestaña “Bank Statement Line” en la ventana Pago/Cobro.

no se puede reactivar y cambiar la organización de una orden de venta reactivando y cambiando la misma ya que existen "Cantidad Reservada Aplicada para dicha Organización" Para poder modificar la orgnaización, y esto es algo que no está controlado ya que no debería hacerse de esta manera, aunque podría siguiendo los siguientes pasos:

1. Reactivar la Orden
2. quitar la cantidad ordenada y poner 0
3. Complear la orden (de esta manera no habrá más ninguna Cantidad Reservada)
4. Reactivar la orden y ahora si cambiar la organización y poner la línea con cantidad y el precio que deseen.

### ¿ Cuál es el comportamiento del sistema cuando anulo un cobro que se encuentra en una línea de conciliación?

cuando se anula un pago/cobro que se encuentra en una conciliación bancaria que no está completa, tanto el pago/cobro anulado como el reversado quedarán con el check de "Conciliado" = N

Si la conciliación está completa, el pago/cobro anulado quedará con el check "Conciliado" = Y, y el reversado con "Conciliado" = N

Este comportamiento es el deseado, debido a que de no realizarse de esta manera (o sea, si se marcaran como Conciliado = Y) el saldo de la conciliación quedaría mal a menos que se borre la línea manualmente.

### ¿Cómo se puede sortear los controles de Cuenta Controlada en los asientos diarios?

Para poder sortear los controles de "Cuenta Controlada" en los asientos diarios en Lote se debe marcar en Y el check de Apertura/Cierre de Ejercicio. CUIDADO esto no se debe realizar sin verificación de un consultor.

## Procesos

### Débito automático de cheques diferidos por Pagar

Proceso que corre en la noche para generar los Débitos de los cheques diferidos por pagar ya entregados.

### Conciliación de Cheque Común Devuelto

Cheque a Pagar

Se debe anular el pago del cheque original. 

Se concilia el “Rechazo del Cheque” que está positivo con la “Reversión”  del Pago.

El asiento se neutraliza.

### Conciliación Bancaria

* Una conciliación sube y se baja con el pago que tenga asignado. 

Al navegar al pago deberíamos ver el movimiento de la cuenta que deja en 0 a la misma.

::: note
El Saldo Inicial no permite editarlo con 0.
El campo saldo inicial se puede modificar a mano, pero nunca podrá ser cero.
:::

En la conciliación, al seleccionar la cuenta bancaria, el campo "Saldo Inicial" se carga automáticamente el importe del campo "Saldo Actual" de la cuenta bancaria (pestaña Cuenta de la ventana Banco). 

El “Saldo Actual” de la Cuenta Bancaria  (pestaña Cuenta de la ventana Banco). 

se calcula con los saldos de las conciliaciones Completas o Cerradas (que es un estado posterior a Completo).

::: note
Es importante que no haya conciliaciones en estado CERRADO, ya que pueden no ser consideradas en los reportes.
:::

### ¿En el proceso de “Generar Cobro Contado” en Recibo de Cobro, en el campo “Cuenta bancaria” aparecen las cuentas bancarias de los clientes o propias también?

Aparecen Cuentas Bancarias propias. Las cuentas Bancarias de Clientes no se definen de esta manera. 

Si bien se puede manejar las cuentas bancarias de clientes, esto es desde la pestaña “Cuenta Bancaria” de la ventana del SDN.
  
Todas esas cuentas bancarias son las de la Organización. Es de donde se envía o desde donde se extrae el dinero de la empresa.

### ¿Qué proceso debe utilizarse para hacer una transferencia?

Este proceso es "Transferencia bancaria multimoneda".

### ¿En el proceso "Transferencia bancaria multimoneda" Qué número deberá definirse en nro. Documento destino?

El nro. que debe definirse en este campo es el mismo que se defina en el campo anterior “nro Documento origen”. para mayor facilidad de encontrar el Pago y el Cobro que se generará se sugiere definir el mismo número tanto de origen como de destino.

### Transferencia bancaria entre bancos propios con cobro "sin conciliar"

Puede existir la posibilidad de que en la transferencia solo se realice la "Conciliación" del "PAGO", y que no deseen conciliar el "COBRO".
Cuando se requiere "Contabilizar" el Cobro (de la transferencia) en una cuenta contable del "BANCO" y no una cuenta de Tránsito como lo es "CHEQUES EN TRANSITO" (cuenta puente) pero no lo quieren CONCILIAR -> entonces deben definir la cuenta contable del banco en el campo de "Pagos sin Conciliar" y ahi quedará correctamente contabilizado (en ventana Banco, pestaña Contabilidad).

## Reportes

### ¿Qué funcionalidad tiene la ventana Informe Financiero?

Desde esta ventana se podrán emitir Informes financieros como Balances, Balancetes, Centro de Costos, etc.

Ejemplo de Informes Financieros

* Balance Mes y Acumulado
* Informe por Centro de Costos Acumulado
* Informe por Centro de Costos MES

### ¿Por qué motivo puede ocurrir que en el Balance comparativo mensual falten columnas de ciertos meses?

De manera aleatoria puede ocurrir que al solicitar el mismo reporte en diferentes fechas quede guardada en memoria la búsqueda anterior y en la nueva búsqueda le falten columnas de meses.
Para corregirlo debería bastar con una de las siguientes opciones:

1. Refrescar directo el reporte desde el formato HTML
2. Borrar Caché y volver a generar el reporte
3. Salir y volver a ingresar al sistema

### ¿Cómo puedo emitir un balance mensual ?

Los balances mensuales se generan desde la ventana “Informe financiero".

### ¿Qué representa la columna Total en un Balance mensual ?

Esta columna representa el total acumulado de la cuenta, es decir, el saldo del mes para el que generamos el balance más el saldo anterior.

### ¿Cómo puedo visualizar el Mayor contable de una cuenta?

El reporte que se utiliza para visualizar el Mayor contable de una cuenta es **“Balance de prueba**”.

¿Cómo se compone el Mayor contable de la cuenta de activo “Cuentas por Cobrar Comerciales”?

Los débitos del Mayor contable de esta cuenta se componen por:.

1. Un Saldo inicial, 
2. Las Facturas
3. Los Reversos de facturas anuladas (en negativo)
4. Parte positiva de las Asignaciones

Los créditos se componen por :

1. Los Cobros 
2. Parte negativa de las Asignaciones.

### ¿ Qué representan los Saldos iniciales que aparecen en los mayores?

Representan el Saldo acumulado dentro del ejercicio para el cual emito el Mayor, es decir, si solicito un Mayor para el período 01/04 - 30/04 figurará en éste un Saldo inicial que corresponderá al saldo acumulado del 01/01 al 31/03.

### ¿Cómo puedo obtener un reporte de las Ventas o de la Facturación mensual?

Esta información puede obtenerse mediante el reporte “Diario Compras y Ventas” marcando el check de Transacción de Ventas,.

¿Cómo hacer el depósito de un cheque diferido?

Para hacer un depósito de cheque diferido vamos a la ventana “Depósito de cheques” aplicamos los filtros que deseemos aplicar y realizamos la búsqueda “Smart browser”.

Luego seleccionamos los cheques a depositar indicando la Cuenta bancaria destino y la Fecha de la transacción y hacemos click en la opción “OK”.