export type LocationType = {
  address: string;
  coords: number[];
};

export type SlotType = {
  time: string;
  isAvailable: boolean;
};

export type Slots = {
  today: SlotType[];
  tomorrow: SlotType[];
}

export type BookingItemType = {
  id: string;
  location: LocationType;
  slots: Slots;
};
