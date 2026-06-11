import SingleProductNav from "../components/singleProductPageComponets/singleProductNav/SingleProductNav";
import SingleProductInfoSection from "../components/singleProductPageComponets/singleProductInfoSection/SingleProductInfoSection";
import SingleProductAdditionalInfoSection from "../components/singleProductPageComponets/singleProductAdditionalInfoSection/SingleProductAdditionalInfoSection";
import OurProductsSectionContentImg from "../components/homePageComponets/ourProductsSection/ourProductsSectionContentImg/OurProductsSectionContentImg";

function SingleProductPage() {
    return (
        <div className="singleProductPage_container">
            <SingleProductNav />
            <SingleProductInfoSection />
            <SingleProductAdditionalInfoSection />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "55px",
                    marginBottom: "26px",
                    fontWeight: "500",
                    fontSize: "36px",
                }}
            >
                <p>Related Products</p>
            </div>
            <OurProductsSectionContentImg showcount={4} />
        </div>
    );
}
export default SingleProductPage;
