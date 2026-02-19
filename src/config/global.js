export default {
  global: {
    Name: 'Normas generales de redacción de textos',
    Description:
      'El componente formativo integra los fundamentos de la escritura efectiva, así como las normas ortográficas vigentes. Aborda la estructura de párrafos, el uso de conectores y tipos textuales; asimismo, desarrolla la gramática española, el código ortográfico y los signos de puntuación. De esta manera, se fortalecen las competencias para producir documentos de calidad en contextos académicos y laborales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura de un párrafo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura de textos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Algunos tipos de textos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Resumen',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ensayo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Redacción de textos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'La gramática española',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Código ortográfico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Uso de mayúsculas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Uso de minúsculas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Reglas ortográficas',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Signos de puntuación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Clases de palabras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'El sustantivo',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'El adjetivo',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Sinónimos y antónimos',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Dequeísmo',
      significado:
        'uso incorrecto de la preposición "de" antepuesta a la conjunción "que" en construcciones sintácticas donde no corresponde su empleo según las normas gramaticales.',
    },
    {
      termino: 'Dígrafo',
      significado:
        'sonido mínimo y distintivo de una lengua que permite diferenciar el significado de las palabras mediante su posición y movimiento en los órganos del habla.',
    },
    {
      termino: 'Ensayo',
      significado:
        'escrito en prosa que expone una interpretación personal sobre un tema mediante argumentos sólidos, estructura organizada y rigor metodológico.',
    },
    {
      termino: 'Epíteto',
      significado:
        'adjetivo explicativo que expresa una cualidad inherente o propia del sustantivo al que acompaña, sin intención de distinguirlo de otros, como en "blanca nieve" o "mariposa alada".',
    },
    {
      termino: 'Fonema',
      significado:
        'sonido mínimo y distintivo de una lengua que permite diferenciar el significado de las palabras mediante su posición y movimiento en los órganos del habla.',
    },
    {
      termino: 'Hiato',
      significado:
        'secuencia de dos vocales contiguas que se separan en sílabas diferentes durante la pronunciación, principalmente cuando se unen dos vocales abiertas o cuando una vocal cerrada lleva tilde.',
    },
    {
      termino: 'Homónimos',
      significado:
        'palabras que se escriben exactamente igual, pero poseen significados diferentes según el contexto en que se utilicen, como "lava" (acción de lavar) y "lava" (materia volcánica).',
    },
    {
      termino: 'Parónimos',
      significado:
        'palabras que se pronuncian de forma muy parecida pero que tienen significados distintos, como "sumo" (de sumar o supremo) y "zumo" (jugo extraído de frutas).',
    },
    {
      termino: 'Párrafo',
      significado:
        'unidad de pensamiento conformada por un grupo de oraciones organizadas y relacionadas que desarrollan una idea central con coherencia y cohesión.',
    },
    {
      termino: 'Triptongo',
      significado:
        'unión inseparable de tres vocales que se pronuncian en una misma sílaba, formada por una vocal cerrada, una vocal abierta y otra vocal cerrada, como en la palabra "averigüéis".',
    },
  ],
  referencias: [
    {
      referencia:
        'Enciclopedia Autodidáctica Océano Color. (2013). <em>Enciclopedia autodidáctica Océano Color</em> (Vols. 4–5). Océano.',
      link: '',
    },
    {
      referencia:
        'García, C., Gutiérrez, M. C., y Condemarín, E. (2000). <em>A estudiar se aprende</em> (4.ª ed.). Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Martín Vivaldi, G. (s. f.). <em>Curso de redacción</em>. Prisma.',
      link: '',
    },
    {
      referencia:
        'Pontificia Universidad Javeriana. (2014). <em>El mayúsculo abuso del lenguaje</em>.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española & Asociación de Academias de la Lengua Española. (2010). <em>Ortografía de la lengua española</em>.',
      link: 'https://www.rae.es/obras-academicas/ortografia/ortografia-2010',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). <em>Exclusión de ch y ll del abecedario</em>.',
      link: 'https://www.rae.es/consultas/exclusion-de-ch-y-ll-del-abecedario',
    },
    {
      referencia:
        'Real Academia Española & Asociación de Academias de la Lengua Española. (2010). <em>Ortografía de la lengua española (2010)</em>.',
      link: 'https://www.rae.es/obras-academicas/ortografia/ortografia-2010',
    },
    {
      referencia:
        'Universidad Sergio Arboleda. (2014). <em>Guía: El resumen</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General  ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Paola García Cárdenas',
          cargo: 'Experta temática',
          centro: 'Regional Risaralda ',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Asesor pedagógico',
          centro: 'Regional Risaralda ',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
