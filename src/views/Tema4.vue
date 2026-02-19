<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Redacción de textos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Redactar —observa Hilda Basulto— es una actividad comunicativa de primer orden que supone un nivel cultural avanzado en quien la ejerce. No se trata de un acto mecánico, sino de un proceso consciente de construcción de textos escritos. Por ello, su aprendizaje y práctica exigen un cuidadoso trabajo tanto en la elaboración de la materia prima —el pensamiento— como en su adecuada forma de expresión mediante el lenguaje escrito.

    .row.align-items-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="fade-down")
            figure
              img(src="@/assets/curso/tema4/2.svg", alt="", style="width: 100px").m-auto
          .col-lg-10
            p De esta concepción dialéctica de la escritura, que articula el pensar con el escribir, se desprende la estrecha relación entre contenido y forma, la cual todo redactor debe reconocer como eje fundamental de cualquier ejercicio de redacción. En torno a esta relación se estructuran las principales características de la buena redacción, que se desarrollan a continuación.

        p A continuación, se presentan las principales características de una buena redacción, las cuales orientan la producción de textos claros, precisos y comprensibles, fundamentales para una comunicación escrita en contextos académicos y laborales.
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/3.svg", alt="", style="width: 180px").m-auto


    .row.mt-4.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-10")
          .row(titulo="Claridad")

            .row.px-5
              .col-lg-8
                p Lograr que un texto sea comprendido por un público amplio exige precisión en las ideas y transparencia en la exposición, lo que supone una visión ordenada de los hechos y una expresión directa. En este sentido, una buena redacción implica una “visión clara de los hechos o de las ideas y una exposición neta y tersa de los mismos” (Martín Vivaldi, s. f.). Para ello, es necesario emplear un lenguaje sencillo, palabras comprensibles y frases breves que permitan al lector captar el mensaje desde la primera lectura. Asimismo, una sintaxis correcta y un vocabulario accesible contribuyen a evitar ambigüedades y el uso innecesario de términos rebuscados o excesivamente técnicos.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema4/4.png', alt='', style="width: 370px").m-auto

          div(titulo="Concisión")

            .row.px-5
              .col-lg-8
                p.mb-0 Ser conciso exige precisión en el lenguaje, combatir el exceso verbal y el regodeo, y acabar con las imprecisiones. Sobre esta segunda cualidad de la buena redacción, Martín Vivaldi anota que solo se debe emplear aquellas palabras que sean absolutamente precisas para expresar lo que se quiere decir.
                p Conciso no quiere decir lacónico sino denso: “estilo denso es aquel en que cada línea, cada palabra o cada frase están preñadas de sentido. Lo contrario es la vaguedad, la imprecisión, el exceso de palabras; lo que vulgarmente se dice retórica”.

                p La falta de concisión —advierte con Albalat— es el defecto general de los que empiezan a escribir... La concisión es cuestión de trabajo. Es preciso limpiar el estilo, cribarlo, pasarlo por el tamiz, quitarle la paja, clarificarlo... es preciso evitar lo superfluo, la verborrea, la redundancia, el titubeo expresivo y el añadido de ideas secundarias que nada fortalecen a la idea matriz, sino que más bien la debilitan.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema4/5.png', alt='', style="width: 370px").m-auto          

          div(titulo="Sencillez")

            .row.px-5
              .col-lg-8
                p Consiste en emplear palabras de uso común como tercera cualidad de la buena redacción. Martín Vivaldi afirma que la sencillez no quiere decir vulgaridad; que con palabras de uso común se pueden expresar elevados pensamientos, y que esta obligación del buen redactor va de la mano con la naturalidad.

                p La sencillez consiste en expresar las ideas escuetamente y sin retorcimiento, directa y precisamente, sin adornos, sin apelar al diccionario para sacarle vocablos que nadie escucha; es decir, con naturalidad.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema4/6.png', alt='', style="width: 370px").m-auto    


    .titulo-tres.mt-5: h3 Cinco errores de redacción que son imperdonables

    .row.align-items-center
      .col-lg-9
        p Pensar, hablar y escribir son tres ejercicios distintos, cada uno debe obedecer sus propias normas y, de los tres, el último es el más complicado. Para transmitir mensajes por escrito que sean claros, coherentes y contundentes hay que seguir procesos lógicos. Pero cuando las personas aprenden a escribir obvian algunos de estos códigos o los olvidan con el tiempo.

        ul.lista-ul.p-4.bg-7.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b No coma cuento]
          p.px-3.mb-0 A muchas personas les dijeron que la coma es una pausa para tomar aire dentro de una oración. Esto no es cierto. El uso de la coma obedece a unas reglas gramaticales que se deben cumplir para hacer que un texto sea comprensible.
          p.px-3 Un error habitual es separar con una coma el sujeto del verbo. Ocurre, sobre todo, cuando el sujeto es muy largo. Tampoco es correcto separar el verbo del complemento directo.

        ul.lista-ul.p-4.bg-5.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b ¿Cuál es su objetivo?]
          p.px-3.mb-0 A veces las personas confunden los fines con los medios o las tesis con los argumentos. El resultado son textos que dan muchas vueltas y no es posible comprender qué buscan o qué están transmitiendo.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/7.png', alt='', style="width: 290px").m-auto


    .row.justify-content-center.mt-3
      .col-lg-10
        ul.lista-ul.p-4.bg-7.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b Evite los comodines]
          p.px-3.mb-0 Existen palabras y oraciones que parece que sirvieran para todo y a veces no sirven para nada. Es mejor no usarlas.
          p.px-3 Todas las palabras significan algo y tienen un uso adecuado. El error está en exceder el sentido de algunos términos o usar muchas palabras para decir algo que puede ser expresado de manera más breve.

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3.mt-4
                h5 Figura 1.
                span Uso adecuado del lenguaje en la redacción

              figure
                img.d-none.d-md-block.m-auto(
                  src='@/assets/curso/tema4/8.svg', alt=' Figura 1. Balanza que compara una frase imprecisa (“Incorrecto”) con una redacción clara (“Correcto”), resaltando la importancia de la precisión en el lenguaje.', style="width: 480px").m-auto
                img.d-block.d-md-none.m-auto(
                  src='@/assets/curso/tema4/8m.svg',
                  alt='Figura 1. Balanza que compara una frase imprecisa (“Incorrecto”) con una redacción clara (“Correcto”), resaltando la importancia de la precisión en el lenguaje.'
                )

    .row.justify-content-center.mt-3
      .col-lg-10
        ul.lista-ul.p-4.bg-5.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b Uso apropiado del gerundio]
          p.px-3.mb-0 El gerundio se identifica en los verbos terminados en -ando, - iendo o - yendo. Se usa para describir dos acciones simultáneas. No se debe usar cuando la acción que describe es posterior al verbo principal de la oración.

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3.mt-4
                h5 Figura 2.
                span Uso correcto e incorrecto del gerundio

              figure
                img.d-none.d-md-block.m-auto(
                  src='@/assets/curso/tema4/9.svg', alt='Figura 2. Uso correcto e incorrecto del gerundio. Balanza que compara una oración con gerundio incorrecto y otra con una redacción adecuada.', style="width: 480px").m-auto
                img.d-block.d-md-none.m-auto(
                  src='@/assets/curso/tema4/9m.svg',
                  alt='Figura 2. Uso correcto e incorrecto del gerundio. Balanza que compara una oración con gerundio incorrecto y otra con una redacción adecuada.'
                )

          p.mt-4  Para saber si un gerundio está empleado de forma correcta o incorrecta pregunte ‘¿cómo?’ al verbo. Si la respuesta la da el gerundio, está bien empleada. De lo contrario debe buscar una palabra que lo reemplace. Ejemplo:

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.align-items-center.bg-8.bg-r8.p-4
                .col-lg-7
                  p Empezó su discurso dando las gracias al jurado.

                  p #[b Pregunta:] ¿Cómo empezó el discurso?

                  p #[b Respuesta:] dando las gracias al jurado.

                .col-lg-5.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema4/10.svg', alt='', style="width: 380px").m-auto


    .row.justify-content-center.mt-3
      .col-lg-10
        ul.lista-ul.p-4.bg-7.bg-r8
          li 
            i.lista-ul__vineta
            p.mb-0 #[b ‘De que’ o ‘que’]
          p.px-3.mb-0 En la producción escrita es común presentar dudas en el uso de “que” y “de que”, lo cual puede derivar en errores como el dequeísmo. Este fenómeno ocurre cuando se emplea de manera innecesaria la preposición “de” antes de la conjunción “que”, afectando la corrección gramatical del enunciado. Para evitarlo, se recomienda analizar la estructura de la oración y comprobar si el verbo realmente exige la presencia de la preposición. Ejemplo:

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.align-items-center.bg-2.bg-r8.p-4
                .col-lg-7

                  p #[b Incorrecto:] A Juan le dijeron  de que  ella lo estaba esperando. 

                  p #[b Correcto:] A Juan le dijeron  que  ella lo estaba esperando.

                .col-lg-5.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema4/11.svg', alt='', style="width: 380px").m-auto


</template>

<script>
export default {
  name: 'Tema4',
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
