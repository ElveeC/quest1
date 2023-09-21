import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { MyQuestsPage } from '../../pages/my-quests-page/my-quests-page';
import { BookingPage } from '../../pages/booking-page/booking-page';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { LoadingPage } from '../../pages/loading-page/loading-page';

import { PrivateRoute } from '../private-route/private-route';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
//import { /*quests,*/ detailedQuests } from '../../mocks/quest-mocks';

/*type AppProps = {
  authorizationStatus: AuthorizationStatus;
}*/
function App (/*{ authorizationStatus }: AppProps*/) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const quests = useAppSelector((state) => state.quests);
  const areQuestsLoading = useAppSelector((state) => state.areQuestsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || areQuestsLoading) {
    return (
      <LoadingPage />
    );
  }

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage isAuthorized={isAuthorized} quests={quests}/>}
          />
          <Route
            path={`${AppRoute.Quest}/:id`}
            element={<QuestPage isAuthorized={isAuthorized}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />

          <Route
            path={`${AppRoute.Quest}/:id${AppRoute.Booking}`}

            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <BookingPage isAuthorized={isAuthorized}/>
              </PrivateRoute>
            }
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
      </HistoryRouter>
    </HelmetProvider>

  );
}

export { App };
