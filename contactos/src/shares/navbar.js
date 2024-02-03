import React from 'react';
import './../StyleSheets/NavBarStyles.css';
// Importa Link de react-router-dom
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom';
import ShowContacts from './../Content/ContactsDriver/ShowContact.js';
import ContactAccess from './../Content/Contactos.js'
import Present from '../Content/Present.js';


function NavBarContacts() {

    
    return (
        <Router>
        <div className='navbar-content'>
          {/* Navbar */}
          <nav>
          <h1>Contacts</h1>
            <ul>
                <li><Link to="/">home</Link></li>
              <li><Link to="/addcontact">add</Link></li>
              <li><Link to="/contacts">contacts</Link></li>
            </ul>
          </nav>
  
          {/* Contenido de la aplicación */}
          <Routes>
            <Route path="/" element={<Present />} />
            <Route path="/addcontact" element={<ContactAccess />} />
            <Route path="/contacts" element={<ShowContacts />} />
          </Routes>
        </div>
      </Router>
    );
};

export default NavBarContacts;