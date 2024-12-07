import { Button } from "./button"
import { wishlistitems, wishlistType } from "../store/wishList"
import { useState } from "react"

export const Wishlist = () => 
{   
    const [wishList,setWishlist] = useState<wishlistType[]>(wishlistitems);
    
    const handleClick = (id:number) =>
    {
        setWishlist((prevInputList) => {
            {return prevInputList.map((items) => (id == items.id) ? {...items, inCart:true}:items)}
        })
    }

    return (
        <div className="h-screen w-[100%] p-1">
            <h1 className="text-2xl p-2 font-sans font-semibold">Your Wishlist</h1>
            <div className="flex h-full w-full">
                {wishList.map((items) =>
                <div className="border-slate-100 border-2 rounded-md p-2 grid-cols-4 items-center justify-center h-3/4 w-3/4" key={items.id}>
                    <div className="h-1/2 w-3/4 items-center justify-center">
                        <img className="h-full w-full  flex" src={items.image} alt="Not found" />
                    </div>
                    <b className="p-1">{items.name}</b>
                    <br />
                    <b>₹{items.price}</b>
                    <Button handleClick={() => 
                        {
                            handleClick(items.id);
                        }
                    } title={items.inCart ? "Proceed to buy" : "Add to cart"}></Button>
                </div> 
                )}
            </div>
        </div>
    )
}