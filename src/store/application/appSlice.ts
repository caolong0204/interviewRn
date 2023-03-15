import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FORMAT_MONTH_TIME} from 'common/constant';
import moment from 'moment';

const initialState: AppState = {
  eventData: [],
};
const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addEvent: (state, {payload}: PayloadAction<IEventItem>) => {
      const newEvent = {...payload, id: moment().valueOf()};
      const monthDate = moment(payload.date).format(FORMAT_MONTH_TIME);
      const data = state.eventData.find(item => item.date === monthDate);

      if (data) {
        data.eventsList.push(newEvent);
      } else {
        const events: IEventsInMonth = {
          date: monthDate,
          eventsList: [newEvent],
        };
        state.eventData.push(events);
      }
    },
  },
});
export const {reducer: appReducer, actions: appActions} = appSlice;
