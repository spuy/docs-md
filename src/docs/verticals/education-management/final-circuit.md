---
title: B. Circuito Final
category: Documentation
star: 9
sticky: 9
tag: 
  - Educación
article: false
---

## Flujo Instituciones educativas

### Circuito final

![Flujo educación 2](/assets/img/docs/education-management/edum-image2.png)

### Carga de Extracto de Cuenta Bancaria

Desde la ventana de Estados de Cuenta Bancario generamos un registro para la Cuenta bancaria correspondiente (se ingresa un nombre y la fecha del estado de cuenta). Se aplica tipo de documento "Conciliación Bancaria" y desde Procesos seleccionamos "Carga de Estado de Cuenta".
En la ventana emergente del proceso seleccionamos la cuenta y desde "Cargador de Archivo" es posible montar al sistema el extracto de cuenta bancaria, seleccionando el formato del banco correspondiente (ejemplo: ITAU dólares), así como su lista de conjunto de caracteres (ejemplo: UTF-8).
Cada movimiento del extracto de cuenta cargado se visualizará en diferentes lineas del registro de Estado de cuenta bancario.

![Carga de Extracto](/assets/img/docs/education-management/edum-image6.png)

### Crear Cobros desde Movimientos Bancarios

Sobre cada movimiento bancario, que se visualiza como una línea del estado de cuenta bancario se crean los Pago/cobros (dependiendo de si el movimiento es positivo o negativo en el extracto). Una vez identificados todos los movimientos es posible Completar el estado de cuenta bancario.

![Carga de Extracto](/assets/img/docs/education-management/edum-image7.png)

### Asignación de Pagos Masiva

Una vez generado los Pago/cobros por cada movimiento en Estado de Cuenta Bancario, desde el Proceso de Asignación de Pagos Masiva es posible de forma automática realizar la asignación entre El Cobro y la factura (el documento por cobrar).
Posee filtros para realizar este proceso por Socio del Negocio, por grupo de Socio del Negocio, y permite seleccionar Cuentas por cobrar, Cuentas por pagar o ambas.
Esta rutina cuenta un protocolo para realizar la asignación de un cobro a una factura realizando las siguientes validaciones:

* Por importe exacto.
* Por importe superior al documento por cobrar (siempre asignando a la factura de menor fecha).

En los casos de un cobro por importe menor al documento por cobrar no genera la asignación (ya que no admite asignaciones parciales de forma automática, estas solo se realizan manualmente).

![Asignación de Pagos Masiva](/assets/img/docs/education-management/edum-image8.png)

### Crear Conceptos a Facturar No Recurrentes

Desde el proceso Crear Conceptos a Facturar es posible generar estos conceptos utilizando filtros de Organización y actividad.
La búsqueda muestra los contratos activos de alumnos.
En la sección de "parámetros" se deben definir:
Producto, Precio, Actividad, Fecha (del concepto a generar) y Lista de Precio.
Al seleccionar "Aceptar" se generan los correspondientes Conceptos a Facturar por aquellos registros seleccionados.

![Conceptos a facturar](/assets/img/docs/education-management/edum-image9.png)

### Generar Facturas desde Cuota de Contrato



### Generar Cálculo de Morosidad



###  Envío de Estado de Cuenta Corriente

