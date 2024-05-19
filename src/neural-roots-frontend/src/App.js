import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from './pages/neural-roots-workspace/Workspace';
import LoginPage from './pages/neural-roots-workspace/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';
import Dashboard from './pages/neural-roots-workspace/DashboardPage';
import Team from './pages/neural-roots-workspace/TeamPage';
import Main from './pages/neural-roots-main/Main';
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
          <Route path="workspace" element = {<Workspace />}> 
            <Route path="dashboard" element ={<Dashboard />}/>
            <Route path="team" element={<Team />}/>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;