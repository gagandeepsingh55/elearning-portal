import { createContext, useState } from "react";
import myData from "./../../resourses/coursesMockResponse";
import AllCourses from "./AllCourses";
import Cart from "./Cart";
import Header from "./Header";
import "./Dashboard.css";


const Dashboard = (props) => {
  const { products } = myData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    // console.log("prod")
    // console.log(product)
    const exist = cartItems.find((x) => x.id === product.id);
    // const alert = false;
    console.log(exist);

    if (exist) {
      console.log("exist");
      alert("Item Already Preset");
      // alert = true;
      setCartItems(
        cartItems.map((x) =>
          // x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          x.id === product.id ? x : x
        )
      );
    } else {
      console.log("existelse ");
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
    <>
      <Header value="Discover Latest Courses on" value2="React"/>
      <div className="row">
        <div className="column__1">
          <AllCourses onAdd={onAdd} products={products} cartItems={cartItems} />
        </div>
        <div className="column__2">
          {/* <CartContext.Provider > */}
          <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
          {/* </CartContext.Provider> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
