import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';
import { DetailedQuestType } from '../../types/quest-type';

type QuestPageProps = {
  isAuthorized: boolean;
  detailedQuests: DetailedQuestType[];
}

function QuestPage ({ isAuthorized, detailedQuests }: QuestPageProps) {
  const questToShow = useParams();
  const selectedQuest = detailedQuests.find((detailedQuest) => detailedQuest.id === questToShow.id);

  if (!selectedQuest) {
    return <NotFoundPage />;
  }

  const {
    title,
    type,
    level,
    peopleMinMax,
    description,
    //previewImg,
    //previewImgWebp,
    coverImg,
    coverImgWebp
  } = selectedQuest;

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
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{type}
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
                </svg>{level}
              </li>
            </ul>
            <p className="quest-page__description">{description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Booking}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { QuestPage };
