import React, { useEffect, useState } from 'react';
import parse from "html-react-parser"
import Axios from 'axios';
import { useLocation } from "react-router-dom";

function Inicio () {

  const [content, setContent] = useState ('')
  const [page, /* setPage */] = useState('inicio')

  const { pathname } = useLocation();

  
  useEffect (() => {
    Axios.get("https://still-escarpment-33811.herokuapp.com/content")
    .then(response => {
      console.log(response.data[page])
      setContent(response.data[page])
      console.log(page)
      window.scrollTo(0, 0);
    })

    
  }, [page, pathname]);


  return (
    <div>

    <div className='inicio'>
      <div className='landing'>
        <h2 className='landingtext' >CLINICA</h2>
        <h5 className='landingtext' >OFTALMOLOGICA</h5>
      </div>
    </div>
      <div className='lorems'>
      {parse(content)}     
      </div>
      <div className='addresscontainer'>
        <div>
          <h1>Direccion</h1>
          <h1 >C. 16 de Septiembre 184, </h1>
          <h1>47760 Atotonilco el Alto</h1>
          <h1>Jal., Mexico</h1>
        </div>
        <div>
          <iframe title="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478504.5764681365!2d-103.08920905!3d20.4521691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ecb4abf93c5e3%3A0xc34e23885c73055f!2sOftalmologo%20Dr.%20Francisco%20Rubio!5e0!3m2!1sen!2snz!4v1632134066055!5m2!1sen!2snz" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
