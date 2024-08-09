import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainMenu() {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default MainMenu;
