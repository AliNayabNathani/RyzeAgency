import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
export const server = 'http://localhost:5000/api/v1';
export const pictureServer = 'http://localhost:5000/uploadPicture';
export const videoServer = 'http://localhost:5000/uploadVideo';
export const pdfServer = 'http://localhost:5000/uploadPdf';
