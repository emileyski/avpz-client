import { Preloader } from "@components/UI/Preloaders";
import { fetchUserData } from "@features/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectedPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // извлекаем Query String из location.search

  useEffect(() => {
    const queryString = new URLSearchParams(location.search);
    const accessToken = queryString.get("accessToken");
    const refreshToken = queryString.get("refreshToken");

    localStorage.setItem("accessToken", accessToken!);
    localStorage.setItem("refreshToken", refreshToken!);

    dispatch(fetchUserData());

    navigate("/");
  }, [location.search, dispatch, navigate]);

  return <Preloader />;
};

export default RedirectedPage;
