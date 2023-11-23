---
title: Financiera/Contable
category: Documentation
star: 9
sticky: 9
article: false
---

## Financiera/Contable

### ¿En el proceso de “Generar Cobro Contado” en Recibo de Cobro, en el campo “Cuenta bancaria” aparecen las cuentas bancarias de los clientes o propias también?

Se muestran las Cuentas Bancarias propias. Las cuentas Bancarias de Clientes no se definen de esta manera. 

Si bien se pueden gestionar las cuentas bancarias de clientes, esto es desde la pestaña “Cuenta Bancaria” de la ventana del SDN.  
**Todas** esas cuentas bancarias (en el proceso mencionado) son las de la Organización. Es donde se envía o se extrae el dinero de la empresa. 
  
### ¿Cuándo se crea un Cheque Diferido por Cobrar, ¿Qué BANCO se define?

Se define un Banco, no una Cuenta Bancaria.

El banco que se define es el del “CHEQUE DIFERIDO” que el cliente nos está entregando. 

Las cuentas bancarias son con Nro de cuenta y no es necesario al momento de crear un cheque diferido del cliente.
  
Ahora cuando se deba depositar este cheque diferido si necesitaremos saber exactamente la cuenta bancaria de la organización donde se debe depositar.

### ¿Cómo sé si una cuenta bancaria es propia o de un cliente?

Todas las cuentas bancarias (para cobro) son propias.

Las Cuentas bancarias del Cliente se definen en la ventana del Socio del Negocio, pestaña Cuenta bancaria

### ¿En qué afecta cambiarle el número o nombre a una cuenta contable?

Los registros y las definiciones se rigen por ID de cuenta, no por nombre ni número; lo mismo con los Socio del Negocio, Productos, etc

Como las cuentas se manejan por ID, y no por el número ( a diferencia de Memory por ejemplo); cambiarle el número o el nombre no afecta en nada en toda la definición, el histórico va a pasar a ese número o nombre también (o sea, cambiarán el número o nombre de manera retroactiva, y no solo para tiempo futuro)

### ¿Qué representa el SALDO INICIAL en el reporte de estado de cuenta corriente?

Representa el saldo de todos los documentos para atrás, su saldo abierto.

Si se emite el reporte desde la fecha desde pero para atrás debería dar el mismo importe.

### ¿Qué es un split?

Split es un proceso masivo de reparto de ingresos en cada Contrato según la definición de Split que tenga. En el proceso de Split se generan cálculos de Comisión de tipo “Split” y a partir de ellas se generan Órdenes de Compra y Venta en las organizaciones que corresponden.

### cuando creamos pagos desde el botón procesos y se pagan gastos sin facturas qué debemos elegir en el campo proveedor?

Si se selecciona la opción en el Tipo de Transacción: Cargo Bancario, el pago será generado con el cargo seleccionado en el campo "Cargo" pero le definirá siempre el Socio del Negocio definido en el Banco de la Cuenta Bancaria desde donde se genera, justamente para que no tengan que elegir el Socio del Negocio que corresponde.
Opcionalmente la lista que se desplega como "Cargo" cuando selecciona la opción de Cargo Bancario también puede ser filtrada para que sólo apareszcan los cargos definidos como Cargos Bancarios.