import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNav = () => {
  // const location = useLocation();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <NavLink to="/tabs/tab-one">
        {({ isActive }) => (
          <span
            className={`${
              isActive
                ? 'bg-blue-700 text-white'
                : ' bg-white shadow-sm text-blue-500'
            }  py-2 px-5  transition-all `}
          >
            Tab One
          </span>
        )}
      </NavLink>
      <NavLink to="/tabs/tab-two">
        {({ isActive }) => (
          <span
            className={`${
              isActive
                ? 'bg-blue-700 text-white'
                : ' bg-white shadow-sm text-blue-500'
            }  py-2 px-5  transition-all `}
          >
            Tab Two
          </span>
        )}
      </NavLink>
      <NavLink to="/tabs/tab-three">
        {({ isActive }) => (
          <span
            className={`${
              isActive
                ? 'bg-blue-700 text-white'
                : ' bg-white shadow-sm text-blue-500'
            }  py-2 px-5  transition-all `}
          >
            Tab Three
          </span>
        )}
      </NavLink>
    </div>
  );
};

export default TabNav;
