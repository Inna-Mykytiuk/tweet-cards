import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersReducer } from './usersSlice';
import { filtersReducer } from './filtersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistTasksReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistTasksReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
