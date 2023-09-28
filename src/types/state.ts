import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { QuestType, DetailedQuestType, ReservationType } from './quest-type.js';
import { BookingItemType } from './booking-item-type.js';
import { BookedQuestType } from './booked-quest-type.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  quests: QuestType[];
  areQuestsLoading: boolean;
  detailedQuest: DetailedQuestType | null;
  isDetailedQuestLoading: boolean;
  bookingItems: BookingItemType[];
  isBookingDataLoading: boolean;
  reservations: ReservationType[];
  areReservationsLoading: boolean;
  bookedQuest: BookedQuestType | null;
  isBookingAdding: boolean;
  checkedLevel: string;
  checkedGenre: string;
  selectedLocation: BookingItemType | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
