const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum AppRoute {
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

const enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

const LevelDictionary = {
  [Level.Any]: 'любой',
  [Level.Easy]: 'простой',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный'
} as const;

const INITIAL_LEVEL = 'any';


export { AuthorizationStatus, AppRoute, LevelDictionary, Level, INITIAL_LEVEL };
