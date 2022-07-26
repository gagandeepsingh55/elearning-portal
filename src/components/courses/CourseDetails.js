import React from "react";
import Header from "./Header";
import classes from "./CourseDetails.css";
import data from "../../resourses/coursesMockResponse.json"
import { useParams } from "react-router-dom";
import HeadNav from "../header/HeadNav";
import { buttonStatusContext } from "./Dashboard";
import { useContext } from "react";

const CourseDetails = (props) => {
  const param = useParams();
  const setButtonState = useContext(buttonStatusContext);
  const singleCourse = data.find((course) => course.id === param.courseid);
        
  return (
    <div className={classes.home}>
      <HeadNav setButtonState={setButtonState}></HeadNav>
      <Header />
      <div className={classes.tab}>
        <div className={classes.sort}>
          <div className={classes.allcourse}>
            All courses &gt; {singleCourse.title}
          </div>
        </div>
      </div>
      <div className={classes.banner}>
        <div className={classes.heading}>{singleCourse.title}</div>
        <div className={classes.text}>{singleCourse.description}</div>
        <div className={classes.text}>{singleCourse.author}</div>
        {/* <div className={classes.text}>singleCourse.tags.map((tag)=>(
          <div >{tag}</div>
          ))</div> */}
        <div className={classes.text}>{singleCourse.tags}</div>
      </div>

      <div className={classes.details}>{singleCourse.details}</div>
    </div>
  );
};

export default CourseDetails;