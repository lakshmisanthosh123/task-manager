import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import AdminDashboard from './components/AdminDashboard';
import UserPage from './components/UserPage';
import Login from './components/Login';
import AdminRoute from './components/AdminRoute';
import FilterSearch from './components/FilterSearch';
import RoleSwitch from './components/RoleSwitch';

const App = () => {
  const userState = useSelector((state) => state.user || {}); // Default to empty object if undefined
  const { isAuthenticated = false, role = 'guest' } = userState;

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav>
            <RoleSwitch />
            <ul>
              {!isAuthenticated ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add-task">Add Task</Link>
                  </li>
                  <li>
                    <Link to="/tasks">Task List</Link>
                  </li>
                  {role === 'admin' && (
                    <li>
                      <Link to="/admin">Admin Dashboard</Link>
                    </li>
                  )}
                </>
              )}
            </ul>
          </nav>

          <Routes>
            {!isAuthenticated ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <>
                <Route path="/" element={<h1>Welcome to Task Manager</h1>} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/tasks" element={
                  <>
                    <FilterSearch />
                    <TaskList />
                  </>
                } />
                <Route path="/tasks/:id" element={<TaskDetails />} />
                <Route path="/user-page" element={<UserPage />} />
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
