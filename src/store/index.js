import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger'
import { reducer } from './reducers/index'
import thunk from 'redux-thunk'

const loggerMiddleware  = createLogger()

export const store = createStore(reducer, applyMiddleware(thunk,loggerMiddleware ))