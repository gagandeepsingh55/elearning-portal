import classes from "./SingleCourse.css";
import { useNavigate } from "react-router-dom";

const SingleCourse = (props) => {
  const { onAdd, currentPosts, product } = props;
  let navigate = useNavigate();

  const routeChange = (event) => {
    // console.log(event.target.getAttribute('data-arg1'));
    let path = `/coursedetail/${event.target.getAttribute('data-arg1')}`;
    navigate(path);
  };
 

  // console.log("currentPosts")
  // console.log(currentPosts)
  return (
    <>
      {currentPosts.map((record) => {
        return (
          <div className={classes.card}>
            <div className={classes.box}></div>
            <div className={classes.coursename}>
              {record.title}

              <div>
                <button className={classes.react} onClick={routeChange}>
                  React
                </button>
                <button className={classes.react} onClick={routeChange}>
                  React
                </button>
              </div>
            </div>
            <div>{record.author}</div>
            <div>
              <img src="/star.png" className={classes.headerimg} alt="star"/>
            </div>
            <div className="course-item__price">{record.discounted_price}</div>
            <div className="course-item__price">{record.actual_price}</div>
            <button className={classes.btn} onClick={() => onAdd(record)}>
              Add To Cart
            </button>
            <img
              src="/arrow.png"
              className={classes.headerimg}
              onClick={routeChange}
              data-arg1={record.id}
              alt="arrow"
              
            />
          </div>
        );
        
      })}
    </>
  );
};

export default SingleCourse;
