import { useState } from "react"
import { wishlistitems, wishlistType } from "../store/wishList";
import { createPath } from "react-router-dom";

export const Cart = () => 
{
    const [cart,setCart] = useState<wishlistType[]>(wishlistitems);
    const [updatedCart,setUpdatedCart] = useState<wishlistType[]>([]);
 
    const updateCart = () => 
    {
        const filtereditems = cart.filter((items) => items.inCart);
        setUpdatedCart(filtereditems);
    }

    return (
        <div>
            {updatedCart.map((items) => 
                <div key={items.id}>
                    <b> {items.image} </b>
                    <b> {items.name} </b>
                    <b> {items.price} </b>
                </div>
            )}
        </div>
    )
}