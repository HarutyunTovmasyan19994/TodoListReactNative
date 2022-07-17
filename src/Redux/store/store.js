 import {createStore} from 'redux'
 import rootReducer from "../Reducer";
 import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "../Reducer/reducer";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import {composeWithDevTools} from "redux-devtools-extension";
//
// const persistConfig = {
//     key: 'user',
//     storage,
// }
//
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
//
// export const store = createStore(persistedReducer,composeWithDevTools() )
// export let Storage = persistStore(store)
export const store = createStore(rootReducer,composeWithDevTools())
