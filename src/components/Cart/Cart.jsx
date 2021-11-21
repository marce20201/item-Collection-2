import React, { useState, useContext } from 'react';
import {CartContext} from './../../context/CartContext'
import { getFirestore } from '../../services/firebaseService';
import {Table} from 'react-bootstrap'
import {ImCross} from 'react-icons/im'  
import swal from 'sweetalert'
import "./Cart.css";





function Cart() {

    const [buyer, setBuyer] = useState(initialState)

    const {cartList, guardarItem,removeItem,costoTotal,cleanList}= useContext(CartContext)
    
    const order = {buyer, item:cartList, totalCompra: `$${costoTotal()}`} 
    const [orderId, setOrderId] = useState()
    

    const handlerChange = (evt)=>{
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value,
        })
    }
    





    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        
        const db = getFirestore()
        db.collection('order').add(order)
        
        .then(({id})=>{setOrderId(id)
            swal({

                title:`Compra realizada por $${costoTotal()}, Muchas gracias`,
                text:`Tu orden de compra es : ${id}`,
                icon:"success",
                height: "340px"
            })
            
        })
        .catch(err=>console.log(err))
        
        cleanList()
        
    }

    console.log(orderId)
    console.log(order)

    return (
        <>
        <h2>Carrito de compras</h2>
        {cartList.length === 0?

            <p>El carrito esta vacio</p>

        :
            <div>
                <button type="button" className="btn-vaciar-finalizar" onClick={cleanList}>Vaciar Carrito</button>
            <Table size="sm">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
                </thead>
                <tbody>
                {cartList.map(item => 
                    <tr key = {item.item.id}>
                        <td><img src={item.item.imgDir} width='30px' height='40px' alt="" /><p>{item.item.nombre}</p></td>
                        <td>{item.itemQ}</td>
                        <td>${item.item.precio}</td>
                        <td><ImCross className="remove"onClick={()=>{removeItem(item)}}/></td> 
                    </tr>
                )}
                    <tr>
                        {`Total a pagar : $${costoTotal()}`} 
                    </tr>
                </tbody>
                </Table>

                <div>
                    
                    <form 
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                    >
                        <input 
                            type='text'
                            placeholder='nombre' 
                            name='nombre'
                            value={buyer.nombre}
                        />
                            
                        <input 
                            type='text' 
                            placeholder='ingresa el telefono' 
                            name='telefono'
                            value={buyer.telefono}
                        />
                            
                        <input 
                            type='email' 
                            placeholder='ingresa el mail' 
                            name='mail'
                            value={buyer.mail}
                        />

                        <button className="btn-vaciar-finalizar">Realizar compra</button>
                    </form>



                    
                </div>

                
            </div>
            
        
        }
            
            
            
        </>
        
    )
}

export default Cart

const initialState ={
    nombre:'',
    telefono:'',
    mail:''
} 