import React, { useState, useEffect } from "react";
import './../StyleSheets/ShowContacts.css'

function ShowContact() {
  const [searchPhone, setSearchPhone] = useState("");
  const [contactResult, setContactResult] = useState(null);

  useEffect(() => {
  }, [contactResult]);

  const searchContact = (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const result = contacts.find(contact => contact.phone === searchPhone);
    setContactResult(result);
    if (result) {
      alert(`Contacto encontrado: ${result.name} - Teléfono: ${result.phone}`);
    } else {
      alert("Contacto no encontrado");
    }
  };

  return (
    <div className="getall-container">
      <form onSubmit={searchContact} className="search-contact-container">
        <div>
            <h1>Contactos</h1>
        </div>
        <div>
        <input type="number" placeholder="Ingrese el número telefónico" value={searchPhone} onChange={(e) => setSearchPhone(e.target.value)} required style={{marginRight: 10 }}
            />
            <button type="submit">Buscar contacto</button>
        </div>
      </form>
      {contactResult && (
        <div>
          <p>Contacto Encontrado:</p>
          <p>Nombre: {contactResult.name}</p>
          <p>Teléfono: {contactResult.phone}</p>
          <p>Dirección: {contactResult.address}</p>
        </div>
      )}
    </div>
  );
}

export default ShowContact;