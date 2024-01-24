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

![Parámetros](/assets/img/docs/frequently-asked-questions/fra-asked-image1.png)

#### Descargar inventario completo a una fecha determinada

La ventana Informe de Inventario Valorado permite realizar una consulta sobre el estado del inventario a una fecha determinada (con filtro Fecha). 
La existencia del producto se obtiene para la fecha indicada, el precio siempre es el último según la versión de lista elegida.
Este reporte "no muestra" los productos sin existencia a la fecha seleccionada.
Permite filtrar por los siguientes parámetros:

![Parámetros 2](/assets/img/docs/frequently-asked-questions/fra-asked-image2.png)