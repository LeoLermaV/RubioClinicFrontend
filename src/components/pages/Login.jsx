import React, { useEffect, useState } from 'react';
import Auth from '../auth';
import { useLocation } from "react-router-dom";
import { useAlert } from 'react-alert'


function Login (props) {

  const { pathname } = useLocation();
  const [ importantValue, setimportantValue] = useState();
  const alert = useAlert()
  
  const handleChange = (e) => {
    const importantValueOnInput = e.target.value;
    console.log(importantValueOnInput);
    setimportantValue(importantValueOnInput)
    console.log(importantValue)
  };



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
            <form className='login'
             onSubmit={() => {
               if (importantValue === 'leo123' ){
                 console.log(importantValue);
                Auth.login(() => {
                  props.history.push("/Admin");
                });
               } else {
                alert.show('Email o contrasena incorrecta, verifica la informacion')
                 console.log('error')
               }
                
              }}>
              <label >Login</label>
              <label className='formitem'>
                <input placeholder='Email' type="email"/>
              </label>
              <label  className='formitem' > 
                <input onChange={handleChange} placeholder='Password' type="password"/>
              </label>
              <input className='btn2' type="submit" value='submit' />
            </form>
    );
}

export default Login;