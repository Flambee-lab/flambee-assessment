export type Article = {slug:string;title:string;description:string;category:string;flow:string;intro:string;sections:{title:string;paragraphs:string[]}[];source?:{label:string;url:string;note:string};related:string[]};
export const articles:Article[] = [
  {
    "slug": "automatizar-pedidos-whatsapp",
    "title": "Pedidos por WhatsApp: qué automatizar antes de conectar una IA",
    "description": "Cómo pasar mensajes a pedidos revisables sin confundir productos, cantidades, precios ni fechas de entrega.",
    "category": "Ventas y atención",
    "flow": "pedidos",
    "intro": "Un pedido por mensaje puede parecer sencillo: “Mandame lo mismo de la semana pasada, pero dos cajas más”. Para quien conoce al cliente, alcanza. Para un sistema, faltan varias decisiones. Automatizar pedidos por WhatsApp empieza por entender esas decisiones, no por elegir un chatbot.",
    "sections": [
      {
        "title": "Separá recibir un mensaje de confirmar una venta",
        "paragraphs": [
          "Una primera versión puede preparar un borrador con cliente, producto, cantidad y fecha solicitada. Confirmar stock, precio y entrega es otro paso. Mezclar ambos permite que una interpretación dudosa termine convertida en una promesa comercial.",
          "En un ejemplo ilustrativo, una distribuidora recibe “tres grandes”. El sistema debería mostrar las presentaciones posibles y pedir que se elija una. Completar el código más vendido por su cuenta puede ahorrar una pregunta y provocar una devolución."
        ]
      },
      {
        "title": "Buscá dónde se pierde el tiempo",
        "paragraphs": [
          "Revisá una muestra de pedidos recientes. Marcá cuáles llegaron completos, cuáles requirieron preguntas y cuáles se corrigieron después de cargarlos. Anotá el motivo: nombre ambiguo, presentación, precio especial, dirección o disponibilidad.",
          "Si casi todos están completos y el trabajo es copiarlos, puede alcanzar una integración. Si hay lenguaje variable pero reglas claras, tiene sentido probar interpretación asistida. Si cada pedido necesita negociación, la mejora inicial podría ser ordenar la conversación."
        ]
      },
      {
        "title": "Diseñá una bandeja de revisión",
        "paragraphs": [
          "La persona que revisa necesita ver el mensaje original al lado del borrador. Los campos faltantes deben distinguirse de los confirmados. Un estado como “pendiente de precio” comunica mejor qué hacer que un porcentaje de confianza sin explicación.",
          "También hace falta reconocer correcciones posteriores: “al final dejá dos”. Ese mensaje debería actualizar el mismo borrador, conservando el cambio, y no crear otra venta."
        ]
      },
      {
        "title": "Qué probar antes de conectarlo con clientes",
        "paragraphs": [
          "Usá pedidos históricos, incluyendo abreviaturas y cambios. Compará los borradores con los pedidos correctos. Medí tiempo total de carga y revisión, errores de producto y preguntas pendientes.",
          "La primera entrega útil es una ficha revisable. Cuando esa ficha resulta confiable, se puede evaluar la conexión con el sistema comercial. El beneficio que importa es terminar el pedido correctamente, no responder más rápido al primer mensaje.",
          "Para preparar la prueba, reuní el mensaje original, el pedido finalmente confirmado y las preguntas que hicieron falta entre ambos. Conservá un caso corregido después de su carga. Esa pareja de entrada y resultado permite evaluar si la propuesta interpreta correctamente, en lugar de juzgar si el borrador parece razonable a primera vista."
        ]
      }
    ],
    "related": [
      "precios-especiales-pedidos",
      "integrar-sistemas-sin-ia"
    ]
  },
  {
    "slug": "precios-especiales-pedidos",
    "title": "Precios especiales: cómo evitar que cada pedido dependa de una conversación vieja",
    "description": "Una guía para ordenar acuerdos comerciales y preparar pedidos sin inventar condiciones ni automatizar negociaciones.",
    "category": "Ventas y atención",
    "flow": "pedidos",
    "intro": "Los pedidos habituales avanzan; los especiales esperan a que alguien encuentre un acuerdo. Cuando pasa esto, el problema puede estar en cómo se guarda y consulta la información comercial. Una IA puede ayudar a encontrarla, pero no debería decidir qué precio se prometió.",
    "sections": [
      {
        "title": "Distinguí acuerdo existente de negociación nueva",
        "paragraphs": [
          "“Este cliente tiene otro precio” puede significar dos cosas: existe una condición aprobada o alguien espera conseguir una excepción. La primera requiere recuperar evidencia. La segunda requiere una decisión comercial.",
          "En un caso ilustrativo, un correo autoriza un descuento por una compra puntual. Aplicarlo a todos los pedidos futuros sería interpretar más de lo que dice la fuente. Por eso importan la vigencia, los productos incluidos y las condiciones."
        ]
      },
      {
        "title": "Creá una ficha mínima del acuerdo",
        "paragraphs": [
          "La ficha debería identificar cliente, productos, precio o regla, moneda, vigencia y quién lo aprobó. Agregá un enlace al documento que lo respalda. Si existe una versión posterior, la anterior debe dejar de aparecer como opción vigente.",
          "No necesitás reconstruir toda la historia antes de empezar. Podés probar con los clientes que concentran más consultas y ordenar sus acuerdos activos. La lista de información faltante ya puede resolver parte de la demora."
        ]
      },
      {
        "title": "Qué lugar tendría la IA",
        "paragraphs": [
          "Una ayuda de búsqueda podría localizar documentos candidatos y señalar la condición relevante. La pantalla debería permitir comprobarla antes de usarla. Si aparecen dos acuerdos contradictorios, el resultado útil es mostrar la contradicción.",
          "Para calcular un descuento ya definido conviene usar una regla explícita. Redactar una explicación o encontrar un correo son tareas diferentes de hacer un cálculo comercial. Mantener esa separación facilita revisar errores."
        ]
      },
      {
        "title": "Cómo evaluar la oportunidad",
        "paragraphs": [
          "Contá cuántos pedidos esperan por este motivo y cuánto tardan en resolverse. Luego probá la ficha con casos reales y medí si se reduce la espera sin aumentar correcciones de precio.",
          "Si la mayor parte del tiempo se va en aprobar excepciones nuevas, una búsqueda más rápida no resolverá el cuello de botella. En ese caso, el siguiente paso es aclarar qué puede aprobar cada rol y cómo se registra la decisión.",
          "Llevá a la revisión dos acuerdos que parezcan contradictorios y un pedido que ya haya sido resuelto. Pedí que se explique cuál aplica y por qué. Si una persona del equipo tampoco puede decidir con esos documentos, la prioridad es completar la regla comercial. No corresponde evaluar como error técnico una decisión que todavía no está definida."
        ]
      }
    ],
    "related": [
      "automatizar-pedidos-whatsapp",
      "presupuestos-datos-incompletos"
    ]
  },
  {
    "slug": "presupuestos-datos-incompletos",
    "title": "Cómo preparar presupuestos cuando el cliente manda información incompleta",
    "description": "Qué datos pedir, cómo detectar faltantes y dónde puede ayudar una automatización antes de calcular un presupuesto.",
    "category": "Ventas y atención",
    "flow": "presupuestos",
    "intro": "Cotizar rápido sirve cuando se está cotizando lo correcto. Si faltan medidas, cantidades o condiciones de entrega, generar un presupuesto automáticamente puede acelerar una suposición. La oportunidad está en llegar antes a una solicitud suficientemente clara.",
    "sections": [
      {
        "title": "Identificá qué cambia realmente el precio",
        "paragraphs": [
          "Separá datos indispensables de detalles que pueden definirse después. En uniformes, por ejemplo ilustrativo, cantidad, tipo de prenda y personalización pueden cambiar la cotización; el nombre de cada persona quizá se necesite recién para producir.",
          "Pedí primero los datos que modifican la propuesta. Un formulario que exige toda la información de producción puede frenar una consulta que todavía es exploratoria."
        ]
      },
      {
        "title": "Usá preguntas según la respuesta anterior",
        "paragraphs": [
          "Si hay bordado, preguntá por ubicación y archivo disponible. Si no lo hay, no muestres esas preguntas. Las opciones deben ayudar a reconocer la situación: “tengo el diseño”, “tengo una referencia” o “necesito definirlo”.",
          "El formulario no tiene que reemplazar todas las conversaciones. Su trabajo puede ser preparar una ficha que indique qué está confirmado y qué requiere ayuda. Eso permite que el intercambio comercial empiece más adelante."
        ]
      },
      {
        "title": "Automatizá la preparación, conservá los límites",
        "paragraphs": [
          "Un asistente podría extraer datos de mensajes y preparar preguntas sobre lo que falta. Las fórmulas de precio deberían usar una fuente vigente y reglas revisables. Cuando hay una excepción, debe quedar visible.",
          "No conviene enviar una cifra definitiva si todavía depende de revisar un archivo. Es mejor distinguir una estimación orientativa de una propuesta aprobada y explicar qué falta para pasar de una a otra."
        ]
      },
      {
        "title": "Medí hasta que la propuesta esté lista",
        "paragraphs": [
          "Compará cuántos intercambios hacen falta para completar la solicitud, cuánto tarda la preparación y cuántas propuestas se rehacen por datos omitidos. Medir únicamente el tiempo de generación del documento deja afuera gran parte del trabajo.",
          "Empezá por un tipo de pedido frecuente. Si la ficha reduce preguntas repetidas, extendela a otra variante. Si los clientes no entienden las opciones, primero ajustá el lenguaje: una automatización no compensa una pregunta confusa.",
          "Una comprobación práctica es entregar la ficha a alguien que no participó de la conversación original. ¿Puede distinguir lo confirmado de lo supuesto? ¿Sabe qué pregunta hacer a continuación? Si necesita volver a leer todos los mensajes, la ficha todavía no está cumpliendo su función. Ajustá primero los campos y las etiquetas que provocan esa dependencia."
        ]
      }
    ],
    "related": [
      "precios-especiales-pedidos",
      "seguimiento-presupuestos"
    ]
  },
  {
    "slug": "seguimiento-presupuestos",
    "title": "Seguimiento de presupuestos: cómo automatizar sin mandar mensajes fuera de contexto",
    "description": "Ordená estados, compromisos y próximos pasos antes de automatizar recordatorios comerciales.",
    "category": "Ventas y atención",
    "flow": "presupuestos",
    "intro": "Un presupuesto sin respuesta no siempre necesita otro recordatorio. Puede estar aprobado por teléfono, esperando una modificación o detenido porque cambió el proyecto. El seguimiento útil depende de reconocer esos estados.",
    "sections": [
      {
        "title": "Empezá por un próximo paso claro",
        "paragraphs": [
          "Para cada propuesta, registrá qué debería ocurrir después: confirmar recepción, resolver una duda, enviar una versión o esperar una fecha acordada. “Seguir al cliente” es demasiado amplio para convertirse en una acción útil.",
          "En un ejemplo ilustrativo, una empresa pidió retomar la conversación el mes siguiente. Un recordatorio semanal no acelera la decisión y puede mostrar que nadie está leyendo el intercambio."
        ]
      },
      {
        "title": "Diferenciá silencio de bloqueo",
        "paragraphs": [
          "Creá estados que representen causas: falta información, falta aprobación, propuesta en revisión o decisión postergada. No necesitás veinte etiquetas; sí las suficientes para que el siguiente mensaje tenga sentido.",
          "Si el equipo registra todo como “pendiente”, primero conviene corregir ese registro. La automatización usará las mismas señales que hoy tienen las personas."
        ]
      },
      {
        "title": "Dónde puede ayudar una herramienta",
        "paragraphs": [
          "Puede reunir propuestas sin próximo paso, sugerir una fecha y preparar un borrador con el contexto disponible. La aprobación humana permite corregir tono y oportunidad antes del envío.",
          "En los casos simples, un recordatorio del sistema comercial alcanza. La interpretación de conversaciones puede ser útil cuando el estado está escondido en mensajes, pero tiene que permitir verificar por qué propone una acción."
        ]
      },
      {
        "title": "Una prueba que no confunda actividad con ventas",
        "paragraphs": [
          "Probá con un grupo acotado de propuestas. Registrá seguimientos pertinentes, respuestas útiles, versiones solicitadas y mensajes que hubo que cancelar. Más mensajes enviados no significa mejor seguimiento.",
          "Para atribuir una mejora en ventas hace falta una comparación cuidadosa: el valor, la temporada y el tipo de cliente también influyen. Mientras tanto, una meta operativa concreta es que ninguna propuesta activa quede sin un próximo paso conocido.",
          "Antes de activar un envío, prepará una lista con propuesta, última conversación, compromiso acordado y siguiente acción. Revisá qué ocurriría si el cliente ya hubiera respondido por otro canal. El sistema necesita una manera de cancelar un recordatorio pendiente; de lo contrario, el equipo tendrá que vigilar que la automatización no contradiga una conversación reciente."
        ]
      }
    ],
    "related": [
      "presupuestos-datos-incompletos",
      "medir-automatizacion"
    ]
  },
  {
    "slug": "ia-atencion-cliente",
    "title": "IA en atención al cliente: cuándo conviene asistir al equipo antes de responder sola",
    "description": "Cómo evaluar un asistente para consultas repetidas con fuentes, revisión y métricas de resolución.",
    "category": "Ventas y atención",
    "flow": "consultas",
    "intro": "Que una consulta se repita no significa que la respuesta sea siempre igual. Cambian el pedido, la política aplicable o el estado de una cuenta. Una primera implementación puede ayudar a quien responde, manteniendo la confirmación en manos del equipo.",
    "sections": [
      {
        "title": "Elegí una familia de consultas",
        "paragraphs": [
          "Separá preguntas generales de consultas que necesitan datos del cliente. “¿Cómo funciona una devolución?” requiere una política vigente. “¿Dónde está mi devolución?” requiere consultar un caso específico.",
          "En el primer grupo podés preparar respuestas a partir de documentación. En el segundo, necesitás acceso correcto al sistema y límites sobre qué información se puede mostrar. Tratarlos como una sola tarea vuelve difícil entender dónde falla la ayuda."
        ]
      },
      {
        "title": "Mostrá la fuente junto al borrador",
        "paragraphs": [
          "El agente necesita comprobar qué política o registro sostiene la respuesta. Una fuente identificable hace posible corregir una versión vieja o detectar que falta información. Un texto seguro de sí mismo no reemplaza esa evidencia.",
          "También conviene permitir “no tengo base suficiente”. Una derivación bien explicada puede ser un resultado correcto, aunque el sistema no haya resuelto la consulta."
        ]
      },
      {
        "title": "Qué evidencia existe",
        "paragraphs": [
          "Un estudio publicado en The Quarterly Journal of Economics encontró una mejora promedio del 15% en consultas resueltas por hora al incorporar asistencia con IA en una empresa de soporte. Los efectos variaron entre trabajadores.",
          "Ese antecedente justifica investigar una oportunidad, pero no permite prometer el mismo resultado. El tipo de consulta, las fuentes y la experiencia del equipo son parte de la comparación."
        ]
      },
      {
        "title": "Qué medir en tu operación",
        "paragraphs": [
          "Registrá tiempo de respuesta y de revisión, resolución del caso, correcciones y consultas que vuelven a abrirse. Si la respuesta sale antes pero el cliente necesita escribir otra vez, el resultado puede no haber mejorado.",
          "La prueba inicial debería incluir casos habituales y difíciles. Recién después de entender ambos tendría sentido evaluar si alguna respuesta acotada puede enviarse automáticamente.",
          "Para revisar la muestra, distinguí tres resultados: respuesta respaldada, derivación correcta y respuesta que debió detenerse. No consideres un fallo toda derivación. Un caso fuera de alcance bien encaminado puede ser mejor que una respuesta inmediata incorrecta. Acordar esta clasificación permite comparar al asistente con el proceso actual usando el mismo criterio."
        ]
      }
    ],
    "source": {
      "label": "Generative AI at Work · QJE, 2025",
      "url": "https://doi.org/10.1093/qje/qjae044",
      "note": "Estudio de asistencia a agentes; no evaluación de un chatbot autónomo para cualquier empresa."
    },
    "related": [
      "base-conocimiento-ia",
      "chatbot-o-mejorar-ux"
    ]
  },
  {
    "slug": "base-conocimiento-ia",
    "title": "Antes de crear un chatbot: cómo preparar la información que va a consultar",
    "description": "Revisá vigencia, contradicciones y alcance de tu documentación antes de conectarla a un asistente de IA.",
    "category": "Información y equipo",
    "flow": "conocimiento",
    "intro": "Conectar una carpeta a un asistente no convierte todos sus archivos en respuestas confiables. Si una política vieja contradice una nueva, hay una decisión pendiente que la tecnología no debería esconder. Preparar la información empieza por saber cuál tiene autoridad.",
    "sections": [
      {
        "title": "Usá preguntas reales como punto de partida",
        "paragraphs": [
          "Tomá consultas recientes y buscá con qué documento se resolvería cada una. Registrá si la respuesta existe, está completa y puede encontrarse. Esto es más útil que ordenar todas las carpetas sin una tarea definida.",
          "Un ejemplo ilustrativo: tres archivos explican gastos de viaje, pero ninguno aclara qué sucede con una reserva cancelada. Ese vacío no se arregla haciendo que el asistente escriba con más claridad."
        ]
      },
      {
        "title": "Definí una versión vigente",
        "paragraphs": [
          "Cada documento importante necesita una fecha de revisión y una forma de reconocer si fue reemplazado. Para información sensible, también debe quedar claro quién puede consultarla.",
          "No hace falta publicar todo para que el sistema sea útil. Una colección pequeña y vigente puede ser mejor punto de partida que un archivo histórico sin clasificación."
        ]
      },
      {
        "title": "Diseñá respuestas comprobables",
        "paragraphs": [
          "Pedí que el resultado señale el documento y la sección utilizados. Cuando dos fuentes discrepan, mostrá el conflicto. Cuando no hay respuesta, indicá qué falta confirmar.",
          "El NIST describe la posibilidad de que los sistemas generativos presenten información falsa con aparente seguridad. Por eso, disponer de documentación no elimina la necesidad de comprobar la respuesta producida."
        ]
      },
      {
        "title": "Probá el acceso además del contenido",
        "paragraphs": [
          "Incluí preguntas sin respuesta, documentos desactualizados y consultas que una persona no debería poder ver. Evaluá si el sistema respeta esos límites y si permite encontrar el respaldo.",
          "El primer objetivo puede ser reducir la búsqueda de información, manteniendo la decisión donde ya corresponde. Si la mayoría de las dudas se resuelve con una página mejor organizada, esa mejora también cuenta.",
          "Antes de ampliar la colección, pedí al equipo que resuelva una pregunta usando sólo la documentación elegida. Anotá qué fragmento responde y qué dato sigue faltando. Si la respuesta depende de una aclaración verbal, incorporala con su contexto. Esta revisión pequeña permite descubrir vacíos sin esperar a que un cliente encuentre una respuesta incorrecta."
        ]
      }
    ],
    "source": {
      "label": "NIST · Perfil de IA generativa, 2024",
      "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
      "note": "Referencia sobre riesgos de información generada incorrecta; las medidas propuestas aquí son una aplicación al caso."
    },
    "related": [
      "ia-atencion-cliente",
      "conocimiento-personas"
    ]
  },
  {
    "slug": "revisar-facturas-ia",
    "title": "Revisar facturas con IA: extraer datos no es aprobar un pago",
    "description": "Cómo separar lectura de documentos, validación y aprobación al automatizar tareas administrativas.",
    "category": "Operación",
    "flow": "documentos",
    "intro": "Una herramienta puede leer una factura y completar campos. Eso no demuestra que el importe corresponda, que el servicio haya sido recibido o que el comprobante no esté duplicado. Son verificaciones distintas y conviene diseñarlas por separado.",
    "sections": [
      {
        "title": "Dividí el proceso en tres pasos",
        "paragraphs": [
          "Primero se extrae lo que el documento dice. Después se contrasta con registros disponibles: proveedor, pedido, recepción o condiciones acordadas. Finalmente se autoriza la acción que corresponda.",
          "En un ejemplo ilustrativo, una factura legible contiene un precio distinto al acordado. La extracción puede ser perfecta y el documento todavía necesitar revisión. Medir sólo campos leídos correctamente ocultaría ese problema."
        ]
      },
      {
        "title": "Mostrá qué dato necesita atención",
        "paragraphs": [
          "Una pantalla de revisión debería poner el campo junto a su ubicación en el original. Si el total no coincide con el cálculo, conviene señalar ambas cifras y la diferencia.",
          "Los formatos desconocidos, campos ausentes y coincidencias parciales deben quedar separados de los casos completos. Una cola de excepciones útil explica el motivo de cada pendiente."
        ]
      },
      {
        "title": "Elegí una primera familia de documentos",
        "paragraphs": [
          "Podés empezar con un proveedor frecuente o un formato estable. Incluí documentos correctos, notas de crédito, duplicados y casos incompletos. Usá ejemplos autorizados para el entorno de prueba.",
          "Si todos los documentos ya llegan estructurados y el problema es transferirlos, quizá no haga falta interpretación con IA. Una conexión entre sistemas puede resolver ese tramo con menos incertidumbre."
        ]
      },
      {
        "title": "Medí el recorrido completo",
        "paragraphs": [
          "Compará tiempo de carga, tiempo de verificación, errores encontrados después y documentos que requieren intervención. Sumá el esfuerzo de mantener las reglas cuando cambia un formato.",
          "La primera implementación no necesita autorizar pagos. Preparar una revisión más clara y menos repetitiva puede ser una mejora suficiente. El límite debe verse en los estados del producto y en quién puede ejecutar cada acción.",
          "Una ficha de prueba puede registrar documento, campos extraídos, diferencia encontrada, acción sugerida y decisión final. Conservá los motivos de rechazo. Así se puede distinguir si el problema está en leer un número, encontrar el comprobante relacionado o interpretar una condición. Cada motivo orienta una mejora distinta y evita ajustar todo el proceso por un único error."
        ]
      }
    ],
    "related": [
      "integrar-sistemas-sin-ia",
      "control-calidad-ia"
    ]
  },
  {
    "slug": "integrar-sistemas-sin-ia",
    "title": "¿Necesitás IA o una integración entre sistemas?",
    "description": "Cómo distinguir interpretación de información y transferencia de datos para elegir una solución proporcional.",
    "category": "Operación",
    "flow": "sistemas",
    "intro": "Si una persona copia el mismo código de una planilla a otro sistema, el problema puede ser una conexión faltante. Agregar IA a una transferencia definida introduce una capacidad que quizá no se necesita. La pregunta útil es dónde hace falta interpretar.",
    "sections": [
      {
        "title": "Seguí un dato de principio a fin",
        "paragraphs": [
          "Elegí un caso y anotá dónde nace, quién lo modifica y dónde termina. Marcá en qué pasos se copia y en cuáles se decide algo. Esa distinción separa una integración de un problema de criterio.",
          "Por ejemplo ilustrativo, trasladar un número de pedido es distinto de reconocer a qué producto se refiere un apodo. El primer paso tiene una regla directa; el segundo puede requerir una tabla de equivalencias o interpretación."
        ]
      },
      {
        "title": "Resolvé quién tiene la información correcta",
        "paragraphs": [
          "Si el teléfono de un cliente cambia en dos lugares, ¿cuál prevalece? Conectar ambos sin responder eso puede distribuir una inconsistencia más rápido.",
          "Definí una fuente para cada dato importante y qué ocurre ante cambios simultáneos. También necesitás identificar registros de manera estable para evitar que un mismo cliente se duplique por una variación en el nombre."
        ]
      },
      {
        "title": "Diseñá el fallo normal",
        "paragraphs": [
          "Una transferencia puede interrumpirse. El equipo necesita ver qué quedó pendiente, si se puede reintentar y cómo evitar duplicar una operación ya completada. Un aviso genérico de error no alcanza.",
          "Conviene conservar un registro comprensible de origen, destino y estado. Esto permite resolver una excepción sin revisar manualmente todo el lote."
        ]
      },
      {
        "title": "Dónde sí podría entrar la IA",
        "paragraphs": [
          "Puede ayudar cuando el origen es lenguaje libre o documentos variables. Incluso entonces, el resultado interpretado debería convertirse en datos revisables antes de ejecutar cambios importantes.",
          "Probá primero una transferencia acotada y medí reingresos evitados, excepciones y correcciones. Si una configuración existente resuelve el problema, no necesitás construir un producto nuevo para considerar exitosa la mejora.",
          "Para conversar con un proveedor, prepará un ejemplo del mismo registro en origen y destino. Marcá los campos que deben coincidir y los que tienen significados distintos. Agregá un caso repetido y uno corregido. Esa pequeña muestra permite discutir reglas de actualización concretas antes de estimar conexiones o prometer que toda la información quedará sincronizada."
        ]
      }
    ],
    "related": [
      "automatizar-pedidos-whatsapp",
      "elegir-primera-automatizacion"
    ]
  },
  {
    "slug": "informes-visitas-tecnicas",
    "title": "Informes de visitas técnicas: cómo pasar de notas a un borrador útil",
    "description": "Qué registrar en campo y cómo revisar un informe asistido por IA sin inventar trabajos, mediciones ni conclusiones.",
    "category": "Información y equipo",
    "flow": "informes",
    "intro": "Después de una visita, el trabajo todavía sigue: ordenar notas, seleccionar fotos y explicar lo realizado. La IA puede ayudar a redactar, pero la calidad del informe depende de que exista un registro suficiente de lo que ocurrió.",
    "sections": [
      {
        "title": "Definí el mínimo que no puede faltar",
        "paragraphs": [
          "Separá tarea solicitada, trabajo realizado, observaciones, mediciones y pendientes. Cuando un dato no se registró, debería quedar como faltante. No conviene convertir una nota breve en una afirmación técnica más precisa de lo que permite.",
          "En un ejemplo ilustrativo, “revisado, sigue ruido” no autoriza a concluir que el equipo está reparado. El borrador debe conservar esa diferencia entre inspección, diagnóstico y resolución."
        ]
      },
      {
        "title": "Diseñá la captura para el momento de trabajo",
        "paragraphs": [
          "Si completar el registro exige demasiados pasos durante la visita, el equipo puede terminar haciéndolo después de memoria. Opciones claras y campos pertinentes ayudan a registrar lo necesario sin redactar todo en campo.",
          "Fotos y notas deben quedar asociadas al caso correcto. También sirve distinguir qué información es interna y qué explicación necesita el cliente."
        ]
      },
      {
        "title": "Un antecedente concreto",
        "paragraphs": [
          "Microsoft publicó un caso de Siemens sobre pruebas de generación de informes de servicio con IA. El relato describe pilotos y expectativas de estandarización; no prueba un porcentaje de ahorro aplicable a otras empresas.",
          "La referencia muestra un uso posible: ayudar a preparar documentación de un trabajo ya realizado. El diseño de la captura y de la revisión sigue siendo parte del producto."
        ]
      },
      {
        "title": "Cómo ensayar una primera versión",
        "paragraphs": [
          "Elegí informes anteriores y generá borradores desde sus notas originales. Pedí al técnico que marque omisiones, afirmaciones no respaldadas y correcciones necesarias. Compará el tiempo completo, incluyendo esa revisión.",
          "Una entrega inicial puede terminar en “borrador listo para aprobar”. Para enviar automáticamente haría falta evidencia adicional de que los casos cubiertos no dependen de interpretaciones pendientes.",
          "Una ficha de revisión puede separar observaciones registradas, trabajo confirmado y pendientes. Pedí que cada afirmación del borrador pueda relacionarse con una nota o dato de origen. Si aparece una frase que nadie puede respaldar, debe retirarse o consultarse. No se trata de escribir menos: se trata de producir una explicación que represente lo ocurrido."
        ]
      }
    ],
    "source": {
      "label": "Microsoft · Caso Siemens, 2024",
      "url": "https://www.microsoft.com/en/customers/story/19736-siemens-ag-germany-dynamics-365-field-service",
      "note": "Caso publicado por el proveedor, en etapa de pruebas descrita en la publicación; no estudio independiente de ahorro."
    },
    "related": [
      "revisar-respuestas-ia",
      "medir-automatizacion"
    ]
  },
  {
    "slug": "coordinar-turnos-reprogramaciones",
    "title": "Automatizar turnos: el desafío aparece cuando alguien cambia la reserva",
    "description": "Cómo evaluar disponibilidad, restricciones y reprogramaciones antes de automatizar una agenda.",
    "category": "Operación",
    "flow": "coordinacion",
    "intro": "Mostrar horarios libres es una parte de coordinar turnos. La otra aparece cuando una visita se extiende, falta un recurso o el cliente pide cambiar. Una automatización útil tiene que representar esas condiciones, no sólo dibujar un calendario.",
    "sections": [
      {
        "title": "Anotá qué hace posible un turno",
        "paragraphs": [
          "Además del horario, pueden importar duración, ubicación, equipo disponible y especialidad. Si una persona verifica esas condiciones fuera del calendario, la disponibilidad visible quizá no sea la disponibilidad real.",
          "En un ejemplo ilustrativo, dos técnicos están libres, pero sólo uno tiene la habilitación interna para una tarea. Ofrecer ambos turnos crea una confirmación que después alguien debe corregir."
        ]
      },
      {
        "title": "Separá sugerencia de reserva confirmada",
        "paragraphs": [
          "El producto puede proponer opciones y confirmar recién cuando verifica todas las condiciones. Mientras eso ocurre, el estado debe ser claro. “Solicitud recibida” no debería parecer “turno confirmado”.",
          "Cuando cambia una reserva, hay que actualizar recursos y avisos asociados. También conviene distinguir cancelación, reprogramación y visita incompleta; cada una abre un próximo paso diferente."
        ]
      },
      {
        "title": "Qué automatizar primero",
        "paragraphs": [
          "Si las reglas son estables, una agenda configurada puede resolver buena parte del trabajo. La IA podría ayudar a interpretar un pedido escrito libremente o resumir el motivo de la visita.",
          "La asignación final necesita información actualizada. Interpretar bien un mensaje no demuestra que el recurso siga disponible en el momento de confirmar."
        ]
      },
      {
        "title": "Cómo saber si ayuda",
        "paragraphs": [
          "Medí intercambios necesarios para cerrar un turno, reservas corregidas y tiempo para resolver cambios. Probá también dos solicitudes simultáneas sobre el mismo recurso.",
          "Si el mayor problema es que las duraciones estimadas nunca se cumplen, primero necesitás revisar esa estimación. Automatizar la agenda sin ajustar esa base puede repetir el mismo conflicto a mayor velocidad.",
          "Antes de elegir una herramienta, reuní una reserva normal, una que necesitó otro recurso y una reprogramación. Anotá qué comprobó el coordinador en cada caso. Si esas comprobaciones no están reflejadas en la agenda, ya tenés un alcance inicial para investigar. No hace falta rediseñar toda la planificación para probar una sola clase de visita."
        ]
      }
    ],
    "related": [
      "integrar-sistemas-sin-ia",
      "piloto-ia-casos-reales"
    ]
  },
  {
    "slug": "control-calidad-ia",
    "title": "Control de calidad con IA: qué conviene revisar y qué necesita una regla clara",
    "description": "Cómo preparar una revisión asistida de entregas sin convertir criterios ambiguos en aprobaciones automáticas.",
    "category": "Operación",
    "flow": "calidad",
    "intro": "“Revisar que esté bien” no es una instrucción suficientemente concreta. Puede referirse a campos completos, cálculos correctos, tono adecuado o cumplimiento de un acuerdo. Antes de automatizar el control de calidad, hay que separar esos criterios.",
    "sections": [
      {
        "title": "Distinguí presencia, consistencia y juicio",
        "paragraphs": [
          "Comprobar que existe una fecha es distinto de verificar que coincide con otra. Evaluar si una explicación resulta clara para un cliente agrega un juicio contextual. Cada tipo de revisión necesita una forma diferente de comprobarse.",
          "En un ejemplo ilustrativo, una propuesta puede tener todas las secciones obligatorias y prometer un plazo incompatible con la capacidad del equipo. Una lista completa no significa una entrega correcta."
        ]
      },
      {
        "title": "Reuní ejemplos de desacuerdo",
        "paragraphs": [
          "Pedí a dos personas que revisen la misma muestra y compará qué marcan. Los desacuerdos revelan criterios que todavía no están expresados o que dependen de información externa.",
          "Antes de exigir que una IA sea consistente, aclarar esos criterios puede mejorar el proceso humano. Guardá ejemplos aceptados y rechazados con una explicación breve del motivo."
        ]
      },
      {
        "title": "Diseñá hallazgos accionables",
        "paragraphs": [
          "La revisión debería señalar el fragmento, el criterio y qué hace falta comprobar. “Calidad baja” obliga a adivinar. “La fecha de entrega difiere entre el resumen y las condiciones” permite actuar.",
          "Separá un error verificable de una sugerencia. Si ambos tienen el mismo peso visual, el equipo puede perder tiempo corrigiendo preferencias o ignorar una discrepancia importante."
        ]
      },
      {
        "title": "Evaluá también lo que se escapa",
        "paragraphs": [
          "Contá errores detectados, falsas alarmas y problemas que la herramienta no encontró. Un sistema que marca mucho puede parecer exhaustivo y resultar poco útil en la práctica.",
          "La primera versión puede funcionar como segunda lectura. Mantener una aprobación explícita permite aprender de los desacuerdos antes de ampliar su responsabilidad. El objetivo es mejorar la revisión completa, no producir más observaciones.",
          "Para preparar una revisión, armá una tabla con criterio, ejemplo correcto, ejemplo incorrecto y fuente que permite decidir. Dejá una categoría de casos ambiguos. No obligues a clasificar todo como aprobado o rechazado si falta contexto. Esa tabla permite explicar tanto los hallazgos como los límites de la herramienta y discutirlos con el equipo."
        ]
      }
    ],
    "related": [
      "revisar-respuestas-ia",
      "revisar-facturas-ia"
    ]
  },
  {
    "slug": "analizar-resultados-ia",
    "title": "Antes de pedirle conclusiones a la IA, revisá qué significan tus indicadores",
    "description": "Cómo preparar un análisis de resultados cuando reportes y equipos usan definiciones diferentes.",
    "category": "Información y equipo",
    "flow": "analisis",
    "intro": "Dos reportes pueden mostrar ventas diferentes sin que ninguno tenga un error de cálculo. Uno cuenta pedidos creados; otro, operaciones cobradas. Pedirle a una IA que explique la diferencia no reemplaza la definición del indicador.",
    "sections": [
      {
        "title": "Escribí la pregunta de negocio",
        "paragraphs": [
          "“Analizar las ventas” es amplio. “Entender por qué bajaron las operaciones cobradas esta semana” permite elegir datos y comparaciones. El análisis necesita un período, una unidad y una decisión que podría cambiar con la respuesta.",
          "En un ejemplo ilustrativo, aumentan los pedidos pero cae la facturación. Puede haber cambios de tamaño, cancelaciones o demoras. Un resumen convincente debería distinguir hipótesis de causas comprobadas."
        ]
      },
      {
        "title": "Armá una ficha por indicador",
        "paragraphs": [
          "Registrá qué cuenta, qué excluye, de qué sistema sale y cuándo se actualiza. Acordá cómo tratar devoluciones y estados pendientes. Esto permite interpretar una variación sin volver a discutir la definición.",
          "Si dos áreas necesitan métricas distintas, pueden conservarlas. Lo importante es que sus nombres y límites hagan visible la diferencia."
        ]
      },
      {
        "title": "Usá la IA para orientar preguntas comprobables",
        "paragraphs": [
          "Un asistente puede proponer cortes de análisis o preparar una explicación desde resultados calculados. Conviene mantener las cifras ligadas a consultas o reportes reproducibles.",
          "Cuando sugiere una causa, el producto debería indicar qué dato la sostendría. “Podría estar relacionado con cancelaciones” necesita una comprobación; no debería presentarse como diagnóstico cerrado."
        ]
      },
      {
        "title": "Decidí qué mejora esperar",
        "paragraphs": [
          "Medí tiempo para obtener una respuesta verificable y cantidad de correcciones, además de la velocidad de redacción. Si las conclusiones no pueden rastrearse, el equipo seguirá repitiendo el análisis.",
          "Para una primera prueba, elegí una pregunta recurrente y una fuente estable. Si primero hay que reconciliar cinco reportes, esa reconciliación puede ser el proyecto prioritario.",
          "Una prueba útil termina con una respuesta y su recorrido de verificación: indicador utilizado, período, filtro y dato de origen. Pedí a otra persona que reproduzca la cifra. Si no puede, la presentación necesita más trazabilidad antes de transformarse en una recomendación. La explicación debe permitir comprobar el análisis sin depender de quien lo escribió."
        ]
      }
    ],
    "related": [
      "medir-automatizacion",
      "integrar-sistemas-sin-ia"
    ]
  },
  {
    "slug": "adaptar-contenido-ia",
    "title": "Adaptar contenido con IA sin cambiar precios, condiciones ni promesas",
    "description": "Cómo generar variantes de textos desde una base aprobada y revisar lo que realmente importa.",
    "category": "Ventas y atención",
    "flow": "contenido",
    "intro": "Un mismo producto necesita textos para una ficha, un correo y una publicación. La IA puede ayudar a preparar variantes. El desafío es cambiar la forma sin alterar los hechos, especialmente cuando hay precios o condiciones comerciales.",
    "sections": [
      {
        "title": "Separá hechos de estilo",
        "paragraphs": [
          "La base debería distinguir especificaciones, condiciones vigentes y afirmaciones aprobadas. Después podés definir tono, extensión y público de cada canal.",
          "En un ejemplo ilustrativo, “entrega estimada en cinco días” no equivale a “recibilo en cinco días”. Una variante puede sonar mejor y convertirse en una promesa diferente. Esa diferencia merece una revisión visible."
        ]
      },
      {
        "title": "Creá un formato de revisión breve",
        "paragraphs": [
          "Mostrá texto original y variante, destacando cambios en cifras, fechas y condiciones. El revisor no debería tener que recordar cada dato del catálogo.",
          "También sirve identificar qué material ya fue aprobado y qué sigue en borrador. Una corrección de estilo no debería borrar la trazabilidad de una condición comercial."
        ]
      },
      {
        "title": "Qué muestra la investigación",
        "paragraphs": [
          "Un experimento publicado en Science encontró menos tiempo y mejor calidad evaluada en tareas de escritura profesional con asistencia de ChatGPT. Ese resultado corresponde a las tareas estudiadas; no comprueba que cualquier campaña o catálogo vaya a mejorar.",
          "Para este caso, la pregunta es si el equipo produce variantes correctas con menos trabajo total, incluyendo revisión y actualización."
        ]
      },
      {
        "title": "Probá un producto y varios canales",
        "paragraphs": [
          "Elegí una ficha con datos bien definidos y prepará versiones para dos o tres destinos. Compará correcciones de hechos, ajustes de tono y tiempo de aprobación.",
          "Incluí un cambio posterior de precio o disponibilidad. Si no pueden identificar qué versiones quedaron viejas, el problema no termina al generar los textos. Necesitan un registro de dónde se usa cada dato.",
          "Para revisar las variantes, prepará una lista breve de datos que no pueden cambiar y otra de aspectos de estilo que sí pueden hacerlo. Esa separación evita discutir tono mientras se pasa por alto una condición. Si el borrador agrega una ventaja que no figura en la base, tratala como una afirmación pendiente, no como una mejora creativa."
        ]
      }
    ],
    "source": {
      "label": "Noy y Zhang · Science, 2023",
      "url": "https://doi.org/10.1126/science.adh2586",
      "note": "Experimento de escritura profesional. La propuesta de revisión de catálogos es una aplicación a evaluar."
    },
    "related": [
      "versiones-catalogo",
      "control-calidad-ia"
    ]
  },
  {
    "slug": "versiones-catalogo",
    "title": "Cómo evitar que tu catálogo tenga versiones desactualizadas en cada canal",
    "description": "Ordená fuentes, destinos y aprobaciones antes de generar más materiales con IA.",
    "category": "Ventas y atención",
    "flow": "contenido",
    "intro": "Actualizar una ficha no actualiza automáticamente el PDF que usa ventas, el correo guardado ni una publicación anterior. Cuando el problema es mantener versiones, generar contenido más rápido puede aumentar la cantidad de material que después hay que revisar.",
    "sections": [
      {
        "title": "Hacé un mapa de dónde vive la información",
        "paragraphs": [
          "Elegí un producto y listá sus destinos: web, planilla, archivo comercial, respuestas guardadas y piezas de campaña. Para cada destino, registrá quién puede actualizarlo y cómo se sabe que cambió.",
          "En un ejemplo ilustrativo, se modifica una garantía en la web pero el equipo sigue enviando un PDF viejo. La fuente correcta existe; falta conectar esa modificación con los materiales que dependen de ella."
        ]
      },
      {
        "title": "Definí la fuente de cada dato",
        "paragraphs": [
          "Precio, disponibilidad y descripción pueden pertenecer a sistemas diferentes. No es necesario guardar todo en un mismo lugar, pero sí saber qué fuente decide cada campo.",
          "Marcá fecha de vigencia y estado de aprobación. Cuando una actualización requiere revisión, mostrar “pendiente de publicar” evita confundir una edición interna con una versión disponible para clientes."
        ]
      },
      {
        "title": "Elegí entre conexión y asistencia",
        "paragraphs": [
          "Si los destinos aceptan datos estructurados, una integración puede propagar cambios. Si requieren textos diferentes, una ayuda generativa podría preparar nuevas variantes para revisar.",
          "La herramienta debería mostrar qué destinos se actualizaron y cuáles siguen pendientes. Una lista de cambios propuestos resulta más útil que un mensaje genérico de “todo sincronizado” sin respaldo."
        ]
      },
      {
        "title": "Probá una modificación de principio a fin",
        "paragraphs": [
          "Cambiá un dato de prueba y seguí sus versiones. Medí tiempo hasta que todos los destinos estén correctos y cuántas intervenciones hacen falta.",
          "Si el equipo no sabe qué materiales están en uso, primero conviene crear ese inventario. El beneficio inicial puede ser visibilidad; después se evalúa cuánto de la actualización merece automatizarse.",
          "Una ficha de control puede contener dato modificado, fuente, materiales afectados, aprobación y fecha de actualización. Elegí una persona que pueda confirmar cada destino. Si un material ya no se usa, retiralo del circuito en lugar de seguir manteniéndolo. Reducir versiones innecesarias puede hacer más manejable la tarea antes de sumar generación automática."
        ]
      }
    ],
    "related": [
      "adaptar-contenido-ia",
      "integrar-sistemas-sin-ia"
    ]
  },
  {
    "slug": "chatbot-o-mejorar-ux",
    "title": "¿Tu producto necesita un chatbot o una experiencia más clara?",
    "description": "Cómo distinguir dudas de navegación de preguntas que requieren ayuda contextual antes de agregar IA a un producto.",
    "category": "Producto y UX",
    "flow": "producto",
    "intro": "Si muchas personas preguntan dónde encontrar una función, un chatbot podría responderles. También podría esconder un problema de navegación que conviene resolver directamente. Antes de agregar una nueva interfaz, mirá qué dificultad está compensando.",
    "sections": [
      {
        "title": "Clasificá las consultas por su causa",
        "paragraphs": [
          "Separá dudas sobre dónde está algo, cómo completar una tarea y qué decisión tomar. Las primeras suelen invitar a revisar nombres y estructura. Las últimas pueden requerir información específica del caso.",
          "En un ejemplo ilustrativo, “¿dónde descargo la factura?” puede resolverse con un acceso visible. “¿Qué factura corresponde a esta devolución?” necesita contexto y quizá una explicación adicional."
        ]
      },
      {
        "title": "Observá un recorrido concreto",
        "paragraphs": [
          "Pedí a personas del público objetivo que intenten completar la tarea. Registrá dónde dudan, qué interpretan y qué esperan que ocurra. Una entrevista sobre si les gusta la pantalla no reemplaza observar el uso.",
          "La heurística de reconocimiento de Nielsen Norman Group recomienda hacer visibles opciones e información necesaria. Aplicada aquí, invita a revisar si el producto obliga a recordar o buscar algo que podría mostrar en contexto."
        ]
      },
      {
        "title": "Cuándo podría aportar un asistente",
        "paragraphs": [
          "Puede tener sentido si las preguntas cambian mucho según el caso y existe información para responderlas. Aun así, conviene ofrecer acciones claras, fuentes y una salida cuando no puede ayudar.",
          "Si el usuario termina hablando con un bot para hacer lo que un botón podría resolver, evaluá ambos caminos. El costo de escribir y revisar una conversación también es parte de la experiencia."
        ]
      },
      {
        "title": "Compará soluciones pequeñas",
        "paragraphs": [
          "Probá una mejora de navegación y una ayuda contextual con la misma tarea. Observá finalización, errores y necesidad de asistencia.",
          "La decisión debería apoyarse en qué permite completar mejor el trabajo. Incorporar IA puede ser una opción, pero el resultado valioso es que la persona avance con claridad.",
          "Antes de decidir, anotá qué acción concreta espera completar el usuario y qué información le falta en ese momento. Dibujá una alternativa sin conversación y otra con asistencia. Mostralas con la misma tarea. La comparación ayuda a discutir el producto desde el esfuerzo de uso, en lugar de elegir por cuál demostración parece más novedosa."
        ]
      }
    ],
    "source": {
      "label": "Nielsen Norman Group · Heurísticas de usabilidad",
      "url": "https://www.nngroup.com/articles/ten-usability-heuristics/",
      "note": "Principios de diseño; no una medición de mejora para este producto."
    },
    "related": [
      "usuarios-abandonan-producto",
      "ia-atencion-cliente"
    ]
  },
  {
    "slug": "usuarios-abandonan-producto",
    "title": "Usuarios que abandonan un paso: qué investigar antes de sumar funciones",
    "description": "Cómo observar errores, expectativas y dudas para decidir una mejora de UX con evidencia.",
    "category": "Producto y UX",
    "flow": "producto",
    "intro": "Que alguien abandone un paso muestra dónde mirar, pero no explica por qué se fue. Puede faltar información, sobrar esfuerzo o no existir intención de continuar. Agregar una función sin distinguir esas causas puede complicar el recorrido.",
    "sections": [
      {
        "title": "Definí qué significa abandonar",
        "paragraphs": [
          "Elegí una tarea y un intervalo. Una persona que vuelve más tarde no es igual a una que encuentra un error. Separá interrupciones, rechazos y finalizaciones por otro canal cuando tengas esa información.",
          "En un ejemplo ilustrativo, un formulario solicita un dato que el usuario debe consultar con otra persona. La pausa puede responder al proceso de trabajo, no a que el botón resulte poco visible."
        ]
      },
      {
        "title": "Combiná señales con observación",
        "paragraphs": [
          "Los eventos ayudan a localizar un paso problemático. Observar intentos reales ayuda a entender la interpretación del usuario. Usá ambos para formular una hipótesis concreta.",
          "Preguntá qué esperaba encontrar y qué necesitaba para seguir. Evitá sugerir de entrada que una ayuda con IA resolvería su dificultad; esa pregunta puede orientar la respuesta hacia la solución que ya imaginaste."
        ]
      },
      {
        "title": "Probá una modificación acotada",
        "paragraphs": [
          "Podría ser aclarar una condición, mostrar un ejemplo, permitir guardar o explicar un error. Elegí la modificación que responda a la causa observada.",
          "Un principio útil de UX es dar visibilidad al estado y ayudar a reconocer y recuperarse de errores. Eso no determina una pantalla exacta: necesita traducirse al contexto de la tarea."
        ]
      },
      {
        "title": "Mirá qué ocurre después",
        "paragraphs": [
          "Medí si las personas completan correctamente y si aparecen nuevas dificultades. Una mejora en el clic siguiente puede desplazar el problema a una etapa posterior.",
          "Para decidir si vale la pena desarrollar más, registrá qué evidencia cambió tu interpretación. Un experimento pequeño tiene valor cuando permite elegir el siguiente paso con menos incertidumbre.",
          "Prepará una ficha por hallazgo con paso, comportamiento observado, explicación posible y dato que falta. Si la causa es una suposición, escribila como pregunta. Por ejemplo: “¿La persona tiene disponible este dato al iniciar el trámite?”. Esa forma de registrar evita que una interpretación rápida termine convertida en una decisión de desarrollo difícil de revisar."
        ]
      }
    ],
    "source": {
      "label": "Nielsen Norman Group · Heurísticas de usabilidad",
      "url": "https://www.nngroup.com/articles/ten-usability-heuristics/",
      "note": "Marco de referencia para revisar estado y recuperación; el diagnóstico requiere observar el producto."
    },
    "related": [
      "chatbot-o-mejorar-ux",
      "piloto-ia-casos-reales"
    ]
  },
  {
    "slug": "elegir-primera-automatizacion",
    "title": "Cómo elegir la primera automatización de tu empresa",
    "description": "Un método práctico para comparar frecuencia, esfuerzo y excepciones antes de invertir en una solución.",
    "category": "Decisiones sobre IA",
    "flow": "sistemas",
    "intro": "La primera automatización no tiene que ser la tarea más grande ni la más visible. Conviene elegir una situación acotada, con un resultado reconocible y una forma de comparar el antes y el después. Eso permite aprender sin cambiar toda la operación.",
    "sections": [
      {
        "title": "Listá situaciones, no tecnologías",
        "paragraphs": [
          "Anotá dónde se vuelve a cargar información, se espera una confirmación o se corrige un resultado. Para cada situación, describí un caso reciente. “Usar IA en ventas” no permite estimar una prueba; “preparar solicitudes completas” sí.",
          "Si una tarea manual funciona bien y ocurre pocas veces, no debería subir de prioridad sólo porque parece fácil de automatizar. El esfuerzo de mantener la solución también importa."
        ]
      },
      {
        "title": "Compará cuatro condiciones",
        "paragraphs": [
          "Revisá frecuencia, consecuencia del problema, disponibilidad de información y costo de un error. No necesitás un puntaje aparentemente preciso: una comparación explícita ya ayuda a discutir prioridades.",
          "En un ejemplo ilustrativo, copiar un dato estable puede ser frecuente y sencillo; interpretar reclamos complejos puede requerir más contexto. Ambos son candidatos distintos, aunque hoy consuman tiempo parecido."
        ]
      },
      {
        "title": "Elegí un resultado pequeño y completo",
        "paragraphs": [
          "La prueba debería terminar en algo utilizable: un pedido revisable, un informe aprobado o una transferencia confirmada. Un texto generado sin destino concreto deja sin resolver buena parte del proceso.",
          "Definí qué queda fuera. Si la prueba prepara un presupuesto, no tiene por qué negociar condiciones ni enviarlo. Ese límite ayuda a entender qué se está evaluando."
        ]
      },
      {
        "title": "Decidí de antemano qué harías con el resultado",
        "paragraphs": [
          "Acordá qué mejora justificaría continuar y qué falla obligaría a cambiar el enfoque. Sumá tiempo de revisión y corrección a la comparación.",
          "Si una herramienta existente puede cubrir la necesidad, probala antes de construir. La evaluación es exitosa cuando orienta una buena decisión, incluso si la respuesta es configurar mejor lo que ya usan.",
          "Para una primera conversación, llevá dos candidatos en lugar de una solución cerrada. En cada uno, incluí un caso habitual, una excepción y quién confirma el resultado. Compararlos permite detectar si la oportunidad más atractiva también es comprobable. Una tarea puede prometer mucho valor y necesitar información que todavía no está disponible para empezar."
        ]
      }
    ],
    "related": [
      "medir-automatizacion",
      "piloto-ia-casos-reales"
    ]
  },
  {
    "slug": "medir-automatizacion",
    "title": "Cómo medir si una automatización realmente ahorra trabajo",
    "description": "Compará tiempo completo, errores y mantenimiento para evitar confundir una demo rápida con una mejora operativa.",
    "category": "Decisiones sobre IA",
    "flow": "analisis",
    "intro": "Un borrador aparece en segundos. Después alguien lo revisa, corrige y carga en otro sistema. Si sólo medís la generación, podés pasar por alto el trabajo que la solución trasladó a otra persona.",
    "sections": [
      {
        "title": "Definí el principio y el final de la tarea",
        "paragraphs": [
          "Medí desde que entra un caso hasta que queda correctamente resuelto. Separá tiempo activo de espera: ambos importan, pero se mejoran de formas diferentes.",
          "En un ejemplo ilustrativo, un pedido tarda veinte minutos de trabajo y dos días esperando un precio. Reducir la carga a diez minutos no elimina la espera. Presentar ambas cifras evita confundir mejoras."
        ]
      },
      {
        "title": "Armá una referencia con casos comparables",
        "paragraphs": [
          "Incluí casos habituales y excepciones. Anotá volumen, complejidad y quién los realiza. Si la muestra de la nueva herramienta es más fácil que la anterior, la comparación puede resultar engañosa.",
          "Registrá tiempo de revisión, correcciones y problemas detectados después. También cuánto tarda el equipo en resolver una salida incorrecta."
        ]
      },
      {
        "title": "Calculá capacidad sin convertirla automáticamente en dinero",
        "paragraphs": [
          "Si se liberan horas, preguntá qué se podrá hacer con ellas. Menor demora, mayor capacidad o menos trabajo fuera de horario son resultados distintos de una reducción de costos.",
          "Para evaluar conveniencia, sumá configuración, uso y mantenimiento. Un cálculo ilustrativo puede servir para comparar escenarios, siempre que sus supuestos queden visibles y no se presente como una promesa."
        ]
      },
      {
        "title": "Tomá una decisión con el conjunto",
        "paragraphs": [
          "Una mejora de velocidad puede ser aceptable si conserva calidad; puede no serlo si aumenta errores costosos. Acordá el criterio antes de mirar el resultado.",
          "Después de la prueba, elegí entre ampliar, ajustar, mantener acotado o detener. La herramienta debería facilitar esa decisión con datos que puedan revisarse, no con un único número de productividad sin contexto.",
          "Una planilla de seguimiento puede tener caso, complejidad, tiempo de preparación, revisión, corrección y estado final. Usá la misma definición con y sin herramienta. No completes tiempos faltantes con recuerdos imprecisos como si fueran mediciones. Si la referencia es estimada, señalalo y usala para planificar la prueba, no para comunicar un ahorro confirmado."
        ]
      }
    ],
    "related": [
      "elegir-primera-automatizacion",
      "analizar-resultados-ia"
    ]
  },
  {
    "slug": "piloto-ia-casos-reales",
    "title": "La demo de IA funciona, pero el piloto falla: cómo investigar la diferencia",
    "description": "Qué revisar cuando ejemplos simples funcionan y los casos reales requieren demasiadas correcciones.",
    "category": "Decisiones sobre IA",
    "flow": "calidad",
    "intro": "Una demo suele mostrar un caso claro. La operación trae información incompleta, versiones distintas y excepciones. Cuando el piloto falla, conviene identificar qué cambió entre esos escenarios antes de pedir instrucciones más largas al modelo.",
    "sections": [
      {
        "title": "Guardá el caso que falla completo",
        "paragraphs": [
          "Conservá la entrada, la información disponible, la salida y el resultado esperado. Respetá los permisos del entorno y evitá incorporar datos que no son necesarios para investigar.",
          "En un ejemplo ilustrativo, el sistema recomienda un producto discontinuado porque usa un catálogo anterior. El error parece de redacción, pero la causa está en la fuente."
        ]
      },
      {
        "title": "Clasificá las fallas",
        "paragraphs": [
          "Separá problemas de información, interpretación, reglas y ejecución. Una respuesta correcta que se carga en el registro equivocado requiere una solución diferente de una respuesta inventada.",
          "El NIST identifica la generación de contenido falso como un riesgo de los sistemas generativos. Esta referencia ayuda a reconocer que una salida fluida no basta para dar el caso por resuelto."
        ]
      },
      {
        "title": "Construí una muestra que desafíe la propuesta",
        "paragraphs": [
          "Incluí entradas incompletas, nombres ambiguos, contradicciones y casos fuera de alcance. Definí cuándo debe pedir ayuda o detenerse.",
          "No corrijas un ejemplo y lo uses como única prueba de mejora. Volvé a revisar otros casos para detectar si el cambio arregló uno y deterioró otro."
        ]
      },
      {
        "title": "Elegí el siguiente cambio por la causa",
        "paragraphs": [
          "Podría ser mejorar la fuente, acotar la tarea, mostrar una revisión o ajustar la integración. Cambiar de modelo es una opción, pero no resuelve una regla de negocio que nadie definió.",
          "El resultado útil de un piloto es saber para qué casos funciona y qué necesita intervención. Con ese mapa, la siguiente inversión tiene una base más concreta que una demo convincente.",
          "Al cerrar cada revisión, registrá causa probable, cambio propuesto y casos que volverán a comprobarse. Conservá también ejemplos donde la solución debería abstenerse. Si sólo guardás éxitos, la muestra deja de representar la operación. El límite de la primera versión debe poder explicarse con ejemplos comprensibles para quien va a usarla todos los días."
        ]
      }
    ],
    "source": {
      "label": "NIST · Perfil de IA generativa, 2024",
      "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
      "note": "Referencia sobre riesgos. El procedimiento de prueba es una propuesta aplicada, no una certificación."
    },
    "related": [
      "control-calidad-ia",
      "revisar-respuestas-ia"
    ]
  },
  {
    "slug": "revisar-respuestas-ia",
    "title": "Cómo diseñar la revisión humana de una respuesta generada con IA",
    "description": "Qué necesita ver una persona para comprobar una salida sin repetir todo el trabajo desde cero.",
    "category": "Producto y UX",
    "flow": "calidad",
    "intro": "Agregar un botón de aprobar no garantiza una revisión útil. La persona necesita entender qué está comprobando y contar con la información para hacerlo. Si debe reconstruir toda la tarea, la automatización puede haber movido el trabajo en lugar de reducirlo.",
    "sections": [
      {
        "title": "Definí qué se revisa",
        "paragraphs": [
          "Separá hechos, cálculos, condiciones y estilo. Cada elemento puede requerir una fuente diferente. Una respuesta agradable de leer puede contener un dato incorrecto que pase desapercibido.",
          "En un ejemplo ilustrativo, un informe de visita resume correctamente el trabajo pero agrega que el cliente quedó satisfecho. Si eso no fue registrado, el revisor necesita detectarlo como una afirmación nueva."
        ]
      },
      {
        "title": "Acercá la evidencia a la decisión",
        "paragraphs": [
          "Mostrá el dato original junto al resultado y permití abrir su contexto. Resaltá información agregada, campos sin respaldo y diferencias relevantes.",
          "Nielsen Norman Group analiza cómo las interfaces de chat pueden dificultar la comprobación. Para nuestro caso, la implicación de diseño es reducir el esfuerzo de contrastar, no limitarse a advertir que la IA puede equivocarse."
        ]
      },
      {
        "title": "Permití corregir y dejar pendiente",
        "paragraphs": [
          "La persona debería poder aprobar una parte, corregir otra y señalar qué falta. Una decisión binaria de aceptar o rechazar todo puede obligarla a rehacer el trabajo.",
          "Conservá el motivo de las correcciones cuando sirva para mejorar el proceso. Si siempre se corrige el mismo dato, investigá la fuente o la regla antes de agregar más revisión manual."
        ]
      },
      {
        "title": "Medí la revisión como parte del producto",
        "paragraphs": [
          "Observá tiempo, errores detectados y errores que se escapan. También si el revisor entiende por qué se le pide intervenir.",
          "Una primera prueba puede comparar dos pantallas: salida sola y salida con evidencia accesible. El objetivo es comprobar mejor con un esfuerzo razonable, manteniendo claro quién confirma el resultado.",
          "Para ensayar la pantalla, pedí que una persona explique en voz alta qué está verificando y dónde encuentra el respaldo. Observá si recorre todos los campos o si aprueba por apariencia general. Si no puede distinguir información original y contenido agregado, cambiá la presentación antes de atribuir el problema a falta de atención del revisor."
        ]
      }
    ],
    "source": {
      "label": "Nielsen Norman Group · AI Chatbots Discourage Error Checking",
      "url": "https://www.nngroup.com/articles/ai-chatbots-discourage-error-checking/",
      "note": "Análisis de dificultades de verificación; no una garantía sobre una interfaz específica."
    },
    "related": [
      "informes-visitas-tecnicas",
      "control-calidad-ia"
    ]
  },
  {
    "slug": "conocimiento-personas",
    "title": "Cuando todas las dudas terminan en la misma persona: cómo hacer accesible el conocimiento",
    "description": "Cómo convertir respuestas recurrentes en información consultable sin perder el contexto de las excepciones.",
    "category": "Información y equipo",
    "flow": "conocimiento",
    "intro": "Si el equipo siempre consulta a la misma persona, puede haber conocimiento importante que todavía no está disponible en el momento de trabajo. La solución no empieza necesariamente con un asistente: empieza por entender qué preguntas llegan y por qué.",
    "sections": [
      {
        "title": "Registrá preguntas, no todo lo que alguien sabe",
        "paragraphs": [
          "Durante un período acotado, agrupá consultas por tema y anotá qué información hizo falta para responder. Algunas serán reglas repetidas; otras, decisiones nuevas.",
          "En un ejemplo ilustrativo, preguntar qué versión de una ficha usar es distinto de pedir autorización para una excepción. Documentar la primera puede reducir interrupciones. La segunda puede seguir necesitando una decisión."
        ]
      },
      {
        "title": "Convertí respuestas en piezas pequeñas",
        "paragraphs": [
          "Una explicación útil incluye situación, regla, ejemplo y cuándo pedir ayuda. Es más fácil mantener una respuesta acotada que un manual enorme donde cuesta encontrar la excepción.",
          "Indicá vigencia y responsable del contenido. Si la política cambia, el equipo necesita reconocer qué respuesta dejó de aplicar."
        ]
      },
      {
        "title": "Elegí cómo acceder a ese conocimiento",
        "paragraphs": [
          "Puede ser una búsqueda, una ayuda dentro del sistema o un asistente que localice la respuesta. La elección depende de cómo se formula la duda y dónde aparece.",
          "Si las preguntas se expresan de muchas maneras, un asistente podría facilitar la búsqueda. Su resultado debería conservar la fuente y evitar transformar una recomendación contextual en una regla universal."
        ]
      },
      {
        "title": "Comprobá si disminuye la dependencia",
        "paragraphs": [
          "Observá cuántas consultas pueden resolverse con la información disponible y cuáles siguen requiriendo intervención. No midas sólo visitas al documento: que alguien lo abra no demuestra que haya encontrado respuesta.",
          "La meta inicial puede ser que las dudas habituales se resuelvan sin interrumpir, mientras los casos nuevos lleguen mejor preparados. Eso libera atención especializada sin pretender convertir toda la experiencia de una persona en una base de datos.",
          "Para empezar, elegí una consulta que se repita y otra que siempre requiera criterio. Documentá la primera y describí qué información necesita quien resuelve la segunda. El resultado puede ser una respuesta disponible y una derivación mejor preparada. Ambas mejoras son útiles, aunque ninguna elimine por completo la intervención de la persona experta."
        ]
      }
    ],
    "related": [
      "base-conocimiento-ia",
      "ia-atencion-cliente"
    ]
  },
  {
    "slug": "cuanto-cuesta-automatizar-procesos",
    "title": "¿Cuánto cuesta automatizar un proceso? Qué pedir para comparar presupuestos",
    "description": "Qué debería incluir una cotización de automatización: alcance, conexiones, revisión, mantenimiento y una prueba medible.",
    "category": "Decisiones sobre IA",
    "flow": "sistemas",
    "intro": "Dos presupuestos de automatización pueden tener precios distintos porque entregan cosas distintas. Uno prepara un borrador; otro conecta sistemas, gestiona errores y permite operar todos los días. Para compararlos, primero necesitás una definición común del resultado.",
    "sections": [
      {
        "title": "Pedí que describan una tarea completa",
        "paragraphs": [
          "La cotización debería explicar qué recibe la solución, qué produce y qué queda a cargo del equipo. Agregá los sistemas involucrados y las excepciones incluidas. Una lista de tecnologías no permite saber qué trabajo dejarás de hacer.",
          "En un ejemplo ilustrativo, leer una factura y cargarla en una planilla no incluye necesariamente contrastarla con un pedido. Si necesitás ambas cosas, deberían aparecer explícitamente."
        ]
      },
      {
        "title": "Separá inversión inicial y operación",
        "paragraphs": [
          "Consultá por configuración, conexiones, pruebas y puesta en uso. Después, por consumos, licencias, soporte y cambios. No hace falta aceptar un número genérico por estar asociado a la palabra IA.",
          "Pedí escenarios de volumen basados en tus casos y que se indiquen los supuestos. Si el proveedor no conoce cuántas operaciones habrá, una cifra mensual cerrada necesita explicar sus límites."
        ]
      },
      {
        "title": "Acordá cómo se acepta la entrega",
        "paragraphs": [
          "Definí una muestra de casos y un resultado comprobable. Incluí qué ocurre cuando faltan datos o falla una conexión. El criterio de aceptación debe considerar revisión y errores, no sólo que el flujo termine.",
          "La guía de descubrimiento de GOV.UK propone entender el problema y su valor antes de construir. Aplicado a una compra, eso significa evaluar el alcance antes de comparar precios."
        ]
      },
      {
        "title": "Pedí una primera etapa que permita decidir",
        "paragraphs": [
          "Puede ser una prueba acotada con una salida útil. Su resultado debería indicar si conviene avanzar, ajustar o usar una herramienta existente.",
          "No publicamos un precio universal porque no conocemos tus conexiones ni tus excepciones. Para preparar una comparación, reuní un caso habitual, uno difícil y el tiempo actual de resolución. Con eso la conversación puede producir un alcance más concreto.",
          "Al revisar una propuesta, preguntá qué cambios están incluidos después de la entrega y cómo se detectará un fallo. También qué acceso conservará la empresa a sus datos y al historial de operaciones. Estas respuestas ayudan a comparar el servicio completo. El precio de construir una primera versión no describe por sí solo lo que implica usarla."
        ]
      }
    ],
    "related": [
      "elegir-primera-automatizacion",
      "medir-automatizacion"
    ]
  },
  {
    "slug": "auditoria-ux-que-incluye",
    "title": "Auditoría UX: qué debería incluir para ayudarte a decidir qué mejorar",
    "description": "Cómo evaluar una propuesta de auditoría UX: recorridos, evidencia, prioridades y próximos pasos comprobables.",
    "category": "Producto y UX",
    "flow": "producto",
    "intro": "Una auditoría UX tiene valor si permite tomar decisiones sobre el producto. Una lista de observaciones visuales puede ser útil, pero no explica por sí sola qué impide completar una tarea ni qué debería resolverse primero.",
    "sections": [
      {
        "title": "Definí qué recorrido se va a revisar",
        "paragraphs": [
          "Pedí que se nombren las tareas y los públicos incluidos. Revisar el alta de una cuenta es distinto de revisar cómo una persona administra un pedido después de comprar.",
          "En un ejemplo ilustrativo, una auditoría de la portada puede encontrar problemas de jerarquía, mientras el mayor obstáculo está en un formulario posterior. Aclarar alcance evita esperar respuestas que el trabajo no investigará."
        ]
      },
      {
        "title": "Diferenciá inspección de prueba con usuarios",
        "paragraphs": [
          "Una revisión experta usa criterios para identificar problemas posibles. Una prueba de usabilidad observa a personas realizando tareas. No son el mismo método ni producen exactamente la misma evidencia.",
          "Nielsen Norman Group describe las pruebas de usabilidad como observación de tareas. Por eso conviene preguntar si la propuesta incluye participantes o sólo inspección, y qué preguntas podrá responder cada actividad."
        ]
      },
      {
        "title": "Pedí prioridades con una razón",
        "paragraphs": [
          "Cada hallazgo debería indicar dónde ocurre, a quién afecta, qué consecuencia podría tener y qué evidencia lo sostiene. Una captura con un círculo no alcanza para elegir una inversión.",
          "Las prioridades pueden considerar obstáculos para completar la tarea, frecuencia observada y dificultad de recuperación. Si una consecuencia todavía es hipotética, debería quedar indicada como tal."
        ]
      },
      {
        "title": "Buscá un próximo paso comprobable",
        "paragraphs": [
          "Una recomendación útil propone qué cambiar y cómo verificar si mejora. Puede ser una prueba pequeña antes de rediseñar un área completa.",
          "Para comparar propuestas, mirá si entregan una lista de problemas o una base para decidir. La evaluación inicial de Flambee puede ayudarte a ordenar el contexto; no reemplaza observar tu producto ni es una auditoría automática.",
          "Antes de contratar, pedí un ejemplo de cómo se presenta un hallazgo, sin información confidencial de otro cliente. Buscá evidencia, consecuencia y próximo paso. Si la propuesta incluye investigación, aclarar qué participantes y tareas cubre permite entender sus límites. Una auditoría acotada puede ser útil siempre que su alcance sea coherente con la decisión que querés tomar."
        ]
      }
    ],
    "related": [
      "usuarios-abandonan-producto",
      "chatbot-o-mejorar-ux"
    ]
  },
  {
    "slug": "chatgpt-no-alcanza-empresa",
    "title": "Usamos ChatGPT, pero seguimos haciendo todo a mano: qué puede estar faltando",
    "description": "Cómo distinguir ayuda individual y mejora de un proceso cuando la IA genera textos pero no reduce la operación.",
    "category": "Decisiones sobre IA",
    "flow": "sistemas",
    "intro": "Una persona prepara un texto con ChatGPT, lo revisa y lo copia a otra herramienta. Hay una ayuda puntual, pero el proceso puede conservar todos sus pasos. Para entender si falta una integración o un producto, seguí el trabajo después de la respuesta.",
    "sections": [
      {
        "title": "Mirá dónde empieza y termina la ayuda",
        "paragraphs": [
          "Identificá qué información se copia para preparar la consulta y qué se hace con la salida. Si la mayor parte del esfuerzo está en reunir datos o volver a cargarlos, mejorar la redacción puede tener un efecto limitado.",
          "En un ejemplo ilustrativo, generar un correo comercial no actualiza por sí solo el estado del presupuesto ni registra la fecha de seguimiento. Son acciones distintas."
        ]
      },
      {
        "title": "Separá las decisiones de los traslados",
        "paragraphs": [
          "Algunos pasos necesitan interpretar; otros siguen una regla definida. Un mapa del servicio permite hacer visibles estas dependencias y quién interviene.",
          "El marco de service blueprints de Nielsen Norman Group conecta la experiencia visible con los procesos que la sostienen. Lo aplicamos aquí para localizar el trabajo que una conversación con IA deja pendiente."
        ]
      },
      {
        "title": "No automatices una salida que todavía cuesta revisar",
        "paragraphs": [
          "Si el equipo corrige mucho el contenido, investigá por qué. Puede faltar una fuente vigente, una regla o una forma clara de comprobar el resultado. Conectar esa salida a más sistemas no resuelve esas causas.",
          "Una primera mejora puede conservar la revisión y automatizar sólo una transferencia ya definida. El producto debería mostrar qué preparó y qué sigue esperando confirmación."
        ]
      },
      {
        "title": "Probá un recorrido pequeño de punta a punta",
        "paragraphs": [
          "Elegí una tarea recurrente y compará el tiempo total hasta completarla correctamente. Incluí preparación, revisión y carga final.",
          "Si el resultado mejora, evaluá el siguiente paso. Si no, el mapa sirve para localizar el esfuerzo restante. La pregunta deja de ser cuánto usa IA el equipo y pasa a ser qué trabajo consigue resolver mejor.",
          "Para preparar la evaluación, registrá un caso desde que llega hasta que queda cerrado. Marcá los pasos donde interviene ChatGPT y los que siguen fuera. Anotá cuánto cuesta preparar y revisar la consulta. Ese recorrido permite distinguir una ayuda individual valiosa de una oportunidad de integración, sin asumir que todo debería convertirse en un agente autónomo."
        ]
      }
    ],
    "related": [
      "integrar-sistemas-sin-ia",
      "revisar-respuestas-ia"
    ]
  }
];
