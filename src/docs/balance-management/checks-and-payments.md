---
title: Cheques y Pagos
category: Documentation
star: 9
sticky: 9
article: false
---

# **Cheques y Pagos**

# **Rechazo de Cheques al Día**

Para realizar rechazos de Cheques al Día se deberá seguir el siguiente procedimiento:

* Realizar el Match entre el Pago/Cobro en cuestión con su línea de Conciliación Bancaria correspondiente.
* Desde el Pago/Cobro que fue rechazado al ingresar al banco se deberá correr el proceso de “Rechazo de Pago/Cobro”
* Se deberá seleccionar el tipo de rechazo y definir la fecha del mismo y darle OK


* Luego de Rechazar el Pago/Cobro en el campo “Descripción se agregará el texto “ - RECHAZADO”


* Desde la Línea del Estado de Cuenta Bancario se podrá seleccionar el Pago/Cobro Rechazado que estará con el Signo contrario del Documento Rechazado.


* Cobro Rechazado por Cobrar: El cobro en cuestión que quedará “Pendiente de Cobrar” se podrá visualizar desde la ventana “Cheques Diferidos por Cobrar” pero con el Tipo de Documento “Cheque Rechazado”.


* Para realizar el Cobro del Cheque Rechazado una vez sea abonado por el Cliente se deberá utilizar el Smart Browser de Depósito de Cheques para que ingrese al banco el nuevo pago correspondiente.

# **Opciones Para Emitir Cheques**

Muchas empresas emiten Cheques a Pagar a los efectos de cancelar los compromisos con sus proveedores.

Dependiendo del tipo de empresa podrá requerir un procedimiento rápido o un procedimiento completo para la emisión de éstos cheques.

A su vez los cheques emitidos pueden ser del tipo manual o se requerirá la impresión de los cheques mediante el sistema.

## Proceso Rápido de Emisión de Cheques

Este proceso simplemente crea el Cheque y luego se lo entrega al proveedor, asignándolo al comprobante de compra que corresponda.

Este proceso normalmente utiliza la emisión manual de cheques.

## Proceso de Emisión de Cheques

En este proceso se utiliza la Funcionalidad de Selección de Pagos, flujos de trabajo a los efectos de autorizar los pagos a emitir y luego impresión de Cheques mediante el sistema.

# **Gestión de Cheques Manuales por pagar**

## **Libretas de Cheques Propios**

### **Libreta de Cheques**

Para emitir cheques manuales en libretas, se deberán:

* crear las libretas/resmas en el sistema
* crear las secuencias para las mismas

Para ello se deberá ir a la ventana “Libreta/Resma Cheques” y “Secuencia de Documentos Controlados”.

Primero deberá generar un nuevo registro en la ventana “Libreta/Resma Cheques”, completando el Nombre y la cuenta bancaria de la misma.

Luego de generada se deberá asignar la numeración que tendrá dicha libreta de Cheques. Para ello se deberá navegar en el campo *“Numeración de Libreta”*, abriendo la ventana *Secuencia de Documentos Controlados*.

En la ventana de secuencia de documentos controlados, se debe ingresar:

* nombre
* descripción opcional
* número de inicio y fin de la libreta

si fuera necesario un sufijo o prefijo para la numeración

Luego de guardar el registro, mediante el botón “Generar Líneas” se cargarán los datos en la pestaña “Control”, donde se visualizará el estado de los cheques.

Aquí se podrá ver si ya han sido emitidos, en qué fecha y por qué documento se emitió.

De regreso en la ventana de libreta/resma de cheques, se debe ingresar el nombre, nombre a ser impreso, cuenta bancaria y la secuencia del documento (definida anteriormente).

### **Visualizar estado de los Cheques emitidos**

En la pestaña “Cheques” se visualiza el estado de los mismos.

# **Procesando transacciones de Caja/Bancos**

En Solop ERP puede agregar rápidamente transacciones que registran los cobros de los clientes, los pagos a los proveedores, los reembolsos recibidos de proveedores, cargos y comisiones bancarias, retiros de Caja/Banco y diversos ajustes. Además, puede controlar las cuentas de Caja/Banco y administrar efectivamente estas transacciones.

Aquí, leerá cómo registrar rápidamente las transacciones en dinero de cualquier tipo y cómo el sistema las procesa.

## **Comprender los tipos de transacciones de Caja/Banco**

Dependiendo del propósito de la transacción, puede registrar y procesar transacciones de Caja/Banco de los siguientes tipos:

*Pago/Cobro* : crea una transacción tipo Pago para registrar una operación realizada en Caja/Banco, como un cargo bancario, intereses, un pago de un cliente, un pago a un proveedor o un pago desconocido.

*Transferencia recibida* : se crea una transacción de tipo Cobro cuando registra una transferencia de fondos entre cuentas en Caja/Banco; corresponde a los fondos recibidos a la cuenta de destino.

*Transferencia* emitida: se crea una transacción de tipo Pago cuando registra una transferencia de fondos entre cuentas en Caja/Banco; corresponde a los fondos enviados desde la cuenta de origen.

Para una transferencia de fondos, siempre hay una transacción del tipo Transferencia recibida y una transacción del tipo Transferencia emitida .

*Pago anticipado* : crea una transacción de este tipo para registrar un anticipo o pago inicial a un proveedor si el pago se realizó en Caja/Banco. Las transacciones de este tipo afectan las cuentas contable y las cuentas de proveedores en Cuentas por pagar.

*Reembolso del proveedor* : crea una transacción de este tipo para registrar un reembolso por un pago anticipado o un ajuste de débito si el reembolso se realizó en Caja/Banco. Las transacciones de este tipo afectan las cuentas contable y las cuentas de proveedores en el módulo Cuentas por pagar.

*Cobro Cliente* : crea una transacción de tipo Cobro para registrar el cobro de un cliente entrante que se realizó en Caja/Banco. Las transacciones de este tipo afectan las cuentas del Libro mayor y las cuentas de clientes en el módulo Cuentas por cobrar.

*Cobro* : crea una transacción de tipo Cobro para registrar una operación realizada en Caja/Banco, como un ingreso bancario, ingresos por intereses.

*Depósito Bancario* : crea una transacción de este tipo Pago si desea depositar pagos de clientes o reembolsos de proveedores en una cuenta de Caja/Banco. Las transacciones de este tipo afectan las cuentas contables.

*Depósito Bancario* anulado: crea una transacción de este tipo si desea anular un depósito. Las transacciones de este tipo afectan a las cuentas contables que participaron en el depósito relacionado.

### **Ingresando Transacciones de Pago/Cobro**

Dependiendo el Tipo de Transacción que desee ingresar debe tener claro que siempre deberá ingresar:

* Tipo de Documento
* Cuenta Bancaria
* Moneda
* Fecha
* Socio de Negocio

### **Procesando Pagos de Documentos por Pagar**

Al momento de ingresar un Pago, si éste está vinculado a un Documento por Pagar, puede asignarlo en ese momento.

También puede asignarlo posteriormente de manera manual en Asignación de Pagos.

En ambos casos se realizará el asiento contable de asignación.

### **Procesando Cobro de Documentos por Cobrar**

Al momento de ingresar un Cobro, si éste está vinculado a un Documento por Cobrar, puede asignarlo en ese momento.

También puede asignarlo posteriormente de manera manual en Asignación de Pagos.

En ambos casos se realizará el asiento contable de asignación.

## **Procesamiento de una entrada de Caja/Banco**

### **Registro de un Pago/Cobro**

Usted crea una entrada de Caja/Banco utilizando la ventana de Pago/Cobro. Selecciona una cuenta Bancaria y un tipo de entrada, moneda,

> cambia la fecha de la transacción. A continuación, agregue los detalles

de la transacción.

Para cada detalle de transacción, puede seleccionar un SDN y un cargo si corresponde.

\-———————————————————————————————————–

#### **Ingreso rápido de un Cobro**

#### **Aprobar una entrada de efectivo**

#### **Visualización de una entrada de efectivo**

#### **Monitoreo de una Transacción de Caja**

#### **Cuenta Caja/Banco detallada**

Puede ver información resumida o la lista completa de transacciones relacionadas con efectivo realizadas en la cuenta durante este período. La información se recopila de los módulos Administración de efectivo, Libro mayor, Cuentas por pagar y Cuentas por cobrar.

#### **Seleccionando la vista**

#### **Entrada rápida de transacciones**