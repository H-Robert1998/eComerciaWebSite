import "./InspirationsSection.css"
import InspirationsSectionTitle from "./inspirationsSectionTitle/InspirationsSectionTitle";
import InspirationsSectionSlider from "./inspirationsSectionSlider/InspirationsSectionSlider";

function InspirationsSection (){

    return(
        <div className="inspirationsSection_container">
            <InspirationsSectionTitle/>
            <InspirationsSectionSlider/>
        </div>
    );
}
export default InspirationsSection