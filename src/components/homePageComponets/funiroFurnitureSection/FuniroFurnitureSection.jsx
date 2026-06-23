import "./FuniroFurnitureSection.css";
import FuniroFurnitureSectionTitle from "./funiroFurnitureSectionTitle/FuniroFurnitureSectionTitle";
const FuniroFurnitureSectionContent = lazy(
    () =>
        import("./funiroFurnitureSectionContent/FuniroFurnitureSectionContent"),
);
import { lazy, Suspense } from "react";

function FuniroFurnitureSection() {
    return (
        <div className="funiroFurnitureSection_container">
            <FuniroFurnitureSectionTitle />
            <Suspense fallback={<p>Loading</p>}>
                <FuniroFurnitureSectionContent />
            </Suspense>
        </div>
    );
}
export default FuniroFurnitureSection;
