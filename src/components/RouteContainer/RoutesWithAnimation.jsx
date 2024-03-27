import { Route, Routes, useLocation } from "react-router"
import HomePage from "../../pages/HomePage";
import SneakerPage from "../../pages/SneakerPage";
import ErrorPage from "../../pages/ErrorPage";

const RoutesWithAnimation = () => {

    const location = useLocation();

    return(
        <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
            <Route path="/sneaker" element={<SneakerPage />} errorElement={<ErrorPage />} />
        </Routes>
    )

}

export default RoutesWithAnimation;