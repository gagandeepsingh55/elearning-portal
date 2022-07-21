import { useState } from "react";
import myData from "./../../resourses/coursesMockResponse";
import AllCourses from "./AllCourses";
import Cart from "./Cart";
import classes from "./Dashboard.css";

import "./Dashboard.css";
const Dashboard = (props) => {
  const { products } = myData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    // console.log("prod")
    // console.log(product)
    const exist = cartItems.find((x) => x.id === product.id);
    
    console.log(exist)
    if (exist) {
      console.log("exist")
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }else{
      console.log("existelse ")
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    //   <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div className="row">
      <div className="column__1">
        <AllCourses onAdd ={onAdd} products ={products} cartItems={cartItems} />
      </div>
      <div className="column__2">
        <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default Dashboard;
