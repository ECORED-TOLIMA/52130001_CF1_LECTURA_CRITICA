<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Algunos tipos de textos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p En el proceso de producción escrita, es necesario reconocer que los textos se clasifican según su intención comunicativa y la forma en que organizan la información. Cada tipo textual responde a propósitos específicos y exige criterios particulares de redacción, estructura y desarrollo de ideas. 

                p En este apartado se presentan dos modalidades fundamentales en el ámbito académico: el resumen, orientado a la síntesis objetiva de contenidos, y el ensayo, centrado en la reflexión y argumentación sustentada.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Resumen

    .row.align-items-center
      .col-lg-7
        p El resumen es un documento académico que organiza de manera lógica las ideas más importantes que provienen de un documento base, sea este escrito, verbal o icónico.

        p En el proceso de recolectar información para una actividad investigativa, se dan pasos que implican leer, seleccionar, organizar los contenidos y no solo transcribirlos literalmente. Características Olga Lucía Arbeláez (2007) en su artículo El resumen.

        p La cultura extraviada en sus definiciones presenta cuatro características fundamentales:

      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/2.png', alt='', style="width: 500px").m-auto


    .row.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/3.svg', style="width: 128px").m-auto

          p.text-center
            b Objetividad
          p.text-small.text-center Se refiere al respeto de las ideas originales del texto y del estilo del autor.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/4.svg', style="width: 128px").m-auto

          p.text-center
            b Claridad
          p.text-small.text-center Facilita la comprensión que debe posibilitar el texto. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/5.svg', style="width: 128px").m-auto

          p.text-center
            b Precisión
          p.text-small.text-center Hace alusión a su forma de enunciación, que, con oraciones cortas y concisas, condensa el sentido del texto. 


      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/6.svg', style="width: 128px").m-auto

          p.text-center
            b Flexibilidad
          p.text-small.text-center Se refiere a la posibilidad de producir diferentes tipos de resumen. Al ser un texto nuevo, la originalidad depende del estilo del redactor. 


    .row.align-items-center.mt-4
      .col-lg-8
        p Es importante tener en cuenta que un resumen, a pesar de provenir de las ideas de un texto base, constituye un texto nuevo. Desde el punto de vista formal, se considera que un buen resumen debe representar entre un tercio y una quinta parte del texto original (Cervera et al., 2006).

        .row.align-items-center.bg-5.bg-r8.p-3
          .col-lg-2.d-lg-block-d-none
            figure
              img(src="@/assets/curso/tema3/7.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Resumir consiste en convertir un texto extenso en otro más breve. Este proceso implica ordenar las ideas fundamentales y expresarlas de forma personal y creativa, utilizando palabras propias y un estilo adecuado para la elaboración de la síntesis.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/8.png', alt='', style="width: 400px").m-auto


    .titulo-tres.mt-5: h3 Características del resumen

    ul.lista-ul--color.mt-2
      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 Un resumen debe tener una extensión aproximada de una cuarta parte del texto original.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 Todas las ideas deberán estar completamente integradas, enlazadas y relacionadas. No puede ser una sucesión de ideas ni una simple enumeración.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 Debe ir de lo general e importante del tema a lo particular del mismo.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 Debe ir de lo fundamental a lo explicativo.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 En los resúmenes no podrán utilizarse guiones ni asteriscos. El punto seguido es el medio de enlace.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 La labor de resumir es posterior al subrayado y consiste en la unión de todas las ideas principales y secundarias.

      li.d-flex.align-items-start.p-1
        span.icono-img
        p.mb-0 Facilita la comprensión y ayuda enormemente al repaso de las lecciones.


    .bg-6(style="margin-top: -30px")
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/9.png', alt='', style="width: 400px").m-auto

            .col-lg-8
              .titulo-tres.mt-5: h3 Estrategias

              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Lea párrafo a párrafo.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Formule preguntas tales como: ¿Quién?, ¿cómo?, ¿dónde?, ¿cuándo?, ¿qué?, ¿por qué?, ¿para qué?

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Subraye las respuestas a las preguntas formuladas.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Escriba las palabras subrayadas.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Redacte de modo que tenga sentido, respetando el orden del desarrollo de las ideas.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Respete el lenguaje y los conceptos básicos del autor.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Respete la puntuación que presenta el texto original.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Escriba el resumen con sus propias palabras.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Confeccione un resumen sobre la base de dos o más párrafos, según el siguiente esquema.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Ensayo 

    .row.align-items-end
      .col-lg-9
        p Un ensayo es un escrito en prosa, generalmente breve, que expone una interpretación personal sobre cualquier tema. Ensayar es pensar, analizar, interpretar y evaluar un tema.

        .titulo-tres.mt-2: h3 Criterios importantes

        p.p-4.bg-7.bg-r8 Coherencia, consistencia, claridad, profundidad, pertinencia, argumentación y elegancia.

        .titulo-tres.mt-2: h3 Clases de ensayos

        ul.lista-ul.p-4.bg-7.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b Filosófico o reflexivo:] desarrolla temas encaminados a explicar la naturaleza, las relaciones, las causas y la finalidad del mundo físico.

          li 
            i.lista-ul__vineta
            p.mb-0 #[b De crítica:] enjuicia hechos e ideas, ya sean históricos, artísticos o sociológicos, y cuya modalidad más conocida es el ensayo de crítica literaria.

          li 
            i.lista-ul__vineta
            p.mb-0 #[b Descriptivo:] desarrolla temas científicos y sobre los fenómenos de la naturaleza.

          li 
            i.lista-ul__vineta
            p.mb-0 #[b Poético:] se basa en cualquier asunto que se transforme en objetivo artístico; recurre a la fantasía y a la imaginación.

          li 
            i.lista-ul__vineta
            p.mb-0 #[b Personal y familiar:] revela el carácter y la personalidad del autor.


      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/10.png', alt='', style="width: 290px").m-auto


    .titulo-tres.mt-5: h3 Características del ensayo

    ul.lista-ul.p-4.bg-7.bg-r8
      li 
        i.lista-ul__vineta
        p.mb-0 #[b Estructura libre] 
        
      p.px-3 El ensayo debe ir desde lo descriptivo hasta la interpretación del asunto que trata; puede expresar sensibilidad, creatividad e imaginación y sustentarse en el rigor lógico, conceptual y metodológico que aportan la investigación y el estudio de los hechos (Cañón, 2002).


      li 
        i.lista-ul__vineta
        p.mb-0 #[b  Forma sintética y breve] 

      p.px-3 Este rasgo característico puede variar; depende del propósito del autor y del tema que trate. Existen ensayos cortos y breves, así como ensayos de mediana extensión.


      li 
        i.lista-ul__vineta
        p.mb-0 #[b El ensayo es una reflexión] 
      p.px-3 El ensayo puede partir de la reflexión de otros y debe convencer con los argumentos que allí se exponen.


      li 
        i.lista-ul__vineta
        p.mb-0 #[b El ensayo tiene carácter discursivo] se basa en cualquier asunto que se transforme en objetivo artístico; recurre a la fantasía y a la imaginación.

      li 
        i.lista-ul__vineta
        p.mb-0 #[b Personal y familiar:] revela el carácter y la personalidad del autor.
      p.px-3 Las ideas se entrelazan de forma organizada para dar una lógica interna a la composición.


    p.mt-4 Con el propósito de facilitar la comprensión de la estructura argumentativa y su correcta aplicación en la producción de textos, se describen a continuación las partes fundamentales que constituyen un ensayo:

    .row.justify-content-center.mt-4
      .col-lg-10.bg-2
        figure
          img(src='@/assets/curso/tema3/11.svg').m-auto
        .row.bg-8.p-4.align-items-center.justify-content-center
          .col-12.bg-9.bg-r8.p-4
            TarjetaAudio.color-acento-botones.mb-3.bg-9.p-3(
                texto="podcast"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")



    .titulo-tres.mt-5: h3 Sugerencias para escribir un ensayo

    p A continuación, se presentan algunas formas de introducir el tema en un ensayo, las cuales permiten captar el interés del lector y orientar el desarrollo del contenido desde el inicio de manera clara y coherente.

    p Algunas formas de introducir el tema:

    .row.bg-8.bg-r8.p-4.align-items-center
      .col-lg-9
        ul.lista-ul--color.mt-2
          li.d-flex.align-items-start.p-1
            span.icono-img
            p.mb-0  Se comienza con una presentación amplia del tema hasta llevarlo a lo específico. Puede iniciarse con una idea o situación opuesta a lo que se va a desarrollar, según convenga al interés del lector. También puede utilizarse un incidente, una historia corta o una anécdota relacionada con el tema; puede ser una experiencia personal o algo leído en una revista o periódico. Es posible emplear preguntas para despertar el interés del lector y motivarlo a continuar la lectura. Asimismo, se pueden incluir citas, proverbios o frases.

          li.d-flex.align-items-start.p-1
            span.icono-img
            p.mb-0 Aunque la brevedad es una de las características del ensayo, la extensión puede variar para permitir la exposición clara y coherente de las ideas. Así, se puede incluir de tres a diez hojas a espacio sencillo.

          li.d-flex.align-items-start.p-1
            span.icono-img
            p.mb-0 Las opiniones deben estar sustentadas con argumentos sólidos y de peso.

          li.d-flex.align-items-start.p-1
            span.icono-img
            p.mb-0  El ensayo debe ser una combinación de ideas personales con ideas de autores diferentes que contribuyan a confirmar las ideas propias.



      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/12.svg', alt='', style="width: 270px").m-auto


    .row.justify-content-center.mt-5
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b Pregunta: ¿Cuál es la diferencia de los tipos de textos resumen y ensayo?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
