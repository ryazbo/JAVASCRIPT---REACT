import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; //dar valores unicos aleatoriamente 
import './../StyleSheets/Contactos.css'
import Navbar from './../Shares/NavBar'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

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
    alertt(obj.name);
    setContacts([...contacts, obj]);
    clearFormContact();
  };


  const alertt = ( data ) => {
    return(
      <Alert variant="outlined" severity="success">
        nigger {data} 
    </Alert>
    ); 
  }

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
            <Button variant='contained' type="submit">crear contacto</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactAccess;