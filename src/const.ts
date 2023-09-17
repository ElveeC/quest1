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

export { AuthorizationStatus, AppRoute };
