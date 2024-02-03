import CartDetails from "../CartDetails/CartDetails";
import PropTypes from 'prop-types';

const Cart = ({cartBottle, handleRemoveFromCart}) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {
                cartBottle.map((cartProduct, index) => <CartDetails key={index} cartProduct={cartProduct} handleRemoveFromCart={handleRemoveFromCart}></CartDetails>)
            }
        </div>
    );
};


Cart.propTypes = {
    cartBottle: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;