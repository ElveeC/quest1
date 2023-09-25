export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum AppRoute {
  Main = '/',
  Quest = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking',
  Reservation = '/reservation',
  MyQuests = '/my-quests',
  Contacts = '/contacts',
  NotFound = '/notfound',
}

export enum APIRoute {
  Quest = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking',
  Reservation ='/reservation',
}

export const enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const LevelDictionary = {
  [Level.Any]: 'любой',
  [Level.Easy]: 'простой',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный'
} as const;

export const INITIAL_LEVEL = 'any';

export const QuestGenre = {
  All: {
    id: 'all',
    name: 'все квесты',
    icon: 'all-quests',
  },
  Adventure: {
    id: 'adventures',
    name: 'приключения',
    icon: 'adventure',
  },
  Horror: {
    id: 'horror',
    name: 'ужасы',
    icon: 'horror',
  },
  Mystic: {
    id: 'mystic',
    name: 'мистика',
    icon: 'mystic',
  },
  Detective: {
    id: 'detective',
    name: 'детектив',
    icon: 'detective',
  },
  SciFi: {
    id: 'sci-fi',
    name: 'sci-fi',
    icon: 'sci-fi',
  },
} as const;

export const INITIAL_GENRE = 'all';

export const ZOOM = 10;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const enum ContactsLocation {
  Latitude = 59.968456,
  Longitude = 30.31759,
}
