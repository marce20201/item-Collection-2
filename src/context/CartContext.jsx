import React, { createContext, useState} from 'react';

export const CartContext = createContext();


export default function UseCartContext({ children }){

  const [cartList, setCartList] = useState([]); 

  function guardarItem(newItem) {
    const index = cartList.findIndex( item => newItem.item.id=== item.item.id) 
    
    if (index===-1) { 
      setCartList([...cartList, newItem]) 
    } else {
      const newQty = cartList[index].itemQ + newItem.itemQ
      const oldList = cartList.filter(old=> old.item.id !== newItem.item.id)
      setCartList([...oldList, {item: newItem.item , itemQ: newQty}])
    }
    
    
  }   

  const removeItem=(oldItem)=>{
    const oldList = cartList.filter(item=> item.item.id !== oldItem.item.id)
    setCartList(oldList)
  }

  
  const costoTotal=()=>{
    return cartList.reduce((acumulador, valor)=>(acumulador + (valor.itemQ*valor.item.precio)),0)
  }


  
  const cleanList= ()=>{
    setCartList([])
  }


  return (
    <CartContext.Provider value={{
        cartList,
        cantidad:cartList.length,
        removeItem,
        costoTotal,
        cleanList,
        guardarItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

