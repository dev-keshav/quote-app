import React from 'react';
import First from './Components/First';
import SecPage from './Components/SecPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
      </Routes>
      <Routes>  
        <Route path="send" element={<SecPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;