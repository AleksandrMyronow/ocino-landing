export interface Company {
    id: 'gvctrend' | 'apex' | 'k7';
    name: string;
    slogan: string;
    legalAddress: string;
    bank: string;
    iban: string;
    sodNumber: string;
    sodIssued: string;
    sodValidUntil: string;
    legalName: string;
    edrpou: string;
    address: string;
    phone: string;
    phoneRaw: string;
    email: string;
    director: string;
    logo: string;
    founded: string;
    yearsOnMarket: number;
    about: string;
    certifications: string[];
    workingHours: {
      weekdays: string;     
      weekends: string;     
    };
    colors: {
      primary: string;
      primaryDark: string;
      accent: string;
    };
    
    mapEmbed: string;
  }

  /**
 * Конфіг трьох оціночних компаній.
 * Для зміни активної компанії на сайті — внизу файлу змінити companies.gvctrend
 * на companies.apex або companies.k7
 */
export const companies: Record<string, Company> = {
    gvctrend: {
      id: 'gvctrend',
      name: 'ТОВ ГВК ТРЕНД',
      slogan: 'формуємо рішення',
      legalName: 'Товариство з обмеженою відповідальністю "ГВК ТРЕНД"',
      edrpou: '45949042',
      legalAddress: '01033, м. Київ, вул. Володимирська, буд. 89, приміщення 108',
      bank: 'АТ «УКРСИББАНК»',
      iban: 'UA883510050000026000879273324',
      sodNumber: '61/2026',
      sodIssued: '13.04.2026',
      sodValidUntil: '12.04.2029',
      phone: '+38 (050) 395-59-95',
      phoneRaw: '+380503955995',
      email: 'info@gvctrend.com',
      director: 'Миронов Володимир Миколайович',
      logo: '/logos/gvctrend.svg',
      founded: '2025',
      yearsOnMarket: 1,
      about: "Оціночна компанія «ГВК Тренд» надає професійні послуги з незалежної оцінки майна на території всієї України. Наша команда — це кваліфіковані оцінювачі, заслужені оцінювачі УТО та власники міжнародних сертифікатів Tegova і WAWO, що мають свідоцтва за всіма напрямками оцінки. Ми гарантуємо об'єктивність, точність та відповідність звітів вимогам законодавства.",
      certifications: [
       'Сертифікати Tegova REV (Recognised European Valuer)',
       'Сертифікати WAWO (WRV)',
       'Свідоцтва за всіма напрямками оцінки майна',
       'Експертна грошова оцінка земельних ділянок',
       'Участь у науково-практичних конференціях',
       'Публікації у науково-фахових виданнях',
      ],
      workingHours: {
        weekdays: 'Пн-Пт: 9:00 - 18:00',
        weekends: 'Сб-Нд: за домовленістю',
      },
      colors: {
        primary: '#0F4C81',
        primaryDark: '#093560',
        accent: '#F5A623',
      },
      mapEmbed: '',
    },
  
    apex: {
      id: 'apex',
      name: 'ПП ОК АПЕКС',
      slogan: 'висновки яким довіряють',
      legalName: 'Приватне Підприємство "Оціночна компанія "Апекс"',
      edrpou: '36183078',
      legalAddress: 'Україна, 79016, Львівська обл., м. Львів, вул. Озаркевича, 4',
      bank: 'АТ «ОЩАДБАНК»',
      iban: 'UA553257960000026005300360780',
      sodNumber: '23/2026',
      sodIssued: '10.02.2026',
      sodValidUntil: '09.02.2029',
      phone: '+38 (098) 273-11-39',
      phoneRaw: '+380982731139',
      email: 'info@apeks-ok.com',
      director: 'Братішко Ігор Григорович',
      logo: '/logos/apeks.svg',
      founded: '2008',
      yearsOnMarket: 17,
      about: "Оціночна компанія «Апекс» працює на ринку з 2008 року. За цей час ми накопичили багатий досвід оцінки майна найрізноманітніших типів — від окремих предметів до цілісних майнових комплексів. У складі компанії працюють заслужені оцінювачі Українського товариства оцінювачів (УТО), що володіють усіма необхідними кваліфікаціями та постійно підвищують професійний рівень.",
      certifications: [
       'Заслужені оцінювачі УТО у складі компанії',
       'Сертифікати Tegova REV (Recognised European Valuer)',
       'Свідоцтва за всіма напрямками оцінки майна',
       'Експертна грошова оцінка земельних ділянок',
       'Участь у науково-практичних конференціях',
       'Публікації у науково-фахових виданнях',
      ],
      workingHours: {
        weekdays: 'Пн-Пт: 9:00 - 18:00',
        weekends: 'Сб-Нд: за домовленістю',
      },
      colors: {
        primary: '#8B1A1A',
        primaryDark: '#5C0F0F',
        accent: '#D4A574',
      },
      mapEmbed: '',
    },
  
    k7: {
      id: 'k7',
      name: 'ТОВ Консалтингова компанія К7',
      slogan: 'Обґрунтовано. Незалежно. Точно.',
      legalName: 'Товариство з обмеженою відповідальністю "Консалтингова компанія К7"',
      edrpou: '45974000',
      legalAddress: '76018, Івано-Франківська обл., м. Івано-Франківськ, вул. Гординського С., буд. 1, кв. 7',
      bank: 'АТ КБ «ПРИВАТБАНК»',
      iban: 'UA423052990000026007001040311',
      sodNumber: '94/2026',
      sodIssued: '05.06.2026',
      sodValidUntil: '04.06.2029',
      phone: '+38 (050) 433-10-54',
      phoneRaw: '+380504331054',
      email: 'konsaltk7@gmail.com',
      director: 'Балагурак Володимир Володимирович',
      logo: '/logos/k7.svg',
      founded: '2025',
      yearsOnMarket: 1,
      about: "ТОВ «Консалтингова компанія К7» надає професійні послуги з незалежної оцінки майна на території всієї України. Наша команда — це кваліфіковані оцінювачі, заслужені оцінювачі УТО та власники міжнародних сертифікатів Tegova і WAWO, що мають свідоцтва за всіма напрямками оцінки. Ми гарантуємо об'єктивність, точність та відповідність звітів вимогам законодавства.",
      certifications: [
       'Сертифікати Tegova REV (Recognised European Valuer)',
       'Свідоцтва за всіма напрямками оцінки майна',
       'Експертна грошова оцінка земельних ділянок',
       'Участь у науково-практичних конференціях',
       'Публікації у науково-фахових виданнях',
      ],
      workingHours: {
        weekdays: 'Пн-Пт: 9:00 - 18:00',
        weekends: 'Сб-Нд: за домовленістю',
      },
      colors: {
        primary: '#1B5E3F',
        primaryDark: '#0F3D27',
        accent: '#C9A961',
      },
      mapEmbed: '',
    },
  };
  
  /**
   * АКТИВНА КОМПАНІЯ — це "тумблер" сайту.
   * Поміняй на companies.apex або companies.k7 щоб згенерувати сайт для іншої компанії.
   */
  export const activeCompany: Company = companies.apex;