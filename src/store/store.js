import { createStore, applyMiddleware, combineReducers  } from 'redux'
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import locationReducer from './reducers/locationReducer';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  location: locationReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store;