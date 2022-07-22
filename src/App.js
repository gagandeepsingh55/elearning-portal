import "./App.css";
import ProfileForm from "./components/profile/ProfileForm";
import HeadNav from "./components/header/HeadNav";
import { Route,Routes,Navigate } from "react-router-dom";
import CourseDetails from "./components/courses/CourseDetails";
import Dashboard from "./components/courses/Dashboard";
import ShoppingCart from "./components/courses/ShopingCart";
function App() {
  return (
    <div>
      <HeadNav></HeadNav>
      <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/checkout" element={<ShoppingCart />} />
        {/* <Route path="/wishlist" element={<About />} /> */}
        <Route
          path="/coursedetail/:courseid" exact
          element={<CourseDetails />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* <Dashboard/> */}
      {/* <ProfileForm></ProfileForm> */}
    </div>
  );
}

export default App;
