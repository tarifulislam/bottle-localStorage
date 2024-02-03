
const CartDetails = ({cartProduct, handleRemoveFromCart}) => {
    return (
        <div className=" p-2 border-2 ">
            <img className="full" src={cartProduct.img} alt="" />
            <h2>{cartProduct.name}</h2>
            <button onClick={()=> handleRemoveFromCart(cartProduct.id)} className="px-2 py-1 bg-cyan-300 rounded-md">Remove</button>
        </div>
    );
};


export default CartDetails;