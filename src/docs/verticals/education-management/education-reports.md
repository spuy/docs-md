---
title: Reportes Educación
category: Documentation
star: 9
sticky: 9
tag: 
  - Educación
article: false
---

## Reportes Operativos

Los Reportes Operativos muestran transacciones de documentos.

### Reporte Miembros de Familia

Muestra los miembros que componen cada Familia

Parámetros:

* Organización 
* Familia
* Socio del Negocio

Vistas del Reporte de Ordenes:

Miembros de Familia por Organización y Familia

### Detalle de Líneas del Contrato

Muestra las líneas que integran cada Contrato de Servicio

Parámetros:

* Organización
* Contrato de Servicios
* Actividad
* Familia
* Estado del Documento
* Fin Programado
* Fecha de Ingreso
* Activo

### Listado de Ordenes de Compras y Ventas

Muestra las líneas de las Órdenes, tanto Órdenes de Venta como Órdenes de Compra.
Indicando Transacción de Venta: SI/NO
                   
Vistas del Reporte de Ordenes:

* Listado de Ordenes de Compra por Nro de Orden
* Listado de Ordenes de Compra por Tipo de Orden
* Listado de Ordenes por Moneda y Contrato

El listado de Ordenes detalla todas las órdenes existentes en el sistema, tanto de Venta como de Compra detallando los siguientes importes:

* Importe Ordenado
* Importe Entregado
* Importe Facturado

* Importe Pendiente de Entregar
* Importe Pendiente de Facturar
* Importe Entregado No Facturado
* Importe Facturado No Entregado

### Transacción de la Orden

Reporte que presenta cabezales de las Órdenes de Compra o de Venta entre determinadas fechas.

Filtros: 

* Organización
* Fecha de la Orden Desde-hasta
* Tipo de Documento
* Estado de la Orden

### Requisiciones Abiertas

Reporte presenta un listado de Requisiciones en el sistema

Filtros:

* Usuario
* Producto
* Fecha

### Reporte de Solicitudes de Cotización (sin respuesta)

Muestra las líneas que de las solicitudes no respondidas

### Reporte de Solicitudes de Cotización (con respuesta)

Muestra las líneas que de las solicitudes respondidas:

* Proveedor
* Producto
* Descripción
* Cantidad
* Precio
* Unidad
* Solicitante

### Saldos Pendientes

Muestra los documentos por cobrar y documentos por pagar abiertos de los Socios del Negocio y los Pago/Cobros y Recibos no asignados a una fecha determinada.

Vistas:

* Saldos Pendientes a la Fecha Simple

### Saldos Abiertos a la Fecha

Muestra los documentos por cobrar y documentos por pagar con saldos pendientes de los Socios del Negocio, a una fecha determinada.
No considera los Pago/Cobro sin asignar.
No se emite por moneda de forma separada.

Parámetros:

* Organización
* Grupo de SDN
* SDN
* Tipo de Documento
* Estado de Cartera

Vistas:

* Saldos Pendientes a la Fecha Simple

### Estado de Cuenta Corriente

Muestra todas las transacciones tanto de Ventas como de Compras de los Socios del Negocio, con sus respectivos pagos y cobros entre fechas (Marcando Ventas SI/NO).

Parámetros:

* Socio del Negocio
* Moneda
* Fecha desde Hasta

### Diario de Compras y Ventas

Muestra todos los documentos por cobrar y documentos por pagar emitidos, mostrando de forma separada el importe fuente, tasa de cambio del documento y los valores contables.

Vistas:

* Por Documento
* Por Día
* Por Impuesto

Parámetros:

* Organización
* Fecha de facturación
* Fecha de Contabilización
* Impuesto
* Moneda
* Transacción de Ventas

### Antigüedad de Documentos 

Muestra la antigüedad  de los documentos por cobrar y documentos por pagar que están pendientes de cancelación (Indicando Ventas SI/NO).
Los Documentos en Moneda Extranjera los muestra en la moneda esquema al TC de contabilización.

Parámetros:

* Tipo de conversión: Puede seleccionar SPOT o Period End
* Moneda: Puede seleccionar una moneda o todas las monedas
* Transacción de Venta: Puede seleccionar SI para obtener los documentos de Venta o NO para obtener los documentos de compra
* Grupo de Socio del Negocio:
* Organización:
* Socio del Negocio:
* Lista Fuentes: Para obtener detalle de los documentos

### Antigüedad de Documentos con Pagos Revaluados

Muestra la antigüedad  de los documentos por cobrar y documentos por pagar que están pendientes de cancelación incluyendo los pagos sin asignar y la revaluación de los documentos.

Los Documentos en ME los muestra en la moneda esquema al TC de contabilización.
Revalúa al Tipo de Conversión seleccionado al TC del día del reporte los saldos de los documentos por cobrar y documentos por pagar, y Pagos pendientes de asignar en ME.	

Parámetros:

* Tipo de conversión: Puede seleccionar SPOT o Period End
* Moneda: Puede seleccionar una moneda o todas las monedas
* Transacción de Venta: Puede seleccionar SI para obtener los documentos de Venta o NO para obtener los documentos de compra
* Grupo de Socio del Negocio
* Organización
* Socio del Negocio
* Lista Fuentes: Para obtener detalle de los documentos
* Incluir Pagos. SI/NO , para mostrar los Pago/Cobros sin asignar
* Antigüedad sobre Fecha de Factura: Muestra la Antigüedad considerando la fecha de la factura en vez de la Fecha de Vencimiento

Vistas:

* Antigüedad con Pagos Revaluado
* Antigüedad con Pagos Revaluado Completa

### Reporte Orden de Pago

Imprime la Selección de Pago realizada

### Pagos Generados por Selección de Pagos

Este reporte permite visualizar todas las Selecciones de Pago que han sido generadas en el sistema y que han sido procesadas (Muestra Selección de Pagos Completas y Anuladas) junto con cada uno de las Líneas de Pago generadas con sus correspondientes datos del SDN y el Pago generado.

### Pagos sin Asignar 

Muestra los Pago/Cobros que no están asignados a DXC o DXP.

Parámetros:

* Organización
* Sello
* Cuenta Bancaria
* Moneda 
* Fecha
* Socio del Negocio
* Estado del Documento

### Facturas de Proveedores sin Entregar

Muestra todas las líneas de facturas que fueron ingresadas al sistema y que su recepción no fue realizada.

Parámetros:

* Organización 
* Sello Proyecto
* Proyecto
* Sello Orígen 
* Proveedor
* Nro.OC
* Nro. Factura
* Moneda
* Monto OC
* Monto Factura
* Monto entregado
* Monto facturado no entregado

Cuenta Contable:
12200   Entregas sin Factura

### Reportes Financieros

Los Reportes Financieros muestran transacciones de documentos

### Reporte de Cheques Emitidos

Cheque Común o Diferido (por pagar y por cobrar)
Muestra los cheques de pago diferido tanto emitidos como recibidos.
Muestra cheques completos y anulados con los siguientes parámetros:

* Organización
* Moneda
* Tipo de Cheque
* Socio del Negocio
* Fecha de Emisión
* Fecha de Vencimiento

### Reporte de Notas de Crédito Emitidas a Clientes

Muestra las Notas de Crédito emitidas a clientes y su asignación.

Parámetros:

* Organización
* Sello:
* Fecha: Desde Hasta
* Socio del Negocio
* Grupo de Socio del Negocio

### Pagos sin Conciliar

Muestra los Pago/Cobro que no están conciliados.

Parámetros:

* Organización
* Sello
* Cuenta Bancaria
* Moneda 
* Fecha
* SDN
* Estado del Documento

Los muestra acumulados por Organización, Cuenta Bancaria y Moneda.

### Reporte de una Conciliación Bancaria

Muestra el detalle de una Conciliación Bancaria desde la barra de herramientas presionando Reporte.

Detalla en el cabezal la información principal de la conciliación así como también el Total de Pagos sin Identificar.

Mostrará el detalle de esa conciliación en formato PDF.

### Reporte de Conciliación Bancaria

Muestra los detalles de una o varias conciliaciones bancarias.

Parámetros:

* Banco
* Cuenta bancaria
* Conciliación bancaria
* Fechas de Estado de Cuenta
* Estado del Documento

### Reporte de Pagos sin Identificar

Para ver los Pagos que están todavía sin Identificar se deberá definir en los parámetros del reporte "Asignado = NO" ya que al identificarse los mismos se asignarán.

Se podrán visualizar tanto Cobros si se define el check "Es Cobro = Y" como Pagos si se define el Check "Es Cobro = N"

Parámetros:

* Organización
* Sello
* Cuenta Bancaria
* Moneda 
* Fecha
* Socio del Negocio
* Estado del Documento
* En Cobro
* Asignado

## Reportes Contables

Los Reportes Contables muestran información basada en cuentas contables

### Balance de Prueba (Mayor Contable)

Muestra las transacciones correspondientes a la cuenta contable seleccionada conjuntamente con los filtros seleccionados.
Detallada o resumida.

Parámetros:

* Período
* Fecha
* Organización
* Cuenta
* Socio del Negocio
* Actividad

Vistas:

* Mayor Contable Completo
* Mayor Contable por SDN

### Aprobaciones de Asientos Manuales

Este Reporte muestra los asientos contables y sus aprobaciones cuando correspondan.

* Fecha de Creación del Asiento
* Usuario que lo creó
* Fecha de Aprobación
* Usuario Aprobador

### GL Category: Manual   

Muestra los asientos manuales

Vistas:

* Asientos por Fecha Contable
* Asientos por Número de Asiento
* Asientos por Tasa de IRAE

### Detalles de Asientos Contables 

Este Reporte muestra los asientos contables.

### Asiento Diario Simple

Se muestra por ventana

### Asiento Diario en Lote

Se muestra por ventana

### Informes Financieros

Son informes que muestran saldos de cuentas contables

### Ventas por Contrato (Mes y Acumulado)

Este Reporte muestra las ventas que tengan Contrato de Cliente Final.

### Balance de Cuentas Contables

Muestra  los saldos a un período de todas las cuentas contables de una Organización o Compañía.

Columnas:

* Acumulado hasta el mes anterior
* Mes
* Acumulado incluyendo el mes

### Estado de Resultados Acum Anterior, Mes, Acumulado 

Muestra  los saldos a un período de todas las cuentas contables de Resultados de una Organización o Compañía.

Columnas:

* Acumulado hasta el mes anterior
* Mes
* Acumulado incluyendo el mes


### Estado de Situación Patrimonial 

Muestras las cuentas de Balance y los movimientos en el mes.

* Saldo Inicial
* Movimientos
* Saldo Final

### Estado de Situación Patrimonial en Moneda USD

Muestra Saldos iniciales, movimientos débitos y créditos y saldos finales en moneda fuente USD y moneda contable.

### Resultados por Actividad (mes)

Muestra un balance de cuentas contables de resultados separadas por actividad.

Filas: Cuentas Contables de resultados

Columnas (actividades definidas):

* Kinder
* Toddlers
* Little Toddlers
* Nursery
* Preparatory
etc.

### Resultados por Actividad (acumulado)

Muestra un balance de cuentas contables de resultados separadas por actividad.

Filas: Cuentas Contables de resultados

Columnas (actividades definidas):

* Kinder
* Toddlers
* Little Toddlers
* Nursery
* Preparatory
etc.

## Reportes de Seguridad del Sistema

### Reporte de Usuarios

Detalla todos los usuarios del sistema. Activos e Inactivos.

### Detalle de Usuarios asignados a Roles

Muestra los usuarios que poseen permisos para cada rol.

### Detalle de accesos al Rol

Detalla todos los accesos que tuvieron los usuarios con cada rol.

### Detalle de actividad en el sistema

Detalla todas las acciones que tuvo cada usuario en el sistema.

### Detalle de Información completa del Socio del Negocio

Detalla los cambios que tuvo la ventana de Socio del Negocio en cada uno de sus campos.
