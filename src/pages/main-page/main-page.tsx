//import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { LevelFilter } from '../../components/level-filter/level-filter';
//import { QuestGenreList } from '../../components/quest-genre-list/quest-genre-list';
import { QuestList } from '../../components/quest-list/quest-list';
//import { LevelList } from '../../components/level-list/level-list';
import { AppRoute } from '../../const';
//import { quests } from '../../mocks/quest-mocks';
import { QuestType } from '../../types/quest-type';
//import { AuthorizationStatus } from '../../const';

/*type MainPageProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}*/

type MainPageProps = {
  isAuthorized: boolean;
  quests: QuestType[];

}

function MainPage ({ isAuthorized, quests }: MainPageProps) {

  //const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} currentPage={AppRoute.Main}/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <GenreFilter />
              <LevelFilter />
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestList quests={quests}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { MainPage };
