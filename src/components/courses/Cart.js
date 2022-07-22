import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  let navigate = useNavigate();

  // console.log(cartItems);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.actual_price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const routeChangeCart=()=>{
  navigate(`/checkout`, { state: { cartItems } });
};
  

  console.log(itemsPrice);
  // console.log(taxPrice);
  // console.log(totalPrice);
  return (
    <div>
      <div className="row">
        <input type="search" placeholder="Search Here" className="form-control"/>
        <button className="row">
          <img className="" src="/search.png" />
        </button>
      </div>
      <h1>View Your Cart</h1>
      <div>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => (

          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              {/* <button onClick={() => onAdd(item)} className="add">
                +
              </button> */}
            </div>

            <div className="col-2 text-right">
              {item.qty} x Rs{item.actual_price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (

          <>
            <hr></hr>
            
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs{itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs{taxPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">Rs{shippingPrice}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={()=>{routeChangeCart()}}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
