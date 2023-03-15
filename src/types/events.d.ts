interface IEventItem {
  id?: number;
  name: string;
  note?: string;
  date: number;
  start?: string;
  end?: string;
  isRemind?: boolean;
  categoryEvent?: EVENT_TYPE;
}
interface IEventsInMonth {
  date: string;
  eventsList: IEvent[];
}
