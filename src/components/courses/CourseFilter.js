import React from "react";

const CourseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
        <div>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="">Course price</option>
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>
          </select>
        </div>
  );
};

export default CourseFilter;