import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './../../StyleSheets/EditContacts.css'
import Button from '@mui/material/Button';




function EditContact() {
    let navigate = useNavigate();
    let { id } = useParams();

    if(!id){
        navigate('/');
    }

    const location = useLocation();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const foundContact = storedContacts.find(c => c.id === id);
        if (foundContact) {
            setName(foundContact.name);
            setPhone(foundContact.phone);
            setAddress(foundContact.address);
        }
    }, [id]);

    const returnToShowContacts = () =>{
        navigate(`/`);
    }

    const updateThisContact = (e) => {
        e.preventDefault();
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedContacts = storedContacts.map((contact) => {
            if (contact.id === id) {
                return { ...contact, name, phone, address };
            }
            return contact;
        });

        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        navigate('/');
    };

    return (
        <div className='form-edit-contact'>
            <form onSubmit={updateThisContact} >
                <h1>Edit Contact</h1>
                <p>id</p>
                <input className='input-from-editcontact' readOnly value={id} />
                <p>Nombre</p>
                <input className='input-from-editcontact' value={name} onChange={(e) => setName(e.target.value)} />
                <p>Telefono</p>
                <input className='input-from-editcontact' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <p>Correo</p>
                <input className='input-from-editcontact' value={address} onChange={(e) => setAddress(e.target.value)} />
                <div className='buttons-edit'>
                    <Button variant="contained" className='button-from-editcontact' type="submit">Actualizar</Button>
                    <Button variant="contained" className='button-from-editcontact' type="button" onClick={returnToShowContacts}>Back</Button>
                </div>
                <div>
                <h2>Current Pathname: {location.pathname}</h2>
                <p>Current Search: {location.search}</p>
                </div>
            </form>
        </div>
    );
}

export default EditContact;