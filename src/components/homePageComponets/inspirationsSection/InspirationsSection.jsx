import "./InspirationsSection.css";
import InspirationsSectionTitle from "./inspirationsSectionTitle/InspirationsSectionTitle";
const InspirationsSectionSlider = lazy(
    () => import("./inspirationsSectionSlider/InspirationsSectionSlider"),
);
import { lazy, Suspense } from "react";

function InspirationsSection() {
    return (
        <div className="inspirationsSection_container">
            <InspirationsSectionTitle />
            <Suspense fallback={<p>Loading</p>}>
                <InspirationsSectionSlider />
            </Suspense>
        </div>
    );
}
export default InspirationsSection;
