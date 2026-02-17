<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Clases de palabras

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema8/1.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.bg-r8.bg-5.p-4
          figure
            img(src="@/assets/curso/tema8/2.svg", alt="", style="width: 74px")

          p.mt-4 Las clases de palabras permiten comprender cómo se organizan y relacionan los elementos dentro de la oración para construir mensajes claros y coherentes. Cada categoría gramatical cumple una función específica que aporta el significado y precisión al texto. A continuación, se abordan el sustantivo, el adjetivo y el uso de sinónimos y antónimos como componentes fundamentales en la producción escrita. 


    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 El sustantivo

    .row.align-items-center
      .col-lg-9
        p El sustantivo es la clase de palabra que designa personas, animales, objetos o ideas y que presenta variación de género y número. En efecto, se utilizan los sustantivos para nombrar personas (alumno, niño, mujer), animales (jirafa, hormiga, canario), objetos (mesa, ordenador, carpeta), así como ideas o conceptos abstractos (libertad, amor, compañerismo).

        .row.align-items-center.bg-17.bg-r8.p-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema8/3.svg", alt="", style="width: 74px").m-auto
          .col-lg-10
            p Los nombres o sustantivos son palabras variables, lo que significa que admiten morfemas de género y número. Mediante el género, se indica si el sustantivo es masculino (amigo, gato, cocinero) o femenino (amiga, gata, cocinera). Por su parte, el número permite expresar la cantidad.


      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema8/4.svg', alt='', style="width: 292px").m-auto

    p.mt-4 Así, cuando el sustantivo indica «uno», se dice que está en singular (teléfono, cuaderno, cama); en cambio, cuando designa «varios», se encuentra en plural (teléfonos, cuadernos, camas).

    p Según su significado, es decir, de acuerdo con lo que nombran, los sustantivos pueden ser:


    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 4.
          span 
            i Clasificación del sustantivo

        figure
          img(src='@/assets/curso/tema8/5.svg', alt='Figura 3. Clasificación del sustantivo.Esquema que presenta la clasificación de los sustantivos en abstractos y concretos. Los sustantivos concretos se subdividen en propios y comunes, y estos últimos en contables, no contables, individuales y colectivos, con ejemplos en cada caso. ', style="width: 1020px").m-auto


    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 El adjetivo

    p El adjetivo es la parte de la oración que se añade al sustantivo para calificarlo o determinarlo. De este modo, puede aportar una nota o cualidad del sustantivo o bien precisar la extensión de su significado. A partir de esta función, los adjetivos se dividen en dos grandes grupos: calificativos (perro guardián) y determinativos (dos perros).

    .titulo-tres.mt-5: h3 Adjetivos calificativos

    .row.align-items-center
      .col-lg-8
        p Expresan cualidades, características o estados del sustantivo al que acompañan. Pueden ser especificativos, cuando distinguen al sustantivo dentro de un conjunto, o explicativos, cuando resaltan una cualidad propia sin intención de diferenciación.

        p A continuación, se presentan algunos ejemplos de adjetivos calificativos, los cuales expresan cualidades o características del sustantivo:

      .col-lg-4
        figure
          img(src='@/assets/curso/tema8/6.png', alt='', style="width: 390px").m-auto

    .row.mt-4.justify-content-center
      .col-lg-10.p-5.bg-7.bg-r8
        figure
          img(src='@/assets/curso/tema8/7.svg', alt='', style="width: 680px").m-auto


    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema8/8.png', alt='', style="width: 290px").m-auto
      .col-lg-8
        p En los tres casos se señala una especie particular dentro de un conjunto; así, cuando se dice animales feroces, se indica una clase específica de animales para distinguirlos de otros que no presentan esa característica. Estos adjetivos se denominan especificativos, ya que restringen el significado del sustantivo al que acompañan.
        .row.bg-r8.bg-5.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema8/9.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p.mt-4 En cambio, al decir mariposa alada, el adjetivo, en este caso, explica o resalta una cualidad propia del sustantivo, sin intención de distinguirlo de otros. Estos adjetivos se llaman explicativos o epítetos. Los epítetos son adjetivos que expresan una cualidad inherente o propia del sustantivo.


    .titulo-tres.mt-5: h3 Adjetivos determinativos
    
    p Dentro de este grupo, la gramática reúne los adjetivos determinativos, entre los cuales se incluyen los numerales, demostrativos, posesivos, interrogativos, exclamativos, relativos e indefinidos.

    .row.mt-4.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema8/10.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario.p-3(x="15%" y="83%" numero="+")
            .h5.mb-2 Indefinidos
            p Nombran al sustantivo de manera vaga o imprecisa. Ejemplo: algún día se resolverá el inconveniente.

          .tarjeta.color-secundario.p-3(x="25%" y="46%" numero="+")
            .h5.mb-2 Relativos
            p Remiten a un elemento mencionado anteriormente en el discurso. Ejemplo: el aprendiz cuya asistencia fue completa recibió el certificado.

          .tarjeta.color-secundario.p-3(x="40%" y="26%" numero="+")
            .h5.mb-2 Interrogativos y exclamativos
            p Indican la actitud del hablante en enunciados interrogativos o exclamativos. Ejemplo: ¿Qué horario prefiere?. ¡Cuánta lluvia ha caído!.

          .tarjeta.color-secundario.p-3(x="60%" y="26%" numero="+")
            .h5.mb-2 Posesivos
            p Indican pertenencia en relación con la primera, segunda o tercera persona. Ejemplo: el aprendiz entregó su proyecto a tiempo.

          .tarjeta.color-secundario.p-3(x="80%" y="46%" numero="+")
            .h5.mb-2 Demostrativos
            p Indican la posición del sustantivo con respecto a la persona que habla o escucha. Ejemplo: este informe debe ser revisado hoy.

          .tarjeta.color-secundario.p-3(x="86%" y="83%" numero="+")
            .h5.mb-2 Numerales
            p Indican un número determinado y se subdividen en cardinales, ordinales, partitivos, múltiplos y colectivos. Ejemplo: el primer estudiante.


    .titulo-tres.mt-5: h3 8.3 Sinónimos y antónimos

    p Los sinónimos son palabras que se escriben de forma diferente, pero que tienen un significado igual o muy parecido. Por otro lado, los antónimos son aquellas palabras que expresan ideas contrarias u opuestas entre sí.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Características comparativas de escritura y significado en sinónimos y antónimos.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #F1FDD6")
              tr
                th Categoría
                th Escritura
                th Significado
            tbody
              tr
                td Sinónimos
                td Diferente
                td Similar
              tr
                td Antónimos
                td Diferente
                td Opuesto

    p.mt-4 Además, existen otros grupos de palabras que pueden generar confusión:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4.
          span Definición y ejemplos de parónimos y homónimos

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #F1FDD6")
              tr
                th Tipo de palabra
                th Definición
                th Ejemplo
            tbody
              tr
                td Parónimos
                td.text-start Palabras que se pronuncian de forma muy parecida, pero que significan cosas distintas.
                td sumo (de sumar o supremo) y zumo (jugo).
              tr
                td Homónimos
                td.text-start Palabras que se escriben exactamente igual, pero poseen significados diferentes según el contexto.
                td lava (acción de lavar) y lava (materia del volcán).

    p.mt-4 El uso correcto de estas palabras evita repeticiones innecesarias y otorga fluidez al escrito. A partir de esto, se plantea el siguiente interrogante:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b ¿Para qué se usan los sinónimos en la escritura?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
