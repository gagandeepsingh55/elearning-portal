import "./DisplayName.css";

const DisplayName = (props) => {
  return (
    <>
      <div
        className="column"
        style={{ "justify-content": "space-between", display: "flex" }}
      >
        <div className="row" style={{ display: "inline-block" }}>
          <label
            className="label__one"
            style={{
              "Ítext-align": "left",
              font: "normal normal medium 12px/15px Montserrat",
              "letter-spacing": "0px",
              color: "#454545",
              opacity: "1",
            }}
          >
            DisplayName
          </label>
          <br />
          <input
            className="textbox__one"
            type="text"
            values="placeholder text"
            style={{background: "#F6F8FF 0% 0% no-repeat padding-box"}}
          ></input>
        </div>
        <div className="row" style={{ display: "inline-block" }}>
          <label
            className="label__two"
            style={{
              "Ítext-align": "left",
              font: "normal normal medium 12px/15px Montserrat",
              "letter-spacing": "0px",
              color: "#454545",
              opacity: "1",
            }}
          >
            FirstName
          </label>
          <br />
          <input
            className="textbox__two"
            type="text"
            values="placeholder text"
            style={{background: "#F6F8FF 0% 0% no-repeat padding-box"}}
          ></input>
        </div>
        <div className="row" style={{ display: "inline-block" }}>
          <label
            className="label__three"
            style={{
              "Ítext-align": "left",
              font: "normal normal medium 12px/15px Montserrat",
              "letter-spacing": "0px",
              color: "#454545",
              opacity: "1",
            }}
          >
            LastName
          </label>
          <br />
          <input
            className="textbox__three"
            type="text"
            values="placeholder text"
            style={{background: "#F6F8FF 0% 0% no-repeat padding-box"}}
          ></input>
        </div>
      </div>
    </>
  );
};

export default DisplayName;
