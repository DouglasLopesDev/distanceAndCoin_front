import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Distance from './distance/Distance';
import Coin from './coin/Coin';
import App from './home/App';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/distance" element={<Distance />}/>
        <Route path="/coin" element={<Coin />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;