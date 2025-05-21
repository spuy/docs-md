---
title: Facturas por Lote
category: Documentation
star: 9
sticky: 9
article: false
---

## 📦 Facturación Electrónica con Facturas por Lote

### 🎯 Objetivo

Explicar el flujo de trabajo de la nueva funcionalidad de facturación electrónica desde la ventana “Facturas por Lote”, incluyendo la preparación, generación y procesamiento de facturas electrónicas a partir de cuotas.

### 🪟 Ventana utilizada: Facturas por Lote

La interfaz es similar a la antigua ventana de Bandeja CFE, pero con algunas diferencias y mejoras importantes.

#### 🧪 1. Preparación del lote

🔹 Crear el encabezado del lote

Tipo de transacción: Venta 🛒

Fecha de generación de las facturas 📅

📄 Cargar cuotas desde "Informe de Gastos"

Elegí la fecha de la cuota que querés facturar.

Seleccioná el socio de negocio a facturar (en el ejemplo: Fernando Hernández Eduardo).

El sistema trae automáticamente las cuotas en estado “Completado” que correspondan.

#### 📌 Visualización de cuotas

Cada cuota se transforma en una línea del lote.

Las líneas se completan con las referencias correspondientes:

* Informe de gasto 📑

* Línea del contrato 📃

* Actividad asociada 🧾

### 💲 Precios y descuentos

Se muestra el precio final, con el descuento ya aplicado.

Esto puede consultarse directamente desde la línea del contrato.

### ⚙️ 2. Generación de facturas

▶️ Acción: “Generar Facturas” o “Preparar”

En este caso se usa “Preparar” para generar un borrador.

El sistema no actualiza automáticamente los indicadores, por lo tanto se debe correr un proceso manual para refrescar los datos de cantidades y totales.

### 📊 Resumen del proceso

Se visualizan:

* Cantidad de líneas generadas 🧾

* Cuántas ya fueron facturadas ✅

* Cantidad de facturas totales 📦

* Facturas sin procesar ⚠️

Las líneas se agrupan por:

1. Responsable de pago

2. Socio del negocio

### 🧾 3. Visualización de facturas electrónicas

💡 El sistema genera automáticamente un e-Ticket si el socio tiene una cédula registrada.

Si tuviera RUT, se genera una e-Factura.

📄 Desde la línea de factura, se puede visualizar:

* Estado: Borrador

* Datos del cliente

* Precio, descuentos, referencias a contrato, informe de gasto y actividad 💬

### 🧩 4. Procesamiento y finalización

✔️ Verificación y procesamiento

Una vez verificados los datos, se procede a completar las facturas.

El sistema genera la factura con su respectivo número de CFE (Comprobante Fiscal Electrónico).

### 🖨️ Visualización e impresión

Se puede imprimir la factura desde la opción “Imprimir Comprobante”.

También es posible consultar el comprobante en:

* Bitácora de documentos electrónicos

* Información electrónica del documento

* URL de acceso al comprobante 🔗

::: note
📝 Notas finales
Este proceso puede realizarse masivamente para múltiples cuotas y socios de negocio.

En este ejemplo se usó un solo cliente para simplificar, pero en producción funcionará con todos los datos reales del entorno.
:::

## 🧾 Facturación en Lote – Gestión de Errores durante el Proceso

### 🎯 Objetivo

Explicar el comportamiento del sistema cuando se genera un error al procesar un lote de facturas. El objetivo es que el usuario comprenda cómo se tratan las facturas exitosas y aquellas que presentan errores.

### 🛠️ ¿Como realiza el procesamiento de facturas en lote?

Cuando se genera un error en una de las facturas al procesar un lote, el sistema no revierte el proceso completo. Es decir:

* Las facturas que sí se pudieron procesar correctamente quedarán guardadas y completadas ✅.

* Las facturas que presentan errores quedarán guardadas pero sin procesar ❌.

Esto permite no perder el trabajo ya realizado sobre el resto de los documentos.

### 📋 Ejemplo paso a paso

🧪 Preparación del lote

Se crea un lote de facturas con dos líneas, cada una correspondiente a un diseño diferente.

A cada línea se le asigna un cargo, uno de los cuales está configurado incorrectamente (provocará un error).

### ▶️ Generación de facturas

Se ejecuta la acción "Generar Facturas" desde el lote.

Una de las facturas genera un error, mientras que la otra se procesa con éxito.

### 🔍 Resultado del procesamiento

La factura procesada aparece en estado "Completada" ✅.

La factura con error permanece en estado "Diseñada" o guardada sin procesar ❌ (ni siquiera llega a estar "Preparada").

### 💡 Comportamiento esperado

Las facturas procesadas no se revierten, incluso si otra falla durante el proceso.

Las facturas con error pueden corregirse y reintentarse de manera individual.

### 📌 Consideraciones importantes

* Este comportamiento permite ahorrar tiempo al no tener que rehacer todo el lote.

* Es útil en procesos masivos, ya que preserva el estado de avance de cada documento de forma independiente.

* Se recomienda revisar el estado de cada factura después del proceso para actuar sobre aquellas que requieran corrección.