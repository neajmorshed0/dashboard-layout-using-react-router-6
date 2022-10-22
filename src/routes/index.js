import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import InnerContent from '../components/InnerContent';
import Settings from '../components/Settings';
import TabOne from '../components/TabOne';
import Tabs from '../components/Tabs';
import TabThree from '../components/TabThree';
import TabTwo from '../components/TabTwo';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tabs" element={<Tabs />}>
          <Route path="/tabs" element={<Navigate replace to="tab-one" />} />
          <Route path="tab-one" element={<TabOne />} />
          <Route path="tab-two" element={<TabTwo />} />
          <Route path="tab-three" element={<TabThree />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default Router;
