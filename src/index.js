import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount.js';
import LogIn from './LogIn.js';
import './index.css';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);