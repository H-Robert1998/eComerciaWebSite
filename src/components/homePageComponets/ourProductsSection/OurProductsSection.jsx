import "./OurProductsSection.css";
import OurProductsSectionTitle from "./ourProductsSectionTitle/OurProductsSectionTitle";
const OurProductsSectionContentImg = lazy(
    () => import("./ourProductsSectionContentImg/OurProductsSectionContentImg"),
);
import OurProductsSectionBtn from "./ourProductsSectionBtn/ourProductsSectionBtn";
import { lazy, Suspense } from "react";

function OurProductsSection() {
    return (
        <div className="ourProductsSection_container">
            <OurProductsSectionTitle />
            <Suspense fallback={<p>Loading</p>}>
                <OurProductsSectionContentImg showcount={8} />
            </Suspense>
            <OurProductsSectionBtn />
        </div>
    );
}
export default OurProductsSection;
