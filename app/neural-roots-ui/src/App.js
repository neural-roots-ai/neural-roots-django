import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';
import Main from './pages/neural-roots-main/Main';
import HomePage from './pages/HomePage';
import EmailAutomationPage from './pages/neural-roots-workspace/EmailAutomationPage';
import TrainingInternshipPage from './pages/TrainingInternshipPage';

function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element = {<Main />} path = "/"> 
          <Route element = {<Main />} path = "/login"/>            
        </Route> 
        <Route element = {<TrainingInternshipPage />} path ="training-and-internship">
          <Route path="" element = {<TrainingInternshipPage />}/>
        </Route>
        <Route element= {<PrivateRoute/>}>
          <Route path="workspace" element = {<HomePage />}>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
