import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (["/signup", "/signin"].includes(location.pathname)) return null;

  return (
    <div className={styles.header}>
      <button className={styles.logIn}>
        <div onClick={() => navigate("/signin")} className={styles.logIn1}>
          Log In
        </div>
      </button>
      <input
        className={styles.search}
        placeholder="Search SkillHub"
        type="text"
      />
    </div>
  );
};

export default Header;
