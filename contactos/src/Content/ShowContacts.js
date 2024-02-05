import React, { useState, useEffect } from "react";
import Navbar from './../Shares/NavBar'
import ButtonsTable from './ContactsDriver/ButtonsAct.js'
import { useNavigate } from 'react-router-dom';
import './../StyleSheets/ShowContacts.css';

function ShowContact() {
  let navigate = useNavigate();
  const [searchPhone, setSearchPhone] = useState("");
  const [contacts, setContacts] = useState([]);
 

  const editThisContact = (id) => {
    return () => {
      navigate(`/edit/${id}`);
    };
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);


  const deleteThisContact = (id) => {
    return () => {
      const updatedContacts = contacts.filter(contact => contact.id !== id); 
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      console.log(`Contacto con id ${id} borrado.`);
    };
  };

  const filterbynumber = contacts.filter(contact => {
    return contact.phone.includes(searchPhone);
  });

  const handleSearchTerms = (e) => {
    setSearchPhone(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container-from-showcontacts">
          <div className="search-contact-container">
            <h1>Tus Contactos</h1>
            <input type="number" placeholder="Buscar por teléfono" id='searchNum' value={searchPhone} onChange={handleSearchTerms} required/>
          </div>
        <div className="get-contacts-container">
          <table>
            <thead>
              <tr>
                <th>cont</th>
                <th>Nombre</th>
                <th>address</th>
                <th>number</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterbynumber.length > 0 ? (
                filterbynumber.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <ButtonsTable texto={'editar'} isEditButton={true} driveContact={editThisContact(contact.id)} />
                    </td>
                    <td>
                      <ButtonsTable texto={'delete'} isEditButton={false} driveContact={deleteThisContact(contact.id)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No contacts found. Please try again or add new contacts.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowContact;
