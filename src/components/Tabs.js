import React from 'react';
import { Outlet } from 'react-router-dom';

import TabNav from './TabNav';

const Tabs = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Tabs demo page</h1>
      <TabNav />
      <Outlet />
    </div>
  );
};

export default Tabs;
