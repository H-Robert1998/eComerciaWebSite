import HeroSection from "../components/homePageComponets/heroSection/HeroSection";
import BrowseRangeSection from "../components/homePageComponets/browseRangeSection/BrowseRangeSection";
import OurProductsSection from "../components/homePageComponets/ourProductsSection/OurProductsSection";
import InspirationsSection from "../components/homePageComponets/inspirationsSection/InspirationsSection";
import FuniroFurnitureSection from "../components/homePageComponets/funiroFurnitureSection/FuniroFurnitureSection";

function HomePage() {
    return (
        <div className="homePage_container">
            <HeroSection />
            <BrowseRangeSection />
            <OurProductsSection />
            <InspirationsSection />
            <FuniroFurnitureSection />
        </div>
    );
}
export default HomePage;
