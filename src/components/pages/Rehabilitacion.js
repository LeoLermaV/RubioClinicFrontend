import React, { useEffect, useState } from 'react';
import '../../App.css';
import parse from "html-react-parser";
import Axios from 'axios'
import { useLocation } from "react-router-dom";




function Rehabilitacion () {

  const [content, setContent] = useState ('')
  const [page, /* setPage */] = useState('rehabilitacion')
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
      <h1 className='products'>
        <div className='landing'>
          Rehabilitacion
        </div>
        </h1>
      <div className='lorems'>
       {parse(content)}       
      </div>
    </div>

  );
}

export default Rehabilitacion