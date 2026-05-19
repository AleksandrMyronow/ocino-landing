export interface Company {
    id: 'gvctrend' | 'apex' | 'k7';
    name: string;
    legalName: string;
    edrpou: string;
    address: string;
    phone: string;
    phoneRaw: string;
    email: string;
    director: string;
    workHours: string;
    logo: string;
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
      legalName: 'Товариство з обмеженою відповідальністю "ГВК ТРЕНД"',
      edrpou: '45949042',
      address: 'Україна, 01033, м. Київ, вул. Володимирська, 89, прим. 108',
      phone: '+38 (050) 395-59-95',
      phoneRaw: '+380503955995',
      email: 'info@gvctrend.com',
      director: 'Миронов Володимир Миколайович',
      workHours: 'пн-пт 9:00-18:00, вихідні — за домовленістю',
      logo: '/logos/gvctrend.svg',
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
      legalName: 'Приватне Підприємство "Оціночна компанія "Апекс"',
      edrpou: '36183078',
      address: 'Україна, 79016, Львівська обл., м. Львів, вул. Озаркевича, 4',
      phone: '+38 (098) 273-11-39',
      phoneRaw: '+380982731139',
      email: 'info@apeks-ok.com',
      director: 'Братішко Ігор Григорович',
      workHours: 'пн-пт 9:00-18:00, вихідні — за домовленістю',
      logo: '/logos/apex.svg',
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
      legalName: 'Товариство з обмеженою відповідальністю "Консалтингова компанія К7"',
      edrpou: '45974000',
      address: 'Україна, 76018, Івано-Франківська обл., м. Івано-Франківськ, вул. Гординського С., 1',
      phone: '+38 (050) 433-10-54',
      phoneRaw: '+380504331054',
      email: 'konsaltk7@gmail.com',
      director: 'Балагурак Володимир Володимирович',
      workHours: 'пн-пт 9:00-18:00, вихідні — за домовленістю',
      logo: '/logos/k7.svg',
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
  export const activeCompany: Company = companies.gvctrend;