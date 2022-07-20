import "./App.css";
import ProfileForm from "./components/profile/ProfileForm";
import HeadNav from "./components/header/HeadNav";
import { Route,Routes,Navigate } from "react-router-dom";

import Dashboard from "./components/courses/Dashboard";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/profile" element={<ProfileForm />} />
        {/* <Route path="/cart" element={<About />} /> */}
        {/* <Route path="/wishlist" element={<About />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <HeadNav></HeadNav>
      <Dashboard/> */}
      {/* <ProfileForm></ProfileForm> */}
    </div>
  );
}

export default App;
