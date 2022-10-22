import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const InnerContent = () => {
  return (
    <div className=" bg-slate-200 w-full flex flex-col">
      <Header />
      <div className="pt-8 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default InnerContent;
