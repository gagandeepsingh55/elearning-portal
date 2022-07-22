import { useState } from "react";

const ShowProfessionalForm = (props) => {
  const [experiance, setExperience] = useState();
  const [expertise, setExpertise] = useState();
  const [enterendDate,setChangeValue] = useState('');
  const getExpertise = (event) => {
    setExpertise(event.target.value);
  };
  const getExperience = (event) => {
    setExperience(event.target.value);
  };
  const checkInp =(event) => {
    
    if (!isNaN(event.target.value)) 
    {
      alert("Error Message : Please enter characters");
    }else{
      setChangeValue(event.target.value)
    }
  }
  return (
    <>
      <label
        style={{
          "Ítext-align": "left",
          font: "normal normal medium 12px/15px Montserrat",
          "letter-spacing": "0px",
          color: "#454545",
          opacity: "1",
        }}
      >
        How much experience do you have?
      </label>
      <div>
        <input
          type="radio"
          value="lessthan5"
          name="experiance"
          onChange={getExperience}
        />{" "}
        0-5
        <input
          type="radio"
          value="between5and10"
          name="experiance"
          onChange={getExperience}
        />{" "}
        5-10
        <input
          type="radio"
          value="morethan10"
          name="experiance"
          onChange={getExperience}
        />{" "}
        10+
      </div>
      <br></br>
      <label
        style={{
          "Ítext-align": "left",
          font: "normal normal medium 12px/15px Montserrat",
          "letter-spacing": "0px",
          color: "#454545",
          opacity: "1",
        }}
      >
      
        What is your expertise?
      </label>
      <div>
        <input
          type="radio"
          value="lessthan5"
          name="experiance"
          onChange={getExpertise}
        />{" "}
        Java
        <input
          type="radio"
          value="between5and10"
          name="experiance"
          onChange={getExpertise}
        />{" "}
        React
        <input
          type="radio"
          value="morethan10"
          name="experiance"
          onChange={getExpertise}
        />{" "}
        Backend
      </div>
      <label
        style={{
          "Ítext-align": "left",
          font: "normal normal medium 12px/15px Montserrat",
          "letter-spacing": "0px",
          color: "#454545",
          opacity: "1",
        }}
      >
          <br/>
        Mention your role?
      </label>
      <input onChange={checkInp} value={enterendDate} type="text"></input>
      <br/>
    </>
  );
};

export default ShowProfessionalForm;
