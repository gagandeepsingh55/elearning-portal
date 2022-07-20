const SingleCourse = (props) => {

  const addCourseToCart = (event) => {
    // event.preventDefault();
    // const expenseData ={
    //     title:enteredTitle,
    //     amount:enterendAmount,
    //     date: new Date(enterendDate)
    // }
    console.log(event);
    // setEnteredTitle('');
    // setEnterendAmount('');
    // setEnterendDate('');
}



  return <>  
  { props.course.map((record) => {
    console.log(record.actual_price)
    return (

// <form onSubmit={submitHandler}>
//     <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//             <label>Title</label>
//             <input type='text' value={enteredTitle} onChange={onChangeHandler}/>    
//         </div>
//         <div className='new-expense__control'>
//             <label>Amount</label>
//             <input type='number' value={enterendAmount} onChange={amountChangeHandler}/>    
//         </div>
//         <div className='new-expense__control'>
//             <label>Date</label>
//             <input type='date' value={enterendDate} onChange={dateChangeHandler}/>    
//         </div>
//     </div>
//     <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//     </div>
// </form>
      <div className="course-item">
        <div className="course-image">
          <img alt="Image Not found"></img>
        </div>
        <div className="course-item__description">{record.description}</div>
        <div className="course-item__author">{record.author}</div>
        <div className="course-item__price">{record.discounted_price}</div>
        <div className="course-item__price">{record.actual_price}</div>
        <button onClick={addCourseToCart}>Add To Cart</button>
      </div>
    );
  })}
  </>
};

export default SingleCourse;
