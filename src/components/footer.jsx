import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div className='footer'>
            <div className='social-media'>
                <div className='socialmedia'>
                    SIGUENOS EN REDES
                </div>
                <div className='sociallinks'>
                    <ul className='sociallinklist'>
                    <li> <a href="https://www.facebook.com/AHCGFAA" > <i className="fab fa-facebook"></i></a></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    </ul>
                </div>
            </div>
            <div className='links'>
                <ul className='linklist' >
                    <Link to='/' >
                        <li>Home</li>
                    </Link>
                    <Link to='/Oftalmologia' >
                        <li>Oftalmologia</li>
                    </Link>
                    <Link to='/Lasik' >
                        <li>Lasik</li>
                    </Link>
                    <Link to='/Retina' >
                        <li>Retina</li>
                    </Link>
                    <Link to='/Cataratas' >
                        <li>Cataratas</li>
                    </Link>
                    <Link to='/Estravismo' >
                        <li>Estravismo</li>
                    </Link>
                    <Link to='/Rehabilitacion' >
                        <li>Rehabilitacion</li>
                    </Link>
                    <Link to='/Contacto' >
                        <li>Contacto</li>
                    </Link>
                    <Link to='/' >
                        <li>Facebook</li>
                    </Link>
                    <Link to='/' >
                        <li>Instagram</li>
                    </Link>
                    <Link to='/' >
                        <li>Twitter</li>
                    </Link>
                    <Link to='/' >
                        <li>Hospital Civil</li>
                    </Link>
                </ul>
            </div>
            <div className='linksTwo'>
                <ul >
                    <p>2021 Copyright Med Atotonilco</p>

                </ul>
            </div>
        </div>
    );
}

export default Footer;