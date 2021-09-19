import { useState,useEffect } from "react"

const products = [
    {detail: '$210.000', origin: 'Alemania' }
]

function getItem() {

    return new Promise ((resolve,reject) => {
    setTimeout(() => resolve(products), 2000)
    })

}

const ItemDetailContainer = () => {
    const [itemSolar, setItemSolar] = useState([])

    useEffect(() =>{
        const list = getItem()

        list.then( list => {
        setItemSolar(list)
    })
}, [])

    return (
    <div className="panel">
        { itemSolar.map(e => <li key={e.id}>{e.detail}</li>)}
    </div>
    )
}

export default ItemDetailContainer