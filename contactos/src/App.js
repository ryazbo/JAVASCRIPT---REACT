import './StyleSheets/NavBarStyles.css';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom';
import ShowContacts from './Content/ShowContacts.js';
import ContactAccess from './Content/Contactos.js'
import Present from './Content/Present.js';


function App() {

  
  return (
    <div className="App">
        <Router>
        <div >
          {/* Navbar */}
          <nav className='navbar-content'>
            <div className='title'>
              <h1>Contacts</h1>
            </div>
            <div className='routes'>
              <ul>
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/addcontact">add</Link></li>
                  <li><Link to="/contacts">contacts</Link></li>
              </ul>
              </div>
            </nav>  
          {/* Contenido de la aplicación */}
          <Routes>
            <Route path="/" element={<Present />} />
            <Route path="/addcontact" element={<ContactAccess />} />
            <Route path="/contacts" element={<ShowContacts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
