import { Outlet } from "react-router-dom";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const MainPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>  
        </>
    );
};

export default MainPage;