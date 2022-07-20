import AllCourses from "./AllCourses";
import Cart from "./Cart";

import "./Dashboard.css";
const Dashboard = () => {
  
  return (
    //   <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div className="row">
      <div className="column__1">
        <AllCourses />
      </div>
      <div className="column">
        <Cart />
      </div>
    </div>
  );
};

export default Dashboard;
