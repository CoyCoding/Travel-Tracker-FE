import { createStore, applyMiddleware, combineReducers  } from 'redux'
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import locationReducer from './reducers/locationReducer';
import markerFilterReducer from './reducers/markerFilterReducer';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  location: locationReducer,
  filters: markerFilterReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store;