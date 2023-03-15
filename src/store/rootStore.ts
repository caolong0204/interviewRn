import {configureStore} from '@reduxjs/toolkit';
import {reduxPersistStorage} from '@common/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {rootReducer} from './rootReducer';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: reduxPersistStorage,
    whitelist: ['app'],
  },
  rootReducer,
);
export const rootStore = configureStore({
  devTools: __DEV__,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;
export const persitStorage = persistStore(rootStore);
