import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER, SET_SEARCH_TERM,MOVE_TASK,SET_ROLE,LOGIN_SUCCESS } from '../redux/taskActions';

// Initial State
const initialState = {
  tasks: [],
  filter: 'all',
  searchTerm: '',
 
    role: 'guest', // or whatever default role you want
    isAuthenticated: false,
 
};

// Reducer Function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        role: action.payload.role,
        isAuthenticated: true,
      };
      case SET_ROLE:
        return {
          ...state,
          role: action.payload,
        };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case MOVE_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.taskId
              ? { ...task, priority: action.payload.newPriority } // Adjust according to your task structure
              : task
          ),
        };
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            isAuthenticated: true,
            role: action.payload.role, // Assign role from payload
          };
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            role: '',
          };
        default:
          return state;
    
  }
};

export default taskReducer;
