import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../redux/taskActions';

const RoleSwitch = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user?.role); // Use optional chaining

  const handleRoleChange = (newRole) => {
    dispatch(setRole(newRole));
  };

  return (
    <div>
      <h1>Current Role: {role}</h1>
      <button onClick={() => handleRoleChange('admin')}>Set Admin Role</button>
      <button onClick={() => handleRoleChange('user')}>Set User Role</button>
      <button onClick={() => handleRoleChange('guest')}>Set Guest Role</button>
    </div>
  );
};

export default RoleSwitch;
