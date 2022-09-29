import React, { useEffect } from 'react';

const Cart = ({ cart, setCart }) => {
    useEffect(() => {
        setCart(cart.filter((itm, idx, arry) => idx === arry.findIndex(it => it.id === itm.id)))
    }, [])
    return (
        <div style={{ paddingTop: '500px' }}>
            {
                cart.map(ca => {
                    return (
                        <ul>
                            <li>{ca.id}</li>
                            <li>{ca.itm}</li>
                            <li>{ca.e}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Cart;