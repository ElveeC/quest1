import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReservationCard } from '../reservation-card/reservation-card';
import { LoadingPage } from '../../pages/loading-page/loading-page';
import { fetchReservationsAction } from '../../store/api-actions';
//import { ReservationType } from '../../types/quest-type';

/*type ReservationListProps = {
  reservations: ReservationType[];
}*/

function ReservationList (/*{ reservations }: ReservationListProps*/) {

  const reservations = useAppSelector((state) => state.reservations);
  const areReservationsLoading = useAppSelector((state) => state.areReservationsLoading);
  const isBookingAdding = useAppSelector((state) => state.isBookingAdding);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch((fetchReservationsAction()));
  }, [dispatch]);

  if (areReservationsLoading || isBookingAdding) {
    return <LoadingPage />;
  }

  if (!reservations.length) {
    return (
      <div>Вы ещё ничего не забронировали</div>
    );
  }

  return (
    <div className="cards-grid">
      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export { ReservationList };
