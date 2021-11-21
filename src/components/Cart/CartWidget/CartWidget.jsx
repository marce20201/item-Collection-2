import React,{useContext} from 'react'
import { CartContext } from '../../../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import {Link} from 'react-router-dom'


export default function CartWidget() {
    const {cantidad}=useContext(CartContext)

    return (
        
    
        
        <Link to="/cart">

            <div className="icono-carrito" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x'/>
                <span className="cantidad-prod">{cantidad}</span>
            </div>
        </Link>
    
        
    )
}
