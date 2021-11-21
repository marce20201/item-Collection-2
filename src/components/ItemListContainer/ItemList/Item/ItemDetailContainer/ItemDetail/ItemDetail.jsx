
import React, { useState, useContext } from 'react';
import {CartContext} from './../../../../../../context/CartContext'
import ItemCount from './ItemCount/ItemCount'
import './ItemDetail.css'
import swal from 'sweetalert'






function ItemDetail({item={}}){
    
    const [cantidad,setCantidad]=useState(0)
    const {cartList, guardarItem}= useContext(CartContext)
    console.log(cantidad,cartList)
    
    const handleCount=(cant)=>{
        
        setCantidad(cant)
        guardarItem({item: item, itemQ: cant})

        

        swal({
            title:`Agregaste ${cant} items de ${item.nombre}`,
            icon:"success",
            timer:"2000",
            button: false,

        })
        
        
        
        
    };
    
    return (
        
        <div className="item-detail" key={item.id}>
                <h4>{item.nombre}</h4>
                <img src={item.imgDir} alt="producto seleccionado"/> 
                <p>Stock: {item.stock}</p>
                <p>Talle: {item.talle}</p>
                <p>Precio: ${item.precio}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={handleCount} />
        </div>
    
    )

}



export default ItemDetail
