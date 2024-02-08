import { Link } from 'react-router-dom';
import './../StyleSheets/NavBarStyles.css';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <nav className='navbar-content'>
        <div>
            <h1>contacts</h1>
        </div>
      <ul className='navbar-buttons'>
        <Button variant="contained" className='navbar-button'><Link to="/"  className='navlink' >See contacts</Link></Button>
        <Button variant="contained" className='navbar-button'><Link to="/addcontact" className='navlink'>Add Contact</Link></Button>
        <Button variant="contained" className='navbar-button'><Link to="/material"  className='navlink'>material</Link></Button>
        {/* Agrega más enlaces según necesites */}
      </ul>
    </nav>
  );
}

export default Navbar;
