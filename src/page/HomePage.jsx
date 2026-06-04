import Header from "../components/header/Header";
import HeroSection from "../components/homePageComponets/heroSection/HeroSection";
import BrowseRangeSection from "../components/homePageComponets/browseRangeSection/BrowseRangeSection";

function HomePage (){

    return(
        <div className="homePage_container">
            <Header />
            <HeroSection/>
            <BrowseRangeSection/>
        </div>
    );
}
export default HomePage