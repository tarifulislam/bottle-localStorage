import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from './../Cart/Cart';


const Bottles = () => {
    const [allBottles, SetallBottles] = useState([]);
    const [cartBottle, setCartBottle] = useState([]);
    
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
               const bottle = allBottles.find(botle => botle.id === id);
               if(bottle){
                   saveBottleInCart.push(bottle);
               }
            }
            console.log(saveBottleInCart);
            setCartBottle(saveBottleInCart)
        }
    },[allBottles])

    const handleAddCart = (bottleData) => {
        const newCartBottle = [...cartBottle, bottleData];
              setCartBottle(newCartBottle)
              addToLS(bottleData.id);
    }

    const handleRemoveFromCart = id => {
        const remainingCart =  cartBottle.filter(botle => botle.id !== id)
        setCartBottle(remainingCart)
        removeFromLS(id);
    }

    return (
        <div className="container mx-auto">
            <div>
                {
                    cartBottle.length
                }
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