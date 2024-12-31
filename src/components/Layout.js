import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {

    const location=useLocation();

  return (
    <main>
    <div>
       
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>
      {location.pathname==="/" && <p>Index</p>}
      <Outlet /> 
    </div>
    </main>
  );
};
