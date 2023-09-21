import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { LoadingPage } from '../loading-page/loading-page';
import { AppRoute, Level, LevelDictionary, QuestGenre } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
//import { DetailedQuestType } from '../../types/quest-type';
import { fetchDetailedQuestAction } from '../../store/api-actions';

type QuestPageProps = {
  isAuthorized: boolean;
  //detailedQuests: DetailedQuestType[];
}

function QuestPage ({ isAuthorized/*, detailedQuests*/ }: QuestPageProps) {
  //const questToShow = useParams();
  //const selectedQuest = detailedQuests.find((detailedQuest) => detailedQuest.id === questToShow.id);

  const currentQuest = useParams();
  const selectedQuest = useAppSelector((state) => state.detailedQuest);
  const isDetailedQuestLoading = useAppSelector((state) => state.isDetailedQuestLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentQuest.id) {
      dispatch(fetchDetailedQuestAction(currentQuest.id));
    }
  }, [dispatch, currentQuest.id]);

  if (isDetailedQuestLoading) {
    return (
      <LoadingPage />
    );
  }

  if (!selectedQuest) {
    return <NotFoundPage />;
  }

  const {
    id,
    title,
    type,
    level,
    peopleMinMax,
    description,
    coverImg,
    coverImgWebp
  } = selectedQuest;

  const questGenre = Object.values(QuestGenre).find((genre) => genre.id === type);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room. Квест</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} currentPage={AppRoute.Quest}/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${coverImgWebp}, ${coverImgWebp} 2x`} />
            <img src={coverImg} srcSet={`${coverImg} 2x`} width="1366" height="768" alt={`${title}.`} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{questGenre?.name}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{LevelDictionary[level as Level]}
              </li>
            </ul>
            <p className="quest-page__description">{description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Quest}/${id}${AppRoute.Booking}`}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { QuestPage };
