// store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import visitedTabsReducer from '@/redux/features/visitedTabsReducer'
import selectedTabReducer from '@/redux/features/selectedTabReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  visitedTabs: visitedTabsReducer,
  selectedTab: selectedTabReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['visitedTabs', 'selectedTab'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
