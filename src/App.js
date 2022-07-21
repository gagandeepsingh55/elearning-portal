import "./App.css";
import ProfileForm from "./components/profile/ProfileForm";
import HeadNav from "./components/header/HeadNav";
import { Route,Routes,Navigate } from "react-router-dom";
import CourseDetails from "./components/courses/CourseDetails";
import Dashboard from "./components/courses/Dashboard";
import Cart from "./components/courses/Cart";
import Layout from "./components/header/Layout";
function App() {
  return (
    <Layout>
      {/* <HeadNav></HeadNav> */}
      <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/wishlist" element={<About />} /> */}
        <Route
          path="/coursedetail/:courseid" exact
          element={<CourseDetails />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* <Dashboard/> */}
      {/* <ProfileForm></ProfileForm> */}
    </Layout>
  );
}

export default App;
