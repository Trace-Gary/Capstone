import { Route, Routes } from "react router dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";




export default function ContentRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
    )
}
