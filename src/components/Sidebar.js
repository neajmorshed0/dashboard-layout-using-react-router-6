import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-gray-800 text-white pt-10 px-5 h-screen">
      <div className="flex flex-col space-y-4 text-base">
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <span
              className={`${
                isActive
                  ? 'bg-blue-100 rounded text-blue-700'
                  : ' text-gray-300'
              }  py-2 px-5  transition-all block`}
            >
              Dashboard
            </span>
          )}
        </NavLink>
        <NavLink to="/tabs">
          {({ isActive }) => (
            <span
              className={`${
                isActive
                  ? 'bg-blue-100 rounded text-blue-700'
                  : ' text-gray-300'
              }  py-2 px-5  transition-all block`}
            >
              Tabs
            </span>
          )}
        </NavLink>{' '}
        <NavLink to="/settings">
          {({ isActive }) => (
            <span
              className={`${
                isActive
                  ? 'bg-blue-100 rounded text-blue-700'
                  : ' text-gray-300'
              }  py-2 px-5  transition-all block`}
            >
              Settings
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
