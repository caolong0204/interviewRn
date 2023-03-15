import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';
import {FORMAT_MONTH_TIME} from '../../common/constant';

const initialState: AppState = {
  eventData: [],
};
const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addEvent: (state, {payload}: PayloadAction<IEventItem>) => {
      console.log('====payload', payload);
      const id = moment().valueOf();
      const newEvent = {...payload, id};
      const monthDate = moment(payload.date).format(FORMAT_MONTH_TIME);
      const data = state.eventData.find(item => item.date === monthDate);

      if (data) {
        data.eventsList.push(newEvent);
        const index = state.eventData.findIndex(
          item => item.date === monthDate,
        );
        state.eventData[index] = data;
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
