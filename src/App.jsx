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
            <section className="hero_container">
                <AppNavbar/>
                <HeroSectionItems/>
            </section>
            <section>
                <Features/>
            </section>
            <section className="bg-[#FBF7F2]">
                <PopularFoodItems/>
            </section>
            <section className="tableBooking_container">
                <TableBooking/>
            </section>
            <section>
                <Reviews/>
            </section>
            <section className="footer_container">
                <Footer/>
            </section>
        </>

    )
}