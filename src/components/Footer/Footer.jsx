import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
    return (
        <div className='pie-de-pagina'>
            { }
            <div className="container redes">
                <div className="row">
                    <div className="col-12">
                        <a href="/#"><FontAwesomeIcon icon={faFacebookSquare} size='2x' className="icono-redes m-2"/></a>
                        <a href="/#"><FontAwesomeIcon icon={faInstagramSquare} size='2x' className="icono-redes m-2"/></a>
                        <a href="/#"><FontAwesomeIcon icon={faTwitterSquare} size='2x' className="icono-redes m-2"/></a>
                    </div>
                </div>
            </div>
            <div className="cop">
                <p>Copyright RopaBabies© </p>
            </div>
        </div>
    )
}

export default Footer
