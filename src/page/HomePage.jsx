import Header from "../components/header/Header";
import HeroSection from "../components/homePageComponets/heroSection/HeroSection";

function HomePage (){

    return(
        <div className="homePage_container">
            <Header />
            <HeroSection/>
        </div>
    );
}
export default HomePage