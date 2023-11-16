import Router from "@features/routing/components/Router";
import { fetchUserData } from "@features/user/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user.userData);

  useEffect(() => {
    if (userData) return;

    if (!localStorage.getItem("accessToken")) return;

    dispatch(fetchUserData());
  }, [dispatch, userData]);
  return <Router />;
}

export default App;
