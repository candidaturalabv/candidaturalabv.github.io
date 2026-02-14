import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp, Share2, Copy, Check } from 'lucide-react';

const texts = {
  title: {
    es: 'PROGRAMA ELECTORAL',
    eu: 'HAUTESKUNDE PROGRAMA',
    en: 'ELECTORAL PROGRAM',
  },
  subtitle: {
    es: 'Un programa para Vicomtech: Por un futuro compartido',
    eu: 'Vicomtech-erako programa: Elkarrekin eraikitzen dugun etorkizunaren alde',
    en: 'A programme for Vicomtech: For a shared future',
  },
  readMore: {
    es: 'Leer programa completo',
    eu: 'Programa osoa irakurri',
    en: 'Read full programme',
  },
  readLess: {
    es: 'Ocultar programa',
    eu: 'Programa ezkutatu',
    en: 'Hide programme',
  },
  shareTitle: {
    es: 'Compartir programa',
    eu: 'Programa partekatu',
    en: 'Share programme',
  },
  shareTelegram: {
    es: 'Telegram',
    eu: 'Telegram',
    en: 'Telegram',
  },
  shareWhatsapp: {
    es: 'WhatsApp',
    eu: 'WhatsApp',
    en: 'WhatsApp',
  },
  copyLink: {
    es: 'Copiar enlace',
    eu: 'Esteka kopiatu',
    en: 'Copy link',
  },
  copied: {
    es: '¡Copiado!',
    eu: 'Kopiatuta!',
    en: 'Copied!',
  },
  downloadPdf: {
    es: 'Descargar PDF',
    eu: 'PDF deskargatu',
    en: 'Download PDF',
  },
};

const previewContent = {
  es: [
    'Estamos ante un momento histórico para todas las personas que formamos parte de este centro. Por primera vez en sus 25 años de trayectoria, los trabajadores y trabajadoras de Vicomtech vamos a tener la oportunidad de ejercer nuestro derecho a voto para elegir a nuestros Representantes.',
    'Esta es, sin duda, una excelente noticia. Dado el crecimiento y la relevancia que ha alcanzado nuestro centro, se hacía indispensable contar con un canal de comunicación bidireccional, profesional y sólido que sirviera de puente entre la plantilla y el centro. Este hito ha sido posible gracias al impulso de la candidatura de LAB que hoy os presenta este programa, con la firme convicción de que una representación democrática es la base para construir un entorno laboral más justo y participativo.',
    'Desde esta candidatura, tenemos una certeza clara: el capital más valioso de Vicomtech son las personas. Más allá de los servidores, las patentes o los edificios, la verdadera excelencia del centro reside en el talento, la dedicación y la creatividad de quienes lo componen. Por ello, consideramos prioritario cuidar ese capital humano, atendiendo vuestras preocupaciones, aspiraciones y bienestar laboral. Estamos convencidos de que una plantilla feliz, escuchada y valorada repercute directamente en la calidad investigadora y en el éxito global de nuestra organización.',
  ],
  eu: [
    'Une historiko baten aurrean gaude zentro hau osatzen dugun pertsona guztiontzat. 25 urteko ibilbidean lehen aldiz, Vicomtecheko langileok gure boto-eskubidea baliatzeko aukera izango dugu gure ordezkariak aukeratzeko.',
    'Hau, zalantzarik gabe, albiste bikaina da. Gure zentroak izan duen hazkundea eta garrantzia ikusita, ezinbestekoa zen bi norantzako komunikazio-kanal profesional eta sendo bat izatea, langileen eta zentroaren arteko zubi-lana egiteko. Mugarri hori posible izan da programa honek gaur aurkeztuko dizueen LABen hautagaitzaren bultzadari esker, ordezkaritza demokratiko bat lan-ingurune bidezkoago eta parte-hartzaileago bat eraikitzeko oinarria delako uste sendoarekin.',
    'Hautagaitza honetatik, ziurtasun argi bat daukagu: Vicomtechen kapitalik baliotsuena pertsonak dira. Zerbitzariez, patenteez edo eraikinez haratago, zentroaren benetako bikaintasuna hura osatzen dutenen talentuan, dedikazioan eta sormenean datza. Horregatik, lehentasunezkotzat jotzen dugu giza kapital hori zaintzea, zuen kezkak, nahiak eta lan-ongizatea kontuan hartuta. Ziur gaude pozik, entzunda eta baloratuta dagoen plantilla batek eragin zuzena duela gure erakundearen ikerketa-kalitatean eta arrakasta globalean.',
  ],
  en: [
    'This is a historic moment for all of us who are part of this centre. For the first time in its 25-year history, Vicomtech employees will have the opportunity to exercise our right to vote to elect our representatives.',
    'This is undoubtedly excellent news. Given the growth and importance our centre has achieved, it was essential to have a professional and solid two-way communication channel that would serve as a bridge between the staff and the centre. This milestone has been made possible thanks to the momentum of the LAB candidacy, which today presents this programme to you, with the firm conviction that democratic representation is the basis for building a more fair and participatory work environment.',
    'From this candidacy, we have one clear certainty: Vicomtech\'s most valuable asset is its people. Beyond the servers, patents, or buildings, the true excellence of the centre lies in the talent, dedication, and creativity of those who comprise it. Therefore, we consider it a priority to take care of this human capital, addressing your concerns, aspirations, and well-being at work. We are convinced that a happy, listened to and valued workforce has a direct impact on the quality of research and the overall success of our organisation.',
  ],
};

interface ProgramBlock {
  title: { es: string; eu: string; en: string };
  content: { es: string[]; eu: string[]; en: string[] };
}

const fullProgram: ProgramBlock[] = [
  {
    title: { es: '', eu: '', en: '' },
    content: {
      es: [
        'En este sentido, nos preocupa especialmente la creciente dificultad para la atracción y retención de talento consolidado. En un sector tan competitivo como el nuestro, no podemos permitirnos perder el conocimiento y la experiencia que tanto esfuerzo ha costado cultivar. Si no somos capaces de ofrecer condiciones que motiven a los mejores profesionales a quedarse con nosotros, la excelencia que define a Vicomtech y nuestra capacidad para ejecutar proyectos de vanguardia se verán comprometidas.',
        'Nuestra propuesta nace con un espíritu constructivo y dialogante. Venimos a proponer mejoras que beneficien a todas las partes. Queremos trabajar para transformar las inquietudes de la plantilla en soluciones reales, garantizando que Vicomtech siga siendo no solo un referente tecnológico, sino también un ejemplo de bienestar laboral y respeto profesional. Creemos que ha llegado el momento de dar este paso juntos. Venimos a mejorar las cosas, con transparencia y compromiso, para asegurar que el futuro de Vicomtech sea tan brillante como el talento de las personas que lo hacen posible.',
        'Ahora bien, somos conscientes de que el valor de estas propuestas se demuestra en el diálogo con Dirección, un proceso que afrontamos con la máxima seriedad y rigor profesional. Para transformar estas ideas en realidades que nos beneficien a todos, es fundamental contar con un respaldo amplio y sólido de la plantilla. Por eso, vuestro voto es clave: un apoyo mayoritario nos otorga la legitimidad necesaria para representar vuestros intereses con mayor claridad y asegurar que la voz de los trabajadores y trabajadoras sea escuchada y valorada en el futuro de nuestro centro. Estamos convencidos que esto además redundará en que el centro siga manteniendo la excelencia que le caracteriza.',
        'Para que este proyecto tenga éxito, tenemos claro que lo primordial es y será siempre escuchar a la gente, y ese es el compromiso innegociable que adquieren los miembros de esta candidatura que resulten elegidos. Es intención de esta candidatura mantener canales de comunicación con los trabajadores, mediante el recién inaugurado tablón, así como comunicaciones y reuniones de trabajadores. Las medidas que detallamos a continuación no son una lista cerrada, sino una pequeña muestra representativa de las reclamaciones e inquietudes que nos habéis transmitido en nuestros "cafés compartidos".',
      ],
      eu: [
        'Zentzu horretan, bereziki kezkatzen gaitu finkatutako talentua erakartzeko eta atxikitzeko gero eta zailtasun handiagoak. Gurea bezalako sektore lehiakor batean, ezin dugu utzi lantzen hainbeste kostatu den ezagutza eta esperientzia galtzen. Profesional onenei gurekin geratzeko motibazioa ematen dieten baldintzak eskaintzeko gai ez bagara, Vicomtech definitzen duen bikaintasunak eta abangoardiako proiektuak gauzatzeko dugun gaitasunak konpromisoa hartuko dute.',
        'Gure proposamena espiritu eraikitzaile eta elkarrizketatzailearekin sortu da. Alderdi guztiei mesede egingo dieten hobekuntzak proposatzera gatoz. Langileen kezkak irtenbide erreal bihurtzeko lan egin nahi dugu, Vicomtech erreferente teknologiko ez ezik, laneko ongizatearen eta errespetu profesionalaren eredu ere izaten jarraituko duela bermatuz. Pauso hau elkarrekin emateko unea iritsi dela uste dugu. Gauzak hobetzera gatoz, gardentasunez eta konpromisoz, Vicomtechen etorkizuna bertako pertsonen talentua bezain handia izan dadin.',
        'Hala ere, badakigu proposamen horien balioa Zuzendaritzarekiko elkarrizketan frogatzen dela, eta prozesu horri seriotasun eta zorroztasun profesional handienarekin aurre egiten diogula. Ideia horiek guztiontzat onuragarri izango diren errealitate bihurtzeko, funtsezkoa da langileen babes zabala eta sendoa izatea. Horregatik, zuen botoa funtsezkoa da: gehiengoaren babesa izateak zilegitasuna ematen digu zuen interesak argiago ordezkatzeko eta langileen ahotsa gure zentroaren etorkizunean entzun eta baloratuko dela ziurtatzeko. Horrek guztiak zentroaren ezaugarri den bikaintasuna indartuko duela sinetsita gaude.',
        'Egitasmo honek arrakasta izan dezan, argi dugu lehentasuna jendeari entzutea dela eta izango dela beti. Hori da, hain zuzen, hautatutako hautagaitzako kideok hartzen dugun negoziaezinezko konpromisoa.',
        'Gure asmoa langileekiko komunikazio-bideak mantentzea da, ireki berri den iragarki-taularen bidez zein bileren eta komunikazio zuzenen bidez. Jarraian zehazten ditugun neurriak ez dira zerrenda itxi bat; gure "kafe partekatuetan" helarazi dizkiguzuen eskaera eta kezken lagin esanguratsu bat baizik.',
      ],
      en: [
        'In this regard, we are particularly concerned about the growing difficulty in attracting and retaining established talent. In a sector as competitive as ours, we cannot afford to lose the knowledge and experience that has taken so much effort to cultivate. If we are unable to offer conditions that motivate the best professionals to stay with us, the excellence that defines Vicomtech and our ability to execute cutting-edge projects will be compromised.',
        'Our proposal is born out of a constructive and dialogue-oriented spirit. We are here to propose improvements that benefit all parties. We want to work to transform the concerns of the workforce into real solutions, ensuring that Vicomtech remains a leading example in technology, but also an example of workplace wellbeing and professional respect. We believe that the time has come to take this step together. We are here to improve things, with transparency and commitment, to ensure that the future of Vicomtech is as bright as the talent of the people who make it possible.',
        'However, we are aware that the value of these proposals is demonstrated in dialogue with management, a process that we approach with the utmost seriousness and professional rigour. In order to transform these ideas into realities that benefit us all, it is essential to have broad and solid support from the workforce. That is why your vote is key: majority support gives us the legitimacy we need to represent your interests more clearly and ensure that the voice of the workers is heard and valued in the future of our centre. We are convinced that this will also ensure that the centre continues to maintain the excellence that characterises it.',
        'For this project to succeed, we are clear that the most important thing is and always will be to listen to people, and that is the non-negotiable commitment made by the members of this candidacy who are elected. It is the intention of this candidacy to maintain channels of communication with workers, through the recently inaugurated notice board, as well as communications and workers\' meetings. The measures detailed below are not an exhaustive list, but rather a small representative sample of the complaints and concerns that you have conveyed to us in our \'shared coffees\'.',
      ],
    },
  },
  {
    title: {
      es: 'Bloque 1: Salarios y Carrera Profesional',
      eu: 'Soldaten eta karrera profesionalaren atala',
      en: 'Block 1: Salaries and Professional Career',
    },
    content: {
      es: [
        '**Ejes Estratégicos: Previsibilidad y Transparencia, porque tu futuro no puede ser una incógnita**',
        'Para que un centro de excelencia funcione, sus profesionales necesitan saber qué esperar de su carrera y de su nómina. No queremos arbitrariedad ni opacidad; queremos un sistema transparente basado en reglas claras y horizontes definidos.',
        '**1. Previsibilidad Salarial: Recuperar la Certidumbre**',
        'La estabilidad económica de la plantilla depende de que se respeten los acuerdos y los ciclos económicos. De cara al año 2026, entendemos que es importante que la política salarial siga las normas establecidas hasta ese momento y se lleven a la mayor inmediatez las siguientes medidas que han sido bloqueadas:',
        'Desbloqueo de la cláusula IPC: Recuperación inmediata de la subida salarial para 2026 y abono retroactivo de los retrasos. La inflación no puede seguir mermando nuestro poder adquisitivo por falta de decisión política.',
        'Garantía de Bonos y Promociones: Los compromisos adquiridos deben cumplirse. Pedimos el desbloqueo de los bonos y ascensos pactados para devolver la confianza en los procesos internos.',
        '**2. Transparencia Salarial y Baremos Objetivos**',
        'En la era de la IA transparente, no podemos permitir que nuestra retribución dependa de una "caja negra".',
        'Auditoría del Sistema de Decisión (IA): Ante la entrada en vigor de la normativa de agosto de 2026, queremos aprovecharla para profundizar en la transparencia y creemos que es necesaria la auditoría del algoritmo de subida salarial. Un sistema de "alto riesgo" requiere una vigilancia estricta. Además, un sistema como este requiere, según el propio AI Act, una obligación de transparencia y comunicación a la plantilla.',
        'Baremos por Categoría y Transparencia salarial: Implementación de tablas salariales públicas por niveles. Necesitamos criterios medibles (antigüedad, gestión de proyectos, formación) para saber exactamente cómo progresar dentro del centro, eliminando la opacidad actual. Otros centros como Tekniker, Azti, Ceit o Tecnalia cuentan con una política salarial más clara y transparente que la nuestra.',
        '**3. Políticas Salariales Basadas en Datos: Ciencia aplicada a nuestra retribución**',
        'En un centro como el nuestro, donde el análisis de datos es el motor de nuestra actividad, la política salarial no puede ser una excepción. No pedimos mejoras basadas en percepciones, sino en evidencias.',
        'Análisis y Transparencia Legal: Según el Real Decreto 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres, la representación de los trabajadores tiene acceso al Registro Retributivo. El Registro Retributivo es un documento obligatorio en el que la empresa desglosa los valores medios y las medianas de los salarios, complementos y percepciones de su plantilla, agrupados por categorías profesionales y sexo, para garantizar la transparencia y la igualdad salarial. Haciendo uso del derecho del Comité al acceso a los registros retributivos según la normativa vigente, realizaremos un tratamiento analítico y exhaustivo de los datos salariales de la plantilla.',
        'Benchmarking con el Entorno BRTA: Basándonos en el análisis retributivo utilizaremos indicadores objetivos y comparativas (como los informes salariales de LKS) para medir nuestra situación real frente a otros centros de la Red Vasca de Ciencia, Tecnología e Innovación (BRTA).',
        'Tendencia a la convergencia y competitividad en el mercado: Si los datos detectan brechas o diferencias significativas respecto al mercado y a centros de nuestra misma categoría, plantearemos una hoja de ruta clara para cerrar esa brecha a medio plazo y garantizando la viabilidad económica del centro. Ofreceremos soluciones sostenibles y viables que armonicen nuestra competitividad salarial con la excelencia técnica que aportamos. En base a estos principios se planteará una negociación basada en datos para las políticas salariales a aplicar a partir del año 2027.',
        '**4. Carrera Profesional: Compromiso y Agilidad en los Ascensos**',
        'Queremos un sistema donde cumplir los objetivos garantice el progreso profesional sin esperas injustificadas.',
        'Compromiso de Ascenso por Hitos: El cumplimiento de los criterios establecidos debe traducirse en un ascenso efectivo en un tiempo limitado. Debemos evitar situaciones donde, tras alcanzar los objetivos, el profesional permanezca estancado en su categoría anterior por falta de automatismo. Así pues, en Vicomtech se han dado situaciones de G4s que presentan el doctorado, entendemos que no es una situación ideal y que debería cambiar. Creemos además, que estos ascensos ya sea tanto categorías puras (Gs o Ss) como en cargos dentro del departamento (lider de línea, lider de laboratorio), deberían tener definido un beneficio retributivo acorde a las responsabilidades que traen consigo, y que este fuera transparente y claro antes de acceder al puesto.',
        'Por otro lado, saludamos la segmentación de las actuales categorías que fue anunciada recientemente por dirección. Creemos que las categorías anteriores eran demasiado amplias y podían provocar que la plantilla se desalentara ante hitos que no ofrecían un ascenso próximo. Creemos necesario trabajar en esta línea y nos gustaría ayudar a definir estas nuevas subcategorías.',
        'Eficiencia en la Evaluación 360: Traslado de las evaluaciones al primer trimestre del año. El objetivo es que el reconocimiento al trabajo realizado y los nuevos retos tengan un impacto real en el mismo ejercicio, eliminando el actual desfase de dos años. Además, estudiaremos y propondremos mejoras para este sistema de evaluación de desempeño de cara a que no sea únicamente una herramienta de evaluación o un medio para conseguir "bonos", sino una herramienta útil para alinear los intereses del centro con el de los empleados.',
        'Clarificación y Transparencia en la Transferencia de Personal: La transferencia de talento a empresas vascas es un indicador estratégico para Vicomtech, pero no debe ser una carga imprevista para el profesional. Pedimos Transparencia desde la contratación: Consideramos que cualquier expectativa de transferencia a empresa debe comunicarse de forma clara desde el proceso de selección. Esta responsabilidad no debería caer sobre el trabajador de forma sobrevenida. A este respecto planteamos realizar un Análisis comparativo (Benchmarking) para analizar cómo gestionan este indicador otros centros tecnológicos de nuestro entorno para adoptar las mejores prácticas, asegurando que la importancia que la Dirección da a este KPI se traduzca en una estrategia de acompañamiento real, y no solo en una métrica de ejecución.',
        '**5. Tiempo para la Formación e "I+D Personal"**',
        'Para que Vicomtech siga en la vanguardia, la formación debe ser una inversión dentro de la jornada, no una actividad para el tiempo libre.',
        'Bolsa de horas para formación: Proponemos que cada profesional disponga de un cupo de horas anuales garantizadas dentro de la jornada laboral para autoformación, seminarios o investigación en nuevas tecnologías no ligadas estrictamente al proyecto actual.',
      ],
      eu: [
        '**Ardatz Estrategikoak: Aurreikuspena eta Gardentasuna, zure etorkizuna ezin baita zalantza bat izan**',
        'Bikaintasuneko zentro batean, profesionalek garbi izan behar dute zein den beren ibilbidea eta zer jasoko duten trukean. Arbitrariotasun eta opakutasun ororen aurrean, arau argietan eta etorkizuneko aurreikuspenetan oinarritutako sistema gardena defendatzen dugu.',
        '**1.Soldaten ziurtasuna: konfiantza berreskuratzea**',
        'Langileen egonkortasun ekonomikoa bermatzeko, ezinbestekoa da hitzartutako akordioak eta ziklo ekonomikoak errespetatzea. 2026ari begira, soldata-politikak ezarritako arauak bete ditzala exijitzen dugu, eta blokeatutako neurri hauek berehala abiaraztea dugu helburu:',
        'KPI klausula desblokeatzea: 2026ko soldata-igoera berehala berreskuratzea eta atzerapenak atzeraeraginez ordaintzea. Inflazioak ezin du gure erosteko ahalmena murrizten jarraitu borondate politiko faltagatik.',
        'Bonuak eta sustapenak bermatzea: hartutako konpromisoak bete egin behar dira. Itundutako bonuak eta igoerak desblokeatzea exijitzen dugu, barne-prozesuekiko konfiantza berreskuratzeko.',
        '**2. Soldata-gardentasuna eta baremo objektiboak**',
        'IAren gardentasunaz hitz egiten dugun bitartean, ezin dugu onartu gure soldatak ezezagun (kaxa beltza) baten mende egotea.',
        'IA bidezko erabaki-sistemak ikuskatzea(IA): 2026ko abuztuko araudia indarrean sartzean, gardentasunean sakontzeko aprobetxatu nahi dugu, eta uste dugu beharrezkoa dela soldata-igoeraren algoritmoaren auditoria egitea. "Arrisku handiko" sistema batek zaintza zorrotza eskatzen du. Gainera, horrelako sistema batek, AI Act-ak berak dioen bezala, gardentasun- eta komunikazio-betebeharrak dakartza langileekiko',
        'Kategoriaren araberako baremoak eta soldata-gardentasuna: Mailekako soldata-taula publikoak ezartzea. Irizpide neurgarriak behar ditugu (antzinatasuna, proiektuen kudeaketa, prestakuntza), zentroan nola aurrera egin jakiteko eta egungo opakutasunarekin amaitzeko. Tekniker, Azti, Ceit edo Tecnalia bezalako zentroek gureak baino soldata-politika argiagoak eta gardenagoak dituzte.',
        '**3. Datuetan Oinarritutako Soldata-Politika: Zientzia gure baldintzen zerbitzura**',
        'Gure zentroan datuen analisia jardueraren motorra bada, soldata-politikak ezin du salbuespena izan. Ez dugu irudipenetan oinarritutako hobekuntzarik eskatzen, ebidentzietan oinarritutakoak baizik.',
        'Analisi eta lege-gardentasuna: 902/2020 Errege Dekretuak ematen digun eskubidea erabiliz, Ordainsari Erregistroan sartuko gara. Dokumentu honek soldaten, osagarrien eta hartzekoen batez bestekoak eta ertainak biltzen ditu, kategoria eta sexuaren arabera. Gure konpromisoa datu horiek xehetasunez aztertzea da, soldata-berdintasuna bermatzeko eta diskriminazio oro identifikatzeko.',
        'Benchmarkinga BRTA ingurunearekin: Ordainsarien azterketan oinarrituta, adierazle objektiboak eta konparatiboak erabiliko ditugu (hala nola LKSren soldata-txostenak) gure egoera erreala neurtzeko, Zientzia, Teknologia eta Berrikuntzaren Euskal Sareko (BRTA) beste zentro batzuen aldean.',
        'Merkatuan konbergentziarako eta lehiakortasunerako joera: Datuek gure kategoria bereko merkatuarekiko eta zentroekiko arrakalak edo desberdintasun esanguratsuak atzematen badituzte, bide-orri argi bat planteatuko dugu epe ertainera arrakala hori ixteko eta zentroaren bideragarritasun ekonomikoa bermatzeko. Irtenbide iraunkorrak eta bideragarriak eskainiko ditugu, gure soldata-lehiakortasuna eta ematen dugun bikaintasun teknikoa bateratzeko. Printzipio horietan oinarrituta, 2027. urtetik aurrera aplikatu beharreko soldata-politiketarako datuetan oinarritutako negoziazioa planteatuko da.',
        '**4. Ibilbide profesionala: Sustapen eraginkor eta konprometituak**',
        'Helburuak betetzeak ibilbide profesionala bermatuko duen sistema bat nahi dugu, justifikaziorik gabeko itxaronaldirik gabe.',
        'Mugarrietan oinarritutako maila-igoerak: Ezarritako irizpideak betetzeak sustapen eraginkorra ekarri behar du berekin, epe zehatz eta mugatu batean. Helburuak lortu ondoren, profesional bat bere kategorian trabatuta geratzea saihestu behar dugu automatismorik ezagatik. Vicomtech-en ikusi dugu doktoretza aurkeztu duten G4 mailako langileak daudela; gure ustez, egoera hori ez da onargarria eta aldatu egin behar da.',
        'Era berean, sustapen guztiek —izan kategoria pugetan (G-ak edo S-ak), izan departamentuko karguetan (lerro-buru, laborategi-buru)— ardura berriei dagokien ordainsari-onura zehaztuta izan behar dute. Onura horrek garden eta argi egon behar du kargua onartu aurretik.',
        'Bestalde, zuzendaritzak berriki iragarri duen egungo kategorien segmentazioa agurtzen dugu. Gure ustez, aurreko kategoriak zabalegiak ziren, eta, horren ondorioz, langileek bertan behera utz zezaketen hurrengo igoerarik eskaintzen ez zuten mugarrien aurrean. Uste dugu beharrezkoa dela ildo horretan lan egitea, eta azpikategoria berri horiek definitzen lagundu nahi genuke.',
        '360º ebaluazioaren eraginkortasuna: Ebaluazioak urteko lehen hiruhilekora eramatea. Helburua da egindako lanaren aintzatespenak eta erronka berriek benetako eragina izatea ekitaldi berean, egungo bi urteko desfasea kenduz. Gainera, jarduera ebaluatzeko sistema hori aztertu eta hobekuntzak proposatuko ditugu, ebaluazio-tresna bat edo primak lortzeko bitarteko bat soilik izan ez dadin, baizik eta zentruaren interesak langileen interesekin lerrokatzeko tresna erabilgarri bat.',
        'Argitasuna eta gardentasuna langileen transferentzian: Talentua euskal enpresetara transferitzea adierazle estrategikoa da Vicomtechentzat, baina ez du ustekabeko zama izan behar profesionalarentzat. Gardentasuna kontrataziotik eskatzen dugu: Enpresara transferitzeko edozein itxaropen hautapen-prozesutik modu argian komunikatu behar dela uste dugu. Erantzukizun hori ez litzateke langilearen gain erori behar bat-batean. Horri dagokionez, konparaziozko analisi bat egitea planteatzen dugu (Benchmarking), gure inguruko beste zentro teknologiko batzuek adierazle hori nola kudeatzen duten aztertzeko, jardunbide egokienak hartzeko. Horrela, Zuzendaritzak KPI honi ematen dion garrantzia benetako bidelaguntza-estrategia bihurtu behar da, eta ez exekuzio-metrika soil bat.',
        '**5. Prestakuntzarako eta "I+G Pertsonalerako" denbora**',
        'Vicomtechek abangoardian jarrai dezan, prestakuntzak inbertsio bat izan behar du lanaldiaren barruan, ez aisialdirako jarduera bat.',
        'Prestakuntzarako ordu-poltsa: Proposatzen dugu profesional bakoitzak urteko ordu-kupo bat izatea, lanaldiaren barruan bermatuta, autoprestakuntzarako, mintegietarako edo egungo proiektuarekin hertsiki lotuta ez dauden teknologia berriei buruzko ikerketarako.',
      ],
      en: [
        '**Strategic Pillars: Predictability and Transparency, because your future cannot be unknown**',
        'For a centre of excellence to function, its professionals need to know what to expect from their career and their pay. We do not want arbitrariness or opacity; we want a transparent system based on clear rules and defined horizons.',
        '**1. Salary Predictability: Restoring Certainty**',
        'The economic stability of the workforce depends on agreements and economic cycles being respected. Looking ahead to 2026, we understand that it is important for salary policy to follow the rules established up to that point and for the following measures, which have been blocked, to be implemented as soon as possible:',
        'Unblocking the CPI clause: Immediate recovery of the salary increase for 2026 and retroactive payment of arrears. Inflation cannot continue to erode our purchasing power due to a lack of political decision-making.',
        'Guarantee of bonuses and promotions: Commitments made must be fulfilled. We call for the unblocking of agreed bonuses and promotions to restore confidence in internal processes.',
        '**2. Salary transparency and objective scales**',
        'In the era of transparent AI, we cannot allow our remuneration to depend on a \'black box\'.',
        'Audit of the Decision-Making System (AI): With the August 2026 regulations coming into force, we want to take advantage of this to increase transparency, and we believe that an audit of the salary increase algorithm is necessary. A \'high-risk\' system requires strict monitoring. Furthermore, according to the AI Act itself, a system such as this requires transparency and communication with staff.',
        'Salaries by Category and Transparency: Implementation of public salary tables by level. We need measurable criteria (seniority, project management, training) to know exactly how to progress within the centre, eliminating the current lack of transparency. Other centres such as Tekniker, Azti, Ceit and Tecnalia have a clearer and more transparent salary policy than ours.',
        '**3. Data-based Salary Policies: Science applied to our remuneration**',
        'In a centre like ours, where data analysis is the driving force behind our activity, salary policy cannot be an exception. We are not asking for improvements based on perceptions, but on evidence.',
        'Analysis and Legal Transparency: According to Royal Decree 902/2020, of 13 October, on equal pay between women and men, employee representatives have access to the Remuneration Register. The Remuneration Register is a mandatory document in which the company breaks down the average and median values of the salaries, bonuses and allowances of its workforce, grouped by professional category and gender, to ensure transparency and equal pay. Making use of the Committee\'s right to access remuneration records in accordance with current regulations, we will carry out an analytical and exhaustive analysis of the workforce\'s salary data.',
        'Benchmarking with the BRTA Environment: Based on the remuneration analysis, we will use objective indicators and comparisons (such as LKS salary reports) to measure our actual situation compared to other centres in the Basque Science, Technology and Innovation Network (BRTA).',
        'Trend towards convergence and competitiveness in the market: If the data detects significant gaps or differences with respect to the market and centres in our same category, we will propose a clear roadmap to close that gap in the medium term and guarantee the economic viability of the centre. We will offer sustainable and viable solutions that harmonise our salary competitiveness with the technical excellence we provide. Based on these principles, data-driven negotiations will be proposed for the salary policies to be applied from 2027 onwards.',
        '**4. Professional Career: Commitment and Agility in Promotions**',
        'We want a system where meeting objectives guarantees professional progress without unjustified delays.',
        'Commitment to Promotion by Milestones: Meeting the established criteria should result in effective promotion within a limited time frame. We must avoid situations where, after achieving their objectives, professionals remain stuck in their previous category due to a lack of automation. Thus, at Vicomtech, there have been situations where G4s have presented their doctorates, and we understand that this is not an ideal situation and that it should change. We also believe that these promotions, whether to pure categories (Gs or Ss) or to positions within the department (line leader, laboratory leader), should have a defined remuneration benefit in line with the responsibilities they entail, and that this should be transparent and clear before accessing the position.',
        'On the other hand, we welcome the segmentation of the current categories that was recently announced by management. We believe that the previous categories were too broad and could cause staff to become discouraged by milestones that did not offer immediate promotion. We believe it is necessary to work along these lines and would like to help define these new subcategories.',
        'Efficiency in 360 Evaluation: Transfer of evaluations to the first quarter of the year. The aim is for recognition of work done and new challenges to have a real impact in the same financial year, eliminating the current two-year gap. In addition, we will study and propose improvements to this performance evaluation system so that it is not only an evaluation tool or a means of obtaining \'bonuses\', but also a useful tool for aligning the interests of the centre with those of its employees.',
        'Clarification and Transparency in Staff Transfers: The transfer of talent to Basque companies is a strategic indicator for Vicomtech, but it should not be an unexpected burden for professionals. We call for transparency from the moment of hiring: we believe that any expectation of transfer to a company should be clearly communicated during the selection process. This responsibility should not fall on the employee unexpectedly. In this regard, we propose conducting a comparative analysis (benchmarking) to analyse how other technology centres in our environment manage this indicator in order to adopt best practices, ensuring that the importance that management attaches to this KPI translates into a real support strategy, and not just an execution metric.',
        '**5. Time for Training and \'Personal R&D\'**',
        'For Vicomtech to remain at the forefront, training must be an investment within the working day, not an activity for free time.',
        'Training hours allowance: We propose that each professional be allocated a guaranteed number of hours per year within the working day for self-training, seminars or research into new technologies not strictly related to the current project.',
      ],
    },
  },
  {
    title: {
      es: 'Bloque 2: Traslado a MUBIL',
      eu: 'MUBILera lekualdatzeko atala',
      en: 'Block 2: Transfer to MUBIL and Working Conditions',
    },
    content: {
      es: [
        '**Garantizar nuestra calidad de vida en la nueva ubicación**',
        'El traslado a la nueva sede de MUBIL supone un cambio estructural que no debe traducirse en una pérdida de derechos o de bienestar para la plantilla. El Comité debe ser parte activa en la planificación para mitigar cualquier impacto negativo en la flexibilidad y los tiempos de desplazamiento. Creemos que un cambio tan importante como este exige un acuerdo entre el centro y los Representantes Legales de los Trabajadores para mitigar los efectos adversos que este pueda tener.',
        '**1. Protección de la Flexibilidad y el Tiempo para compañeros desplazados a Mubil**',
        'El cambio de ubicación no puede ser una excusa para retroceder en conciliación y condiciones de trabajo.',
        'Mantenimiento de condiciones: Negociaremos para que la flexibilidad horaria actual se respete y se adapte, si fuera necesario, a las nuevas realidades logísticas del centro.',
        'Compensaciones por Traslado: Creemos que para ciertas casuísticas puede proceder la aplicación de las medidas compensatorias recogidas en el Artículo 46 del Convenio Colectivo para paliar los perjuicios derivados del cambio de centro de trabajo.',
        '**2. Soluciones de Movilidad Eficientes para Mubil**',
        'Queremos llegar a nuestro puesto de trabajo de forma cómoda, económica y sostenible.',
        'Lanzaderas Propias o Compartidas: Proponemos que Vicomtech, de forma individual o en colaboración con el resto de centros que integran MUBIL, ponga a disposición de la plantilla un servicio de autobús de empresa (lanzadera) que conecte puntos estratégicos con la nueva sede.',
        'Presión Institucional por Transporte Público: El centro, como parte de un polo tecnológico estratégico, debe ejercer presión junto a otras entidades ante la Diputación y las instituciones competentes. El objetivo es garantizar una red de transporte público (autobuses, frecuencias y accesos) estable, accesible y dimensionada a las necesidades de los cientos de trabajadores de la zona.',
      ],
      eu: [
        '**Kokapen berria, eskubide berdinak: gure bizi-kalitatea ardat**',
        'MUBILen egoitza berrira lekualdatzeak egiturazko aldaketa dakar, eta horrek ez du esan nahi langileen eskubideak edo ongizatea galduko direnik. Batzordeak parte-hartze aktiboa izan behar du plangintzan, malgutasunean eta lekualdaketa-denboretan eragin negatibo oro arintzeko. Gure ustez, horrelako aldaketa garrantzitsu batek zentruaren eta langileen legezko ordezkarien arteko akordioa eskatzen du, horrek izan ditzakeen ondorio kaltegarriak arintzeko.',
        '**1. Mubilera lekualdatzea: malgutasuna bermatu eta denbora-galerak orekatu**',
        'Kokapen-aldaketa ezin da aitzakia izan kontziliazioan eta lan-baldintzetan atzera egiteko.',
        'Baldintzak mantentzea: Negoziatuko dugu egungo ordutegi-malgutasuna errespeta dadin eta, beharrezkoa balitz, zentroko errealitate logistiko berrietara egokitu dadin.',
        'Lekualdatzeagatiko konpentsazioak: Uste dugu zenbait kasuistikotarako egokia izan daitekeela Hitzarmen Kolektiboaren 46. artikuluan jasotako konpentsazio-neurriak aplikatzea, lantokia aldatzeak eragindako kalteak arintzeko.',
        '**2. Mugikortasun eraginkorrerako soluzioak Mubilentzat**',
        'Gure lanpostura modu eroso, ekonomiko eta iraunkorrean iritsi nahi dugu.',
        'Lanzadera propioak edo partekatuak: Vicomtechek, modu indibidualean edo MUBIL osatzen duten gainontzeko zentroekin elkarlanean, enpresa-autobus zerbitzu bat (lanzadera) langileen eskura jartzea proposatzen dugu, puntu estrategikoak egoitza berriarekin lotzeko.',
        'Garraio Publikoagatiko Presio Instituzionala: Zentroak, polo teknologiko estrategiko baten zati gisa, presioa egin behar du beste erakunde batzuekin batera Aldundiaren eta erakunde eskudunen aurrean. Helburua da garraio publikoaren sare egonkorra (autobusak, maiztasunak eta sarbideak), irisgarria eta inguruko ehunka langileen beharretara egokitua bermatzea.',
      ],
      en: [
        '**Ensuring our quality of life in the new location**',
        'The transfer to the new MUBIL headquarters represents a structural change that should not result in a loss of rights or well-being for the workforce. The Committee must play an active role in planning to mitigate any negative impact on flexibility and travel times. We believe that such a significant change requires an agreement between the centre and the Workers\' Legal Representatives to mitigate any adverse effects it may have.',
        '**1. Protection of Flexibility and Time for colleagues transferred to Mubil**',
        'The change of location cannot be an excuse to take a step backwards in terms of work-life balance and working conditions.',
        'Maintenance of conditions: We will negotiate to ensure that the current flexible working hours are respected and adapted, if necessary, to the new logistical realities of the centre.',
        'Compensation for relocation: We believe that in certain cases, the compensatory measures set out in Article 46 of the Collective Agreement may be applied to mitigate the damage resulting from the change of workplace.',
        '**2. Efficient Mobility Solutions for Mubil**',
        'We want to get to work comfortably, economically and sustainably.',
        'Own or Shared Shuttles: We propose that Vicomtech, either individually or in collaboration with the other centres that make up MUBIL, provide staff with a company bus service (shuttle) connecting strategic points with the new headquarters.',
        'Institutional Pressure for Public Transport: As part of a strategic technology hub, the centre must exert pressure, together with other entities, on the Provincial Council and the relevant institutions. The aim is to guarantee a stable, accessible public transport network (buses, frequencies and access) that is tailored to the needs of the hundreds of workers in the area.',
      ],
    },
  },
  {
    title: {
      es: 'Bloque 3: Condiciones de Trabajo',
      eu: 'Lan baldintzen atala',
      en: 'Block 3: Work Conditions',
    },
    content: {
      es: [
        '**Profesionales de Vanguardia, condiciones a la altura**',
        'Creemos que es importante que el centro reconozca el esfuerzo y el talento y proporcione las condiciones adecuadas y medios necesarios para desarrollarlo de una forma eficaz. Este bloque se centra en mejoras referentes a las condiciones en las que los trabajadores de Vicomtech realizan su labor.',
        '**1. Valoración del tiempo de trabajo: Viajes y Dietas**',
        'Consideramos que el compromiso de la plantilla cuando viaja debe ser reconocido y compensado adecuadamente.',
        'Política de Viajes y Gestión del Tiempo: Proponemos regular el tiempo invertido en desplazamientos fuera del horario laboral para que sea compensado justamente, respetando el tiempo de descanso. Para eso realizaremos un análisis de cómo tratan este apartado otros centros de nuestro entorno, analizaremos el modelo actual y propondremos cambios y mejoras para el personal de Vicomtech que se ve afectado por los viajes de trabajo.',
        'Actualización de Dietas: Tras 7 años sin cambios, planteamos una revisión de los importes para ajustarlos a la realidad de los precios de mercado actuales, asegurando que cubran dignamente los costes de alojamiento y manutención.',
        '**2. Uso de Portátiles o sobremesas a disposición de los trabajadores**',
        'Actualmente, los perfiles no senior (<G2) no disponen de portátiles personales corporativos, lo que implica la dependencia de los disponibles en salas de reuniones y portátiles de departamento, que en algunos casos han mostrado no ser suficientes. Adicionalmente, existen ciertos perfiles de profesionales que se tienen que desplazar a cliente semanalmente y esto a veces implica la compra de un equipo aparte, con el presupuesto del proyecto. Creemos que sería más eficiente dejar libertad para usar portátiles como estación de trabajo para estos casos, además para los casos comentados supondría una reducción de costes (un equipo en lugar de dos) y de horas de trabajo invertidas en preparar portátiles para reuniones externas.',
        '**3. Bienestar laboral y prevención de burnout**',
        'Cuidar el bienestar emocional de la plantilla es un factor indispensable para prevenir la saturación mental o burnout dentro del entorno de trabajo, sobre todo en situaciones con picos de trabajo prolongados, interrupciones constantes y falta de espacios de recuperación.',
        'Espacios adecuados para concentración y recuperación: Asegurar que existan zonas de trabajo silenciosas, con estímulos reducidos y sin interrupciones, donde cualquier trabajador pueda ir a concentrarse o recargar energía en momentos de burnout.',
        'Revisión periódica de carga: Establecer junto con DARes y responsables revisiones sencillas de carga de trabajo y capacidad en los diferentes equipos y proyectos para detectar picos y desequilibrios a tiempo.',
        'Implementación y seguimiento del Protocolo de Riesgos Psicosociales: Para este tipo de casuísticas la ley establece un Protocolo de Riesgos Psicosociales, colaboraremos en la redacción del mismo poniendo el foco en la prevención y detección de este tipo de riesgos y velando después por su cumplimiento efectivo.',
      ],
      eu: [
        '**Puntako profesionalak, maila bereko baldintzak**',
        'Gure ustez, garrantzitsua da zentruak ahalegina eta talentua aintzat hartzea eta hori eraginkortasunez garatzeko baldintza egokiak eta beharrezko bitartekoak eskaintzea. Bloke hau Vicomtecheko langileek beren lana egiteko baldintzei buruzko hobekuntzetan zentratzen da.',
        '**1. Lan-denboraren balorazioa: bidaiak eta dietak**',
        'Bidaiatzen duenean plantillaren konpromisoa behar bezala aitortu eta konpentsatu behar dela uste dugu.',
        'Bidaia-politika eta denboraren kudeaketa: Lan-ordutegitik kanpoko joan-etorrietan emandako denbora arautzea proposatzen dugu, justuki konpentsatu dadin, atseden-denbora errespetatuz. Horretarako, atal hau gure inguruko beste zentro batzuek nola tratatzen duten aztertuko dugu, egungo eredua aztertuko dugu eta aldaketak eta hobekuntzak proposatuko ditugu lan-bidaiek eragiten dieten Vicomtecheko langileentzat.',
        'Dieten eguneratzea: 7 urtez aldaketarik izan gabe egon ondoren, zenbatekoak berrikustea proposatzen dugu, gaur egungo merkatuko prezioen errealitatera egokitzeko, ostatuaren eta mantenuaren kostuak duintasunez estaliko dituztela ziurtatuz.',
        '**2. Langileen eskura dauden portatilak edo mahai gainak erabiltzea**',
        'Gaur egun, profil ez-seniorrek (< G2) ez dute eramangarri pertsonal korporatiborik, eta horrek esan nahi du bilera-geletan eta saileko eramangarrietan eskuragarri daudenen mende daudela, eta kasu batzuetan erakutsi dute ez direla nahikoak. Horrez gain, bezeroa astero lekualdatu behar duten profesionalen profil batzuk daude, eta horrek, batzuetan, aparteko ekipo bat erostea dakar, proiektuaren aurrekontuarekin. Gure ustez, eraginkorragoa izango litzateke kasu horietarako lan-estazio gisa eramangarriak erabiltzeko askatasuna uztea; gainera, aipatutako kasuetarako, kostuak murriztuko lirateke (ekipo bat, bi beharrean), bai eta kanpo-bileretarako eramangarriak prestatzen inbertitutako lan-orduak ere.',
        '**3. Lan-ongizatea eta burnouten prebentzioa**',
        'Langileen ongizate emozionala zaintzea ezinbesteko faktorea da lan-ingurunean saturazio mentala edo burnouta prebenitzeko, batez ere lan-gailur luzeak, etenaldi iraunkorrak eta errekuperazio-espaziorik eza dituzten egoeretan.',
        'Kontzentraziorako eta indarberritzeko espazio egokiak: Lan-eremu isilak, estimulu gutxikoak eta etenik gabekoak bermatzea. Langile orok bere burua kontzentratzeko edo \'burnout\' egoeretan indarrak berritzeko erabili ahal izango dituen guneak, hain zuzen ere.',
        'Kargaren aldizkako berrikuspena: DARekin eta arduradunekin batera, lan-kargaren eta ekipoen eta proiektuen gaitasunaren berrikuspen errazak ezartzea, gailurrak eta desorekak garaiz detektatzeko.',
        'Arrisku Psikosozialen Protokoloaren inplementazioa eta jarraipena: Horrelako kasuistiketarako, legeak Arrisku Psikosozialen Protokoloa ezartzen du. Protokolo hori idazten lagunduko dugu, fokua mota horretako arriskuen prebentzioan eta detekzioan jarriz eta, ondoren, protokolo hori benetan betetzen dela zainduz.',
      ],
      en: [
        '**Cutting-edge professionals, conditions to match**',
        'We believe it is important for the centre to recognise effort and talent and provide the right conditions and necessary means to develop them effectively. This block focuses on improvements relating to the conditions in which Vicomtech employees carry out their work.',
        '**1. Assessment of working time: Travel and allowances**',
        'We believe that the commitment of staff when travelling should be recognised and adequately compensated.',
        'Travel and Time Management Policy: We propose regulating the time spent travelling outside working hours so that it is fairly compensated, respecting rest time. To this end, we will analyse how other centres in our environment deal with this issue, analyse the current model and propose changes and improvements for Vicomtech staff affected by work travel.',
        'Update of allowances: After seven years without change, we propose a review of the amounts to bring them into line with current market prices, ensuring that they adequately cover accommodation and subsistence costs.',
        '**2. Use of laptops or desktops available to employees**',
        'Currently, non-senior profiles (<G2) do not have personal corporate laptops, which means they have to rely on those available in meeting rooms and department laptops, which in some cases have proven to be insufficient. In addition, there are certain professional profiles that have to travel to clients on a weekly basis, and this sometimes involves the purchase of separate equipment, using the project budget. We believe it would be more efficient to allow laptops to be used as workstations in these cases. Furthermore, in the cases mentioned above, this would reduce costs (one piece of equipment instead of two) and the number of hours spent preparing laptops for external meetings.',
        '**3. Workplace Well-being and Burnout Prevention**',
        'Caring for the emotional well-being of staff is essential to prevent mental overload or burnout in the workplace, especially in situations with prolonged peaks of work, constant interruptions and a lack of recovery time.',
        'Adequate spaces for concentration and recovery: Ensure that there are quiet work areas, with reduced stimuli and no interruptions, where any employee can go to concentrate or recharge their energy in moments of burnout.',
        'Periodic workload review: Establish, together with DARes and managers, simple reviews of workload and capacity in different teams and projects to detect peaks and imbalances in time.',
        'Implementation and monitoring of the Psychosocial Risk Protocol: For this type of case, the law establishes a Psychosocial Risk Protocol. We will collaborate in drafting this protocol, focusing on the prevention and detection of these types of risks and ensuring its effective compliance.',
      ],
    },
  },
  {
    title: {
      es: 'Bloque 4: Flexibilidad y Conciliación',
      eu: 'Malgutasuna, Bateragarritasuna atala',
      en: 'Block 4: Flexibility, Work-Life Balance',
    },
    content: {
      es: [
        '**Hacia un entorno de trabajo que respete la vida personal**',
        'Para que Vicomtech siga siendo un centro de referencia, debemos ofrecer un entorno capaz de atraer y fidelizar a los mejores profesionales. La flexibilidad no es solo un derecho, es una ventaja competitiva que mejora el bienestar y la productividad.',
        '**1. El Teletrabajo como motor de bienestar y competitividad**',
        'El objetivo es avanzar hacia un modelo con mayor presencia del trabajo en remoto para mejorar la conciliación y facilitar la captación de talento, especialmente en un sector tan dinámico como el nuestro.',
        'Ampliación a 6 días sin coste para el centro: Proponemos ampliar de 4 a 6 los días de teletrabajo mensuales. Es una medida de fácil implementación y coste cero para Vicomtech, ya que se mantiene dentro del margen legal del 30% (Ley 10/2021), evitando cargas adicionales mientras se mejora sustancialmente la calidad de vida de la plantilla. Nos alinearía con las prácticas de otros centros de nuestro entorno que ya aplican con éxito esta flexibilidad.',
        '**2. Flexibilidad Vacacional y Días Libres**',
        'Valoramos positivamente la adopción del tercer day off este año, lo cual ha supuesto una mejora real en nuestro descanso. Consideramos que es el camino correcto y proponemos seguir profundizando en esta línea de autonomía:',
        '"Liberar" el Martes de Pascua: Este festivo es tradicional en Vicomtech debido al Artículo 35 del Convenio colectivo que establece que hay seis días de descanso en Semana Santa. Sin embargo, ese mismo artículo contempla la posibilidad de modificación de estas condiciones mediante el acuerdo con los representantes legales de los trabajadores. Planteamos sustituir este festivo fijo por un día de vacaciones adicional de libre elección. Creemos que es un excelente ejemplo de cómo dotar a los profesionales de mayor flexibilidad para organizar su tiempo personal según sus necesidades, sin que ello afecte a la jornada anual pactada.',
        'Periodos de Descanso equiparables a las vacaciones para estudiantes multianuales: Una de las figuras que existe en Vicomtech es la del estudiante convenido con EAFIT u otras universidades que nos acompaña durante su proceso doctoral durante varios años. Estos estudiantes tienen una situación complicada, ya que perciben una beca que apenas cubren los gastos de manutención y vivienda en Donostia. Adicionalmente, no tienen derecho a vacaciones, al no disponer de contrato laboral y cuando reclaman un periodo de descanso se les sugiere que se tomen un "permiso no retribuido". Creemos que deberían tener derecho a periodos de descanso equiparables a la vacaciones laborales, ya que objetivamente tienen unas condiciones difíciles, a miles de kilómetros de sus casas y empujarles a "suspender" su retribución para obtener este periodo de descanso no creemos que sea adecuado.',
        '**3. Equidad en la Maternidad y Paternidad**',
        'Apostamos por que el ejercicio de los derechos de cuidados sea un proceso natural y transparente, sin que impacte en la trayectoria profesional.',
        'Criterios de Evaluación Homogéneos: Proponemos que los permisos retribuidos se traten con los mismos criterios que las bajas en la evaluación 360, garantizando una ponderación justa. Asimismo, vemos necesario establecer pautas claras de flexibilidad horaria para la reincorporación, facilitando una transición equilibrada para todas las partes.',
        '**4. Derecho a la Desconexión Digital Real**',
        'Es fundamental que la línea entre vida laboral y personal no se desdibuje.',
        'Protocolo de Desconexión: Apostamos por un acuerdo que garantice el derecho a no responder comunicaciones (emails, Teams) fuera del horario laboral, fines de semana o vacaciones.',
        'Cultura de Reuniones Eficientes: Establecer franjas horarias "libres de reuniones" para fomentar el trabajo de concentración y reducir la fatiga digital.',
      ],
      eu: [
        '**Bizitza pertsonala errespetatuko duen lan-ingurune baterantz**',
        'Vicomtech erreferentziazko zentroa izaten jarraitzeko, profesional onenak erakartzeko eta fidelizatzeko gai den ingurunea eskaini behar dugu. Malgutasuna ez da eskubide bat soilik, ongizatea eta produktibitatea hobetzen dituen lehiarako abantaila bat da.',
        '**1. Telelana ongizatearen eta lehiakortasunaren eragile**',
        'Helburua urruneko lanaren presentzia handiagoa duen eredu baterantz aurrera egitea da, kontziliazioa hobetzeko eta talentua erakartzea errazteko, batez ere gurea bezalako sektore dinamiko batean.',
        'Zentroarentzat kosturik gabeko 6 egun luzatzea: Telelaneko hileko egunak 4tik 6ra luzatzea proposatzen dugu. Inplementazio errazeko eta zero kostuko neurria da Vicomtechentzat, % 30eko lege-marjinaren barruan mantentzen baita (10/2021 Legea), karga gehigarriak saihestuz plantillaren bizi-kalitatea nabarmen hobetzen den bitartean. Malgutasun hori dagoeneko arrakastaz aplikatzen duten gure inguruko beste zentru batzuetako praktikekin bat egingo genuke.',
        '**2. Oporren malgutasuna eta egun libreak**',
        'Positiboki baloratzen dugu aurten hirugarren day off-a hartu izana, eta horrek benetako hobekuntza ekarri du gure atsedenaldian. Bide zuzena dela uste dugu, eta autonomiaren ildo horretan sakontzen jarraitzea proposatzen dugu:',
        'Pazko asteartea "askatu": jaiegun hau tradizionala da Vicomtechen, Aste Santuan sei atseden-egun daudela ezartzen duen Hitzarmen Kolektiboaren 35. artikulua dela eta. Hala ere, artikulu horrek berak baldintza horiek aldatzeko aukera jasotzen du, langileen legezko ordezkariekin adostuta. Jaiegun finko horren ordez, aukera askeko opor-egun gehigarri bat hartzea proposatzen dugu. Gure ustez, adibide bikaina da profesionalei malgutasun handiagoa emateko beren denbora pertsonala beren beharren arabera antolatzeko, hitzartutako urteko lanaldian eraginik izan gabe.',
        'Atseden-aldiak, urte anitzeko ikasleentzako oporrekin pareka daitezkeenak: Vicomtechen dagoen figuretako bat EAFITrekin edo beste unibertsitate batzuekin hitzartutako ikaslearena da, hainbat urtez gurekin egon dena doktoretza-prozesuan zehar. Ikasle horiek egoera zaila dute, Donostiako mantenu- eta etxebizitza-gastuak ia estaltzen ez dituen beka bat jasotzen baitute. Horrez gain, ez dute oporretarako eskubiderik, lan-kontraturik ez dutelako, eta atsedenaldi bat eskatzen dutenean, "ordaindu gabeko baimena" hartzeko iradokitzen zaie. Gure ustez, lan-oporren pareko atsedenaldietarako eskubidea izan beharko lukete, objektiboki baldintza zailak dituztelako, etxetik milaka kilometrotara, eta atsedenaldi hori lortzeko ordainsaria "etetera" bultzatu beharko lituzketelako, ez dugu uste egokia denik.',
        '**3. Ekitatea amatasunean eta aitatasunean**',
        'Zainketa-eskubideak gauzatzea prozesu naturala eta gardena izatearen aldeko apustua egiten dugu, ibilbide profesionalean eraginik izan gabe.',
        'Ebaluazio Irizpide Homogeneoak: Baimen ordainduak 360 ebaluazioko bajen irizpide berberekin tratatzea proposatzen dugu, bidezko haztapena bermatuz. Era berean, beharrezkoa ikusten dugu ordutegi-malgutasuneko jarraibide argiak ezartzea lanera itzultzeko, alde guztientzako trantsizio orekatua erraztuz.',
        '**4. Benetako deskonexio digitalerako eskubidea**',
        'Telelana handitzearekin batera, funtsezkoa da lan-bizitzaren eta bizitza pertsonalaren arteko lerroa ez desitxuratzea.',
        'Deskonexio protokoloa: Lan ordutegitik kanpo, asteburuetan edo oporretan komunikazioak (email-ak, Teams) ez erantzuteko eskubidea bermatuko duen akordio baten aldeko apustua egiten dugu.',
        'Bilera Eraginkorren Kultura: Kontzentrazio-lana sustatzeko eta neke digitala murrizteko "bilerarik gabeko" ordu-tarteak ezartzea.',
      ],
      en: [
        '**Towards a working environment that respects personal life**',
        'For Vicomtech to remain a centre of excellence, we must offer an environment capable of attracting and retaining the best professionals. Flexibility is not only a right, it is a competitive advantage that improves well-being and productivity.',
        '**1. Teleworking as a driver of wellbeing and competitiveness**',
        'The aim is to move towards a model with a greater presence of remote working to improve work-life balance and facilitate the recruitment of talent, especially in a sector as dynamic as ours.',
        'Extension to 6 days at no cost to the centre: We propose extending the number of teleworking days per month from 4 to 6. This measure is easy to implement and costs Vicomtech nothing, as it remains within the legal limit of 30% (Law 10/2021), avoiding additional costs while substantially improving the quality of life of the workforce. It would bring us into line with the practices of other centres in our environment that already successfully apply this flexibility.',
        '**2. Holiday flexibility and days off**',
        'We welcome the adoption of the third day off this year, which has led to a real improvement in our rest time. We believe this is the right path to take and propose to continue along this line of autonomy:',
        '\'Freeing up\' Easter Tuesday: This holiday is traditional at Vicomtech due to Article 35 of the Collective Agreement, which establishes that there are six days off during Holy Week. However, the same article provides for the possibility of modifying these conditions by agreement with the workers\' legal representatives. We propose replacing this fixed holiday with an additional day of holiday of our choice. We believe this is an excellent example of how to give professionals greater flexibility to organise their personal time according to their needs, without affecting the agreed annual working hours.',
        'Rest periods comparable to holidays for multi-year students: One of the figures that exists at Vicomtech is that of the student affiliated with EAFIT or other universities who accompanies us during their doctoral process for several years. These students are in a complicated situation, as they receive a scholarship that barely covers their living and housing expenses in Donostia. In addition, they are not entitled to holidays, as they do not have an employment contract, and when they request a period of rest, they are advised to take \'unpaid leave\'. We believe that they should be entitled to periods of rest comparable to employment holidays, as they objectively have difficult conditions, thousands of kilometres from their homes, and we do not believe it is appropriate to push them to \'suspend\' their remuneration in order to obtain this period of rest.',
        '**3. Equity in Maternity and Paternity**',
        'We are committed to ensuring that the exercise of care rights is a natural and transparent process, without impacting on career progression.',
        'Uniform Evaluation Criteria: We propose that paid leave be treated with the same criteria as sick leave in the 360 evaluation, ensuring fair weighting. We also believe it is necessary to establish clear guidelines for flexible working hours for returning to work, facilitating a balanced transition for all parties.',
        '**4. Right to Real Digital Disconnection**',
        'It is essential that the line between work and personal life is not blurred.',
        'Disconnection Protocol: We are committed to an agreement that guarantees the right not to respond to communications (emails, Teams) outside working hours, weekends or holidays.',
        'Culture of Efficient Meetings: Establish \'meeting-free\' time slots to encourage concentration and reduce digital fatigue.',
      ],
    },
  },
];

const renderMarkdownBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const pdfUrls: Record<string, string> = {
  es: '/programa_es.pdf',
  eu: '/programa_eu.pdf',
  en: '/programa_en.pdf',
};

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ProgramSection = () => {
  const { lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <section id="program" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title text-foreground">{texts.title[lang]}</h2>
        <div className="section-divider mt-3 mb-4" />
        <p className="text-xl font-semibold text-primary mb-8 italic" style={{ fontFamily: 'var(--font-heading)' }}>
          {texts.subtitle[lang]}
        </p>

        <div className="space-y-5">
          {previewContent[lang].map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        {expanded && (
          <div className="mt-10 space-y-10 animate-in fade-in duration-500">
            {fullProgram.map((block, bi) => (
              <div key={bi}>
                {block.title[lang] && (
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {block.title[lang]}
                  </h3>
                )}
                <div className="space-y-4 pl-0 md:pl-2">
                  {block.content[lang].map((p, pi) => (
                    <p key={pi} className="text-base leading-relaxed text-foreground/85">
                      {renderMarkdownBold(p)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 flex items-center gap-2 mx-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
        >
          {expanded ? texts.readLess[lang] : texts.readMore[lang]}
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {/* Share section */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Share2 size={18} />
            <span className="font-semibold text-sm uppercase tracking-wider">{texts.shareTitle[lang]}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(window.location.origin + pdfUrls[lang])}&text=${encodeURIComponent(texts.shareTitle[lang])}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted hover:bg-muted/70 text-foreground font-medium text-sm transition-colors"
            >
              <TelegramIcon className="shrink-0" />
              {texts.shareTelegram[lang]}
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(texts.shareTitle[lang] + ' ' + window.location.origin + pdfUrls[lang])}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted hover:bg-muted/70 text-foreground font-medium text-sm transition-colors"
            >
              <WhatsAppIcon className="shrink-0" />
              {texts.shareWhatsapp[lang]}
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin + pdfUrls[lang]);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted hover:bg-muted/70 text-foreground font-medium text-sm transition-colors"
            >
              {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
              {copied ? texts.copied[lang] : texts.copyLink[lang]}
            </button>
          </div>
          <a
            href={pdfUrls[lang]}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            {texts.downloadPdf[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
