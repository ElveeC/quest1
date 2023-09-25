import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingPage } from '../../pages/loading-page/loading-page';
import { AppRoute } from '../../const';
import { ReservationType } from '../../types/quest-type';
import { deleteReservationAction, fetchReservationsAction } from '../../store/api-actions';


type ReservationCardProps = {
  reservation: ReservationType;
}

function ReservationCard ({ reservation }: ReservationCardProps) {

  const dispatch = useAppDispatch();
  const { quest, date, time, location } = reservation;
  const { id, title, previewImg, previewImgWebp, peopleMinMax, level } = quest;

  const areReservationsLoading = useAppSelector((state) => state.areReservationsLoading);

  const handleDeleteButtonClick = () => {
    if (reservation.id) {
      dispatch(deleteReservationAction(reservation.id));
      dispatch(fetchReservationsAction());
    }
  };

  if (areReservationsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="quest-card" id={id}>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`} />
          <img src={previewImg} srcSet={`${previewImg} 2x`} width="344" height="232" alt={`${title}.`} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>{title}</Link>
          <span className="quest-card__info">[{date},&nbsp;{time}. {location.address}]</span>
        </div>
        <ul className="tags quest-card__tags">
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
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={handleDeleteButtonClick}>Отменить</button>
      </div>
    </div>
  );
}

export { ReservationCard };
