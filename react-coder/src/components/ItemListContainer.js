import {Component} from 'react'


const ItemListContainer = (props) => {
    return (
        <div className="ItemList">
            <p className='message'>{props.label}</p>
        </div>
    )
}

export default ItemListContainer