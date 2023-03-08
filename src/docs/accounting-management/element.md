---
title: Elemento Contable
category: Documentation
star: 9
sticky: 9
article: false
---

El elemento contable le permite definir de forma sistemática una estructura de cuentas y los parámetros que serán utilizados en el Tipo de Aplicación contable.

Esta estructura actúa como el plan de cuentas contable, presentando una lista de cuentas contables en las cuales serán registrados los hechos contables generados desde los procesos administrativos de ADempiere ERP. Estos elementos generalmente son ordenados bajo una codificación que facilitan el reconocimiento de cada cuenta.

El método consiste en asignar un número decimal que nos permita asociar la clasificación de las cuentas:

Cuentas Reales: Son denominadas así las cuentas que mantienen saldo durante y posterior a un periodo contable y que son conservadas en el balances. Generalmente estas cuentas son útiles para Generar Informe Financiero, dentro de estas cuentas se encuentran:

Activos: Se refiere a los bienes de los que una empresa dispone y tiene derechos, sean tangibles o intangibles.

Pasivos: Se refiere a los compromisos u obligaciones que la empresa contrae con una entidad.

Patrimonio: Se refiere a los aportes realizados por accionistas de la empresa.

Cuentas Nominales: Son denominadas así las cuentas que son cerradas al finalizar el período contable, transfiriendo el saldo a las cuentas reales, y posteriormente iniciarán con saldo cero, con el objetivo de iniciar el balance con estas cuentas limpias, dentro de estas cuentas se encuentran:

Ingresos: Se refiere a la ganancia o dinero que ingresa a la empresa.

Costos: Se refiere al dinero que egresa de la empresa con la finalidad de generar un activo.

Gastos: Se refiere al dinero que egresa de la empresa que no genera activos.

Estas cuentas han sido estandarizadas a nivel mundial de la siguiente forma:

Activos

Pasivos

Patrimonio

Ingresos

Costos

Gastos

1

2

3

4

5

6

En ADempiere los códigos de las cuentas son conformados con números con la siguiente estructura:

Estructura de Cuentas

Imagen 1. Estructura de Cuentas Contables

Para este ejemplo podríamos establecer la siguiente figura:

Activos

Corrientes

Disponibles

Banco

Cuenta Bancaria

1

1

1

0001

0001

El elemento contable es necesario para la definición del esquema contable, que a su vez define el óptimo funcionamiento de ADempiere, esto es porque cada transacción administrativa generará un asiento contable y por ende son requeridas las cuentas contables.

En esta oportunidad ERPyA ha diseñado para usted un material en el cual se define detalladamente esta ventana que frecuentemente será visitada por usted, que ha decidido incursionar en el uso de ADempiere ERP.

Registro de Elemento Contable

Registro de Elemento Contable
Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Reglas Contables”, por último seleccione la ventana “Elemento Contable”.

Menú de ADempiere

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana “Elemento Contable”, con los diferentes registros de elementos contables que posee la misma.

Ventana Elemento Contable

Imagen 2. Ventana Elemento Contable

Seleccione la pestaña “Valor de Elemento”, para crear un nuevo registro de valor en el elemento contable.

Pestaña Valor de Elemento

Imagen 3. Pestaña Valor de Elemento

Luego de ubicarse en el registro del valor del elemento, seleccione el icono “Registro Nuevo”, para crear un nuevo registro de valor del elemento.

Icono Registro Nuevo de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 4. Icono Registro Nuevo de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione en el campo “Organización”, la organización para la cual esta realizando el registro.

Campo Organización de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 5. Campo Organización de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Código”, el código correspondiente al registro que esta realizando.

Campo Código de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 6. Campo Código de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Cuenta Padre”, la cuenta padre correspondiente al registro que esta realizando.

Campo Cuenta Padre de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 7. Campo Cuenta Padre de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Nombre”, el nombre correspondiente al registro que esta realizando.

Campo Nombre de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 8. Campo Nombre de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Descripción”, la descripción correspondiente al registro que esta realizando.

Campo Descripción de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 9. Campo Descripción de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Tipo de Cuenta”, el tipo de cuenta correspondiente al registro que esta realizando.

Campo Tipo de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 10. Campo Tipo de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Introduzca en el campo “Naturaleza de Cuenta”, la naturaleza de la cuenta correspondiente al registro que esta realizando.

Campo Naturaleza de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 11. Campo Naturaleza de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Cuenta Controlada”, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta controlada.

Checklist Cuenta Controlada de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 12. Checklist Cuenta Controlada de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Cuenta de Banco”, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta de banco.

Checklist Cuenta de Banco de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 13. Checklist Cuenta de Banco de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Al tildar el checklist “Cuenta de Banco”, es habilitado el campo “Cuenta Bancaria”.

Campo Cuenta Bancaria de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 14. Campo Cuenta Bancaria de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Cuenta en Moneda Extranjera”, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta en moneda extranjera.

Checklist Cuenta en Moneda Extranjera de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 15. Checklist Cuenta en Moneda Extranjera de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Al tildar el checklist “Cuenta en Moneda Extranjera”, es habilitado el campo “Moneda”.

Campo Moneda de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 16. Campo Moneda de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Entidad Acumulada”, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta sumaria.

Checklist Entidad Acumulada de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 17. Checklist Entidad Acumulada de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Note

La selección de este checklist, oculta la visibilidad de los demas checklist que se encuentran en la pestaña “Valor de Elemento”.

Seleccione el checklist “Aplicar Actuales”, para indicar que la cuenta en la cual será utilizado este registro, los valores acutales pueden ser contabilizados.

Checklist Aplicar Actuales de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 18. Checklist Aplicar Actuales de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Aplicar Presupuesto”, para indicar que la cuenta en la cual será utilizado este registro, los valores del presupuesto pueden ser aplicados.

Checklist Aplicar Presupuesto de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 19. Checklist Aplicar Presupuesto de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el checklist “Aplicar Estadísticas”, para indicar que serán registradas las cantidades estadísticas en la cuenta en la cual sea utilizado este registro.

Checklist Aplicar Estadística de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 20. Checklist Aplicar Estadística de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Seleccione el icono “Guardar Cambios”, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña “Valor de Elemento”.

Icono Guardar Cambios de la Pestaña Valor de Elemento de la Ventana Elemento Contable

Imagen 21. Icono Guardar Cambios de la Pestaña Valor de Elemento de la Ventana Elemento Contable