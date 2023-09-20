//import { Helmet } from 'react-helmet-async';
//import { Header } from '../../components/header/header';
//import { Footer } from '../../components/footer/footer';
//import { AppRoute } from '../../const';
import './loading-page.css';

/*type LoadingPageProps = {
  isAuthorized: boolean;
}*/

function LoadingPage (/*{ isAuthorized }: LoadingPageProps*/) {

  return (
    <p className='loading-page'>Мы ищем квесты для вас</p>
  );
}

export { LoadingPage };
