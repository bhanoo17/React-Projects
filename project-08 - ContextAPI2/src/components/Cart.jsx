import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';

export function Cart() {
    const cart = useContext(CartContext);

    // Check if cart or cart.items is undefined
    // if (!cart || !cart.items) {
    //     return <div>No items in the cart</div>;
    // }

    const total = cart.items.reduce((a, b) => a + b.price, 0);

    // console.log("Cart:", cart);
    // console.log("Total:", total);

    return (
        <div>
            <h1>Cart</h1>

            {cart.items.map((item) => {
                console.log("Item:", item);
                return (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                );
            })}

            <h5>Total Bill: ${total}</h5>
        </div>
    );
}
