import classes from "./SingleCourse.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import { useState } from "react";

const SingleCourse = (props) => {
  const { onAdd, currentPosts, product } = props;
  let navigate = useNavigate();

  const routeChange = (event) => {
    // console.log(event.target.getAttribute('data-arg1'));
    let path = `/coursedetail/${event.target.getAttribute("data-arg1")}`;
    navigate(path);
  };

  // console.log("currentPosts")
  // console.log(currentPosts)


  return (
    <>
      {currentPosts.map((record) => {
        return (
          <div className="card">
            <div>
            <div className="box"></div>
            </div>

            <div className="">
              <div className="text class"
                style={{
                  "padding-bottom": "50px",
                  "text-align": "left",
                  font: "normal normal 600 18px/22px Montserrat",
                  "letter-spacing": "0px",
                  color: "#080808",opacity: "1",
                  textAlign:"left"
                }}
              >
                {record.title}
              </div>
              <div >
                <button className="" onClick={routeChange}>
                  React
                </button>
                <button className="" onClick={routeChange}>
                  React
                </button>
              </div>
            </div>

            <div className="">
              <div className="text-bold" style={{ "padding-top": "17px" }}>{record.author}</div>
            </div>
            <div className="">
              <img src="/star.png" className="" style={{ "padding-top": "20px", "padding-left": "17px"  }} alt="star" />
            </div>
            <div className="" >
              <div className="course-item__price" style={{ "padding-top": "24px" }}>
                {record.discounted_price ?record.discounted_price : record.actual_price}
              </div>
            </div>
            <div
              className="course-item__price"
              style={{ "padding-top": "24px" }}
            >
              <s>{record.actual_price && record.discounted_price ? record.actual_price : ""}</s>
            </div>
            <div></div>
            <div className="" style={{ "padding-top": "15px" }}>
              <button
                className="btn btn-sm"
                style={{ color: "white" }}
                onClick={() => onAdd(record)}
              >
                Add To Cart
              </button>
            </div>
            <div className="">
              <img
                style={{ "padding-top": "30px"}}
                src="/arrow.png"
                className=""
                onClick={routeChange}
                data-arg1={record.id}
                alt="arrow"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleCourse;
