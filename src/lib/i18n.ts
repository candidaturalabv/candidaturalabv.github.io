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
    title: { es: 'BAGARA', eu: 'BAGARA', en: 'BAGARA' },
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
          eu: 'Zer da langile-batzordea?',
          en: 'What is a works committee?',
        },
        a: {
          es: 'Según el Estatuto de los Trabajadores (Art. 63): El comité de empresa es el órgano representativo y colegiado del conjunto de los trabajadores en la empresa o centro de trabajo para la defensa de sus intereses, constituyéndose en cada centro de trabajo cuyo censo sea de 50 o más trabajadores.\n\nEs decir, es un órgano de representación de los trabajadores y formado en exclusiva por trabajadores del centro, que actúa como vía de comunicación bidireccional y oficial entre la dirección del centro y el personal de investigación, técnico y de gestión.',
          eu: 'Langileen Estatutuaren arabera (63. art.), enpresa-batzordea langile guztien interesak defendatzeko ordezkaritza-organoa da, eta 50 langile baino gehiagoko zentro orok berea osatzeko eskubidea du.\n\nLangileek soilik osatutako talde honek komunikazio-bide ofizial eta zuzena irekitzen du zuzendaritzaren eta langile-kolektibo osoaren artean —ikertzaile, teknikari zein kudeaketako langileak barne—. Organo honen helburua informazioa bi norabideetan modu eraginkorrean mugitzea da, langileen ahotsa ezinbesteko bitarteko bihurtuz.',
          en: 'According to the Workers\' Statute (Art. 63): The works committee is the representative and collegiate body of all workers in the company or workplace for the defense of their interests, established in each workplace with a census of 50 or more workers.\n\nIn other words, it is a workers\' representation body formed exclusively by workers of the center, acting as a two-way and official communication channel between center management and research, technical, and management staff.',
        },
      },
      {
        q: {
          es: '¿Para qué sirve un comité de empresa?',
          eu: 'Zein dira langile-batzordearen egitekoak?',
          en: 'What is a works committee for?',
        },
        a: {
          es: 'El comité de empresa tiene como misión velar por el bienestar de toda la plantilla del centro, para lo cual la dirección debe proporcionar, cada cierto tiempo, información como la situación económica de la empresa y la previsión de nuevos contratos.\n\nEl comité, en representación de la plantilla del centro, tiene capacidad de negociación colectiva con la dirección, para llegar a acuerdos de empresa (que pueden afectar a horarios, conciliación, teletrabajo, etc.). Además, si se diera el caso, el comité participa en la negociación de convenios colectivos propios.\n\nAsimismo, el comité debe vigilar el cumplimiento del convenio colectivo y resto de leyes y ser partícipe de los planes de prevención de riesgos laborales, planes de igualdad de trato y oportunidades, etc.\n\nPor otro lado, la dirección del centro debe informar al comité sobre todas las decisiones que pudieran provocar cambios relevantes en cuanto a la organización del trabajo y a los contratos de trabajo. El comité tiene derecho a emitir un informe previo a la ejecución de cualquier acción que afecte a cuestiones como: reestructuración y cese de la plantilla, reducciones de jornada, traslado total o parcial de las instalaciones, fusión o modificación del estatus jurídico, planes de formación profesional, e implantación de sistemas de organización y control del trabajo.',
          eu: 'Langile-batzordearen egiteko nagusia zentroko langile guztien ongizatea bermatzea da. Horretarako, zuzendaritzak enpresaren egoera ekonomikoari nahiz kontratazio-aurreikuspenei buruzko informazioa eman behar dio batzordeari aldian-aldian.\n\nZentroko langileen ordezkari denez, batzordeak zuzendaritzarekin negoziazio kolektiborako gaitasuna du enpresa-akordioak erdiesteko (ordutegiei, kontziliazioari edota telelanari buruzkoak, besteak beste). Horrez gain, hitzarmen kolektibo propioak negoziatzea ere badagokio, hala egokituz gero.\n\nHalaber, lan-hitzarmena eta indarrean dagoen araudia zorrotz betetzen direla bermatu behar du batzordeak. Era berean, ezinbestekoa da haren esku-hartzea laneko segurtasun eta osasuneko zein berdintasuneko planetan, besteak beste.\n\nBestalde, lan-antolakuntzan edo lan-kontratuetan eragin nabarmena izan dezakeen edozein erabakiren berri eman behar dio zuzendaritzak batzordeari. Izan ere, batzordeak erabaki horiek gauzatu aurreko txostena egiteko eskubidea du, baldin eta gai hauei eragiten badiete: langileen berregituraketa eta lan-uzteak, lanaldi murrizketak, instalazioen lekualdatze osoa edo partziala, enpresaren bat-egitea, xurgapena edo estatus juridikoaren aldaketa, lanbide-prestakuntzako planak, eta lan-antolakuntza eta kontrol-sistemak abian jartzea zein berrikustea.\n\nBehin txostena eginda, batzordea zuzendaritzarekin bildu daiteke. Bilera horren helburua erantzun arrazoitu bat jaso eta ikuspuntuak alderatzea da, akordio batera iritsi ahal izateko.\n\nArgibide gehiago: Langileen Estatutua (64. art.).',
          en: 'The works committee\'s mission is to ensure the wellbeing of all staff at the center, for which management must provide periodic information such as the company\'s economic situation and forecast of new contracts.\n\nThe committee, representing the center\'s staff, has the capacity for collective bargaining with management, to reach company agreements (which may affect schedules, work-life balance, remote work, etc.). Additionally, the committee participates in the negotiation of collective agreements.\n\nThe committee must also monitor compliance with the collective agreement and other laws, and participate in occupational risk prevention plans, equal treatment and opportunities plans, etc.',
        },
      },
      {
        q: {
          es: '¿Qué aporta un comité de empresa a nuestro centro?',
          eu: 'Zein da langile-batzordearen ekarpena gure zentroarentzat?',
          en: 'What does a works committee bring to our center?',
        },
        a: {
          es: 'En un entorno tecnológico y científico como el nuestro, donde el talento es el activo principal, un comité de empresa puede aportar valores estratégicos. Al ser una vía de comunicación bidireccional, el comité puede trasladar el feedback aportado por la plantilla directamente a dirección, así como proponer soluciones y negociar acuerdos para la mejora del bienestar general.\n\nNuestra candidatura aboga por una comunicación transparente que ayude a mantener un clima laboral de confianza y flexibilidad.',
          eu: 'Gure bezalako ingurune zientifiko eta teknologikoetan, talentua da aktiborik preziatuena; horregatik, enpresa-batzordeak balio estrategikoak eskaini ditzake. Komunikazioa bi norabideetan errazten duenez, langileen sentipenak zuzenean helaraz ditzake zuzendaritzara, baita konponbideak proposatu eta denon ongizatea hobetuko duten akordioak negoziatu.\n\nKomunikazio garden baten aldeko apustua egiten dugu, konfiantzan eta malgutasunean oinarritutako lan-giroa sendotzeko.',
          en: 'In a technological and scientific environment like ours, where talent is the main asset, a works committee can provide strategic values. As a two-way communication channel, the committee can convey staff feedback directly to management, as well as propose solutions and negotiate agreements to improve general wellbeing.\n\nOur candidacy advocates for transparent communication that helps maintain a work environment of trust and flexibility.',
        },
      },
      {
        q: {
          es: '¿Cuántas personas forman el comité de empresa?',
          eu: 'Zenbat pertsonak osatzen dute langile-batzordea?',
          en: 'How many people form the works committee?',
        },
        a: {
          es: 'El número de personas que constituyen el comité depende de la cantidad de personal del centro de trabajo. En nuestro caso y según el Estatuto de los Trabajadores (Art. 66), corresponde un comité formado por 9 trabajadores.',
          eu: 'Batzordekide kopurua lantokiko langile kopuruaren araberakoa da. Donostiako zentroaren kasuan, Langileen Estatutuari jarraikiz (66. art.), 9 langilez osatutako batzordea dagokigu.',
          en: 'The number of people on the committee depends on the number of staff at the workplace. In our case and according to the Workers\' Statute (Art. 66), a committee of 9 workers is required.',
        },
      },
      {
        q: {
          es: '¿Por qué tenemos elecciones a comité de empresa justo ahora?',
          eu: 'Zergatik orain langile-batzordeko hauteskundeak?',
          en: 'Why are we having committee elections right now?',
        },
        a: {
          es: 'El Estatuto de los Trabajadores (Art. 63) establece que todos los centros de trabajo de más de 50 personas deben tener comité, pero la administración no entra de oficio a organizarlas. Es un proceso que debe ser impulsado por una candidatura con un conjunto suficiente de la plantilla para constituir el comité según el tamaño del centro.\n\nLa puesta en marcha del proceso surge de la propia plantilla. Un grupo diverso de profesionales del centro hemos identificado la necesidad de una voz colectiva para gestionar nuestra estabilidad y derechos. Hemos seleccionado a LAB como plataforma de apoyo para garantizar que este proceso cuente con la solidez legal necesaria para negociar con dirección.',
          eu: 'Langileen Estatutuak (63. art.) dio 50 langile baino gehiagoko zentro guztiek izan behar dutela batzordea. Hala ere, Administrazioak ez ditu hauteskundeak berez antolatzen; hautagaitza batek bultzatu behar du prozesua. Hauteskunde hauek sindikatu baten babesarekin (LAB, adibidez) edo babesik gabe egin daitezke. Sindikatu baten babesik gabeko hautagaitzen kasuan, hautagaiez gain, hautagai bakoitzeko 3 bermatzaile (abalista) behar dira.\n\nProzesu hau langileon artetik sortu da, geure ekimenez. Profil desberdineko profesionalok bat egin dugu, gure eskubideak eta lan-egonkortasuna defendatzeko ahots propioa behar dugula sinetsita. Gure urratsa izan da hauteskunde hauetara aurkeztea. Bide honetan, LABen babesa bilatzea erabaki dugu, zuzendaritzaren aurrean berme juridiko osoz eta indar handiagoz negoziatu ahal izateko.',
          en: 'The Workers\' Statute (Art. 63) establishes that all workplaces with more than 50 people must have a committee, but the administration does not organize them automatically. It is a process that must be driven by a candidacy with sufficient staff to form the committee.\n\nThe initiative comes from the staff itself. A diverse group of center professionals have identified the need for a collective voice to manage our stability and rights. We have selected LAB as a support platform to ensure this process has the legal strength needed to negotiate with management.',
        },
      },
      {
        q: {
          es: '¿Por qué elecciones solo para Donostia y no para ambos centros?',
          eu: 'Zergatik egingo dira hauteskundeak Donostian soilik, eta ez bi zentroetan (Donostia eta Bilbo)?',
          en: 'Why elections only for Donostia and not for both centers?',
        },
        a: {
          es: 'El Estatuto de los Trabajadores es muy rígido en este aspecto: cada centro de trabajo cuyo censo sea de 50 o más personas puede constituir su propio comité de empresa (Art. 63).\n\nEn el caso de que existan distintos centros de trabajo con menos de 50 trabajadores, y la suma de esos trabajadores sea de más de 50, se podría constituir un comité de empresa conjunto si esos centros de trabajo estuvieran en la misma provincia o municipios limítrofes.\n\nEn el caso de Bilbao, al tratarse de una provincia distinta, no se podría constituir un comité conjunto con Donostia. Dicho esto, es deseo de esta candidatura que todas las mejoras que se consigan negociar por parte del comité de Donostia sean aplicadas en Bilbao de una forma equiparable.',
          eu: 'Langileen Estatutuak ez du zalantzarako biderik ematen: 50 pertsonatik gorako errolda duten lantokiek batzorde propioa izateko eskubidea dute (63. art.).\n\nLantoki batean baino gehiagotan 50 langile baino gutxiago izan arren, guztien artean kopuru hori gainditzen bada, batzorde bateratua osa daiteke. Horretarako, zentro horiek probintzia berean edo mugakide diren udalerrietan egon behar dute.\n\nBilboren kasuan, probintzia desberdina denez, ezin da Donostiarekin batera batzorde bakar bat osatu. Hala ere, hautagaitza honen asmo irmoa da Donostiako batzordeak negoziatzen dituen hobekuntza guztiak Bilbon ere modu parekatuan aplikatzea.',
          en: 'The Workers\' Statute is very rigid in this regard: each workplace with a census of 50 or more people can form its own works committee (Art. 63).\n\nIn the case of Bilbao, being a different province, a joint committee with Donostia cannot be formed. That said, it is this candidacy\'s wish that all improvements negotiated by the Donostia committee be applied in Bilbao in a comparable manner.',
        },
      },
      {
        q: {
          es: '¿Por qué una candidatura con respaldo sindical y cómo garantiza esto la autonomía de la plantilla?',
          eu: 'Zergatik sindikatu baten babesa duen hautagaitza, eta nola bermatzen du horrek langileon autonomia?',
          en: 'Why a candidacy with union backing and how does this guarantee staff autonomy?',
        },
        a: {
          es: 'La elección de presentarse con el respaldo de un sindicato responde a una estrategia de profesionalización y garantías. Contar con el apoyo del sindicato LAB proporciona un soporte legal, técnico y formativo de primer nivel, una fórmula que ya funciona con éxito en otros centros del BRTA como Tekniker, Azti o Tecnalia. Este respaldo no resta independencia, sino que la refuerza: disponer de recursos propios permite negociar con la dirección de tú a tú, con total autonomía.\n\nEs fundamental subrayar que nuestra candidatura es plural y diversa, integrada por personas con trayectorias y orígenes muy distintos que comparten un objetivo exclusivamente profesional: la mejora de las condiciones laborales (salarios, conciliación, flexibilidad), asegurando que cada decisión sea tomada siempre en favor de los trabajadores del centro.',
          eu: 'Hautagaitza hau sindikatu baten babesarekin aurkeztea erabaki dugu, bermeak eta profesionaltasuna lehenetsi nahi ditugulako. Ikerkuntzan eta kudeaketan ari garen lankideok ondo dakigu lan-zuzenbidea eta negoziazio kolektiboa mundu konplexuak direla, eta laguntza tekniko espezializatua beharrezkoa dela. LABekin lan egiteak goi-mailako baliabide legalak eta trebakuntza ziurtatzen dizkigu, BRTA sareko beste zentro batzuetan (Tekniker, Azti edo Tecnalian, esaterako) frogatuta dagoen bideari jarraituz.\n\nBabes honek, independentzia kendu beharrean, indartu egiten du: baliabide propioak izateak zuzendaritzarekin aurrez aurre eta berdintasunetik negoziatzea ahalbidetzen digu, enpresaren bitartekoen edo borondatearen zain egon gabe.\n\nGure hautagaitzaren aberastasuna aniztasunean dago: ibilbide eta jatorri oso desberdineko lankideak gara —Euskaditik hasi eta Asturias, Zaragoza, Malaga edo Madrileraino—, helburu profesional argi batek lotzen gaituela. Gure asmoa lan-baldintzak hobetzea da soilik (soldatak, kontziliazioa, malgutasuna), eta hartzen ditugun erabaki guztien iparra langileon onura izango dela ziurtatzea.',
          en: 'Presenting with union backing responds to a strategy of professionalization and guarantees. Having LAB\'s support provides top-level legal, technical and training support, a formula that already works successfully in other BRTA centers. This backing does not reduce independence but reinforces it.\n\nIt is essential to emphasize that our candidacy is plural and diverse, made up of people with very different backgrounds who share an exclusively professional objective: improving working conditions.',
        },
      },
      {
        q: {
          es: '¿Conocen los miembros de esta candidatura el convenio de aplicación?',
          eu: 'Ezagutzen al dute hautagaitzako kideek aplikatzen den hitzarmena?',
          en: 'Do the members of this candidacy know the applicable agreement?',
        },
        a: {
          es: 'Los miembros de esta lista contamos con un amplio conocimiento del convenio (XIV Convenio colectivo de ámbito estatal para los centros de educación universitaria e investigación), fundamentado en el análisis técnico y, sobre todo, en resultados tangibles para la plantilla.\n\nGracias a ese trabajo de análisis, miembros de esta lista junto con otros compañeros, logramos consolidar los 15 minutos de descanso como tiempo de trabajo efectivo según el Artículo 33 y asegurar el disfrute del tercer day off recogido en el Artículo 35.\n\nEsa misma labor de análisis permitió detectar un punto crítico durante las conversaciones sobre el traslado a MUBIL: la aplicación del Artículo 46, que regula los cambios de ubicación física cuando existen deficiencias objetivas de transporte público y establece que en determinadas casuísticas se podrá establecer, mediante la negociación, un plus de transporte.',
          eu: 'Gure hitzarmena —Unibertsitateko hezkuntza eta ikerketa zentroetarako estatu mailako XIV. hitzarmen kolektiboa— sakon ezagutzen dugu. Guretzat paperean dagoena baino gehiago da. Ezagutza hori analisi teknikoan oinarritzen da, bai, baina batez ere lankideontzat lortu ditugun emaitza praktikoetan. Izan ere, zerrenda hau osatzen dugunok denbora daramagu hitzarmen hori hitzez hitz bete dadin lanean, eta lortutakoak hor dautza.\n\nLan horri esker lortu dugu, adibidez, lehen enpresan onartzen ez ziren eskubideak finkatzea: 15 minutuko atsedena lan-denbora gisa zenbatzea (33. art.) edo 3. \'day off\'-a ziurtatzea (35. art.). Zerrenda honetako kideok, beste lankide batzuekin batera, buru-belarri aritu ginen puntu horiek paperetik errealitatera pasatzeko, eta gaur egun denok gozatzen ditugu.\n\nMUBILerako lekualdaketari buruzko bileretan ere, azterketa-lan horrek berebiziko garrantzia izan zuen. Gure zerrendako kide batek 46. artikulua mahai gainean jarri zuen Giza Baliabideen aurrean, ordu arte inor gutxi konturatu baitzen puntu horretaz. Artikulu horrek argi dio garraio publikoan gabeziak daudenean kokapen-aldaketak negoziatu egin behar direla, eta kasu batzuetan, garraio-plus bat adosteko aukera ematen duela.',
          en: 'The members of this list have extensive knowledge of the agreement (XIV State-level Collective Agreement for university education and research centers), based on technical analysis and, above all, tangible results for the staff.\n\nThanks to this analytical work, members of this list, along with other colleagues, managed to consolidate the 15-minute break as effective working time according to Article 33 and ensure the enjoyment of the third day off included in Article 35.',
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
