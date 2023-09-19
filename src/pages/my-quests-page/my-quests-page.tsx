import { Helmet } from 'react-helmet-async';
//import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ReservationList } from '../../components/reservation-list/reservation-list';
import { AppRoute } from '../../const';
import { reservations } from '../../mocks/reservation-mocks';

/*type MyQuestsPageProps = {
  isAuthorized: boolean;
}*/

function MyQuestsPage () {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room. Мои бронирования</title>
      </Helmet>
      <Header isAuthorized currentPage={AppRoute.MyQuests}/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <ReservationList reservations={reservations}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { MyQuestsPage };
