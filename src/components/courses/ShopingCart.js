import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import {buttonStatusContext} from "./../courses/Dashboard"
import { useContext } from "react";
import HeadNav from "../header/HeadNav";


const ShoppingCart = ({route}) => {
  const location = useLocation();
  const cartItems = useContext(buttonStatusContext);
  // console.log("cartItems ShopingCart");
  // console.log(cartItems);

  const onRemove = (product) => {
    console.log("Inside onRemove")
    const exist = location.state.cartItems.find((x) => x.id === product.id);
    if (exist) {
      // setCartItems(cartItems.filter((x) => x.id !== product.id));
      
    }};
  return (
    <><HeadNav></HeadNav>
      <Header value="Shopping Cart"></Header>
      <div>{cartItems.length} Courses in Cart</div>
      <div className="row">
        <div className="column__1">
          {cartItems.map((record) => {
            return (
              <div className="card">
                <div className="row">
                  <img
                    className="img-thumbnail "
                    src="/box.svg"
                    alt="..."
                    style={{ width: "5em" }}
                  />
                </div>

                <div className="row">
                  {record.title}
                  <div className="text-bold">{record.author}</div>
                </div>
                <div className="row">
                  <button className="btn btn-sm">Add to Wishlist</button>
                </div>
                <div className="row">
                  <img src="/star.png" className="" alt="star" />
                </div>

                <div className="row">
                  <div className="course-item__price">
                    {record.discounted_price}
                  </div>
                </div>
                
                <img
                  src="/delete.svg"
                  className=""
                  onClick={() => onRemove(record)}

                  alt="delete"
                />
                <div>{console.log(cartItems)}</div>
              </div>
            );
          })}
        </div>
     
      <div className="column__2">
          <div className="card">Total Amount
            <div >
                <p className="fw-bold fs-2">{cartItems.reduce((a, c) => a + c.qty * c.actual_price, 0)}</p></div>
          <button onClick={()=>{alert("Checkout!!")}}>
                Checkout
              </button>
      </div></div>
      </div>
    </>
  );
};
export default ShoppingCart;
