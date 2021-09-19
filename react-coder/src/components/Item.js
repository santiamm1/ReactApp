import { useState,useEffect } from "react"

const products = [
    {id:'00', name:'Luxor 440w' , description: '495W', stock: '250' }
]

function getList() {

    return new Promise ((resolve,reject) => {
    setTimeout(() => resolve(products), 2000)
    })

}

export default getList

