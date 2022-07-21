import "./AllCourses.css";
import { useState } from "react";
import SingleCourse from "./SingleCourse";
import Pagination from "./Pagination";

const AllCourses = (props) => {
  const { products, onAdd, cartItems } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <>
        {/* {products.map((product) => ( */}
          <SingleCourse onAdd={onAdd} currentPosts={currentPosts} product={products} ></SingleCourse>
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