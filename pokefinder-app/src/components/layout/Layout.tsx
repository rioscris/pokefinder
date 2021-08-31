import React from "react";
import './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layoutContainer">
      <div className="navBar"/>
      {children}
    </div>
  );
};

export default Layout;
