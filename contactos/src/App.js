import './App.css';
import  ContactAccess from './Content/Contactos.js';
import NavBarContacts from './shares/navbar.js';

function App() {
  return (
    <div className="App">
      <NavBarContacts />
      <ContactAccess />
    </div>
  );
}

export default App;
