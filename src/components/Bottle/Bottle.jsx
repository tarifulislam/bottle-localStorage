const Bottle = ({bottle, handleAddCart}) => {
    const {img, name , price} = bottle;

    return (
        <div className=" border p-2 m-2">
            <img className="w-full" src={img} alt="bootle"/>
            <h2 className=" mt-2">{name}</h2>
            <p>Price : {price}</p>
            <button onClick={() => handleAddCart(bottle)} className="px-2 py-1 bg-green-300 rounded-md text-white my-1">Add To Cart</button>
        </div>
       
    );
};

export default Bottle;