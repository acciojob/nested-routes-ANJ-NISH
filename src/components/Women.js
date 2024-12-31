import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Women = () => {
  return (
    <div>
      <h1>Women Items</h1>
      <ul>
        <li><Link to="grooming">Grooming</Link></li>
        <li><Link to="shirt">Shirt</Link></li>
        <li><Link to="trouser">Trouser</Link></li>
        <li><Link to="jewellery">Jewellery</Link></li>
      </ul>
      <Outlet /> 
    </div>
  );
};
