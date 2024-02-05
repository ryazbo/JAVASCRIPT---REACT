import { Link } from 'react-router-dom';
import './../StyleSheets/NavBarStyles.css'

function Navbar() {
  return (
    <nav className='navbar-content'>
        <div>
            <h1>contacts</h1>
        </div>
      <ul>
        <li><Link to="/">See contacts</Link></li>
        <li><Link to="/addcontact">Add Contact</Link></li>
        {/* Agrega más enlaces según necesites */}
      </ul>
    </nav>
  );
}

export default Navbar;
