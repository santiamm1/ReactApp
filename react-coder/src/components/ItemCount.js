import React, {Component, useState } from 'react';

const ItemCount = () => {

    const stock = 20;

    const max = () =>{
        if (count >= stock) {
        console.log('Stock máximo')
        } else {
        setCount( count + 1)
        }
    };
    const [count, setCount] = useState(0);
    const subtract = () =>{
        if(count <= 0) {
        console.log('0')
        } else {
        setCount(count - 1)
        }
    };
    return(
        <div id="countbox">
            <h1 clasName= "number" style={{color: "grey"}}>{count}</h1>
            <div id="controller">
                <button clasName="max" onClick={max}>+</button>
                <button clasName="subtract" onClick={subtract}>-</button>
            </div>
        </div>
    )
}

export default ItemCount