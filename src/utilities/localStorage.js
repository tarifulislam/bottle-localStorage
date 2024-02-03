
// get data from localStorage --------
const getStoredCart = () => {
    const storedCartString = localStorage.getItem("cart");
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return[];
}

// save data to localStorage --------
const saveCartToLS = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringfied);
}

// remove data from localStorage --------
const removeFromLS = id =>{
    const cart = getStoredCart()
    const remaingBottle = cart.filter(idx => idx !== id);
    saveCartToLS(remaingBottle);
}


const addToLS = id => {
    const cart = getStoredCart();
         cart.push(id);
    // save to local storage 
    saveCartToLS(cart);
}

export {addToLS , getStoredCart, removeFromLS}