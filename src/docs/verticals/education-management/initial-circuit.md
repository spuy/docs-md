---
title: 1. Proceso Inicial
category: Documentation
star: 9
sticky: 9
tag: 
  - Educación
article: false
---

```mermaid
  flowchart LR
  A[1. Carga de Extracto de Cuenta Bancaria] --> B(Importa los Movimientos Bancarios y los identifica)
  C[2. Crear Cobros desde Movimientos Bancarios] --> D(Crea Pagos y Cobros desde los Movimientos Importados)
  E[3. Asignación de Pagos Masiva] --> F(Genera Asignación entre Documentos por Cobrar impagos y Cobros)
  G[4. Crear Conceptos a Facturar No Recurrentes] --> H(Genera los Conceptos a Facturar por Contrato y Estudiante)
  I[5. Generar Facturas desde Cuota de Contrato] --> J(Generación Masiva de Facturas unificando por Responsable de Pago, se consideran conceptos Recurrentes y No Recurrentes)
  K[6. Generar Cálculo de Morosidad] --> L(Crea Estados de Cuenta para cada responsable de Pago)
  M[7. Envío de Estado de Cuenta Corriente] --> N(Genera Envío por mail de Estado de Cuenta Corriente a Responsables de Pago)
```

```mermaid
  flowchart TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
```

## Flujo Instituciones educativas

### Circuito inicial

![Flujo educación 1](/assets/img/docs/education-management/edum-image1.png)

### Crear Contrato de Servicios

El Contrato de Servicio es un acuerdo de condiciones entre la institución educativa y el estudiante. 
Es posible definir estas condiciones desde entidades vinculadas al mismo Contrato como ser: Descuentos, tipo de recurrencia (anual, mensual), etc.

**Para mayor información sobre Contrato de Servicios:** - [Contrato de Servicio](service-education-contract)

Una vez creados los diferentes Cursos como productos de servicio (el sistema permite importarlos de forma masiva), es posible cargar los contratos desde un importador, cargando en la misma importación tanto el contrato, el socio del negocio (estudiante), la familia (y sus miembros) y definir el responsable de pago.

![Contrato de Servicio](/assets/img/docs/education-management/edum-image3.png)

### Crear Líneas desde Contrato

En la línea del contrato quedará definido el Producto de servicio (el curso en este caso), la frecuencia, el tipo de frecuencia (mensual, anual) y el precio, entre otros datos básicos.
La línea será creada en forma automática en el caso de utilizar el proceso de importar contratos (con sus correspondientes datos obligatorios).

En la pestaña Cuotas podrán visualizarse los conceptos a facturar vinculados al Contrato de servicio (una vez generados).

![Línea de Contrato](/assets/img/docs/education-management/edum-image4.png)

### Crear Descuentos de Contrato

En la pestaña Descuento de Línea se definirá el tipo de descuento y su valor (por ejemplo descuento hermano o descuento beca).
Se define el descuento correspondiente en base a las líneas del Contrato.

**Para mayor información sobre Descuentos de Contrato:** - [Definición de Descuentos Servicios](../../sales-management/comercial-rules/discount-definition-education)

### Actualización de Precios de Contrato

En el cabezal del Contrato, se encuentra en los procesos la Actualización de Precios de Contrato.
Esta rutina actualiza el precio del producto de servicio verificando el valor vigente en la lista de precios (se utiliza cuando pueden existir cambios de tarifa durante el año).

### Generar Cuotas desde Contrato de Servicio

Este proceso se encuentra en el cabezal del Contrato de Servicio. Según la recurrencia definida en el contrato, generará las cuotas a facturar

![Actualización de Precios de Contrato](/assets/img/docs/education-management/edum-image5.png)