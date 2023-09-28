import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { LevelFilter } from '../../components/level-filter/level-filter';
import { QuestList } from '../../components/quest-list/quest-list';
import { AppRoute } from '../../const';
import { filterQuests } from '../../utils';
import { QuestType } from '../../types/quest-type';
import { getCheckeLevel, getCheckedGenre } from '../../store/data-process/data-process-selectors';

type MainPageProps = {
  isAuthorized: boolean;
  quests: QuestType[];
}

function MainPage ({ isAuthorized, quests }: MainPageProps) {

  const checkedGenre = useAppSelector(getCheckedGenre);
  const checkedLevel = useAppSelector(getCheckeLevel);

  const filteredQuests = filterQuests(checkedGenre, checkedLevel, quests);

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
          {
            filteredQuests.length
              ?
              <QuestList quests={filteredQuests}/>
              :
              <div>
                <p>Мы ещё не успели создать квесты, соответствующие вашему запросу :(</p>
                <p>Попробуйте изменить фильтры</p>
              </div>
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { MainPage };
