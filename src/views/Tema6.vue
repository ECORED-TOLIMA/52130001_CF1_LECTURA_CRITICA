<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Código ortográfico

    .row.align-items-center
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema6/1.svg", alt="", style="width: 85px").m-auto
      .col-lg-11
        p El código ortográfico reúne el conjunto de normas que regulan la correcta escritura de las palabras en la lengua española. Su conocimiento permite evitar errores frecuentes y garantizar claridad, uniformidad y precisión en la comunicación escrita. A continuación, se presentan aspectos fundamentales relacionados con el uso de mayúsculas, minúsculas y reglas ortográficas. 

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Uso de mayúsculas
    
    p La escritura normal utiliza habitualmente las letras minúsculas, si bien, por distintos motivos, pueden escribirse enteramente con mayúsculas palabras, frases e incluso textos enteros; pero lo usual es que las mayúsculas se utilicen solo en posición inicial de palabra, y su aparición está condicionada por distintos factores.

    .row.align-items-center
      .col-lg-8
        ol.lista-ol.bg-7.p-4.bg-r8
          li 
            span.text-bold a)
            | La palabra inicial de un escrito

          li 
            span.text-bold b)
            | Los nombres propios de personas, animales, lugares geográficos entre otros.

          li 
            span.text-bold c)
            | Los títulos y tratamientos de cortesía.


          li 
            span.text-bold d)
            | Los nombres de instituciones, cuerpos o establecimientos.


          li 
            span.text-bold e)
            | Los números romanos


          li 
            span.text-bold f)
            | La primera palabra de una cita textual.


          li 
            span.text-bold g)
            | Los atributos divinos.


          li 
            span.text-bold h)
            | Los nombres que constituyen el título de una obra escrita de carácter científico o técnico.


          li 
            span.text-bold i)
            | Las siglas, cabeceras de revistas, periódicos.


          li 
            span.text-bold j)
            | Inscripciones de lápidas y monumentos.


          li 
            span.text-bold k)
            | Textos jurídicos, administrativos, decretos, sentencias, certificaciones, bandos, sentencias, edictos.


          li 
            span.text-bold l)
            | Textos de carácter informativo, frases que expresan el contenido fundamental del escrito.


          li 
            span.text-bold m)
            | Después de los dos puntos, signos de pregunta y admiración.


          li 
            span.text-bold n)
            | Los nombres de galaxias, constelaciones, estrellas, planetas y satélites.


          li 
            span.text-bold o)
            | Nombres de los cuatro puntos cardinales.


          li 
            span.text-bold p)
            | Nombres de los signos del zodiaco.


          li 
            span.text-bold q)
            | Nombres de los libros sagrados y órdenes religiosas.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/2.svg', alt='', style="width: 390px").m-auto


    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Uso de minúsculas 

    p Se emplea la minúscula en días, meses, estaciones y en cargos, títulos o rangos que acompañen al nombre propio del sujeto. También se aplica a religiones, movimientos políticos y abreviaturas, exceptuando libros bíblicos y elementos químicos.

    .row.bg-12
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/3.svg' alt='AvatarTop')
                  p.text-center #[b a)] Los nombres de los días de la semana, los meses y las estaciones del año.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/4.svg' alt='AvatarTop')
                  p.text-center #[b b) ] Los títulos, cargos y nombres de dignidad cuando van acompañado del nombre propio de la persona.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/5.svg' alt='AvatarTop')
                  p.text-center #[b c) ] Los rangos militares.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/6.svg' alt='AvatarTop')
                  p.text-center #[b d) ] Las dignidades eclesiásticas.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/7.svg' alt='AvatarTop')
                  p.text-center #[b e) ] Las abreviaturas, excepto a esta regla los libros de la Biblia y los elementos químicos.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/8.svg' alt='AvatarTop')
                  p.text-center #[b f) ] Los sustantivos que designan movimientos o ideologías políticas son comunes.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/9.svg' alt='AvatarTop')
                  p.text-center #[b g) ] Los sustantivos que designan las diferentes religiones.

    .separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Reglas ortográficas

    p Las reglas ortográficas son el conjunto de normas que regulan la escritura correcta de una lengua, estableciendo el uso adecuado de letras y signos de puntuación para garantizar una comunicación clara, unificada y sin ambigüedades.

    TabsC.color-acento-botones
      .py-3.py-md-4.bg-13(titulo="Se escribe con b")
        .row
          .col-md-12.mb-4.mb-md-0
            p La letra b siempre representa el fonema labial sonoro de barco, beso, blusa o abuelo. Notas orientadoras sobre el uso de la letra b Se escriben con b:

            ol.lista-ol
              li 
                span.text-bold a)
                | Los verbos terminados en -bir. Ejemplos: escribir, recibir, sucumbir. Excepciones en voces de uso actual: hervir, servir, vivir y sus compuestos.

              li 
                span.text-bold b)
                | Los verbos terminados en -buir. Ejemplos: contribuir, atribuir, retribuir.

              li 
                span.text-bold c)
                | Los verbos deber, beber, caber, saber y haber.

              li 
                span.text-bold d)
                | Las terminaciones -aba, -abas, -ábamos, -abais, -aban del pretérito imperfecto de indicativo (copretérito, en la terminología de Andrés Bello) de los verbos de la primera, conjugación. Ejemplos: cantaba, bajabas, amaban.

              li 
                span.text-bold e)
                | e) El pretérito imperfecto de indicativo de ir: iba, ibas, etc.

              li 
                span.text-bold f)
                | Las palabras que empiezan por el elemento compositivo biblio- ('libro') o por las silabas bu-, bur- y bus-. Ejemplos: biblioteca, bula, burla, buscar. Excepción: vudú y sus derivados, además de otras voces caídas en desuso.

              li 
                span.text-bold g)
                | Las que empiezan por el elemento compositivo bi-, bis-, biz- ('dos' o 'dos veces'). Ejemplos: bipolar, bisnieto, bizcocho.

              li 
                span.text-bold h)
                | Las que contienen el elemento compositivo bio-, -bio ('vida'). Ejemplos: biografía, biosfera, anaerobio, microbio

              li 
                span.text-bold i)
                | Las palabras compuestas cuyo primer elemento es bien o su forma latina bene. Ejemplos: bienaventurado, bienvenido, beneplácito.

              li 
                span.text-bold j)
                | Toda palabra en que el fonema labial sonoro precede a otra consonante o está en final de palabra. Ejemplos: abdicación, abnegación, absolver, obtener, obvio, subvenir, amable, brazo, rob, nabab. Excepciones: ovni (acrónimo de objeto volante no identificado) y algunos términos desusados.

              li 
                span.text-bold k)
                | Las palabras acabadas en -bilidad. Ejemplos: amabilidad, habilidad, posibilidad. Excepciones: movilidad, civilidad y sus compuestos.

              li 
                span.text-bold l)
                | Las acabadas en -bundo y -bunda. Ejemplos: tremebundo, vagabundo, abunda.


      .py-3.py-md-4.bg-14(titulo="Se escribe con v")
        .row
          .col-md-12.mb-4.mb-md-0
            p La letra v siempre representa el fonema labial sonoro de vaso, vida, invadir o cavar. Notas orientadoras sobre el uso de la letra v. Se escribe con v:

            ol.lista-ol
              li 
                span.text-bold a)
                | Las palabras en las que las sílabas ad-, sub- y ob- preceden al fonema labial sonoro. Ejemplos: adviento, subvención, obvio.
              li 
                span.text-bold b)
                | Las palabras que empiezan por eva-, eve-, evi- y evo-. Ejemplos: evasión, eventual, evitar, evolución. Excepciones: ébano y sus derivados, ebionita. ebonita y eborario.
              li 
                span.text-bold c)
                | Las que empiezan por el elemento compositivo vice-, viz- o vi- ('en lugar de'). Ejemplos: vicealmirante, vizconde, virrey.

              li 
                span.text-bold d)
                | Los adjetivos llanos terminados en -avo, -ava, -evo, -eva, -eve, -ivo, -iva. Ejemplos: esclavo, octava, longevo, nueva, nieve, decisiva, activo. Excepciones: suabo y mancebo.

              li 
                span.text-bold e)
                | e) Las voces llanas de uso general terminadas en -viro, -vira, como decenviro, Elvira, triunviro, y las esdrújulas terminadas en -ívoro, -ívora, como carnívora, herbívoro, insectívoro. Excepción: víbora.

              li 
                span.text-bold f)
                | Los verbos acabados en -olver. Ejemplos: absolver, disolver, volver.
              li 
                span.text-bold g)
                | Los presentes de indicativo, imperativo y subjuntivo del verbo ir. Ejemplos: voy, ve, vaya.
              li 
                span.text-bold h)
                |  El pretérito perfecto simple de indicativo (o pretérito, según Bello) y el pretérito imperfecto (pretérito) y futuro de subjuntivo de los verbos estar, andar, tener y sus compuestos. Ejemplos: estuvo, estuviéramos, estuviere, anduve, desanduvo, desanduviere, tuviste, retuvo, sostuviera, contuviese, mantuviere.


    .titulo-tres.mt-5: h3 Se escribe con c

    p La letra c, puede representar dos fonemas: uno oclusivo velar sordo ante las vocales a, o, u, ante consonante y en posición final de sílaba o de palabra, como sucede en carta, clima, acné, vivac, y otra fricativa interdental sordo ante las vocales e, i, como en cebo, cifra. En zonas de seseo, ante e e i, representa el sonido correspondiente a s.

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema6/10.svg', alt='')

          p.text-small Los sustantivos terminados en –ción, cuando en su familia hay palabras que terminan en -to, -tor, -dor. Ejemplos: absolución (absuelto), compilación (compilador), operación (operador), canción (canto).

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema6/11.svg', alt='')

          p.text-small.mb-0 Las palabras terminadas en –acción, -ección, -icció, ucción, excepto reflexión, conexión, y crucifixión.
          p.text-small Ejemplos: calefacción, elección, predicción, producción.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema6/12.svg', alt='')

          p.text-small Los verbos terminados en –acer, -ecer, y –ciar. Ejemplos: renacer, aparecer, apreciar.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema6/13.svg', alt='')

          p.text-small.mb-0 La mayoría de las palabras que terminan en –cio, -ancia, -encia, -acia. Ejemplos: espacio, exuberancia, vivencia, acrobacia.


    .titulo-tres.mt-5: h3 Se escribe con q

    .row.align-items-center
      .col-lg-9
        p La letra q aparece agrupada siempre con la letra u, que entonces no suena ante e, i. El grupo que forman representa el fonema oclusivo velar sordo de queso y quizás. Se escriben con que:

        p Las palabras en que el fonema mencionado precede a las vocales e, i. 

        .row.bg-7.bg-r8.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/14.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            p #[b Ejemplos:] esquela, aquí, quiste. De ahí que las formas de un amplio grupo de verbos cuyos infinitivos terminan en -car cambien la #[b c] por #[b qu] en el pretérito perfecto simple y en el presente de subjuntivo. Ejemplos: remolqué (de remolcar), ataquemos (de atacar).

        .row.align-items-center.mt-4
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/15.svg", alt="", style="width: 290px").m-auto
          .col-lg-8
            p Algunas voces científicas, palabras y locuciones latinas en que este grupo de letras precede con sonido oclusivo velar sordo a las vocales a y o, la letra u sí se pronuncia. Ejemplos: quark, quáter, a quo, quorum. Para otros casos, se recomienda emplear la grafía adaptada al español, como en cuark, cuásar, cuórum, Irak, Catar, Turquestán, caqui, cuáquero, euskera, quiosco o telequinesia.

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/16.png', alt='', style="width: 290px").m-auto


    .titulo-tres.mt-5: h3 Se escribe con z

    p La letra z representa el fonema fricativo interdental sordo ante las vocales a, o, u y en posición final de sílaba o de palabra, como sucede en zanahoria, rezo, zumo, hazmerreír, paz. Además, en algunas palabras precede, representando el mismo fonema, a las vocales e, i, como es el caso de zéjel, zinc. En zonas de seseo representa el sonido correspondiente a s.

    .titulo-tres.mt-5: h3 Se escribe con g

    .row.align-items-center
      .col-lg-7
        p.mb-0 El fonema velar sonoro se representa mediante la #[b letra g] cuando aparece delante de las vocales #[b a, o, u], como en gamo, golosina o guasa. También se emplea en la #[b posición final de la sílaba], como en digno, y cuando se encuentra #[b agrupado con otra consonante], como en gritar, glacial o gnomo.
        p.mb-0 El #[b dígrafo gu] representa este mismo fonema cuando precede a las vocales #[b e, i], como en guerra o guitarra. Sin embargo, cuando la #[b g] y la #[b u] deben pronunciarse de manera independiente ante e, i, es obligatorio el uso de la diéresis sobre la u. Ejemplos de ello son antigüedad, desagüe y lingüístico.
        p Por otra parte, el fonema fricativo velar sordo se representa mediante la letra j ante cualquier vocal, como en jarra, jeta, jirón, joya o júbilo, y también mediante la letra g cuando antecede a las vocales e, i, como en gente o girar.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/17.png', alt='', style="width: 500px").m-auto

    p.mt-4 En síntesis, la #[b letra g] puede representar dos fonemas distintos:

    .row.mt-4.justify-content-center.gap-3
      .col-lg-5
        .row.bg-2.bg-r8.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/18.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            p #[b Un fonema velar sonoro]  ante las vocales a, o, u y ante consonante, como en gamo, gloria o magno.

      .col-lg-5
        .row.bg-2.bg-r8.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/19.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            p #[b Un fonema velar sordo]  ante las vocales e, i, como en gerundio y gimnasia.

    p.mt-4 Con el propósito de precisar las normas ortográficas y facilitar la correcta escritura de palabras que contienen el fonema velar sonoro, se describen a continuación los casos específicos en los que se debe emplear la letra g:

    .row.bg-15
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .row.lista-ol.bg-16.p-4.bg-r8
                p #[b a)] Las palabras en que el fonema velar sonoro precede a cualquier consonante, pertenezca o no a la misma sílaba. Ejemplos: glacial, grito, dogmático, impregnar, maligno, repugnancia.

                p #[b b)] Las palabras que empiezan por gest-. Ejemplos: gesta, gestación, gestor.

                p #[b c)] Las que empiezan por el elemento compositivo geo- (‘tierra’). Ejemplos: geógrafo, geometría, geodesia.

                p #[b d)] Las que terminan en -gélico, -genario, -géneo, -génico, -genio, -génito, -gesimal, -gésimo y -gético. Ejemplos: angélico, sexagenario, homogéneo, fotogénico, ingenio, primogénito, cuadragésimal, vigésimo, apologético.

                p #[b e)] Las que terminan en -giénico, -ginal, -gíneo, -ginoso (excepto aguajinoso). Ejemplos: higiénico, original, virgíneo, ferruginoso.

                p #[b f)] Las que terminan en -gia, -gio, -gión, -gional, -gionario, -gioso y -gírico. Ejemplos: magia, regia, frigia, liturgia, litigio, religión, regional, legionario, prodigioso, panegírico. Excepciones: las voces que terminan en -plejia o -plejia (apoplejia, paraplejia…) y eijón.

                p #[b g)] Las que terminan en -ígeno, -ígena, -ígero, -ígera. Ejemplos: indígena, oxígeno, aligera, belígero.

                p #[b h)] Las que terminan en -logía, -gogía o -agogía. Ejemplos: teología, demagogia, pedagogía.

                p #[b i)] Las que terminan en el elemento compositivo -algia (‘dolor’). Ejemplos: neuralgia, gastralgia, cefalalgia.

                p #[b j)] Los verbos terminados en -igerar, -ger y -gir (morigerar, proteger, fingir) y las correspondientes formas de su conjugación, excepto en el caso de los sonidos ja, jo, que nunca se pueden representar con g: protege, fingía, pero proteja, finjo. Existen algunas excepciones, como tejer, crujir y sus derivados.


    .titulo-tres.mt-5: h3 Se escriben con j

    .row.bg-12
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/20.svg' alt='AvatarTop')
                  p.text-center.text-small #[b a)] palabras derivadas de voces que tienen j ante las vocales a, o, u. Así, cajero, cajita (de caja); lisonjear (de lisonja); cojear (de cojo); ojear (de ojo); rojear, rojizo (de rojo).

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/21.svg' alt='AvatarTop')
                  p.text-center.mb-0.text-small #[b b) ] Las voces de uso actual que terminan en -aje, -eje. Ejemplos: coraje, hereje, garaje.
                  p.text-center.text-small Excepciones: ambages, enálage, ipálage.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/22.svg' alt='AvatarTop')
                  p.text-center.text-small #[b c) ] Las que acaban en -jería. Ejemplos: cerrajería, consejería, extranjería.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/23.svg' alt='AvatarTop')
                  p.text-center.text-small #[b d) ] Las formas verbales de los infinitivos que terminan en -jar. Ejemplos: trabaje, trabajemos (de trabajar), empuje (de empujar). También las de los pocos verbos terminados en -jer y en -jir, como cruje (de crujir), teje (de tejer).

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/24.svg' alt='AvatarTop')
                  p.text-center.text-small #[b e) ] Los verbos terminados en -jear, así como sus correspondientes formas verbales. Ejemplos: canjear, homenajear, cojear. Excepción: aspergear.

                .tarjeta.bg-4.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema6/25.svg' alt='AvatarTop')
                  p.text-center.text-small #[b f) ] El pretérito perfecto simple y el pretérito imperfecto y futuro de subjuntivo de los verbos traer, decir y sus derivados, y de los verbos terminados en -ducir. Ejemplos: traje (de traer), dije, dijera (de decir), predijéramos (de predecir), adujera, adujeren (de aducir).


    .titulo-tres.mt-5: h3 Se escribe con h

    .row.align-items-center
      .col-lg-9
        p Esta letra, que puede preceder a todas las vocales, no representa en la actualidad ningún sonido en el idioma español. Esta característica origina dificultades ortográficas para distinguir qué palabras deben escribirse con h y cuáles no. Dichas dificultades son mayores cuando la grafía sirve para diferenciar significados, como ocurre en los homófonos hojear/ojear, honda/onda y hecho/echo, entre otros.

        .row.justify-content-center.text-center.bg-8.bg-r8.p-4
          p.mb-0 Las formas de los verbos #[b haber, hacer, hallar, hablar y habitar] se escriben con h.
          p Ejemplos: haga, hallemos, hablará.
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/26.svg', alt='', style="width: 290px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/27.png', alt='', style="width: 396px").m-auto     
      .col-lg-8
        p Como ya se ha indicado, también se escriben con h los compuestos y derivados de vocablos que la contienen en su forma original. Algunos ejemplos: gentilhombre (compuesto de hombre), herbáceo (derivado de hierba).

        .row.bg-7.bg-r8.p-2.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/28.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Por el contrario, las palabras acción e ilación se escriben #[b sin h], ya que la primera no procede del verbo hacer ni la segunda de hilo o hilar. Acción proviene del latín actio, derivado del supino actum, e ilación procede del latín illatio, a su vez derivado del supino illatum.

        p.mt-3 Asimismo, las palabras oquedad, orfandad, orfanato, osamenta, osario, óseo, ovoide, óvalo, ovario, oscense y oler, entre otras, se escriben sin h porque no la presentan en su origen etimológico.

        p En cambio, palabras como hueco, huérfano, hueso, huevo, Huesca y huelo se escriben con h por comenzar con el diptongo ue, conforme a la regla ortográfica correspondiente.

    .titulo-tres.mt-5: h3 Se escriben con y

    p La letra y puede representar dos fonemas distintos: uno vocálico, equivalente al sonido representado por la letra i en palabras como muy, estoy o y; y otro consonántico, correspondiente al fonema palatal sonoro, presente en palabras como reyes, callado u hoyo.

    .row.justify-content-center
      .col-lg-10
        .row.bg-5.bg-r4.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/29.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p.mb-0 Se escriben con y las palabras que terminan con el sonido equivalente a i cuando este va precedido de una vocal con la que forma diptongo, o de dos vocales con las que forma triptongo.
            p Ejemplos: ay, estoy, verdegay, Bombay, buey, ley, rey, convoy, soy, Godoy, muy, Uruguay, Garay. Existen algunas excepciones, como saharaui o bonsái.
        .row.bg-7.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/30.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p.mb-0 La conjunción copulativa y se escribe con esta letra.
            p Ejemplos: Juan y María; cielo y tierra; este y aquel. Esta conjunción adopta la forma e ante palabras que comienzan por el fonema vocálico correspondiente a i (ciencia e historia; catedrales e iglesias), salvo cuando dicha vocal forma diptongo (cobre y hierro; estratosfera y ionosfera).
        .row.bg-5.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/31.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Las palabras que presentan el sonido palatal sonoro ante vocal se escriben con y, especialmente en los siguientes casos. En primer lugar, cuando este sonido aparece después de los prefijos ad-, dis- y sub-, como en adyacente, disyuntivo y subyugar. En segundo lugar, en algunas formas de los verbos caer, raer, creer, leer, poseer, proveer y sobreser, así como en los verbos terminados en -oir y -uir, por ejemplo: cayeran, leyendo, oyó, concluyó y atribuyera.
        .row.bg-7.bg-r2.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema6/32.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Asimismo, se escriben con y las palabras que contienen la sílaba yec-, como abyecto, proyección e inyectar. También conservan la y los plurales de los sustantivos que terminan en y en singular, como rey/reyes, y el gerundio del verbo ir, yendo.
        
    .titulo-tres.mt-5: h3 Se escribe con x

    .row.align-items-center
      .col-lg-8
        p.mb-0 La letra x representa sonidos diferentes según la posición que ocupe dentro de la palabra. En posición intervocálica o al final de palabra, representa habitualmente el grupo consonántico /ks/ (o /gs/ en una pronunciación relajada).
        p Ejemplos: examen, exhibir, hexágono, explorar, relax.

        p.mb-0 En cambio, en posición inicial de palabra, la pronunciación más frecuente es /s/, y en posición final de sílaba puede realizarse, según las regiones y las consonantes que sigan, como /s/ o /ks/ (o /gs/).
        p Ejemplos: xilófono, excelente, xenofobia, xerigrafía, excavar, exportar, exterior, exfoliante.

        .row.justify-content-center.text-center.bg-8.bg-r8.p-4
          p La reducción a /s/ de la pronunciación de la x suele originar dudas ortográficas, por lo que es necesario atender a la forma correcta de escritura de las palabras. 
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/33.png', alt='', style="width: 390px").m-auto

    p.mt-4 A partir de esta reflexión, surge la siguiente pregunta orientadora:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b ¿Qué importancia tiene la ortografía en la escritura?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto


</template>

<script>
export default {
  name: 'Tema6',
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
