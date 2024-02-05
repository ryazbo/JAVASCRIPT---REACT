import React, { useState, useEffect } from "react";
import './../StyleSheets/ShowContacts.css';

function ShowContact() {
  const [searchPhone, setSearchPhone] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contactResult, setContactResult] = useState(null);

  useEffect(() => {
    // Cargar los contactos desde el almacenamiento local al montar el componente
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const searchContact = (e) => {
    e.preventDefault();
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
          <input
            type="number"
            placeholder="Ingrese el número telefónico"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
            required
            style={{ marginRight: 10 }}
          />
          <button type="submit">Buscar contacto</button>
        </div>
      </form>

      {/* Mostrar todos los contactos */}
      <div className="all-contacts-container">
        <h2>Todos los contactos:</h2>
        {contacts.map((contact, index) => (
          <div key={index}>
            <p>Nombre: {contact.name} &nbsp;</p>
            <p>Teléfono: {contact.phone} &nbsp;</p>
            <p>Dirección: {contact.address} &nbsp;</p>
          </div>
        ))}
      </div>

      {/* Mostrar el resultado de la búsqueda si existe */}
      {contactResult && (
        <div>
          <p>Contacto Encontrado: &nbsp;</p>
          <p>Nombre: {contactResult.name} &nbsp;</p>
          <p>Teléfono: {contactResult.phone} &nbsp;</p>
          <p>Dirección: {contactResult.address} &nbsp;</p>
        </div>
      )}
    </div>
  );
}

export default ShowContact;
