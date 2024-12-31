import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Women = () => {
  return (
    <div>
      <h1>Women Items</h1>
      <nav>
      <ul>
        <li><Link to="Grooming">Grooming</Link></li>
        <li><Link to="Shirt">Shirt</Link></li>
        <li><Link to="Trouser">Trouser</Link></li>
        <li><Link to="Jewellery">Jewellery</Link></li>
      </ul>
      </nav>
      <Outlet /> 
    </div>
  );
};
