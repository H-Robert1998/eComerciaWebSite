import "./BrowseRangeSectionItems.css";
import BrowseRangeimg1 from "../../../../img/homePageimg/BrowseRangeSectionimg1.png";
import BrowseRangeimg2 from "../../../../img/homePageimg/BrowseRangeSectionimg2.png";
import BrowseRangeimg3 from "../../../../img/homePageimg/BrowseRangeSectionimg3.png";
function BrowseRangeSectionItems() {
    return (
        <div className="browseRangeSectionItems_container">
            <div className="browseRangeSectionItems_container_blok">
                <div className="browseRangeSectionItems_container_blok_textcentr">
                    <img
                        src={BrowseRangeimg1}
                        alt="furniture"
                        width={381}
                        height={480}
                    />
                    <p aria-label="Dining furniture category">Dining</p>
                </div>
                <div className="browseRangeSectionItems_container_blok_textcentr">
                    <img
                        src={BrowseRangeimg2}
                        alt="furniture"
                        width={381}
                        height={480}
                    />
                    <p>Living</p>
                </div>
                <div className="browseRangeSectionItems_container_blok_textcentr">
                    <img
                        src={BrowseRangeimg3}
                        alt="furniture"
                        width={381}
                        height={480}
                    />
                    <p>Bedroom</p>
                </div>
            </div>
        </div>
    );
}
export default BrowseRangeSectionItems;
