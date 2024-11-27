export default {
  global: {
    componenteFormativo: 'Manejos de salidas: LCD',
    descripcionCurso:
      'La reingeniería rediseña procesos para mejorar aspectos como costo y calidad, aplicando tecnología para modernizar productos. El reciclaje electrónico, o <em>e-waste</em>, reutiliza dispositivos obsoletos, reduciendo su impacto ambiental. Estos residuos contienen materiales tóxicos, por lo que su gestión es responsabilidad de fabricantes y entidades locales, quienes ofrecen programas de recogida y prevención para un manejo seguro.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Concepto de LCD',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reingeniería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Reciclaje electrónico <em>(e-waste)</em>',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Concepto de LCD.',
      referencia:
        'Mentalidad De Ingeniería. (2021). Diseño de Circuitos LED - Cómo Diseñar Circuitos LED. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=H2-LdTSy5YM&ab_channel=MentalidadDeIngenier%C3%ADa',
    },
    {
      tema: 'Reingeniería.',
      referencia:
        'Corporación Industrial Minuto de Dios. (2016). ¿Qué es la reingeniería de procesos?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=OECcpN-djLk&ab_channel=Corporaci%C3%B3nIndustrialMinutodeDios',
    },
    {
      tema: 'Reingeniería.',
      referencia:
        'Sáez, O. García, J. Palao (s.f.). REINGENIERÍA DE PROCESOS (I): CARACTERÍSTICAS, PRINCIPIOS Y HERRAMIENTAS DE APLICACIÓN',
      tipo: 'Documento',
      link:
        'https://dit.upm.es/~fsaez/intl/capitulos/5%20-Reingenier%EDa%20_I_.pdf',
    },
    {
      tema: 'Reciclaje electrónico <em>(e–waste)</em>.',
      referencia:
        'DW Español (2021). Reciclaje de residuos electrónicos y orgánicos. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FhzK5Eq7c7c&ab_channel=DWEspa%C3%B1ol',
    },
    {
      tema: 'Reciclaje electrónico <em>(e–waste)</em>.',
      referencia: 'INCyTU. (2018). Residuos electrónicos.',
      tipo: 'Documento',
      link:
        'https://www.foroconsultivo.org.mx/INCyTU/documentos/Completa/INCYTU_18-008.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Reingeniería',
      significado:
        'proceso de rediseño de productos o sistemas para mejorar su costo, calidad y disponibilidad.',
    },
    {
      termino: 'Reciclaje electrónico',
      significado:
        'reutilización de dispositivos electrónicos obsoletos para reducir el impacto ambiental.',
    },
    {
      termino: 'Materiales tóxicos',
      significado:
        'sustancias peligrosas como plomo, cadmio y mercurio que pueden afectar la salud y el ambiente.',
    },
    {
      termino: 'Gestión de residuos',
      significado:
        'acciones para el manejo seguro y adecuado de desechos, incluyendo reciclaje y reparación.',
    },
    {
      termino: '<em>E-waste</em>',
      significado:
        'residuos de aparatos electrónicos que han llegado al final de su vida útil.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'prácticas que permiten satisfacer las necesidades actuales sin comprometer las futuras.',
    },
    {
      termino: 'Obsolescencia',
      significado:
        'proceso por el cual un producto deja de ser útil o funcional debido a su antigüedad.',
    },
    {
      termino: 'Dispositivos obsoletos',
      significado:
        'aparatos electrónicos que ya no cumplen su función de manera eficiente y son desechados.',
    },
    {
      termino: 'Modernización',
      significado:
        'actualización de tecnología o métodos para mejorar la eficiencia y funcionalidad.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'conjunto de organismos y su entorno, que pueden verse afectados por sustancias tóxicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ferrando Sánchez, M., & Granero Castro, J. (2007). <em>Gestión y Minimización de Residuos</em>. FC Editorial. Recuperado de',
      link:
        'https://books.google.com/books/about/Gesti%C3%B3n_y_Minimizaci%C3%B3n_de_Residuos.html?id=uMdNfGpLUKcC',
    },
    {
      referencia:
        'Pecoraio, S. (2019). <em>Gestión de Residuos Industriales</em>. Ediciones de la U. Recuperado de',
      link:
        'https://edicionesdelau.com/producto/gestion-de-residuos-industriales/',
    },
    {
      referencia:
        'Universidad de Alcalá. (2006). <em>Orientaciones y Bibliografía Seleccionada en Materia de Residuos</em>. Recuperado de',
      link:
        'https://ebuah.uah.es/dspace/bitstream/handle/10017/1044/Orientaciones%20y%20Bibliograf%C3%ADa%20Seleccionada%20en%20Materia%20de%20Residuos.pdf?sequence=1',
    },
    {
      referencia:
        'Universidad de Alcalá. (2006). <em>El Estudio de los Residuos: Definiciones, Tipologías, Gestión y Tratamiento</em>. Recuperado de',
      link:
        'https://ebuah.uah.es/dspace/bitstream/handle/10017/1037/El%20Estudio%20de%20los%20Residuos.%20Definiciones%2C%20Tipolog%C3%ADas%2C%20Gesti%C3%B3n%20y%20Tratamiento.pdf?sequence=1',
    },
    {
      referencia:
        'Universidad del País Vasco. (2011). <em>Minimización de Residuos Químicos: Manual de Buenas Prácticas</em>. Recuperado de',
      link:
        'https://www.ehu.eus/documents/4736101/4820758/MANUAL-Minimizacion-Residuos.pdf/11e1d3a9-9218-fbac-6157-fb182800248a',
    },
    {
      referencia:
        'Gobierno de la Ciudad de Buenos Aires. (2020). <em>Guía Práctica de Gestión Sostenible de los Residuos</em>. Recuperado de',
      link:
        'https://buenosaires.gob.ar/sites/default/files/media/document/2020/07/16/2a2c071cfb9fb39434363fb6cc3dd2642283db10.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
