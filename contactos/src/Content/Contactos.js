import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; //dar valores unicos aleatoriamente 
import './../StyleSheets/Contactos.css'
import Navbar from './../Shares/NavBar'


function ContactAccess() {
    const getData = () => {
        var data = localStorage.getItem('contacts');
        if(data){
            return JSON.parse(data);
        } else{
            return [];
        }
    }

  const [contacts, setContacts] = useState(getData());


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveContact = (e) => {
    e.preventDefault();
    var idVal = uuidv4();
    var obj = { id : idVal, name, phone, address };
    setContacts([...contacts, obj]);
    clearFormContact();
  };


  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }) 

  const clearFormContact = () => {
    setName("");
    setPhone("");
    setAddress("");
    document.getElementById('formCreateContact').reset();
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="form-div-content">
          <form id="formCreateContact" onSubmit={saveContact} className="form-contacts">
            <h1>AGREGA UN NUEVO CONTACTO</h1>
            <p>Ingrese el nombre de su nuevo contacto</p>
            <input type="text" placeholder="nombre" onChange={(e) => setName(e.target.value)} required/>
            <p>Ingrese el numero Telefonico de su nuevo contacto</p>
            <input type="number" placeholder="telefono" onChange={(e) => setPhone(e.target.value)} required/>
            <p>Ingrese el correo de su nuevo contacto</p>
            <input type="email" placeholder="correo" onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">crear contacto</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactAccess;