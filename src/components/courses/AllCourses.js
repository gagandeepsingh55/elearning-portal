import "./AllCourses.css";
import { useState } from "react";
import SingleCourse from "./SingleCourse";
import Pagination from "./Pagination";
import CourseFilter from "./CourseFilter";

const AllCourses = (props) => {
  const [filteredCourse, setFilteredCourse] = useState("Course Price");
  const filterChangeHandler = (order) => {
    setFilteredCourse(order);
  };
  const { products, onAdd, cartItems, alert } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="column">
        <div className="row" style={{display: "inline-block"}}>All courses</div>
        <div className="row text-right" style={{display: "inline-block",float:"right"}}>
          {/* <CourseFilter
            selected={filteredCourse}
            onChangeFilter={filterChangeHandler}
          /> */}
        </div>
      </div>
      {/* {products.map((product) => ( */}
      <SingleCourse
        onAdd={onAdd}
        currentPosts={currentPosts}
        product={products}
      ></SingleCourse>
      {/* ))} */}

      <Pagination
        postPerPage={postPerPage}
        totalPosts={products.length}
        paginate={paginate}
      ></Pagination>
    </>
  );
};

export default AllCourses;
