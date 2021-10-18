import React, { useEffect, useRef, /* useState */ } from 'react';
import '../../App.css';
import emailjs from 'emailjs-com'
import { useLocation } from "react-router-dom";



export const Contactanos = () => {
  const form = useRef();
  const { pathname } = useLocation();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_5e5dl9w', form.current, 'user_QR0QNehLTPRv4m5vbZgwX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div >
       <h1 className='contactanos'>
         <div className='landing' >
           Contactanos
         </div>
       </h1>
      <div className='lorems'>
        <h1>Envianos un correo para obtener mas informacion de tu servicio.</h1>
        <h2>Si quieres conocer mas de nuestros servicios, por favor dejanos tu numero de telefono o tu correo para poder contactarnos contigo</h2>
        <h2>Para obtener una cita menciona la fecha y hora que te gustaria agendar y nosotros nos contactaremos contigo para confirmar</h2>
      </div>
            
      <form className='contactusform' ref={form} onSubmit={sendEmail}>
            <p>Contact Us</p>
            <input className='inputclass' name='user_name' placeholder='Nombre'/>
            <input className='inputclass' type='number' name='user_phone' placeholder='Telefono' />
            <input className='inputclass' type='email' name='user_email' placeholder='Email' />
            <textarea name='message'placeholder=' Escribenos tu mensaje .... Por favor incluye tu telefono para contactarnos contigo' className='textclass' />
            <input className='btn2' type="submit" value="Send" />
      </form>
    </div>
  );

}; 