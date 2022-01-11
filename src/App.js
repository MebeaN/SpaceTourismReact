import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/home';
import Destination from './Components/Destination/dest';
import Crew from './Components/Crew/crew';
import NavBar from './Components/NavBar';
import Technology from './Components/Technology/technology';
function App() {
  return (
    <Router className="">
      <NavBar />
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/destination" element={ <Destination /> } />
        <Route path="/crew" element={ <Crew /> } />
        <Route path="/technology" element={ <Technology /> } />
        
      </Routes>
    </Router>
  );
}

export default App;
