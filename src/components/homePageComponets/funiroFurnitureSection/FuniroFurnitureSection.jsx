import "./FuniroFurnitureSection.css"
import FuniroFurnitureSectionTitle from "./funiroFurnitureSectionTitle/FuniroFurnitureSectionTitle";
import FuniroFurnitureSectionContent from "./funiroFurnitureSectionContent/FuniroFurnitureSectionContent";
function FuniroFurnitureSection (){

    return(
        <div className="funiroFurnitureSection_container">
            <FuniroFurnitureSectionTitle/>
            <FuniroFurnitureSectionContent/>
        </div>
    );
}
export default FuniroFurnitureSection