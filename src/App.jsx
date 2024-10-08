import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Routings from "./Route/Routing";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routings />
      </HashRouter>

    </>
  );
};

export default App;
