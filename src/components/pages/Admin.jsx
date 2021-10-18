import React, { /* useEffect,  */useState } from "react";
//  import auth from '../auth';
/* import parse from "html-react-parser"; */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import { useAlert } from 'react-alert'


function AdminPage (...options) {
    
    const alert = useAlert()


   /*  const [content, setContent] = useState('') */
    const [page, setPage] = useState('')

    const [text, setText] = useState("")
    const [pagetoedit, setPagetoedit] = useState ("Haz click en pagina para editar")


   /*  useEffect (() => {
        Axios.get("http://localhost:3030/content")
        .then(response => {
          console.log(response.data[page])
          setContent(response.data[page])
          setText(response.data[page])
          console.log(response.data)
        })
        
      }, [page]); */

    const handleClick = (e) => { 
        const pageselected = e.currentTarget.getAttribute("pagesel")

        Axios.get("https://still-escarpment-33811.herokuapp.com/content")
        .then((response) => {
        console.log(response.data)
        setPagetoedit(pageselected);
        console.log(pageselected);
        setPage(pageselected)
        console.log(page)
          console.log(response.data[pageselected])
          setText(response.data[pageselected])
          console.log(pageselected)
          console.log(response.data[pageselected])
        })
        
    };


  


    const handleSubmitOfChanges = () => {
        
        Axios.post("https://still-escarpment-33811.herokuapp.com/edit", {
            pageToedit : page,
            editedtext : text,
        }).then(() => {
            alert.show('Base de datos Actualizada')
            console.log('ok? i guess')
        });

    };


    return (
        <div className='adminpage'>
            <div className='controlpanel'>
                <ul>
                    <li pagesel='inicio' onClick={handleClick} >Inicio</li>
                    <li pagesel='cataratas' onClick={handleClick} >Cataratas</li>
                    <li pagesel='estravismo'onClick={handleClick}  >Estravismo</li>
                    <li pagesel='lasik' onClick={handleClick}  >Lasik</li>
                    <li pagesel='oftalmologia' onClick={handleClick}  >Oftalmologia</li>
                    <li pagesel='rehabilitacion' onClick={handleClick}  >Rehabilitacion</li>
                    <li pagesel='retina'onClick={handleClick}  >Retina</li>
                </ul>
            </div>
            <div className='editable'>

                <div className='titleofeditablepage' >
                  EDITAR INFORMACION
                </div>
                <div className='pageToEditOnEditablePage'>
                    {pagetoedit}
                </div>
                <div className='richTextEditotClass'>
                    <CKEditor
                        config={{placeholder: "Placeholder text..."}} 
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                        />
                </div>
                
                <div>
                        <button onClick={handleSubmitOfChanges}  className='btn2'>Save Changes</button>
                </div>
            </div>
            
        </div>


    );
}

export default AdminPage