import './Pagination.css'
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // console.log(totalPosts)
  // console.log(postPerPage)
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;