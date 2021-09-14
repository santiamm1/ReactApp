import { useState,useEffect } from "react"
import getList from './Item'

const ItemList = () => {
    const [listSolar, setListSolar] = useState([])

    useEffect(() =>{
        const list = getList()

        list.then( list => {
        setListSolar(list)
    })
}, [])

    return (
    <div className="panel">
        { listSolar.map(e => <li key={e.id}>{e.name}</li>)}
    </div>
    )
}

export default ItemList