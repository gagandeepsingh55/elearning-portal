import classes from "./MainHeader.module.css";
const HeadNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
           {/* eslint-disable-next-line  */}
            <a class="navbar-brand" href="#">
              <img src="./../../images/Logo-2.png"alt="Hashedin Logo" />
            </a>
          </li>
          <li><a>Courses</a></li>
          <li><a>My Wishlist</a></li>
          <li><a>cart</a></li>
          <li><a>Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default HeadNav;
