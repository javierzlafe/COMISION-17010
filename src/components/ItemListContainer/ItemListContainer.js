import React, { useEffect } from 'react'



const stock = [
    {
        id: 1,
        name: 'Item 1',
        price: '$1.00',
        img: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Item 2',
        price: '$2.00',
        img: 'https://picsum.photos/200/300',
    },
    {

        id: 3,
        name: 'Item 3',
        price: '$3.00',
        img: 'https://picsum.photos/200/300',
    },
    {
        id: 4,
        name: 'Item 4',
        price: '$4.00',
        img: 'https://picsum.photos/200/300',
    }
]



export const ItemListContainer = ({greeting}) => {


        const [items, setItems] = ([])

    console.log(items)

    const pedirProductos = () => {  
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)
        })
        
    }


    useEffect(() => {
        pedirProductos()
            .then((res) => {        
                setItems(res)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container my-5">
        <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
