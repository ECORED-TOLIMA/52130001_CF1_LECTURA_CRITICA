<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normas generales de redacción de textos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el dominio de la estructura textual y la normativa gramatical y ortográfica vigente, para garantizar una redacción correcta y coherente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la característica de un párrafo que se refiere a desarrollar una sola idea central?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cohesión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extensión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Unidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Brevedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Los conectores son elementos que:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten relacionar ideas estableciendo vínculos lógicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Separan ideas sin relación alguna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminan la coherencia del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducen la extensión del párrafo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de estructura textual se caracteriza por presentar la idea principal al principio del texto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructura inductiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura enumerativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estructura descriptiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura deductiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La estructura que presenta elementos a modo de enumeración o lista se denomina:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructura temporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura enumerativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estructura paralelística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura inductiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Un buen resumen debe representar aproximadamente del texto original:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La mitad exacta del contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El doble de extensión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Menos del 10% del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entre un tercio y una quinta parte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es una característica fundamental del ensayo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructura libre y reflexión personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar toda subjetividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Copiar textualmente fuentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar argumentos sólidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'La claridad en la redacción se logra mediante:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lenguaje complejo y rebuscado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación de signos de puntuación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lenguaje sencillo, palabras comprensibles y frases breves.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de tecnicismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Seleccione el enunciado que mejor describe la concisión en la redacción:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar muchas palabras para explicar una idea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar toda información relevante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la extensión del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Emplear solo palabras precisas y necesarias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Identifique cuál de las siguientes situaciones constituye un error común en la redacción de textos:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar con coma los elementos de una enumeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Separar con coma el sujeto del verbo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Separar con coma las oraciones subordinadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separar con coma los vocativos del resto de la oración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'De acuerdo con la Real Academia Española, el alfabeto castellano vigente está conformado por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '29 letras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '25 letras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '30 letras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '27 letras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cómo se denomina la unión inseparable de dos vocales que se pronuncian en una misma sílaba?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diptongo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Hiato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Triptongo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dígrafo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Opción a)\tLos días de la semana.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los meses del año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los nombres propios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las estaciones del año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Complete el enunciado: de acuerdo con las reglas ortográficas, se escriben con minúscula:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los nombres de galaxias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los nombres propios de personas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los títulos de obras literarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los días de la semana y meses del año.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la terminación de los verbos que se escriben con la letra "b"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ver y vir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ger y gir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'bir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ducir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Identifique ante cuáles vocales la letra "g" representa el fonema velar sonoro:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'a, o, u.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'e, i.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo a la vocal e.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo a la vocal i.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'El signo de puntuación coma (,) tiene como función principal:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicar el final de un enunciado completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Señalar una pregunta directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Expresar una exclamación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Marcar una pausa breve dentro de un enunciado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Seleccione la función correcta de los dos puntos (:) en la redacción de textos:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar párrafos independientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Detener el discurso y llamar la atención sobre lo que sigue.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Indicar una pregunta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Finalizar un texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'De acuerdo con las normas de puntuación, el punto (.) debe escribirse:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'a) Separado de la palabra que lo precede.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'b) Dentro de paréntesis siempre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'c) Sin separación de la palabra que lo precede.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'd) Solo al inicio de párrafo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Complete el enunciado: los sustantivos son palabras variables que presentan morfemas de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo número.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo género.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiempo y modo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Género y número.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué caracteriza a las palabras sinónimas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se escriben de forma diferente, pero tienen significado similar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tienen significados opuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se pronuncian exactamente igual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siempre se escriben igual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
