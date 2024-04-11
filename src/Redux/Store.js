import { configureStore} from "@reduxjs/toolkit"
import {persistStore} from "redux-persist"
import RootReducer from "./RootReducer";
import {thunk} from 'redux-thunk'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const Store = configureStore({
    reducer:RootReducer,
   
    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:[thunk],
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
});
export const persistor = persistStore(Store);
export default Store;