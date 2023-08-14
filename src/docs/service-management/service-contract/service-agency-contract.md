---
title: Contrato de Servicio de Agencia
category: Documentation
star: 9
sticky: 9
tag: 
  - Agencia
article: false

---

## **Contrato de Servicio de Agencia**

El Contrato con un Socio de Negocio resume en un documento la representación de determinado acuerdo realizado con un Tercero. Este Acuerdo puede ser tanto con un Cliente como con un Proveedor y regulará condiciones para las transacciones a realizar entre ambos.

## **Cabezal de la ventana Contrato de Servicio**

Aquí deberán definirse los siguientes datos:

* **Marca:** Aquella que le facturará al cliente (siempre se debe facturar con una única marca).
* **Organización:** Desde donde se le facturará al cliente.
* **Socio del Negocio:** Identifique la contraparte del contrato.
  * **Fechas del Contrato** 
    * Fecha del Documento: Fecha en que se suscribe el Contrato
    * Fecha contable
    * Fecha Inicio
    * Fin Programado
    * Duración: En unidad de duración.
    * Unidad de duración: Generalmente es Mes, (también puede ser Segundo, Minuto, Hora, Día o Año).
    * **Lista de precios**
    * **Agente comercial:** Encargado del contrato
    * **Check “OC Necesaria para Facturar”**

      Según el Contrato con el cliente se puede definir si es obligatorio o no que el Nro. de la Orden de Compra del Cliente esté definido en las Factura al cliente o no.

      Para que este check pueda ser marcado, para aquellos Socios de Negocio que su contrato tiene definido “OC Necesaria para Facturar” se deberá completar el campo “OC Cliente” con el número de la Orden de Compra del Cliente y luego Marcar el “Permite Facturar” = SI

## **Cálculo de Honorarios**

El cálculo automático de honorarios (Cálculo de comisiones) se calculará al momento de completar las Órdenes de venta y lo harán sobre éstas, no sobre la Facturación.

Accederemos a él mediante el ícono de Documentos relacionados.

Al momento de completar la Orden de venta se calcularán tantos Cálculos de comisiones como Tipos de honorarios tenga definido el Contrato de servicio.

En el caso que ningún producto de la Orden de venta ingrese en los criterios de un Tipo de honorario este Cálculo de comisiones de creará con importe 0.

La Orden de Venta de Honorarios se generará desde el Cálculo de Comisiones creado al completar la Orden de Venta al cliente.

Podremos acceder a la misma desde la ventana Cálculo de Comisiones mediante el ícono de documentos relacionados.

Esta se genera en una Orden de Venta distinta de la Orden de Venta de la Inversión del Cliente.

## **Definición de Honorarios**

Según el Contrato de servicio se obtendrán sus correspondientes Honorarios variables, según la definición que exista en la pestaña Honorarios, es decir, según los filtros definidos en estos registros.

## **Líneas del Contrato de Servicio de Agencia**

Se definen los distintos Productos/Servicios que intervienen en el Contrato de Servicios de manera recurrente.

* **Producto:** Servicio que se brinda
* **Recurrencia:** 
  * Recurrente SI/NO
  * Indefinido SI/NO
  * Tipo de Frecuencia: 
    * Semana
    * Mes
    * Trimestre
    * Año
  * Frecuencia
* **Cantidad**
* **Monto de Línea de Contrato** 
  * Precio: Precio a facturarse cada vez

  ## **Orden de Compra Cliente Obligatoria para Facturar**

Según el Contrato con el cliente se puede definir si es obligatorio o no que el Nro. de la Orden de Compra del Cliente esté definido en las Factura al cliente o no.

Para aquellos Socios de Negocio que su contrato tiene definido en Y el check de “OC Necesaria para Facturar” en su contrato, para que el check de “Permite Facturar” pueda ser marcado en las Órdenes de Venta, se deberá completar el campo “OC Cliente” con el número de la Orden de Compra del Cliente y luego Marcar el “Permite Facturar” = SI\*\*

## **Partes del Contrato de Servicio de Agencia**

Esta pestaña define las diferentes partes que intervienen en un Contrato de Servicios.

En cada “Parte” del contrato se puede definir por defecto un Sello específico y una “Empresa” para vincular de manera automática a determinado tipo de servicios (tipos de empresa). Según la definición que se tenga en sus Partes del Contrato es como se definirá el “Sello Origen” definido en cada uno de los Proyectos, según la Categoría de Proyecto en cuestión.

Los Tipos de empresa definidas son:

**Categoría de Proyecto**                                                  **Tipo de Empresa**

Proyecto de Agencia                                                          Agencia Creativa

Proyecto de Medios                                                           Agencia de Medios

                                                                             Agencia Contratista

Proyecto RRPP                                                                Agencia RRPP

Proyecto de Medios Digitales                                                 Agencia de Medios Digitales

Si no se obtuvo sello de origen se lanza una excepción.

IMPORTANTE: Según el campo “Tipo de empresa”, el sistema obtiene el primer sello que encuentre para el primer registro de la pestaña “Partes del contrato”.

A continuación un ejemplo de como se deberá definir un registro de “Parte del Contrato”. En este caso, para los Proyectos de categoría “Proyecto de Agencia” se definirá el Sello “Sello Creativo” debido a que es el que tiene asignado el Tipo de Empresa “Agencia Creativa”

De esta forma en los Proyectos se definirá el “Sello Origen” según el Tipo de empresa que tenga definida el Contrato con el cual estoy trabajando.

## **Actualización de Cálculo de Honorarios**

Se deberán seguir los siguientes pasos:

* Desde el Contrato de servicio, pestaña Honorarios modificaremos el campo “Multiplicador” al Honorario en cuestión que queramos modificar, indicando aquí el nuevo valor. Guardamos el registro.
* Luego desde la Orden de venta a la que se aplicaron los honorarios correremos el proceso “Actualizar Cálculo de Comisión de Orden”

De esta manera los Cálculos de comisiones generados antes de aplicar este proceso serán Cerrados al igual que su Orden de venta Honorarios.

Se generarán los nuevos Cálculos de comisiones aplicando los nuevos porcentajes definidos y una nueva Orden de venta honorarios en estado Completo.

## **Devoluciones a Cliente**

Se deberá realizar la “Devolución de Cliente” cuando un Cliente solicita o el Ejecutivo de Ventas solicita en nombre del cliente, la emisión de una Nota de Crédito debido a una “Entrega” (Delivery) No aceptada por el cliente.

Esta “Devolución Cliente” deberá ser generada desde el Proceso “Generar Devoluciones”, seleccionando la Orden de Venta del Cliente que se querrá devolver.

**Generar Devoluciones Sb**

Este proceso se deberá realizar si se desea “Corregir” un checking ya realizado en un Período anterior que se encuentra ya CERRADO. Lo que realizará esta “Devolución Cliente” son 2 acciones:

Generar un Movimiento contrario a la Entrega realizada por el Checking. Restando así el Ingreso reconocido con dicha “Entrega”

Generar una Devolución de Proveedor Espejo, es decir se generará una Devolución Cliente y una Devolución Proveedor por la MISMA CANTIDAD definida. Dichas devoluciones luego quedarán a la espera de sus correspondientes Notas de Crédito. Administración podrá ver las Devoluciones Cliente que están pendientes de Generar Nota de Crédito y del lado del Proveedor estarán las “Devoluciones Proveedor” (o RMA) pendientes de generar Notas de Crédito Proveedor cuando estas lleguen.

## **Devolución al Proveedor**

El proceso de “Generar Devoluciones” generará también una “Devolución Proveedor” por la Cantidad que se definió en el proceso, el precio será tomado desde la Orden de Compra correspondiente a la Recepción que se estará devolviendo.

Para generar la Nota de Crédito del Proveedor se deberá ir directo a la ventana “Documentos por Pagar” y crear el cabezal de la Nota de Crédito Proveedor correspondiente. Luego se deberá crear las líneas a partir del Proceso “Crear Desde” desd donde se deberá seleccionar la opción “RMA”

## **Crear Marca del Cliente obligatoria**

Una Marca Cliente se creará desde la ventana “Campaña de Mercadeo”.

En el cabezal de la ventana se deberá indicar el nombre de la Marca.

Luego bajaremos a la pestaña Cliente donde deberemos completar los siguientes campos:

* Sales Stage: Donde seleccionaremos “Marca Cliente”.
* Socio del Negocio: Será el Socio del negocio al que le estamos creando dicha Marca.
* Expected Close Date: Fecha de cierre esperada.

A continuación se muestra un ejemplo del procedimiendo para crear una Marca Cliente