/**
 * Contact — конфіг блоку контактів.
 * Більшість даних береться з activeCompany (адреса, телефон, email, графік).
 * Тут лише статичні елементи: списки полів форми, типи послуг для dropdown.
 */

export interface ServiceOption {
    value: string;
    label: string;
  }
  
  /** Опції для dropdown "Тип послуги" у формі */
  export const serviceOptions: ServiceOption[] = [
    { value: 'apartment', label: 'Оцінка квартири' },
    { value: 'house', label: 'Оцінка житлового будинку' },
    { value: 'commercial', label: 'Оцінка комерційної нерухомості' },
    { value: 'land', label: 'Оцінка земельної ділянки' },
    { value: 'vehicle', label: 'Оцінка транспорту' },
    { value: 'equipment', label: 'Оцінка машин та обладнання' },
    { value: 'business', label: 'Оцінка бізнесу / ЦМК / корпоративних прав' },
    { value: 'intangible', label: 'Оцінка нематеріальних активів' },
    { value: 'uav', label: 'Оцінка БПЛА' },
    { value: 'vessels', label: 'Оцінка повітряних / водних суден' },
    { value: 'war-damages', label: 'Оцінка збитків від військової агресії' },
    { value: 'review', label: 'Рецензування звітів' },
    { value: 'consultation', label: 'Письмова консультація' },
    { value: 'other', label: 'Інше' },
  ];
  
  /** Тексти блоку Contact */
  export const contactTexts = {
    sectionTitle: 'Контакти',
    sectionSubtitle: 'Зв\'яжіться з нами зручним способом — ми відповімо протягом робочого дня',
  
    contactsBlockTitle: 'Наші контакти',
    workingHoursTitle: 'Графік роботи',
    messengersTitle: 'Месенджери',
    addressTitle: 'Адреса офісу',
  
    formTitle: 'Залишіть заявку',
    formSubtitle: 'Заповніть форму — ми зв\'яжемося з вами для уточнення деталей',
  
    // Поля форми
    fieldNameLabel: 'Ваше ім\'я',
    fieldNamePlaceholder: 'Як до вас звертатися',
    fieldPhoneLabel: 'Телефон',
    fieldPhonePlaceholder: '+38 (___) ___-__-__',
    fieldEmailLabel: 'Email',
    fieldEmailPlaceholder: 'your@email.com',
    fieldServiceLabel: 'Тип послуги',
    fieldServicePlaceholder: 'Оберіть тип послуги',
    fieldMessageLabel: 'Повідомлення',
    fieldMessagePlaceholder: 'Опишіть коротко ваше питання — об\'єкт оцінки, мета, бажані терміни',
    consentText: 'Я погоджуюся з обробкою моїх персональних даних відповідно до Закону України "Про захист персональних даних"',
    submitButton: 'Надіслати заявку',
    
    // Тексти для месенджерів (підставляються у tel:/посилання)
    callButtonLabel: 'Зателефонувати',
    emailButtonLabel: 'Написати на email',
  };
  
  /** Конфіг месенджерів — порядок і назви */
  export const messengers = [
    {
      id: 'viber',
      label: 'Viber',
      icon: '💬',
      /** Формат посилання: viber://chat?number=+380XXXXXXXXX */
      hrefPrefix: 'viber://chat?number=',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      icon: '✈️',
      /** Формат посилання: https://t.me/+380XXXXXXXXX */
      hrefPrefix: 'https://t.me/',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: '📱',
      /** Формат посилання: https://wa.me/380XXXXXXXXX */
      hrefPrefix: 'https://wa.me/',
    },
  ];