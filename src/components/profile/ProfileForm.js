import AboutYourself from "./AboutYourself";
import AreaOfInterest from "./AreaOfInterest";
import DisplayName from "./DisplayName";
import AreYouStudent from "./AreYouStudent";
import Header from "./../courses/Header"
import Headnav from './../header/HeadNav'
import './ProfileForm'
const ProfileForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
<Headnav></Headnav>
    <Header value="My Profile"></Header>
        <div className="column__1" style={{width: "20%"}}>
          <div className="row">
            <img
              className="image"
              src="/Mask Group 2.png"
              alt="Profile Pic"
            ></img>
          </div>
          </div>
          <div className="column__2" style={{width: "80%"}}>
          <div className="row">
            <form className="formlayout" onSubmit={submitHandler}>
              <DisplayName name="name"></DisplayName>
              <br></br>
              <AboutYourself></AboutYourself>
              <br/>
              <AreaOfInterest></AreaOfInterest>
              <br/>
              <AreYouStudent></AreYouStudent>
              <br/>
              <button className="btn" style={{float: "right"}} type="submit" onClick={()=>{alert("Your Profile is Successfully Saved")}}>Save</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default ProfileForm;
