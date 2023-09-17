import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { MyQuestsPage } from '../../pages/my-quests-page/my-quests-page';
import { BookingPage } from '../../pages/booking-page/booking-page';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  authorizationStatus: AuthorizationStatus;
}
function App ({ authorizationStatus }: AppProps) {

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage isAuthorized={isAuthorized} />}
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestPage isAuthorized={isAuthorized}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />

          <Route
            path={AppRoute.Booking}
            element={<BookingPage isAuthorized={isAuthorized}/>}
          />

          <Route
            path={AppRoute.Contacts}
            element={<ContactsPage isAuthorized={isAuthorized}/>}
          />

          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export { App };
