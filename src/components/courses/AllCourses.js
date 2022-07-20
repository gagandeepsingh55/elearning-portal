import "./AllCourses.css";
import myData from "./../../resourses/coursesMockResponse.json";
import { useState } from "react";
import SingleCourse from "./SingleCourse";
import Pagination from "./Pagination";

const AllCourses = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = myData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <>
      <SingleCourse course={currentPosts}></SingleCourse>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={myData.length}
        paginate={paginate}
      ></Pagination>
    </>
  );
};

export default AllCourses;
