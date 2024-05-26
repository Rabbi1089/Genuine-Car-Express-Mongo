import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/navbar/NavBar";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
