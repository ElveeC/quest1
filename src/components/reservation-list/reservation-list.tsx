import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReservationCard } from '../reservation-card/reservation-card';
import { LoadingPage } from '../../pages/loading-page/loading-page';
import { fetchReservationsAction } from '../../store/api-actions';
import { getReservations, getReservationsLoadingStatus, getAddBookingStatus } from '../../store/data-process/data-process-selectors';

function ReservationList () {

  const reservations = useAppSelector(getReservations);
  const areReservationsLoading = useAppSelector(getReservationsLoadingStatus);
  const isBookingAdding = useAppSelector(getAddBookingStatus);
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
