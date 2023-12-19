import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header/Header";
import styles from "./AppLayout.module.css"; // Import your CSS module

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`${styles.grid} ${styles.hScreen} ${styles.gridRowsAuto1fr}`}
    >
      {isLoading && <Loader />}

      <Header />

      <div className={styles.overflowScroll}>
        <main className={`${styles.mxAuto} ${styles.maxW4xl}`}>
          <Outlet />
        </main>
      </div>

      {/* <CartOverview /> */}
    </div>
  );
}

export default AppLayout;
