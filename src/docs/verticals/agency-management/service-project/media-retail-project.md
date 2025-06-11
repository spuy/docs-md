---
title: Proyecto de Media Retail
category: Documentation
star: 9
sticky: 9
tag: 
  - Agencia
article: false
---

El presente documento describe el circuito de trabajo definido para los proyectos de Media Retail en Solop ERP.

## ✅ 1. Creación de Oportunidad

### 🟦 1a. Ingreso al sistema

Se accede al sistema con usuario, contraseña y rol asignado.

### 🟩 1b. Acceso a Oportunidades

Se puede ingresar desde:

Pantalla principal.

Menú lateral.

Botón de búsqueda “Buscar oportunidades”.

Se visualizan todas las oportunidades de venta existentes.

Se puede crear una nueva oportunidad especificando:

Cliente (ej. CONAPROLE).

Etapa de venta.

Vendedor responsable.

Fecha estimada de concreción.

Comentarios adicionales.

### 🟨 1c. Creación de la cotización

Se deben completar los siguientes campos obligatorios:

Almacén.

Fecha de orden.

Lista de precios (ej. General, UYU, Venta).

Se crea automáticamente una orden de venta asociada.

### 🟧 1d. Asignación de recursos

Se abre el panel lateral de recursos.

Vista de calendario (día, semana, mes, año).

Se crean recursos relacionados a la oportunidad, indicando:

Tipo de recurso (ej. circuito de patrulla, banners).

Cantidad.

Unidad de medida (modificada de "meses" a "semanas").

Período (cantidad de semanas).

Se agrupan por tipo de recurso.

Se puede editar si hay errores.

### 🟥 1e. Visualización y envío de cotización

La cotización generada puede:

Imprimirse.

Traducirse.

Compartirse por correo electrónico, incluyendo mensaje personalizado y template.

Al estar conforme, se completa la cotización, lo que la convierte en firme.

### 🔷 1f. Gestión del embudo de ventas

Se puede ver el estado de la oportunidad dentro del embudo de ventas.

Se avanza a la siguiente etapa una vez que el cliente confirma.

## ✅ 2. Creación del proyecto

A partir de una cotización confirmada se puede:

Crear un proyecto.

Definir tipo de proyecto (ej. trabajo simple, retail media).

Asignar grupo, categoría, estado.

El sistema crea un número de proyecto ligado a la oportunidad.

En el proyecto se gestionan:

Tareas.

Estados.

Relaciones con agencias y terceros.

### ⚙️ 2a. Asociación con productos y servicios de instalación

Cada recurso está asociado a un producto.

El producto puede tener un servicio de instalación vinculado.

El servicio puede estar o no incluido en la cotización.

Si está excluido, se agrega como ítem separado para compra.

Se puede definir:

Proveedor del servicio.

Precio de venta y precio de compra.

### 🧾 2b. Generación de orden de venta

Se genera automáticamente desde la cotización.

Tiene un tipo de documento diferente (cotización no es facturable; orden de venta sí).

Debe completarse para proceder con facturación.

## ✅ 3. Generar OC por instalación de productos (desde proyecto)

Una vez creado el proyecto y convertida la cotización en una orden de venta, es necesario generar las órdenes de compra asociadas a los servicios de instalación o productos que serán provistos por terceros. Este paso se realiza directamente desde el proyecto, utilizando la funcionalidad específica del sistema.

🔹 Paso a paso: Generar OC por instalación de productos
Ingresar al Proyecto correspondiente.

Desde la vista del proyecto, acceder al menú contextual o a la pestaña de acciones relacionadas.

Seleccionar la opción “Generar OC por instalación de productos”.

El sistema mostrará un listado de productos o servicios incluidos en el proyecto que tienen asociada una lógica de compras (por ejemplo, aquellos configurados con proveedor habitual o tipo “comprado”).

Revisar o confirmar los siguientes datos:

Producto/servicio

Cantidad

Proveedor predeterminado (según configuración en ficha del producto)

Precio estimado (si aplica)

Fecha estimada de entrega

Confirmar la generación. El sistema crea automáticamente una orden de compra por cada proveedor involucrado, agrupando los productos correspondientes.

Las órdenes de compra generadas pueden ser visualizadas desde el módulo de compras o directamente desde el proyecto (vínculo cruzado).

🔸 Consideraciones
Las órdenes de compra creadas quedan en estado borrador o pendientes de aprobación, según la configuración del flujo de trabajo de la organización.

Es importante que los productos tengan correctamente definidos sus proveedores por defecto en la ficha de producto.

Esta automatización evita errores de carga manual y permite trazabilidad completa entre proyecto, venta y compras.