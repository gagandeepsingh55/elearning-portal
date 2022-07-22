import { useState } from "react";
import ShowProfessionalForm from "./ShowProfessionalForm";

const AreYouStudent = (props) => {
  const [profession, setProfession] = useState(false);

  const getProfession = (event) => {
    if (event.target.value === "false") {
      setProfession(false);
    } else {
      setProfession(true);
    }
  };

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
        Are you Student
      </label>
      <br />
      <div>
        <input
          type="radio"
          value="false"
          name="profession"
          onChange={getProfession}
        />{" "}
        Student
        <input
          type="radio"
          value="true"
          name="profession"
          onChange={getProfession}
        />{" "}
        Professional
      </div>
      <br/>
      {profession ? <ShowProfessionalForm></ShowProfessionalForm> : null}
    </>
  );
};

export default AreYouStudent;
