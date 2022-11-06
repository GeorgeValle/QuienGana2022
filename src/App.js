import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//npm install -S react-router-dom 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
