import { useState } from "react";

const ShowProfessionalForm = (props) => {

    const [experiance,setExperience] = useState();
    const [expertise,setExpertise] = useState();
    const getExpertise = (event) => {
        setExpertise(event.target.value);
    }
    const getExperience = (event) => {
        setExperience(event.target.value);
    }
    return (
      <>
        <label>How much experience do you have?</label>
        <div >
        <input type="radio" value="lessthan5" name="experiance" onChange={getExperience} /> 0-5
        <input type="radio" value="between5and10" name="experiance" onChange={getExperience} /> 5-10
        <input type="radio" value="morethan10" name="experiance" onChange={getExperience} /> 10+
      </div>
      <label>What is your expertise?</label>
        <div >
        <input type="radio" value="lessthan5" name="experiance" onChange={getExpertise} /> Java
        <input type="radio" value="between5and10" name="experiance" onChange={getExpertise} /> React
        <input type="radio" value="morethan10" name="experiance" onChange={getExpertise} /> Backend
      </div>
      <label>Mention your role?</label>
      <input type="text"></input>
      <h2>{experiance}</h2>
      <h2>{expertise}</h2>
      </>
    );
  };
  
  export default ShowProfessionalForm;
  