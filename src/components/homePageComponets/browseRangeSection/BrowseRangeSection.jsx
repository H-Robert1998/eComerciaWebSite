import "./BrowseRangeSection.css"
import BrowseRangeSectionTitle from "./browseRangeSectionTitle/BrowseRangeSectionTitle";
import BrowseRangeSectionItems from "./browseRangeSectionItems/BrowseRangeSectionItems";

function BrowseRangeSection (){

    return(
        <div className="browseRangeSection_container">
            <BrowseRangeSectionTitle/>
            <BrowseRangeSectionItems/>
        </div>
    );
}
export default BrowseRangeSection