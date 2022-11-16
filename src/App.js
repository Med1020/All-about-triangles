import './App.css';
import IsTriangle from './pages/IsTriangle';
import Quiz from './pages/quiz'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Hypotenuse from './pages/Hypotenuse';
import Area from './pages/Area'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/><br/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/istriangle" element={ <IsTriangle/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/hypotenuse' element={<Hypotenuse/>} />
        <Route path='/area' element={<Area/>}/>
         

      </Routes>
    </BrowserRouter>
  );
}

export default App;
