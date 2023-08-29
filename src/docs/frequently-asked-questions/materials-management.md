---
title: Gestión de Materiales
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión de Materiales

### Costos

Al crearse un producto, se crean los costos para el mismo cuando la categoría de producto tiene nivel de costeo "Compañía" u "Organización".

Para que se permita completar una OC con RECEPCIÓN, se controla que todos los productos tengan un costo definido con la organización, Costo Estándar y todos los campos con importe (incluyendo el campo "Costo Precio Actual de Niveles Inferiores").

### Gestión de Inventario

#### Aviso de Falta de Inventario

Este aviso salta cuando el Producto está definido como “Almacenable” = Y. para que el mismo deje de aparecer se debe marcar como “N”

#### Actualización de stock

Para actualizar stock a una cantidad X

Desde Gestión de materiales en la ventana Inventario Físico

Se crea una nueva instancia, si se desea se crea un nuevo Tipo de documento para identificar las cargas

#### Descargar inventario completo a la fecha

La ventana de Detalle de Almacenamiento simple brinda el inventario al día, permitiendo filtrar por los siguientes parámetros:

![Parámetros](/assets/img/docs/distribution-management/fra-asked-image1.png)

### Solicitudes

#### Requisitos para que un usuario interno de Adempiere pueda ver solicitudes

Para que un usuario de autenticación pueda ver “Solicitudes” en ADempiere de otros usuarios, debe tener asignado un SDN. Luego, ese SDN, en la pestaña “Empleado” debe tener marcada la opción de “Agente Comercial”.

### Contrato de Servicios

#### Crear Cuotas desde Contrato de Servicios

Las cuotas se crean desde el proceso “crear Cuota desde contrato de Servicios” que está en la ventana Contrato de Servicios. Estas se generarán según la definición que tenga en las líneas. 

Las líneas deberá tener si es “Recurrente” y hay que definir el Producto, el precio y la cantidad.

El precio se define desde la Lista de precios.

* FECHAS DE CONTRATO: para poder crear Cuotas desde un Contrato se debe definir OBLIGATORIAMENTE la fecha inicio y fecha fin. Ya que el proceso generará las cuotas RECURRENTES entre estas fechas.

#### Definición de precios en las Lineas de Contratos

Los precios en las líneas de los Contratos se pueden definir o manualmente o Según Lista de Precios. 

##### Definición de Precios en Contrato según Lista de Precios:

Los precios se definen según la Versión de Lista de Precios que esté Activa con fecha menor a la fecha de hoy de la “Lista de Precios” que tiene definido el Contrato.

  
¿Cómo puedo hacer para borrar o quitar un Contrato de Servicios generado a un Socio del Negocio cuando ya existe otro que es el correcto?

Los Contratos de Servicio una vez guardados con un Socio del Negocio ya no se podrán Borrar ni Anular por razones de Auditoría. Si se desea que un Contrato de Servicio no figure más como selección el mismo se deberá “INACTIVAR”. Se inactiva simplemenete 

definiendo el Check de “Activo” = NO