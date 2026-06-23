import "./BrowseRangeSection.css";
import BrowseRangeSectionTitle from "./browseRangeSectionTitle/BrowseRangeSectionTitle";
const BrowseRangeSectionItems = lazy(
    () => import("./browseRangeSectionItems/BrowseRangeSectionItems"),
);
import { lazy, Suspense } from "react";

function BrowseRangeSection() {
    return (
        <div className="browseRangeSection_container">
            <BrowseRangeSectionTitle />
            <Suspense fallback={<p>Loading</p>}>
                <BrowseRangeSectionItems />
            </Suspense>
        </div>
    );
}
export default BrowseRangeSection;
