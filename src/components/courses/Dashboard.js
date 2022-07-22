import { createContext, useState } from "react";
import myData from "./../../resourses/coursesMockResponse";
import AllCourses from "./AllCourses";
// import Cart from "./Cart";
import "./Dashboard.css";
import HeadNav from "./../header/HeadNav";
import Header from "./Header";
import CourseFilter from "./CourseFilter";

export const buttonStatusContext = createContext();

const Dashboard = (props) => {
  let { products } = myData;
  const [sortedProduct, setProduct] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  const switchCart = (value) => {
    setButtonState(value);
  };
  const changeCartOrder = (value) => {

    setProduct(value);
    console.log("value");
    console.log(value);
  };
  const [filteredCourse, setFilteredCourse] = useState("Course Price");
  const filterChangeHandler = (order) => {
    const asc = [...sortedProduct]
    const dec = [...sortedProduct]
    setFilteredCourse(order);
    const numAscending = asc.sort(
      (a, b) => parseInt(a.actual_price) - parseInt(b.actual_price)
    );
      console.log(numAscending,"numAscending")
    const numDescending = dec.sort(
      (b, a) => parseInt(b.actual_price) - parseInt(a.actual_price)
    );
    console.log(numDescending,"numDescending")
    console.log(order, "order",typeof(order));
    // order === "true" ? changeCartOrder(numAscending): changeCartOrder(numDescending) ;
    if(order === "true"){
      console.log("inside true")
      changeCartOrder(numAscending)
      
    }else{changeCartOrder(numDescending)
      console.log(numDescending);
      console.log("inside false ")}
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      console.log("exist");
      alert("Item Already Preset");
      setCartItems(cartItems.map((x) => (x.id === product.id ? x : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      alert("Item added to cart");
    }
  };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.actual_price, 0);
  const totalPrice = itemsPrice;
  return (
    <buttonStatusContext.Provider value={setButtonState}>
      {!buttonState && (
        <>
          <HeadNav></HeadNav>
          <Header value="Discover Latest Courses on" value2="React" />
          <div className="col-8">
            <div className="column__1">
              <CourseFilter
                style={{ display: "inline-block", float: "right" }}
                selected={filteredCourse}
                onChangeFilter={filterChangeHandler}
              />
              {/* {console.log(products)} */}
              <AllCourses
                onAdd={onAdd}
                products={sortedProduct}
                cartItems={cartItems}
              />
            </div>
            <div className="column__2">
              <div>
                <div>
                  <div className="row">
                    <input
                      type="search"
                      placeholder="Search Here"
                      className="form-control"
                    />
                    <button className="row">

                      <img alt="..." className="" src="/search.png" />
                    </button>
                  </div>
                  <h1 className="text-center">View Your Cart</h1>
                  <div>
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                    {cartItems.map((item) => (
                      <div key={item.id} className="card">
                        <img
                          className="img-thumbnail "
                          src="/box.svg"
                          alt="..."
                          style={{ width: "5em" }}
                        />
                        <div className="col-2">{item.title}</div>
                        <div
                          className="col-2 card-body"
                          style={{ float: "bottom" }}
                        >
                          <button
                            onClick={() => onRemove(item)}
                            className="remove"
                          >
                            -
                          </button>{" "}
                        </div>

                        <div className="col-2 text-right">
                          Rs{item.actual_price}
                        </div>
                      </div>
                    ))}
                    {cartItems.length !== 0 && (
                      <>
                        <hr></hr>
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
                          <button
                            onClick={() => {
                              switchCart(true);
                            }}
                          >
                            Checkout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {buttonState && (
        <>
          <HeadNav></HeadNav>
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
                        {record.actual_price}
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
              <div className="card">
                Total Amount
                <div>
                  <p className="fw-bold fs-2">
                    {cartItems.reduce((a, c) => a + c.qty * c.actual_price, 0)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    alert("Checkout!!");
                  }}
                >
                  Checkout
                </button>
                <button
                  onClick={() => {
                    switchCart(false);
                  }}
                >
                  back
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {console.log("Products")}
      {console.log(products)}
      {console.log("sortedProduct")}
      {console.log(sortedProduct)}
    </buttonStatusContext.Provider>
  );
};

export default Dashboard;
