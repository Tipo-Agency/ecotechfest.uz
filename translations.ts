
export type Language = 'ru' | 'uz' | 'en';

export const translations = {
  ru: {
    nav: { home: 'Главная', nominations: 'Номинации', stages: 'Этапы', prizes: 'Призы', apply: 'Участие', btn: 'Подать заявку', lang_select: 'Язык' },
    hero: { 
      badge: 'Turin Startup Accelerator представляет', 
      title1: 'Будущее, в котором', 
      title2: 'хочется жить', 
      desc: 'Конкурс инноваций ECOTECH 2026. Разрабатывай архитектурные и технологические решения, которые изменят мир к лучшему.', 
      cta1: 'Участвовать', 
      cta2: 'Номинации',
      step1: 'Идея', step1_sub: 'Концепция будущего',
      step2: 'Технология', step2_sub: 'Инженерное решение',
      step3: 'Жизнь', step3_sub: 'Устойчивая среда'
    },
    partners: {
      tsa_title: 'Turin Startup Accelerator (TSA)',
      tsa_desc: 'Акселератор при Turin Polytechnic University in Tashkent, направленный на развитие инженерных, технологических и экологических стартапов.',
      support: 'При поддержке',
      ttpu: 'Turin Polytechnic University in Tashkent',
      seda: 'Socio-Economic Development Association',
      organizer: 'Организатор'
    },
    participants: {
      title: 'Кто может участвовать?',
      desc: 'К участию приглашаются все студенты TTPU, независимо от факультета и курса обучения.',
      individual: 'Индивидуально',
      team: 'Команда до 3 человек',
      format: 'Формат участия'
    },
    nominations: { 
      label: 'Направления', 
      title: 'Выбери свою номинацию', 
      n1: 'Архитектура автономного дома', 
      n1_desc: 'Энергоэффективные дома будущего: купольные, модульные, мобильные и плавающие концепции.', 
      n2: 'Экологический город будущего', 
      n2_desc: 'Градостроительные концепции, основанные на устойчивом развитии и умной инфраструктуре.', 
      n3: 'Зелёные технологии', 
      n3_desc: 'Технологические решения, повышающие комфорт и экологичность повседневной жизни.', 
      criteria: 'Критерии оценки',
      c_autonomy: 'Автономность', c_energy: 'Энергия', c_originality: 'Оригинальность', c_visual: 'Визуал',
      c_concept: 'Концепция', c_ecology: 'Экология', c_transport: 'Транспорт', c_innovation: 'Инновации',
      c_practice: 'Практика', c_novelty: 'Новизна', c_benefit: 'Польза', c_tech: 'Технологии'
    },
    jury: {
      title: 'Жюри конкурса',
      member1: 'Представители Turin Startup Accelerator',
      member2: 'Преподаватели и эксперты TTPU',
      member3: 'Специалисты SEDA и приглашённые эксперты',
      eval_title: 'Система оценки',
      eval_desc: 'Каждый проект оценивается по 5-балльной шкале по 5 критериям. Максимальный балл — 25.',
      crit1: 'Оригинальность и креативность',
      crit2: 'Техническая обоснованность',
      crit3: 'Эстетика и оформление',
      crit4: 'Практическая применимость',
      crit5: 'Экологическая значимость'
    },
    timeline: { 
      label: 'Дорожная карта', 
      title: 'Этапы проведения', 
      s1: 'Старт конкурса', s1_desc: 'Объявление начала приёма заявок на всех ресурсах TTPU и TSA.', 
      s2: 'Приём заявок', s2_desc: 'Сбор конкурсных материалов: описания, рендеры, 3D-модели.', 
      s3: 'Экспертная оценка', s3_desc: 'Работа жюри и отбор лучших проектов для финальной защиты.', 
      s4: 'Финальная презентация', s4_desc: 'Очная защита проектов в стенах университета TTPU.', 
      s5: 'Награждение', s5_desc: 'Объявление победителей и торжественное вручение главных призов.',
      steps_count: '5 ключевых этапов'
    },
    prizes: { label: 'Главная награда', title: 'iPhone 17', subtitle: 'каждому победителю', desc: 'В каждой номинации будет определён лучший проект. Победители получат новейшие смартфоны и возможность реализовать свои идеи в TSA.', feature1: 'Новейшее устройство', feature2: 'Статус резидента TSA' },
    apply: { 
      label: 'Участие', 
      title: 'Как подать заявку?', 
      subtitle: 'Следуйте трем простым шагам для подачи проекта',
      step1: 'Подготовь проект', 
      step2: 'Отправь на e-mail', 
      step3: 'Дождись ответа', 
      step3_desc: 'Жюри приступит к оценке проектов сразу после дедлайна. Победители будут приглашены на очную защиту в TTPU.',
      email_note: 'Укажи в теме письма номинацию:', 
      deadline: 'Приём до 20 февраля 2026', 
      btn: 'Отправить работу',
      footer_note: 'Нажмите, чтобы создать письмо в приложении',
      docs: {
        desc: 'Описание идеи (до 1 стр.)',
        visuals: 'Рендеры, 3D, макеты, видео',
        contacts: 'ФИО, факультет, курс, телефон',
        pdf: 'Презентация в PDF (опционально)'
      }
    },
    footer: {
      desc: 'Главное инновационное событие TTPU. Разрабатываем решения для будущего, в котором действительно хочется жить.',
      nav_label: 'Навигация',
      contact_label: 'Контакты',
      org_label: 'Организаторы',
      rights: '© 2026 ECOTECH FEST. ВСЕ ПРАВА ЗАЩИЩЕНЫ TSA.',
      role_org: 'Организатор',
      role_uni: 'Университет',
      dev_by: 'Разработано в'
    }
  },
  en: {
    nav: { home: 'Home', nominations: 'Nominations', stages: 'Stages', prizes: 'Prizes', apply: 'Apply', btn: 'Apply Now', lang_select: 'Language' },
    hero: { 
      badge: 'Turin Startup Accelerator presents', 
      title1: 'A Future Where', 
      title2: 'You Want to Live', 
      desc: 'ECOTECH 2026 innovation contest. Develop architectural and technological solutions that will change the world for the better.', 
      cta1: 'Participate', 
      cta2: 'Nominations',
      step1: 'Idea', step1_sub: 'Future Concept',
      step2: 'Tech', step2_sub: 'Engineering Solution',
      step3: 'Life', step3_sub: 'Sustainable Environment'
    },
    partners: {
      tsa_title: 'Turin Startup Accelerator (TSA)',
      tsa_desc: 'An accelerator at Turin Polytechnic University in Tashkent, focusing on engineering, technology, and eco-startups.',
      support: 'Supported by',
      ttpu: 'Turin Polytechnic University in Tashkent',
      seda: 'Socio-Economic Development Association',
      organizer: 'Organizer'
    },
    participants: {
      title: 'Who Can Participate?',
      desc: 'All TTPU students are invited, regardless of faculty or year of study.',
      individual: 'Individually',
      team: 'Team up to 3 people',
      format: 'Participation Format'
    },
    nominations: { 
      label: 'Directions', 
      title: 'Choose Your Nomination', 
      n1: 'Autonomous House Architecture', 
      n1_desc: 'Energy-efficient houses of the future: dome, modular, mobile and floating concepts.', 
      n2: 'Eco City of the Future', 
      n2_desc: 'Urban planning concepts based on sustainable development and smart infrastructure.', 
      n3: 'Green Technologies', 
      n3_desc: 'Technological solutions that improve comfort and environmental friendliness of daily life.', 
      criteria: 'Evaluation Criteria',
      c_autonomy: 'Autonomy', c_energy: 'Energy', c_originality: 'Originality', c_visual: 'Visual',
      c_concept: 'Concept', c_ecology: 'Ecology', c_transport: 'Transport', c_innovation: 'Innovation',
      c_practice: 'Practice', c_novelty: 'Novelty', c_benefit: 'Benefit', c_tech: 'Tech'
    },
    jury: {
      title: 'Contest Jury',
      member1: 'Turin Startup Accelerator representatives',
      member2: 'TTPU professors and experts',
      member3: 'SEDA specialists and guest experts',
      eval_title: 'Evaluation System',
      eval_desc: 'Each project is rated on a 5-point scale across 5 criteria. Maximum score is 25.',
      crit1: 'Originality and Creativity',
      crit2: 'Technical Feasibility',
      crit3: 'Aesthetics and Design',
      crit4: 'Practical Applicability',
      crit5: 'Environmental Significance'
    },
    timeline: { 
      label: 'Roadmap', 
      title: 'Contest Stages', 
      s1: 'Contest Launch', s1_desc: 'Announcement of the start of application acceptance on all TTPU and TSA resources.', 
      s2: 'Application Period', s2_desc: 'Collection of contest materials: descriptions, renders, 3D models.', 
      s3: 'Expert Evaluation', s3_desc: 'Jury work and selection of the best projects for final defense.', 
      s4: 'Final Presentation', s4_desc: 'In-person project defense at TTPU university.', 
      s5: 'Award Ceremony', s5_desc: 'Announcement of winners and ceremonial presentation of main prizes.',
      steps_count: '5 key stages'
    },
    prizes: { label: 'Grand Prize', title: 'iPhone 17', subtitle: 'for Each Winner', desc: 'The best project will be determined in each nomination. Winners will receive the latest smartphones and the opportunity to realize ideas in TSA.', feature1: 'Latest Device', feature2: 'TSA Resident Status' },
    apply: { 
      label: 'Participation', 
      title: 'How to Apply?', 
      subtitle: 'Follow three simple steps to submit your project',
      step1: 'Prepare Project', 
      step2: 'Send via E-mail', 
      step3: 'Wait for Response', 
      step3_desc: 'The jury will start evaluating projects immediately after the deadline. Winners will be invited to the final defense at TTPU.',
      email_note: 'Specify nomination in subject:', 
      deadline: 'Accepting until Feb 20, 2026', 
      btn: 'Submit Work',
      footer_note: 'Click to create email in your app',
      docs: {
        desc: 'Idea description (up to 1 pg.)',
        visuals: 'Renders, 3D, layouts, video',
        contacts: 'Name, faculty, year, phone',
        pdf: 'PDF Presentation (optional)'
      }
    },
    footer: {
      desc: 'The main innovation event of TTPU. Developing solutions for a future where you really want to live.',
      nav_label: 'Navigation',
      contact_label: 'Contacts',
      org_label: 'Organizers',
      rights: '© 2026 ECOTECH FEST. ALL RIGHTS RESERVED BY TSA.',
      role_org: 'Organizer',
      role_uni: 'University',
      dev_by: 'Developed in'
    }
  },
  uz: {
    nav: { home: 'Asosiy', nominations: 'Nominatsiyalar', stages: 'Bosqichlar', prizes: 'Sovrinlar', apply: 'Ishtirok', btn: 'Ariza topshirish', lang_select: 'Til' },
    hero: { 
      badge: 'Turin Startup Accelerator taqdim etadi', 
      title1: 'Yashashni xohlaydigan', 
      title2: 'kelajak', 
      desc: 'ECOTECH 2026 innovatsiyalar tanlovi. Dunyoni yaxshi tomonga oʻzgartiradigan arxitektura va texnologik yechimlarni ishlab chiqing.', 
      cta1: 'Ishtirok etish', 
      cta2: 'Nominatsiyalar',
      step1: 'Gʻoya', step1_sub: 'Kelajak konsepsiyasi',
      step2: 'Texnologiya', step2_sub: 'Muhandislik yechimi',
      step3: 'Hayot', step3_sub: 'Barqaror muhit'
    },
    partners: {
      tsa_title: 'Turin Startup Accelerator (TSA)',
      tsa_desc: 'Toshkent shahridagi Turin politexnika universiteti huzuridagi muhandislik, texnologiya va eko-startaplarni rivojlantirishga yoʻnalitirilgan akselerator.',
      support: 'Qoʻllab-quvvatlash',
      ttpu: 'Toshkent shahridagi Turin politexnika universiteti',
      seda: 'Ijtimoiy-iqtisodiy rivojlanish assotsiatsiyasi (SEDA)',
      organizer: 'Tashkilotchi'
    },
    participants: {
      title: 'Kimlar ishtirok etishi mumkin?',
      desc: 'Fakultet va kursdan qatʼi nazar, barcha TTPU talabalari ishtirok etishga taklif qilinadi.',
      individual: 'Yakkaxon',
      team: '3 kishigacha boʻlgan jamoa',
      format: 'Ishtirok etish shakli'
    },
    nominations: { 
      label: 'Yoʻnalishlar', 
      title: 'Nominatsiyangizni tanlang', 
      n1: 'Muxtor uy arxitekturasi', 
      n1_desc: 'Kelajakdagi energiya tejamkor uylar: gumbazli, modulli, mobil va suzuvchi konsepsiyalar.', 
      n2: 'Kelajakdagi ekologik shahar', 
      n2_desc: 'Barqaror rivojlanish va aqlli infratuzilmaga asoslangan shaharsozlik konsepsiyalari.', 
      n3: 'Yashil texnologiyalar', 
      n3_desc: 'Kundalik hayotning qulayligi va ekologik tozaligini oshiradigan texnologik yechimlar.', 
      criteria: 'Baholash mezonlari',
      c_autonomy: 'Muxtorlik', c_energy: 'Energiya', c_originality: 'O\'ziga xoslik', c_visual: 'Vizual',
      c_concept: 'Konsepsiya', c_ecology: 'Ekologiya', c_transport: 'Transport', c_innovation: 'Innovatsiyalar',
      c_practice: 'Amaliyot', c_novelty: 'Yangilik', c_benefit: 'Foyda', c_tech: 'Texnologiyalar'
    },
    jury: {
      title: 'Tanlov hakamlar hayʼati',
      member1: 'Turin Startup Accelerator vakillari',
      member2: 'TTPU oʻqituvchilari va экспертлари',
      member3: 'SEDA mutaxassislari va taklif etilgan экспертлар',
      eval_title: 'Baholash tizimi',
      eval_desc: 'Har bir loyiha 5 ta mezon boʻyicha 5 ballik tizimda baholanadi. Maksimal ball — 25.',
      crit1: 'Oʻziga xoslik va ijodkorlik',
      crit2: 'Texnik asoslanganlik',
      crit3: 'Estetika va dizayn',
      crit4: 'Amaliy qoʻllanilishi',
      crit5: 'Ekologik ahamiyati'
    },
    timeline: { 
      label: 'Yoʻl xaritasi', 
      title: 'Oʻtkazilish bosqichlari', 
      s1: 'Tanlov boshlanishi', s1_desc: 'Barcha TTPU va TSA resurslarida arizalar qabul qilinishi eʼlon qilinishi.', 
      s2: 'Arizalar qabuli', s2_desc: 'Tanlov materiallarini yigʻish: tavsiflar, renderlar, 3D modellar.', 
      s3: 'Ekspert baholashi', s3_desc: 'Hakamlar hayʼati ishi va yakuniy himoya uchun eng yaxshi loyihalarni tanlash.', 
      s4: 'Yakuniy taqdimot', s4_desc: 'TTPU universiteti binosida loyihalarning yuzma-yuz himoyasi.', 
      s5: 'Taqdirlash marosimi', s5_desc: 'Gʻoliblarni eʼlon qilish va asosiy sovrinlarni tantanali topshirish.',
      steps_count: '5 ta asosiy bosqich'
    },
    prizes: { label: 'Asosiy mukofot', title: 'iPhone 17', subtitle: 'har bir g\'olibga', desc: 'Har bir nominatsiyada eng yaxshi loyiha aniqlanadi. Gʻoliblar eng soʻnggi smartфонлар va TSA da gʻoyalarni amalga oshirish imkoniyatiga ega boʻladilar.', feature1: 'Eng soʻnggi qurilma', feature2: 'TSA rezidenti maqomi' },
    apply: { 
      label: 'Ishtirok etish', 
      title: 'Qanday ariza topshiriladi?', 
      subtitle: 'Loyihani topshirish uchun uchta oddiy qadamni bajаринг',
      step1: 'Loyihani tayyorlang', 
      step2: 'E-mail orqali yuboring', 
      step3: 'Javobni kuting', 
      step3_desc: 'Hakamlar hayʼati arizalar qabuli tugashi bilan loyihalarni baholashni boshlaydi. Gʻoliblar TTPUda yakuniy himoyaga taklif qilinadi.',
      email_note: 'Mavzuda nominatsiyani koʻrsating:', 
      deadline: '2026-yil 20-fevralgacha', 
      btn: 'Ishni yuborish',
      footer_note: 'Ilovada xat yaratish uchun bosing',
      docs: {
        desc: 'Gʻoya tavsifi (1 betgacha)',
        visuals: 'Renderlar, 3D, modellar, video',
        contacts: 'FIO, fakultet, kurs, telefon',
        pdf: 'PDF taqdimot (ixtiyoriy)'
      }
    },
    footer: {
      desc: 'TTPUning asosiy innovatsion tadbiri. Haqiqatan ham yashashni xohlayдigan kelajak uchun yechimlar ishlab chiqamiz.',
      nav_label: 'Navigatsiya',
      contact_label: 'Kontaktlar',
      org_label: 'Tashkilotchilar',
      rights: '© 2026 ECOTECH FEST. BARCHA HUQUQLAR TSA TOMONIDAN HIMOYA QILINGAN.',
      role_org: 'Tashkilotchi',
      role_uni: 'Universitet',
      dev_by: 'Tomonidan ishlab chiqilgan'
    }
  }
};
