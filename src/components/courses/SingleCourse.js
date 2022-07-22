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
            <div className="row">
              <img className="img-thumbnail " src="/box.svg" alt="..." style={{width:"5em"}} />
            </div>

            <div className="row">
              {record.title}
              <div>
                <button className="" onClick={routeChange}>
                  React
                </button>
                <button className="" onClick={routeChange}>
                  React
                </button>
              </div>
            </div>
            <div className="row">
              <div className="text-bold">{record.author}</div>
            </div>
            <div className="row">
              <img src="/star.png" className="" alt="star" />
            </div>
            <div className="row">
              <div className="course-item__price">
                {record.discounted_price}
              </div>
            </div>
            <div className="course-item__price">{record.actual_price}</div>
            <div className="row">
              <button className="btn btn-sm" onClick={() => onAdd(record)}>
                Add To Cart
              </button>
            </div>
            <div className="row">
              <img
                src="/arrow.png"
                className=""
                onClick={routeChange}
                data-arg1={record.id}
                alt="arrow"
              />
            </div>
          </div>
        );
      }
      )}
    </>
  );
};

export default SingleCourse;
