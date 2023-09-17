import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { MyQuestsPage } from '../../pages/my-quests-page/my-quests-page';
import { BookingPage } from '../../pages/booking-page/booking-page';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  authorizationStatus: AuthorizationStatus;
}
function App ({ authorizationStatus }: AppProps) {

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
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
          path={AppRoute.MyQuests}
          element={<MyQuestsPage />}
        />

        <Route
          path={AppRoute.Booking}
          element={<BookingPage isAuthorized={isAuthorized}/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export { App };
