"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3796],{91628:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var s=o(53633);const r=[(0,s.Fv)('<p>La presupuestación desde un proyecto de Constructora es una herramienta clave para gestionar y planificar los recursos financieros, materiales, y humanos necesarios para la ejecución de un proyecto de construcción. El objetivo principal de esta función es proporcionar un control exhaustivo sobre los costos asociados al proyecto, garantizando que se mantengan dentro del presupuesto previsto y facilitando la toma de decisiones informadas durante todo el proceso.</p><p>La presupuestación es el proceso de estimar los costos que se esperan durante las diversas etapas de un proyecto de construcción. Dentro de un sistema ERP, la presupuestación permite:</p><ul><li>Definir y asignar recursos (materiales, mano de obra, equipos) y estimar sus costos.</li><li>Establecer los límites financieros para cada fase o tarea del proyecto.</li><li>Llevar un control y seguimiento continuo de las desviaciones entre el presupuesto inicial y los costos reales durante la ejecución.</li></ul><h2 id="generar-proyecto-de-constructora" tabindex="-1"><a class="header-anchor" href="#generar-proyecto-de-constructora" aria-hidden="true">#</a> Generar Proyecto de Constructora</h2><p>El proyecto de constructora es un módulo o conjunto de funcionalidades diseñado específicamente para gestionar y controlar todos los aspectos de un proyecto de construcción.</p><p>Integra múltiples áreas clave como la planificación, presupuestación, recursos humanos, inventario, compras, ventas, y finanzas, todo relacionado con el ciclo de vida de un proyecto de construcción.</p><p>Es la representación detallada de todos los elementos y actividades necesarias para llevar a cabo un proyecto de construcción, desde su planificación inicial hasta su ejecución y cierre. El ERP permite centralizar la información de cada proyecto en un solo sistema, permitiendo la gestión y seguimiento de aspectos como:</p><ul><li>Presupuesto del proyecto.</li><li>Planificación de recursos (materiales, mano de obra, maquinaria).</li><li>Control de costos y flujo de caja.</li><li>Cronogramas y plazos.</li><li>Inventario y aprovisionamiento de materiales.</li><li>Facturación y cobros.</li><li>El ERP organiza y almacena toda la información relevante del proyecto y la hace accesible en tiempo real a las diferentes áreas involucradas (ingeniería, compras, finanzas, logística, etc.).</li></ul><p>El Proyecto de Constructora es, en la práctica, una presupuestación sobre un determinado plan de obra que puede contener diversas &quot;Fases&quot;, donde case estará compuesta por un determinado universo de productos.</p><p>Se trata de una unidad de gestión que agrupa un conjunto de entidades que le dan forma y describen un determinado Servicio.</p><p>El primer paso para la creación de un Proyecto de Constructora es ingresar en la ventana el nombre del cliente (Socio del negocio del cual hereda la dirección, lista de precio y el almacén), la fecha de inicio del servicio a realizar y seleccionar una categoría de Proyecto (y la unidad o departamento). En este paso solo se genera el evento (no se asignan recursos o productos).</p><p><img src="/assets/img/docs/construction-management/com-image1.png" alt="Proyecto"></p><h3 id="generar-fase-y-lineas-de-fase-de-proyecto" tabindex="-1"><a class="header-anchor" href="#generar-fase-y-lineas-de-fase-de-proyecto" aria-hidden="true">#</a> Generar Fase y Líneas de fase de proyecto</h3><p>A partir del proyecto (cabezal) creado se generan las diferentes Fases del proyecto.</p><p>Las fases se dividen de acuerdo a los distintos segmentos (o universos) de productos que son determinadas características que poseen los productos .</p><p>En las fases se crean las líneas de proyecto listando los productos necesarios por cada fase con sus correspondientes cantidades.</p><p>Para lograr un circuito óptimo y eficiente de selección de productos en las líneas, es posible utilizar un proceso denominado &quot;<strong>Agregar Productos a Fase de Proyecto</strong>&quot;. Este SB permite seleccionar los productos a través de parámetros para agilizar la selección y definición en las fases.</p><p>El Navegador <em>Agregar Productos a Fase de Proyecto</em> se ejecuta desde el cabezal del proyecto, y permite seleccionar productos (sólo productos &quot;Activos&quot;), y para cada uno definir una cantidad.</p><p>Al procesar, se debe seleccionar la Fase, y se crea una línea de fase de proyecto por cada línea de producto seleccionada en el SB, donde cada línea tendrá los datos siguientes:</p><ul><li>Producto</li><li>Cantidad Planeada</li><li>Precio Planeado (si se encontró precio en la versión lista de precios del proyecto)</li></ul><p><img src="/assets/img/docs/construction-management/com-image8.png" alt="Agregar Productos a Fase de Proyecto"></p><p>Cada producto tiene definido un determinado &quot;Tipo de costo&quot; (ejemplo: tipo de costo Herramientas).</p><p>Este tipo de costo define un costo para el producto en particular y ese costo multiplicado por la cantidad que se encuentre definido en la línea de la fase del proyecto será el que se muestre como importe costo de la línea del proyecto.</p><p><img src="/assets/img/docs/construction-management/com-image2.png" alt="Fase y línea"></p><h3 id="dimensionar-mano-de-obra" tabindex="-1"><a class="header-anchor" href="#dimensionar-mano-de-obra" aria-hidden="true">#</a> Dimensionar Mano de Obra</h3><p>En el producto es posible definir los parámetros de Unidad de duración y duración.</p><p>Determinando estas dos entidades y de acuerdo a la unidad de medida (y cantidad) es posible establecer la cantidad de mano de obra estimada que se necesitará por cada línea (y fase).</p><p>Esta función propone un cálculo eficiente (aproximado) de la cantidad de recursos (mano de obra) necesaria para un determinado proyecto).</p><p>Cuando el producto no tiene definida una lista de materiales (LDM), estos campos (Duración y Unidad de Duración) se pueden modificar manualmente.</p><p>Cuando el producto tiene definida una LDM (check &#39;Lista de Materiales&#39; está marcado), estos campos se muestran como sólo lectura y no se pueden modificar manualmente. En este caso se van a definir automáticamente, según la sumatoria de las duraciones de los productos que estén definidos en las lineas de la LDM.</p><p>El sistema dispara las verificaciones para actualizar la duración de los productos que contengan al producto modificado en su LDM.</p><p>Estas verificaciones se ejecutan cuando se realizan las acciones siguientes:</p><ul><li>Se crea un producto o se modifica uno existente</li><li>Se crea o se borra una línea de la lista de materiales de un producto</li></ul>',33)],n={},t=(0,o(33350).A)(n,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,r)}]])},31140:(e,a,o)=>{o.r(a),o.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-6cd21879","path":"/docs/verticals/construction-management/Budgeting.html","title":"1. Presupuestación","lang":"es-ES","frontmatter":{"title":"1. Presupuestación","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"La presupuestación desde un proyecto de Constructora es una herramienta clave para gestionar y planificar los recursos financieros, materiales, y humanos necesarios para la ejecuci","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/verticals/construction-management/Budgeting.html"}],["meta",{"property":"og:title","content":"1. Presupuestación"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-10-10T21:32:24.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-10-10T21:32:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Generar Proyecto de Constructora","slug":"generar-proyecto-de-constructora","children":[{"level":3,"title":"Generar Fase y Líneas de fase de proyecto","slug":"generar-fase-y-lineas-de-fase-de-proyecto","children":[]},{"level":3,"title":"Dimensionar Mano de Obra","slug":"dimensionar-mano-de-obra","children":[]}]}],"git":{"createdTime":1719859150000,"updatedTime":1728595944000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":3.03,"words":908},"filePathRelative":"docs/verticals/construction-management/Budgeting.md","localizedDate":"1 de julio de 2024"}')}}]);