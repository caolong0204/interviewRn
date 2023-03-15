import {combineReducers} from '@reduxjs/toolkit';
import {appReducer} from './application/appSlice';
export const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
