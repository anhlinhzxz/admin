import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ManageBook from './components/ManageBook';
import ManageAccount from './components/ManageAccount';
import ManageSystem from './components/ManageSystem';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/manage-book" element={<ManageBook />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            <Route path="/manage-system" element={<ManageSystem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
