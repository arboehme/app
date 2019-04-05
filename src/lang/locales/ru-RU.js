export const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }
};

export default {
  about_directus: "О Directus",
  activity: "Активность",
  my_activity: "Мои активности",
  activity_log: "Логи активности",
  activity_outside_directus: "Этот элемент был создан за пределами Directus.",
  admin_email: "Е-мейл Админа",
  admin_password: "Пароль Админа",
  additional_info: "Дополнительная Инфо.",
  add_new: "Создать",
  add_field_filter: "Добавить фильтр поля",
  add_note: "Добавить заметку для пользователей...",
  admin_settings: "Настройки Админа",
  almost_done_options:
    "Почти сделано! Теперь просто просмотрите параметры интерфейса ниже.",
  almost_done_copy:
    "Каждый интерфейс может быть идеально адаптирован к вашим потребностям. Ниже приведены доступные параметры для этого поля, но требуются только некоторые.",
  all: "Все",
  statuses: "Статусы",
  api_url: "API URL",
  api_installed: "API Успешно Установлен",
  auto_generate: "Авто-Генерация",
  auto_generated: "Автоматический сгенерировано...",
  batch: "Пакетное",
  batch_edit: "Пакетная редактирование элементов: {collection}",
  batch_delete: "Пакетное Удаление",
  batch_delete_confirm:
    "Никаких элементов не выбрано | Вы уверены, что хотите удалить этот элемент? Это действие не может быть отменено. | Вы уверены, что хотите удалить эти элементы {count}? Это действие не может быть отменено.",
  between: "Между",
  both: "Оба",
  bookmarks: "Закладки",
  cancel: "Отмена",
  change_project: "Поменять Проект",
  choose_one: "Выберите Одно",
  choose_project: "Выберите Проект",
  choose_interface: "Выберите интерфейс для управления этими данными.",
  clear: "Очистить",
  click_to_toggle_all_none: "Нажмите, чтобы включить/выключить весь столбец",
  connection: "Соединение",
  collection: "Коллекция",
  collections_and_fields: "Коллекция и Поля",
  collection_invalid_name: "Не правильная имя коллекции",
  collection_updated: "Коллекция Обновлена: {collection}",
  collection_removed: "Коллекция Удалена: {collection}",
  collection_names_cannot_be_changed:
    "Названия коллекций не могут быть отредактированы в настоящее время.",
  collections: "Коллекции",
  collection_count: "Нет Коллекции | Одна Коллекция | {count} Коллекции",
  "collections-directus_files": "Файлы",
  "collections-directus_users": "Пользователи",
  "collections-directus_activity": "Активность",
  comment: "Комментарий",
  comments: "Комментарии",
  coming_soon: "Скоро будет",
  contains: "Содержит",
  config_error: "Отсутствует Конфиг",
  config_error_copy: "Убедитесь, что вы создали файл конфигурации приложения",
  collection_contains_items: "{collection} содержит {count} элементов",
  currently_selected: "Сейчас выделено: {thing}",
  create: "Создать",
  creating_item: "Создание элемента",
  creating_item_page_title: "Создание элемента: {collection}",
  creating_role: "Создание Роля",
  create_role: "Создать Роль",
  create_field: "Создать Поле",
  update_field: "Обновить Поле",
  create_collection: "Создать Коллекцию",
  database_connection: "Соединение с Базой Данных",
  database_connection_copy:
    "Далее нам нужно знать, как подключиться к базе данных, где будет управляться этот проект.",
  datatype: "Тип данных",
  db_datatype: "Тип данных {db}",
  editing_my_profile: "Ред. Мой Профиль",
  embed: "Встроить",
  embed_placeholder: "YouTube, Vimeo, или другие ссылки",
  fieldtypes: {
    alias:
      "Поля, которые не сохраняют данные или не имеют соответствующих столбцов базы данных",
    array: "Стандартный формат массива в ответе API",
    datetime:
      "Дата и время в формате ISO, например: 2018-09-19T14: 00: 43.381Z",
    date: "Дата, например: 2018-09-19",
    time: "Время, например: 14:09:22",
    file: "Внешний ключ к directus_files.id",
    group:
      "Визуально группирует поля вместе, дети сохраняют группу в directus_fields.group",
    integer: "Целое число",
    decimal: "Число с десятичным числом",
    json: "Стандартный формат JSON в ответе API",
    lang: "Специфично для интерфейсов перевода, здесь хранится языковой ключ",
    m2o: "Отношения многие-к-одному",
    o2m: "Отношения один ко многим",
    sort:
      "Системное поле, используемое при переупорядочении элементов перетаскивания",
    status: "Системное поле, используемое для публикации рабочих процессов",
    string:
      "Любой текст, цифры, пробелы или символы; определяется и ограничивается его длиной (количество символов)",
    translation:
      "Это один-ко-многим, специфичный для интерфейсов перевода, хранит многоязычный контент",
    uuid: "Универсально уникальный идентификатор",
    datetime_created:
      "Системное поле для отслеживания даты и времени создания элемента, используемого ревизиями",
    datetime_updated:
      "Системное поле для отслеживания даты и времени обновления элемента, используемого ревизиями",
    user_created:
      "Системное поле для отслеживания пользователя, который создал элемент, используемый ревизиями",
    user_updated:
      "Системное поле для отслеживания пользователя, который обновил элемент, используемый ревизиями"
  },
  datatypes: {
    mysql: {
      CHAR:
        "Недвоичная строка фиксированной длины, дополненная пробелами. Длина может быть от 0 до 255 символов.",
      VARCHAR:
        "Недвоичная строка переменной длины. Длина может быть от 0 до 65,535 символов (MySQL 5.0.3+).",
      TINYTEXT: "Строка с максимальной длиной 255 символов.",
      TEXT: "Строка с максимальной длиной 65,535 символов.",
      MEDIUMTEXT: "Строка с максимальной длиной 16,777,215 символов.",
      LONGTEXT: "Строка с максимальной длиной 4,294,967,295 символов.",

      BOOLEAN: "Правда или ложь. Сохраняется как 1 или 0 соответственно.",
      TINYINT:
        "Целое число При знаке (допускает отрицание) длина составляет от -128 до 127, в противном случае максимальное значение равно 255.",
      SMALLINT:
        "Целое число При знаке (допускает отрицание) длина составляет от -32 768 до 32 767, в противном случае максимальное значение составляет 65,535.",
      MEDIUMINT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от -8,388,608 до 8,388,607, в противном случае максимальное значение составляет 16,777,215.",
      INT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от 2,147 483,648 до 2,147,483,647, в противном случае максимальное значение составляет 4,294,967,295.",
      BIGINT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от -9,223,372,036,854,775,808 до 9,223,372,036,854,775,807, в противном случае максимальное значение составляет 18,446,744,073,709,551,615.",

      DECIMAL:
        "Точное число (например, для валюты), длиной от 1 до 65 цифр (L) и от 0 до 30 цифр (D). Формат длины: `L, D`",
      FLOAT: "Примерное двоичное число, 4 байта с плавающей запятой.",
      DOUBLE: "Примерное двоичное число, 8 байт с плавающей запятой.",

      DATE: "Дата. Позволяет `1000-01-01` к `9999-12-31`.",
      DATETIME:
        "Дата и всремя. Позволяет `1000-01-01 00:00:00` к `9999-12-31 23:59:59`.",
      TIMESTAMP:
        "Дата и всремя. Позволяет `1970-01-01 00:00:01` UTC к `2038-01-19 03:14:07` UTC.",
      TIME: "Время. Позволяет `-838:59:59` к `838:59:59`.",
      YEAR: "Год. Позволяет `1901` к `2155` or `0000`"
    }
  },
  date_and_time: "Дата и Время",
  db_user: "Пользователь базы данных",
  db_password: "Пароль пользователя базы данных",
  db_name: "Имя базы данных",
  db_type: "Тип базы данных",
  db_column_name: "Имя столбца базы данных...",
  db_updated: "Базы данных успешно обновлены",
  db_update_failed: "Базы данных не может обновлен",
  default: "По умолчанию",
  delete: "Удалить",
  delete_are_you_sure:
    "Вы уверены, что хотите удалить этот элемент? Это действие не может быть отменено.",
  delete_collection_are_you_sure:
    "Вы уверены, что хотите удалить эту коллекцию? Это действие не может быть отменено.",
  delete_field_are_you_sure:
    'Вы уверены, что хотите удалить поле "{field}"? Это действие не может быть отменено.',
  delete_role_are_you_sure:
    'Вы уверены, что хотите удалить роль "{имя}"? Это действие не может быть отменено.',
  delete_bookmark: "Удалить закладку",
  delete_bookmark_body:
    "Вы уверены, что хотите удалить эту закладку? Это действие не может быть отменено.",
  description: "Описание",
  delete_confirmation: "Подтвердить удаление",
  dialog_beginning: "Начало диалогового окна.",
  discard_changes: "Отменить изменения",
  display_name: "Отображаемое имя",
  drop_files:
    "Не могу перетащить файлы | Перетащите файл сюда ... | Перетащите файлы сюда ...",
  dont_show: "Не показывать",
  editing: "Редактировать элемент: {collection}",
  editing_item: "Редактировать элемент",
  editing_items: "Пакетное редактировние {count} элементов",
  editing_single: "Редактирование {collection}",
  email_address: "Email адресс",
  email: "Email",
  empty_collection: "Пустая Коллекция",
  empty_collection_body: "В этой коллекции пока нет предметов",
  enable_manual_sorting: "Включить сортировку вручную",
  enter_value: "Введите значение",
  enter_collection_name: "Введите имя Коллекций...",
  enter_role_name: "Введите имя роля...",
  environment: "Environment",
  project_key: "Ключ проекта",
  errors: {
    "-1": "Не удалось связаться с API",
    11: "Не удается подключиться к базе данных",
    100: "Неверное имя пользователя и/или пароль",
    101: "Вышли из-за неактивности",
    102: "Вышли из-за неактивности",
    103: "Пользователь не активен",
    106: "Неверное имя пользователя и/или пароль",
    107: "Пользователь не найден"
  },
  error_unknown: "Неизвестная ошибка. Попробуйте позже.",
  esc_cancel: "Escape отменит и закроет окно.",
  equal_to: "Равно",
  existing: "Существующий",
  fetching_data: "Получение данных",
  field: "Поле",
  field_type: "Тип Поля",
  field_created: "{field} Поле создано",
  field_updated: "{field} Поле обновлено",
  field_removed: "{field} Поле удалено",
  fields: "Поля",
  fields_are_saved_instantly: "Изменения сохраняются мгновенно",
  file: "Файл",
  file_library: "Библиотека Файлов",
  file_upload: "Загрузить файл(ы)",
  forgot_password: "Забыли пароль",
  greater_than_equal: "Больше или равно",
  greater_than: "Больше",
  help_and_docs: "Помощь & Доки",
  keep_editing: "Продолжайте редактировать",
  hidden_detail: "Скрыто на детали",
  hidden_browse: "Скрыто на Обзор",
  host: "Хост",
  in_list: "Один их этих",
  initial_schema: "Выберите начальную схему",
  initial_schema_copy:
    "Выберите из существующих архитектур баз данных или начните заново. Вы всегда можете расширить и настроить это позже.",
  interface: "Интерфейс",
  interface_count: "Нет Интерфейсов | Один Интерфейс | {count} Интерфейсов",
  interfaces: "Интерфейсы",
  info: "Инфо",
  intelligent_defaults:
    "Расширенные параметры позволяют настроить способ хранения данных в базе данных и настроить дополнительные параметры приложения.",
  interface_settings:
    "Каждый интерфейс может быть идеально адаптирован к вашим потребностям. Ниже представлены доступные опции для этого интерфейса, но требуются только некоторые.",
  install: "Устанавить",
  install_copy:
    "Этот API еще не настроен. Вы хотите установить и настроить его сейчас?",
  is_empty: "Пустой",
  is_not_null: "Не NULL",
  is_null: "NULL",
  item_count: "Нет элементов | Один элемент | {count} элементов",
  event_count: "Нет событии | Одно событие | {count} событии",
  role_count: "Нет роли | Одна роль | {count} роли",
  item_count_filter:
    "Нет отфильтрованных элементов | Один отфильтрованный элемент | {count} Отфильтрованных элементов",
  item_deleted: "Элемент удален",
  item_saved: "Элемент сохранен | {count} Элементов сохранено",
  junction_collection: "Узловая Коллекция",
  cant_disable_primary:
    "Вы не можете отключить первичный ключ в существующем поле. Вместо этого удалите это поле.",
  extension_error: "Не удалось загрузить расширение {ext}.",
  extensions_missing: "Расширения не найдены",
  extensions_missing_copy:
    "Убедитесь, что у вас установлены системные расширения.",
  latency: "Задержка",
  learn_more: "Узнать больше",
  leave_comment: "Оставить комментарий...",
  length: "Длина",
  length_disabled_placeholder: "Длина определяется типом данных",
  less_than_equal: "Меньше или равно",
  less_than: "Меньше",
  limited: "Лимитированно",
  loading: "Загрузка...",
  loading_more: "Загрузка элементов...",
  login: "Войти",
  m2m: "Многое к многому (M2M)",
  m2o: "Многое к одному (M2O)",
  o2m: "Одно ко многому (O2M)",
  name: "Имя",
  name_field:
    "Давайте назовем это поле {field} и добавим полезную заметку для пользователей.",
  navigate_changes:
    "Вы уверены, что хотите покинуть эту страницу? Внесенные вами изменения будут потеряны, если вы уйдете с этой страницы.",
  new: "Новый",
  new_file: "Новый файл",
  no_related_entries: "Не имеет связанных записей",
  not_between: "Не между",
  not_contains: "Не содержит",
  note: "Заметка",
  note_note: "Внутреннее описание...",
  note_hidden:
    "[Узнать больше](https://docs.directus.io/guides/collections.html#hidden)",
  note_icon: "Значок, показанный на боковой панели навигации приложения",
  note_managed:
    "[Узнать больше](https://docs.directus.io/guides/collections.html#managing-collections)",
  note_single:
    "[Узнать больше](https://docs.directus.io/guides/collections.html#single)",
  no_results: "Нет результатов",
  no_results_body:
    "Текущие фильтры не соответствуют ни одному элементу коллекции",
  no_collections: "Нет коллекций настройки",
  no_collections_body: "Кажется, что пока нет никаких коллекций",
  no_fields: "Нет настроек поля",
  no_fields_body: "Похоже, в этой коллекции еще нет настроек полей",
  no_files: "Нет файлов",
  no_files_body: "Похоже, еще не было загружено ни одного файла",
  numeric: "Числовой",
  page_not_found: "Страница не найдена",
  page_not_found_body: "Страница, которую вы ищете, кажется, не существует.",
  permissions: "Права доступа",
  name_bookmark: "Как бы вы хотели назвать эту закладку?",
  next: "Дальше",
  none: "None",
  not_empty: "Не пусто",
  not_equal_to: "Не равно",
  not_in_list: "Ни один из них",
  no_interface_error: "Поле {field} не имеет настройки интерфейса",
  manage: "Править",
  manage_started: "Начали править {collection}",
  manage_stopped: "Останавили править {collection}",
  max_size: "Макс. размер: {size}",
  max_one_primary_key:
    "Вы можете иметь только 1 поле первичного ключа для каждой коллекции",
  dont_manage: "Нельзя править",
  dont_manage_copy:
    "Привилегии, настройки и настройки коллекции {collection} будут навсегда удалены из системы! Уверены ли вы?",
  more_options: "Больше вариантов",
  mixed: "Смешанное",
  my_profile: "Мой профиль",
  other: "Другой",
  ok: "OK",
  operator: "Оператор",
  open_on_gh: "Открыть в GitHub",
  options: "Опций",
  password: "Пароль",
  password_reset_sent: "Письмо для сброса пароля отправлено на адрес {email}",
  permissions_no_collections: "У этого проекта еще нет коллекций.",
  permissions_admin:
    "Администраторы имеют доступ ко всем управляемым данным в системе по умолчанию.",
  permission_states: {
    none: "Нет",
    mine: "Только мое",
    role: "Только Роль",
    full: "Все",
    read: "Только для чтения",
    create: "Создание",
    on_create: "Во время создания",
    update: "Обновление",
    on_update: "Во время обновления",
    always: "Все время"
  },
  popular: "Популярное",
  powered_by_directus: "Работает на Directus",
  preview_and_revert: "Предв. просмотр и возврат",
  primary_key: "Первичный ключ",
  port: "Порт",
  project: "Проект",
  project_name: "Имя Проекта",
  project_info: "Информация о Проекте",
  project_info_copy:
    "Ниже приведены несколько вопросов о вашем проекте, в том числе учетные данные вашего первого администратора.",
  read: "Чтение",
  readable_fields: "Читабельные Поля",
  readable_fields_copy:
    "Выберите поля, которые пользователь может просматривать",
  readonly: "Только для чтения",
  relational: "Реляционный",
  report_issue: "Сообщить о проблеме",
  request_feature: "Запросить Фичи",
  regex: "RegEx",
  relation_setup:
    "Поскольку это реляционное поле, нам нужно отобразить соответствующие поля.",
  relation_setup_copy:
    "Существуют разные типы реляционных данных, этот интерфейс использует один из них, называемый {relation}.",
  related_entries: "Имеет связанные записи",
  related_collection: "Связанная Коллекция",
  remove: "Удалить",
  remove_related: "Удалить связанные элементы",
  relationship: "Отношения",
  required: "Необходимые",
  reset_preferences: "Сбросить все настройки списка",
  reset_password: "Сбросить Пароль",
  revert: "Возвратить",
  revert_copy: "Вы хотите вернуть этот элемент к тому, какой он был в {date}?",
  roles: "Роли пользователей",
  role_settings: "Опций Ролей",
  save: "Сохранить",
  save_and_add: "Сохранить и Добавить новую",
  save_and_stay: "Сохранить и Остаться",
  save_as_copy: "Сохранить и Копировать",
  save_as_bookmark: "Сохранить и в закладки",
  schema: "Схема",
  search: "Поиск",
  select_from_device: "Выбрать из Девайса",
  select_existing: "Выбрать из существующего",
  select_field: "Выбрать поле",
  select_fields: "Выбрать поля",
  search_interface: "Поиск интерфейса...",
  select_interface_below: "Выберите интерфейс ниже",
  select_statuses: "Выбрать Статусы",
  select_statuses_copy:
    "Выберите статусы, которые пользователь может использовать",
  settings: "Настройки",
  settings_project: "Настройки Проекта",
  settings_global: "Глобальные настройки",
  settings_update_database: "Обновить базу данных",
  settings_update_database_subtext: "Выполнить скрипт",
  settings_update_database_confirm:
    "Это обновит системные поля в вашей базе данных до последней версии Directus. Пожалуйста, сделайте резервную копию перед запуском этой операции.",
  settings_collections_fields: "Коллекции и Поля",
  settings_permissions: "Роли и права доступа",
  settings_extensions: "Расширения",
  settings_saved: "Настройки сохранены",
  server_details: "Детальнее о сервере",
  server_error: "Ошибка сервера",
  server_error_copy: "Что-то не так с сервером или базой данных",
  server_trouble: "Проблемы с сервером",
  server_trouble_copy:
    "Повторите попытку позже или обратитесь за помощью к системному администратору.",
  advanced_options: "Дополнительные настройки",
  show_directus_collections: "Показать системные коллекций Directus'а",
  something_went_wrong: "Что-то пошло не так.",
  something_went_wrong_body:
    "Неисправность обработки запроса. Попробуйте еще раз после обновления страницы.",
  sort_by: "Сортировать по",
  sign_in: "Войти в систему",
  signing_in: "Вход в систему",
  sign_out: "Выйти",
  sign_out_confirm: "Вы уверены, что хотите выйти?",
  sign_out_confirm_edits:
    "Вы уверены, что хотите выйти? Все несохраненные изменения будут потеряны.",
  text: "Текст",
  this_collection: "Эта коллекция",
  to: "к",
  unsaved_changes_copy:
    "У вас есть несохраненные изменения! Вы уверены, что хотите покинуть эту страницу?",
  user_directory: "Папка пользователя",
  update: "Обновить",
  update_confirm: "Вы уверены, что хотите обновить {count} элементы?",
  unique: "Уникальный",
  user_edit_warning:
    "{first_name} {last_name} также редактирует этот элемент. Пожалуйста, согласуйте их, чтобы не потерять свои изменения.",
  value: "Значение",
  values: "Значения",
  validation: "Проверка",
  version: "Версия",
  version_and_updates: "Версия и Обновления",
  view_type: "Посмотреть как...",
  welcome: "Добро пожаловать",
  writable_fields: "Поля для записи",
  writable_fields_copy:
    "Выберите поля, которые пользователь может редактировать",
  yes: "Да",
  duplicating_field: "Дублирующее Поле",
  duplicate: "Дубликат",
  upload_exceeds_max_size:
    "{filename} не может быть загружено. Ваш сервер не настроен для обработки загрузок такого размера."
};