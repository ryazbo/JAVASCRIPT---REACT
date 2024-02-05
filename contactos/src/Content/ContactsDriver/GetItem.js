import React, { useState } from "react";

function ContactSearch({ contacts, handleSearch }) {
  const [searchPhone, setSearchPhone] = useState("");

  const searchContact = (e) => {
    e.preventDefault();
    // Lógica de búsqueda
    const result = contacts.find(contact => contact.phone === searchPhone);
    handleSearch(result);
  };

  return (
    <div>
      <form onSubmit={searchContact}>
        <p>Buscar contacto por número telefónico:</p>
        <input
          type="number"
          placeholder="Ingrese el número telefónico"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
          required
        />
        <button type="submit">Buscar contacto</button>
      </form>
    </div>
  );
}

export default ContactSearch;
