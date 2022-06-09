import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
