import AppNavbar from "./components/AppNavbar.jsx";
import HeroSectionItems from "./components/HeroSectionItems.jsx";
import Features from "./components/Features.jsx";
import PopularFoodItems from "./components/PopularFoodItems.jsx";
import TableBooking from "./components/TableBooking.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <AppNavbar/>
            <HeroSectionItems/>
            <Features/>
            <PopularFoodItems/>
            <TableBooking/>
            <Reviews/>
            <Footer/>
        </>

    )
}