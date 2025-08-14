import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducersToPersist = [];

const persistConfig = {
    key: 'root',
    storage,
    whitelist: reducersToPersist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer })

const persistor = persistStore(store);

export { store, persistor };
