import Header from "../components/header/Header";
import HeroSection from "../components/homePageComponets/heroSection/HeroSection";
import BrowseRangeSection from "../components/homePageComponets/browseRangeSection/BrowseRangeSection";
import OurProductsSection from "../components/homePageComponets/ourProductsSection/OurProductsSection";

function HomePage (){

    return(
        <div className="homePage_container">
            <Header />
            <HeroSection/>
            <BrowseRangeSection/>
            <OurProductsSection/>
        </div>
    );
}
export default HomePage