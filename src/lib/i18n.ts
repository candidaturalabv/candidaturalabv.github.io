export type Language = 'es' | 'eu' | 'en';

export const translations = {
  nav: {
    home: { es: 'Inicio', eu: 'Hasiera', en: 'Home' },
    about: { es: 'Quiénes somos', eu: 'Nor gara', en: 'About us' },
    concerns: { es: 'Temas', eu: 'Gaiak', en: 'Topics' },
    blog: { es: 'Blog', eu: 'Bloga', en: 'Blog' },
    faq: { es: 'FAQ', eu: 'FAQ', en: 'FAQ' },
    candidates: { es: 'Candidatos', eu: 'Hautagaiak', en: 'Candidates' },
  },
  hero: {
    title: { es: 'BASARA', eu: 'BASARA', en: 'BASARA' },
    subtitle: { es: 'zurekin', eu: 'zurekin', en: 'with you' },
    tagline: {
      es: 'Menos quejas en el café y más soluciones en la mesa.',
      eu: 'Gutxiago kexatzea kafean eta irtenbide gehiago mahaian.',
      en: 'Less complaining over coffee, more solutions on the table.',
    },
  },
  about: {
    title: { es: 'QUIÉNES SOMOS', eu: 'NOR GARA', en: 'WHO WE ARE' },
    description: {
      es: 'Somos trabajadores y trabajadoras, algunos desde hace casi veinte años. Somos la gente que te encuentras cada día en la oficina y en el bus. Desde todas las divisiones, formamos una representación diversa de la organización. Conocemos tu día a día y compartimos tus preocupaciones e inquietudes.',
      eu: 'Langileak gara, batzuk ia hogei urte daramatzagu. Egunero bulegoan eta autobusean topatzen duzun jendea gara. Dibisio guztietatik, erakundearen ordezkaritza anitza osatzen dugu. Zure egunerokoa ezagutzen dugu eta zure kezkak eta zalantzak partekatzen ditugu.',
      en: 'We are workers, some of us for nearly twenty years. We are the people you meet every day at the office and on the bus. From all divisions, we form a diverse representation of the organization. We know your daily life and share your concerns and worries.',
    },
    initiative: {
      es: 'La idea de impulsar estas elecciones al comité surge a partir de una iniciativa de varias personas de este grupo, junto con otros compañeros, gracias a la cual se revisó la jornada laboral y los días de descanso del convenio. Como resultado, hoy contamos con una reducción de 15 minutos en la jornada diaria y con un día extra de days off.',
      eu: 'Batzordeko hauteskunde hauek bultzatzeko ideia talde honetako hainbat pertsonaren ekimenetik sortu zen, beste lankide batzuekin batera, hitzarmeneko lanaldia eta atseden egunak berrikusi ziren. Ondorioz, gaur egun eguneroko lanaldian 15 minutuko murrizketa eta days off egun gehigarri bat ditugu.',
      en: 'The idea of promoting these committee elections arose from an initiative by several people in this group, along with other colleagues, which led to a review of working hours and rest days in the agreement. As a result, today we have a 15-minute reduction in the daily workday and an extra day off.',
    },
  },
  concerns: {
    title: { es: 'TEMAS QUE NOS IMPORTAN', eu: 'AXOLA ZAIZKIGUN GAIAK', en: 'TOPICS WE CARE ABOUT' },
    items: [
      { es: 'Transparencia salarial', eu: 'Soldata gardentasuna', en: 'Salary transparency' },
      { es: 'Más teletrabajo', eu: 'Telelana gehiago', en: 'More remote work' },
      { es: 'Vacaciones flexibles', eu: 'Opor malguak', en: 'Flexible holidays' },
      { es: 'Viajes y dietas', eu: 'Bidaiak eta dietak', en: 'Travel and expenses' },
      { es: 'Conciliación real', eu: 'Benetako kontziliazioa', en: 'Real work-life balance' },
      { es: 'Traslado a MUBIL', eu: 'MUBILera lekualdatzea', en: 'Relocation to MUBIL' },
    ],
    more: {
      es: '... y muchos más temas que podemos trabajar juntos!',
      eu: '... eta elkarrekin landu ditzakegun gai gehiago!',
      en: '... and many more topics we can work on together!',
    },
  },
  advisory: {
    title: { es: 'ASESORAMIENTO INDEPENDIENTE', eu: 'AHOLKULARITZA INDEPENDENTEA', en: 'INDEPENDENT ADVISORY' },
    description: {
      es: 'Nuestra lista cuenta con el respaldo jurídico externo del sindicato LAB, lo que nos permite actuar con plena independencia y disponer de asesoramiento legal especializado. Esto garantiza apoyo y seguridad en todos los procesos, así como formación y un acompañamiento experto en negociación laboral, defensa de derechos y resolución de conflictos.',
      eu: 'Gure zerrendak LAB sindikatuaren kanpo laguntza juridikoa du, independentzia osoz jarduteko eta aholkularitza juridiko espezializatua izateko aukera ematen diguna. Honek prozesu guztietan babesa eta segurtasuna bermatzen du, baita lan-negoziazioetan, eskubideen defentsan eta gatazken ebazpenean trebakuntza eta laguntza aditu bat ere.',
      en: 'Our list has the external legal support of the LAB union, which allows us to act with full independence and have specialized legal advice. This guarantees support and security in all processes, as well as training and expert guidance in labor negotiation, rights defense and conflict resolution.',
    },
    cta: {
      es: 'Te animamos a acercarte y compartir cualquier duda o sugerencia: estamos aquí para escucharte.',
      eu: 'Animatzen zaitugu hurbildu eta edozein zalantza edo iradokizun partekatzera: hemen gaude entzuteko.',
      en: 'We encourage you to come forward and share any questions or suggestions: we are here to listen.',
    },
  },
  candidates: {
    title: { es: 'LISTA DE CANDIDATOS', eu: 'HAUTAGAIEN ZERRENDA', en: 'CANDIDATE LIST' },
  },
  blog: {
    title: { es: 'BLOG', eu: 'BLOGA', en: 'BLOG' },
    readMore: { es: 'Leer más', eu: 'Gehiago irakurri', en: 'Read more' },
    posts: [
      {
        title: {
          es: '¿Por qué un comité?',
          eu: 'Zergatik batzorde bat?',
          en: 'Why a committee?',
        },
        excerpt: {
          es: 'Un comité es la herramienta clave para que los trabajadores tengamos voz real en las decisiones que afectan a nuestro día a día laboral.',
          eu: 'Batzordea tresna funtsezkoa da langileok gure eguneroko lanari eragiten dioten erabakietan benetako ahotsa izateko.',
          en: 'A committee is the key tool for workers to have a real voice in decisions that affect our daily working life.',
        },
        date: '2025-02-01',
      },
      {
        title: {
          es: 'Nuestros logros hasta ahora',
          eu: 'Gure lorpenak orain arte',
          en: 'Our achievements so far',
        },
        excerpt: {
          es: 'Reducción de 15 minutos en la jornada, un día extra de descanso, y más mejoras conseguidas gracias al esfuerzo colectivo.',
          eu: '15 minutuko murrizketa lanaldian, atseden egun gehigarri bat, eta ahalegin kolektiboari esker lortutako hobekuntza gehiago.',
          en: '15-minute workday reduction, an extra rest day, and more improvements achieved through collective effort.',
        },
        date: '2025-01-20',
      },
      {
        title: {
          es: 'La importancia del asesoramiento legal',
          eu: 'Aholkularitza juridikoaren garrantzia',
          en: 'The importance of legal advisory',
        },
        excerpt: {
          es: 'Contar con respaldo legal profesional nos da seguridad y fortaleza para negociar en igualdad de condiciones.',
          eu: 'Laguntza juridiko profesionala izateak segurtasuna eta indarra ematen digu baldintza berdinetan negoziatzeko.',
          en: 'Having professional legal support gives us security and strength to negotiate on equal terms.',
        },
        date: '2025-01-10',
      },
    ],
  },
  faq: {
    title: { es: 'PREGUNTAS FRECUENTES', eu: 'OHIKO GALDERAK', en: 'FREQUENTLY ASKED QUESTIONS' },
    items: [
      {
        q: {
          es: '¿Qué es un comité de empresa?',
          eu: 'Zer da enpresa batzorde bat?',
          en: 'What is a works committee?',
        },
        a: {
          es: 'Es el órgano de representación de los trabajadores en una empresa. Tiene la función de negociar condiciones laborales, defender derechos y servir de interlocutor con la dirección.',
          eu: 'Enpresa bateko langileen ordezkaritza organoa da. Lan-baldintzak negoziatzeko, eskubideak defendatzeko eta zuzendaritzarekin solaskide gisa jarduteko funtzioa du.',
          en: 'It is the representative body of workers in a company. Its function is to negotiate working conditions, defend rights, and serve as an interlocutor with management.',
        },
      },
      {
        q: {
          es: '¿Qué relación tiene LAB con nuestra candidatura?',
          eu: 'Zer harreman du LABek gure hautagaitzarekin?',
          en: 'What is the relationship between LAB and our candidacy?',
        },
        a: {
          es: 'LAB nos proporciona asesoramiento jurídico externo y formación. Actuamos con plena independencia en las decisiones internas.',
          eu: 'LABek kanpo aholkularitza juridikoa eta prestakuntza ematen digu. Barneko erabakietan independentzia osoz jokatzen dugu.',
          en: 'LAB provides us with external legal advisory and training. We act with full independence in internal decisions.',
        },
      },
      {
        q: {
          es: '¿Cómo puedo participar o hacer sugerencias?',
          eu: 'Nola parte hartu edo iradokizunak egin ditzaket?',
          en: 'How can I participate or make suggestions?',
        },
        a: {
          es: 'Puedes acercarte a cualquiera de los candidatos directamente. Estamos aquí para escucharte y trabajar juntos por un mejor entorno laboral.',
          eu: 'Hautagaietako edozeinengana zuzenean hurbildu zaitezke. Hemen gaude entzuteko eta lan-ingurune hobea lortzeko elkarrekin lan egiteko.',
          en: 'You can approach any of the candidates directly. We are here to listen and work together for a better working environment.',
        },
      },
      {
        q: {
          es: '¿El comité puede negociar el teletrabajo?',
          eu: 'Batzordeak telelana negozia dezake?',
          en: 'Can the committee negotiate remote work?',
        },
        a: {
          es: 'Sí, el comité tiene capacidad legal para negociar condiciones como el teletrabajo, horarios flexibles y otras mejoras.',
          eu: 'Bai, batzordeak gaitasun legala du telelana, ordutegi malguak eta beste hobekuntza batzuk bezalako baldintzak negoziatzeko.',
          en: 'Yes, the committee has the legal capacity to negotiate conditions such as remote work, flexible hours, and other improvements.',
        },
      },
      {
        q: {
          es: '¿Las votaciones son secretas?',
          eu: 'Bozketak sekretuak al dira?',
          en: 'Are the votes secret?',
        },
        a: {
          es: 'Sí, el proceso electoral garantiza el voto secreto. Nadie puede saber a quién has votado.',
          eu: 'Bai, hauteskunde prozesuak boto sekretua bermatzen du. Inork ez du jakin dezake nori eman diozun zure botoa.',
          en: 'Yes, the electoral process guarantees secret voting. Nobody can know who you voted for.',
        },
      },
    ],
  },
  footer: {
    rights: {
      es: 'Candidatura BASARA — Respaldada por LAB',
      eu: 'BASARA hautagaitza — LABek babestua',
      en: 'BASARA Candidacy — Backed by LAB',
    },
  },
} as const;

export const candidateNames = [
  'Felipe Mogollón', 'Luis Unzueta', 'Dorleta García', 'Javier Franco',
  'Harritxu Gete', 'Mikel Hernández', 'Markel Flores', 'Javier Calle',
  'Eduardo Alonso', 'Beñat Zabala', 'David Ponce', 'Rubén Naranjo',
  'Iñigo Tamayo', 'Ainara Escribano', 'Enrique Shinohara',
];
