---
title: Configuración del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Procedimiento para Configurar el Terminal de PDV 

### Acceso a la Ventana Terminal PDV 

* En el menú de Solop ERP, diríjase a: 

  1. Gestión de Ventas > Órdenes de Venta > Punto de Venta > Terminal PDV. 

* Al seleccionar esta opción, se abrirá la ventana Terminal PDV, que incluye los campos necesarios para configurar cajas, taquillas o autoservicios donde se gestionarán órdenes, facturación y cobro. 

### Campos Principales de Configuración 

A continuación, se detalla cada campo y su función dentro de la ventana: 

* Organización: Seleccione la organización a la que pertenece el vendedor que usará el terminal. 

* Nombre y Descripción: Ingrese un identificador y una breve descripción de la caja o taquilla. 

* Agente Comercial: Asigne el vendedor responsable de las operaciones. 

* Retraso de Cierre de Sesión Automático: Configure el tiempo de inactividad antes de cerrar la sesión automáticamente. 

* Lista de Precios: Determine la lista de precios que se usará para las ventas. 

* Modificación de Precio: Active esta opción para permitir que el supervisor ajuste precios en la caja. 

* Caja Menor: Vincule la caja menor para registrar transacciones de caja chica. 

* Plantilla de Socio del Negocio: Configure un socio del negocio predeterminado para registrar clientes rápidamente. 

* Cuenta Bancaria: Seleccione la cuenta vinculada para registrar transacciones del vendedor. 

* Transferencia de Caja a Banco: Configure la cuenta a la que se transferirán las transacciones. 

### Documentos Asociados y Reglas 

* Tipo de Documento: Seleccione el tipo de documento para ventas y devoluciones. Consulte el documento "Tipo de Documento" de Solop ERP para detalles adicionales. 

* Reglas de Facturación y Entrega: Defina métodos específicos para generar facturas y gestionar entregas. 
 

### Parámetros de Hardware y Funcionalidad 

* Impresora Fiscal: Asigne la impresora fiscal para facturación y notas de crédito. 

* Registradora y Balanzas Electrónicas: Configure los dispositivos para registrar operaciones. 

* PIN POS Requerido: Especifique si se necesita un PIN de supervisor para ciertas tareas. 

* Teclados en Pantalla: Active teclados específicos para entradas de texto o numéricas. 

### Checks y Configuraciones Adicionales 

* POS Compartido: Determine si el terminal puede ser utilizado por más de un vendedor. 

* Permitir Crear Cliente Nuevo: Habilite la creación de nuevos clientes desde el terminal. 

* Máximos Permitidos: Configure límites diarios para reembolsos y descuentos aplicables. 

* Vendedores Asignados: Defina qué vendedores pueden usar el terminal y qué operaciones pueden realizar. 

### Pestañas de Configuración Específica 

* Asignación de Almacenes: Configure los almacenes accesibles desde el punto de venta. 

* Formas de Pago: Establezca métodos de pago aceptados y reglas de reembolso. 

* Listas de Precios y Tipos de Documento: Configure las opciones disponibles para las transacciones. 

Para más información sobre Listas de Precio: [Lista de Precios](../sales-management/comercial-rules/price-list)

* Esquema de Descuentos: Defina políticas de descuento aplicables en el terminal. 


## Operaciones Específicas en el PDV 

* Documentos por Defecto: 

  Configure los tipos de documento para aperturas, retiros de caja, cobros y devoluciones. 

* Productos Favoritos del PDV: 

  Modifique productos favoritos desde la pestaña Llave PDV. También puede asignar imágenes y categorías a los productos. 

* Cajas de Punto de Venta: 

  Asigne la caja correspondiente a cada terminal, vinculando el socio del negocio y los cargos predeterminados. 

### Consideraciones Finales 

Al finalizar la configuración, no olvide guardar los cambios utilizando el ícono correspondiente en la barra de herramientas de Solop ERP. 

## 🛠️ Configuración de la Terminal PDV para Permitir Definir Socio de Negocio con RUT o Cédula

### 🎯 Objetivo

Permitir la creación de socios de negocio desde el Punto de Venta (POS), ya sea con cédula o con RUT, a través de la configuración de plantillas predefinidas (templates).

### ✅ Pasos:

* 🧭 Acceder a la Terminal de Punto de Venta (POS):
Ir a la ventana de configuración de terminales POS. Posicionarse en la terminal que se desea configurar, por ejemplo, POS 1.

* 🗂️ Ir a la pestaña “Business Partner Template”
Esta pestaña puede estar en inglés y puede requerir traducción al español. Contiene las plantillas de socios de negocio que se usarán al momento de crearlos desde el POS.

### 🧹 Gestionar las Plantillas Existentes:

* Verificar que solo estén activos los templates necesarios: uno para RUT y otro para Cédula.

* 🗑️ Borrar cualquier plantilla innecesaria.

Ejemplo: dejar solo dos plantillas activas: RUT Template y Cédula Template.

### 🔍 Verificar configuración de las plantillas activas:

a. Cada socio de negocio utilizado como plantilla debe tener asignado un Grupo de Impuestos correspondiente (por ejemplo, grupo “RUT” 🧾).

b. Asegurarse de que estos socios estén activos en todos los clientes.

c. El tipo de impuesto debe coincidir con el documento: empresa (RUT 🏢) o persona física (Cédula 🧍).

💾 Guardar configuración:
La terminal POS ya queda preparada para crear socios de negocio directamente con los datos proporcionados en el punto de venta.