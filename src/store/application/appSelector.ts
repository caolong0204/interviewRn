import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/rootReducer';

export const eventsSelector = createSelector(
  //path là state.reducerName( reducername khớp với khai báo trong rootReducer lưu ở file Store)
  (state: RootState) => state.app,
  //auth: return  all data in auth store(can rename it up to u)
  (app: AppState) => app.eventData,
);
