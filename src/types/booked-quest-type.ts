export type BookedQuestType = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingDataType = {
  id: string;
  postData: BookedQuestType;
}
