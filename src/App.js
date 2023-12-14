import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './general/Navbar';
import HomeUsuario from './general/HomeUsuario';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUsuario from './usuario/AddUsuario';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>     
      
        <Routes>
          <Route exact path="/" Component={HomeUsuario}/>
          <Route exact path="/nuevo/usuario" Component={AddUsuario}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
