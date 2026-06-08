import Header from "../components/header/Header";
import HeroSection from "../components/homePageComponets/heroSection/HeroSection";
import BrowseRangeSection from "../components/homePageComponets/browseRangeSection/BrowseRangeSection";
import OurProductsSection from "../components/homePageComponets/ourProductsSection/OurProductsSection";
import InspirationsSection from "../components/homePageComponets/inspirationsSection/InspirationsSection";
import FuniroFurnitureSection from "../components/homePageComponets/funiroFurnitureSection/FuniroFurnitureSection";
import Footer from "../components/footer/Footer";

function HomePage (){

    return(
        <div className="homePage_container">
            <Header />
            <HeroSection/>
            <BrowseRangeSection/>
            <OurProductsSection/>
            <InspirationsSection/>
            <FuniroFurnitureSection/>
            <Footer/>
        </div>
    );
}
export default HomePage