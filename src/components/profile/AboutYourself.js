const AboutYourself = (props) => {
  return (
    <>
      <label className="label"         style={{
          "Ítext-align": "left",
          font: "normal normal medium 12px/15px Montserrat",
          "letter-spacing": "0px",
          color: "#454545",
          opacity: "1",
        }}>About yourself</label>
      <br />
      <textarea
        className="textarea"
        style={{ width: "600px", height: "200px",background: "#F6F8FF 0% 0% no-repeat padding-box"}}
      ></textarea>
    </>
  );
};

export default AboutYourself;
