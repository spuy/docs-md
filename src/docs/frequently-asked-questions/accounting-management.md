---
title: Gestión contable
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión Contable

### Definición de Impuestos

Para gestionar diferentes cuentas contables definidas para un impuesto, como por ejemplo si es un Impuesto de GASTO o de VENTA, se debe marcar el check en la Tasa de Impuesto 

Preguntas Frecuentes:  en un caso se reportó una cuenta que quedó sin número y fuera del árbol en Elemento Contable. El problema con esta cuenta se ve que fue mal creada. Al parecer al ser creada quedó sin tener definido el MENÚ. 
Es una funcionalidad del sistema que lo necesita para que se pueda ver en el árbol. cuando pasa esto hay que verificar si tiene bien definido el Árbol en el elemento contable (Cuenta contable).

::: note
Seguramente esto sucedió debido a que se creó manualmente sin "Copiar Cuenta" por lo que no se está seteando el menú por defecto. 
:::

### Balance de Prueba

#### Saldo inicial del Balance de Prueba

El saldo inicial del Balance de Prueba sólo brinda el saldo que posee la cuenta en cuestión pero en el AÑO del período que se definió “Desde”. Si la cuenta trae más saldo del año anterior no se mostrará.

**Mejora Pendiente:** Esta funcionalidad está OK si la empresa tiene como Cierre de Ejercicio el 31/12 y si realiza el Cierre y Apertura del Ejercicio. Pero si la empresa tiene como fecha de cierre de ejercicio en una fecha DIFERENTE al 31/12, este reporte presentará inconvenientes. 

::: note
En este caso de se debería definir un Saldo Inicial según dicha Fecha (Diferente al 31/12). 
:::

### Explicación del Saldo de Cuentas Contables PUENTE

* Cheque Depósitos no Asignados:

El saldo de esta cuenta refiere a los Pagos que no han sido asignados aún. 

Si Todos los pagos son generados de manera correcta al completarse y su importe de  “Totales con sobre/sub pago” es correcto, este Reporte de Pagos sin Asignar debería corresponderse con el Mayor “Cheque Depósito no Asignados”.

### Como abrir período del año y mes

#### Año, Calendario y Período:

#### Abrir periodo del año y del mes:

Ventana: Año Calendario y Periodo

Pestaña: Calendario

Pestaña: Año (Boton multiple, Seleccionar el año)

Pestaña: Periodo (boton multiple, seleccionar mes)

Pestaña: Control de Periodo (boton multiple, validar columna “Estado del periodo”) debe decir “Abierto”.

En caso contrario (el campo “Estado del Periodo” debería indicar en este momento “Nunca Abierto”), seleccionar el Documento, boton monoregistro, hacer clic en la ventana desplegable “Accion del Periodo”, seleccionar la acción que se desea (en este caso “Abrir”), luego clic en el boton “Abrir/Cerrar” y se abrirá una ventana para “Abrir/Cerrar”, clic en OK.

El estado del Período debería indicar “Abierto”.

### Errores

**Error: Período cerrado**

Para abrir un periodo se debe ir a la ventana Año Calendario y Periodo seleccionar el periodo que corresponda y luego en Control de periodo se podrán visualizar todos los documentos para los cuales ese periodo está abierto.

Observación: si un período se cierra “Permanentemente”, luego no se puede volver a abrir, ya que la SQL del update que realiza el sistema, filtra para no tomar en cuenta los registros con estado “P” (cerrado permanentemente). Lo que se debe hacer en ese caso, es actualizar los registros cambiando su estado a “C” (Cerrado).

### Tasa de Cambio

#### Creación de Tasas de Cambio:

Entrar como Administrador, y en el caso de que la Compañía tenga varias Organizaciones, entrar como asterisco (\*).

Ventana: Tasa de Cambio

Se debe tener los valores de: Moneda desde y hacia, factor de conversión y rango de fecha de validez. Con esos valores se crea el registro en el caso de que se requiera.

En un soporte ocurrió que falló la actualización automática de la tasa de cambio diaria. Por lo cual, quedaron días sin cotización y al iniciar el proceso de cierre de mes identificaron que había asientos con valor cero. Se debió generar la actualización de los tipos de cambio por los días faltantes y luego recontabiliizar los casos reportados.

### Creación de Moneda:

Para crear monedas y activarlas se ingresa como System Administrator, en la

Ventana: Moneda

Se crea la moneda, se puede dejar por defecto los valores de precisión. Si es una moneda nueva automáticamente queda activada.

Explicar las diferentes ventanas de asientos Diario, Diario Contable, Asientos Contables etc

### Ventana de Asiento Diario

#### Modificar Fecha Asiento Diario Simple:   un documento completo?

**Ventana:** Asiento Diario Simple

En el campo F.Documento y Fecha Contable (fecha documento), se actualiza el campo F.Documento y luego se toca le boton “Contabilizado”.

A la derecha del campo, hay un boton de control, con el se cambia la fecha, al presionar el boton “Contabilizado” se abre la ventana “Informacion Contable” con dos subventanas llamadas “Entrar consulta” y “Ver resultado”. Estando parado en “Ver resultado”, presionar el boton “Re-Contabilizar”.

En los casos en los que el documento esta reversado, se debe actualizar por base de datos, con el comando (es solo un ejemplo, el ID del registro despues del signo de igual sera obviamente distinto, asi como la fecha que se quiera actualizar)

TODO cambio de documentos que involucre cambio de fecha, requiere que luego del cambio se toque el boton de “Recontabilizar” dado que el cambio de fecha implica la ubicacion en el tiempo de movimientos contables y si no se reorganiza las cantidades, el resultado del analisis contable no sera correcto.

### Procesos de Diferencia de Cambio

#### Proceso de “Factura Pérdida/Ganancia Diferencia de Cambio No Realizada”

En proceso “Factura Pérdida/Ganancia No Realizada”, si al ejecutarlo se obtiene error de que obtiene más de un registro para el mismo ID de asiento, esto se debe a que la factura tiene asociados más de un programa de pagos (pestaña de vencimientos).

#### Proceso de Diferencia de Cambio Entregas/Recepción No Facturadas

#### Diferencia de Cambio Realizada

Esta es la manera como se comporta el sistema:

* Envía Cuentas de **GANANCIA** en los **Documentos por Cobrar** o **Recibos de COBRO** y envía a cuentas de **PERDIDA** en los **Documentos por Pagar** y **Recibo de Pago**
* Envía a Cuentas De Impuestos DIFERENTES según sea el Documento por Cobrar o por Pagar (Factura cliente o Factura Proveedor) o si es según un Ajuste por Diferencia de Cambio (Asignación)

#### Asignación entre Documentos por Pagar/Cobrar

Cuando se realiza una Asignación entre Factura y Nota de Crédito, el ajuste de Diferencia de cambio que realiza es **sólo** por la diferencia entre “Cuentas por Cobrar Comerciales” sin ajustar el Impuesto en cuestión ya que dicho impuesto se entiende se ajustó correctamente de manera implícita en el Asiento de la Nota de Crédito.

### **Proceso “Asignación de pagos”**
  
En el proceso de "Asignación de pagos" los pagos sin asignar que se hayan hecho 

con cheques diferidos aparecerán en la parte inferior de la pantalla, junto con las 

facturas, ya que éstos funcionan como una Nota de crédito.

#### ¿Cómo hago para re contabilizar un asiento?

Se debe abrir el asiento desde el documento en cuestión y hacer click en el botón “Re-Contabilizar” ubicado abajo a la izquierda. 

El Período de la fecha que dicho asiento fue contabilizado debe estar ABIERTO para permitir re-contabilizar.

#### ¿Cómo se puede sortear los controles de Cuenta Controlada en los asientos diarios?

Para poder sortear los controles de "Cuenta Controlada" en los asientos diarios en Lote se debe marcar en Y el check de Apertura/Cierre de Ejercicio. CUIDADO esto no se debe realizar sin verificación de un consultor.

#### ¿Qué es un split?

Split es un proceso masivo de reparto de ingresos en cada Contrato según la definición de Split que tenga. En el proceso de Split se generan cálculos de Comisión de tipo “Split” y a partir de ellas se generan Órdenes de Compra y Venta en las organizaciones que corresponden.

#### ¿Si Reactivo una Orden de Honorarios, le cambio el Contrato, la Completo y Recontabilizo el asiento de reconocimiento, cambia el Contrato en el Asiento?

No, el contrato no cambia.

El asiento de reconocimiento se genera desde un proceso de Reconocimiento masivo, no es el asiento del documento Orden de Venta, son documentos diferentes.

En todo caso, se tendría que también reactivar, modificar el contrato en el Asiento (Lote de Asiento Diario) y modificar ahi el Contrato de servicio. De todos modos esto es riesgoso ya que se estaría haciendo muy manual y uno se podría olvidar de algo.

Lo mejor en este caso sería realizar el ajuste de un reconocimento generando el Documento NEGATIVO que se desea corregir (IGUAL AL QUE SE GENERO MAL) y generar uno nuevo con el dato correcto.