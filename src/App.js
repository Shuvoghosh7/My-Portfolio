import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import ProjectDetails1 from './Pages/ProjectDetails/ProjectDetails1';
import ProjectDetails2 from './Pages/ProjectDetails/ProjectDetails2';
import ProjectDetails3 from './Pages/ProjectDetails/ProjectDetails3';
import Contuct from './Pages/Contuct/Contuct';
import { useContext } from 'react';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const lightMode = theme.state.lightMode;
  return (
    <div 
    style={{
      background: lightMode ? "white" : "",
     
    }}>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/project1' element={<ProjectDetails1/>}/>
          <Route path='/project2' element={<ProjectDetails2/>}/>
          <Route path='/project3' element={<ProjectDetails3/>}/>
          <Route path='/contuct' element={<Contuct/>}/>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
