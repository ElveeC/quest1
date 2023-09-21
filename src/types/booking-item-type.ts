export type LocationType = {
  address: string;
  coords: number[];
};

export type SlotType = {
  time: string;
  isAvailable: boolean;
};

export type BookingItemType = {
  id: string;
  location: LocationType;
  slots: {
    today: SlotType[];
    tomorrow: SlotType[];
  };
};
