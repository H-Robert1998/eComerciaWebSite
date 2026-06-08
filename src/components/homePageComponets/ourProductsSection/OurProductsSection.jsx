import "./OurProductsSection.css";
import OurProductsSectionTitle from "./ourProductsSectionTitle/OurProductsSectionTitle";
import OurProductsSectionContentImg from "./ourProductsSectionContentImg/OurProductsSectionContentImg";
import OurProductsSectionBtn from "./ourProductsSectionBtn/ourProductsSectionBtn";

function OurProductsSection() {
    return (
        <div className="ourProductsSection_container">
            <OurProductsSectionTitle />
            <OurProductsSectionContentImg showcount={8} />
            <OurProductsSectionBtn />
        </div>
    );
}
export default OurProductsSection;
