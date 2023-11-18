import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getAxiosInstance from "src/api/interceptors";
import { clearUserData } from "@features/user/userSlice";
import { IUser } from "src/interfaces/IUser";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = useSelector(
    (state: any) => state.user.userData
  ) as IUser | null;
  const dispatch = useDispatch();

  const logout = async () => {
    const sure = window.confirm("Are you sure you want to log out?");
    if (!sure) return;

    try {
      const responce = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).post("/auth/log-out");
    } catch (error) {
      console.log(error);
    }

    dispatch(clearUserData());

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/signin");
  };

  if (["/signup", "/signin"].includes(location.pathname)) return null;

  return (
    <div className={styles.header}>
      <div onClick={() => navigate("/")} className={styles.logo}>
        SkillHub
      </div>
      <input
        className={styles.search}
        placeholder="Search SkillHub"
        type="text"
      />
      <div className={styles.buttons}>
        {!userData?.name && (
          <button onClick={() => navigate("/signin")} className={styles.logIn}>
            Login
          </button>
        )}
        {userData?.name && (
          <>
            <button
              onClick={() => navigate("/create-post")}
              className={styles.logIn}
            >
              New post
            </button>
            <button
              onClick={() => navigate("/create-article")}
              className={styles.logIn}
            >
              New article
            </button>
            <button onClick={() => logout()} className={styles.logIn}>
              {userData?.name} ({userData?.role})
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
