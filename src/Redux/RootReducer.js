import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/MetaReducer";
import addTocard from "./Slices/AddtoCart";
import authSlice from "./Slices/LoginSlices"

const resetSlices=[
   "addtocard",
   "auth"
];

const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices
)(
    combineReducers({
        addtocard:addTocard,
        authinfo:authSlice
    })
);

const persistConfig={
    key:"root",
    storage,
    whitelist:resetSlices,
};
export default persistReducer(persistConfig,rootReducer);