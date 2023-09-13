import { MainPage } from '../../pages/main-page/main-page';
import { /*AppRoute,*/ AuthorizationStatus } from '../../const';

function App () {
  return (
    <MainPage authorizationStatus={AuthorizationStatus.NoAuth}/>
  );
}

export { App };
