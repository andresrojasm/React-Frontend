import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './general/Navbar';
import HomeUsuario from './general/HomeUsuario';

function App() {
  return (
    <div className="App">
      <Navbar/>     
      <HomeUsuario/> 
    </div>
  );
}

export default App;
