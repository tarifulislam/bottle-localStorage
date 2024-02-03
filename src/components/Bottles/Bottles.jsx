import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from './../Cart/Cart';


const Bottles = () => {
    const [allBottles, SetallBottles] = useState([]); // for store data from json.
    const [cartBottle, setCartBottle] = useState([]); // for store data from cart item.
    
    useEffect(()=> {
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => SetallBottles(data))
    },[])

    // get data from local storage -------------------
    useEffect(()=> {
        if(allBottles.length > 0){
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const saveBottleInCart = [];
            for(const id of storedCart){
            //    console.log(id); 
               const bottle = allBottles.find(botle => botle.id === id); // for all product show visually.
               if(bottle){
                   saveBottleInCart.push(bottle);
               }
            }
            // console.log(saveBottleInCart);
            setCartBottle(saveBottleInCart)
        }
    },[allBottles]) // dependency for auto reload every data changes.

    const handleAddCart = (bottleData) => {
        const newCartBottle = [...cartBottle, bottleData]; // for push data in array.
              setCartBottle(newCartBottle) 
              addToLS(bottleData.id); // for set product id in local storage.
    }

    const handleRemoveFromCart = id => {
        const remainingCart =  cartBottle.filter(botle => botle.id !== id)
        setCartBottle(remainingCart)
        removeFromLS(id); // for remove product in local storage. and show visually.
    }

    return (
        <div className="container mx-auto">
            <div>
                <h2 className=" text-4xl font-bold text-yellow-500 "> Total Product in cart :  {cartBottle.length}</h2>
            </div>

            <div>
                <Cart handleRemoveFromCart={handleRemoveFromCart} cartBottle={cartBottle}></Cart>
            </div>
            <div className="grid grid-cols md:grid-cols-3 ">
                {
                  allBottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></Bottle>)  
                }
            </div>
        </div>
    );
};

export default Bottles;