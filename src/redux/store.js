import { createStore, combineReducers } from 'redux';
import taskReducer from '../redux/taskReducer';


// Combine reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  
});

// Create Redux Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools
);

export default store; // Export store as default
