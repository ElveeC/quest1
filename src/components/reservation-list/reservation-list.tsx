import { ReservationCard } from '../reservation-card/reservation-card';
import { ReservationType } from '../../types/quest-type';

type ReservationListProps = {
  reservations: ReservationType[];
}

function ReservationList ({ reservations }: ReservationListProps) {
  return (
    <div className="cards-grid">
      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export { ReservationList };
