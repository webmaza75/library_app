import { combineReducers } from 'redux'
import table from './table'
import form from './form'

const rootReducer =  combineReducers({
    table,
    form
  });

  export default rootReducer;