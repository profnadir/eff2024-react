import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Experts1 from './Experts1';
import Experts2 from './Experts2';
import Formulaire from './Formulaire';



function App() {
  return (
    <div>
      <ul>
        <li><Link to="/form">Formulaire</Link>
        </li>
        <li>
          <Link to="/experts1">Experts 1</Link>
        </li>
        <li>
          <Link to="/experts2">Experts 2</Link>
        </li>
      </ul>
      <div className="main-route-place">
        <Routes>
          <Route path="/form" element={<Formulaire />} />
          <Route path="/experts1" element={<Experts1 />} />
          <Route path="/experts2" element={<Experts2 />} />
        </Routes>
      </div>
    </div>


  );
}

export default App;
