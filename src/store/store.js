

import { applyMiddleware, combineReducers, createStore } from 'redux'
import userReducer from './userReducer'
import { thunk } from 'redux-thunk'
import {  persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    userDetails: persistReducer(persistConfig, userReducer),
})

export const store = createStore(rootReducer,  applyMiddleware(thunk))
export const persistor = persistStore(store);






