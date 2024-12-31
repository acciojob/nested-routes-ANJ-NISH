import React from "react";
import './../styles/App.css';
import { Layout } from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Women } from "./Women";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="women" element={<Women />}>
              <Route path="grooming" element={<p>Grooming</p>} />
              <Route path="shirt" element={<p>Shirts</p>} />
              <Route path="trouser" element={<p>Trouser</p>} />
              <Route path="jewellery" element={<p>Jewellery</p>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
