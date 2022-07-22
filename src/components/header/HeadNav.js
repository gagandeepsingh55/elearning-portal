import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";
const HeadNav = () => {
  let navigate = useNavigate();

  const routeChangeCart=()=>{
    let path = '/cart';
    navigate(path);
  }
  const routeChange = () => {
    let path = '/profile/';
    navigate(path);
  };
  const routeChangeCourses = () => {
    let path = '/dashboard';
    navigate(path);
  };
  return (
    <header className={classes.nav}>
      <img className={classes.logo} src="/Logo-2.png" alt="hashedin"/>
      <nav>
        <ul>
          <a onClick={routeChangeCourses}><li className={classes.courses}>Courses</li></a>
          <li className={classes.wishlist}><a>My Wishlist</a></li>
          <a onClick={routeChangeCart}><img src="/shopping-cart.svg"></img></a>
          <a onClick={routeChange}><img src="noun_profile_2068277.svg"></img></a>
        </ul>
      </nav>
    </header>
  );
};
export default HeadNav;
