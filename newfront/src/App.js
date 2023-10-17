import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Userlogin from './components/Userlogin';
import Usersignup from './components/Usersignup';
import Home from './components/Home';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/login" element={<Userlogin />} />
              <Route path="/" element={<Usersignup />} />
              <Route path="/home" element={<Home />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
