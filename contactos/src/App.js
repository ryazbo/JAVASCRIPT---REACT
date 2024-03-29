import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowContact from './Content/ShowContacts';
import ContactAccess from './Content/Contactos';
import EditContact from './Content/ContactsDriver/EditContact'
import MaterialActs from './Content/ContactsDriver/Material';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/addcontact" element={<ContactAccess />} />
          <Route path="/material" element={<MaterialActs />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;