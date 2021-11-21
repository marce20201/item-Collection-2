import React from 'react'
import ItemList from './ItemList/ItemList'
import "./ItemListContainer.css"

const ItemListContainer=(props)=>{
    const {greeting}=props


    return (
    <div className="item-list-container">
        <h1>{greeting}</h1>
        <ItemList/>
    </div>

    
    )
}
export default ItemListContainer