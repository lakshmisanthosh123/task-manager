// Action Types
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const MOVE_TASK= 'MOVE_TASK';
export const SET_ROLE = 'SET_ROLE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const loginSuccess = (role) => ({
  type: LOGIN_SUCCESS,
  payload: { role },
});

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});
export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
export const moveTask = (taskId, newPriority) => ({
    type: MOVE_TASK,
    payload: { taskId, newPriority }, // New action payload
  });
  