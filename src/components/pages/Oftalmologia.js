import React, { /* useEffect,  */useEffect, useState } from 'react';
import '../../App.css';
import parse from "html-react-parser"
import Axios from 'axios'
import { useLocation } from "react-router-dom";



export default function Oftalmologia() {

  const [content, setContent] = useState ('')
  const [page/* , setPage */ ] = useState('oftalmologia')

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
    <h1 className='services'>
      <div className='landing' >
        SERVICIOS
      </div>
      </h1>;
      <div className='lorems'>
      {parse(content)}       

      </div>
  </div>)
}
