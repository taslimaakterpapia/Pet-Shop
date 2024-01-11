import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
// import Category from "../pages/Home/Category/Category";




const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Category></Category> */}
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;