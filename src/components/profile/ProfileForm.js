import AboutYourself from "./AboutYourself";
import AreaOfInterest from "./AreaOfInterest";
import DisplayName from "./DisplayName";
import AreYouStudent from "./AreYouStudent";
const ProfileForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <>
    <div>
    <img className="image" src="./../../images/Mask Group 2.png" alt="Profile Pic" ></img>
    <form className="formlayout" onSubmit={submitHandler}>
      <DisplayName name="name"></DisplayName>
      <AboutYourself></AboutYourself>
      <AreaOfInterest></AreaOfInterest>
      <AreYouStudent></AreYouStudent>
      <button type='submit'>Save</button>
      </form>
      </div>
    </>
  );
};

export default ProfileForm;
