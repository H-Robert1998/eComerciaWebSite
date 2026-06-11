import Titlebgimg from "../components/titlebgimg/Titlebgimg";
import OurAdvantages from "../components/ourAdvantages/OurAdvantages";
import ProductComparisonSection from "../components/productComparisonPageComponets/productComparisonSection/ProductComparisonSection";
import ProductComparisonTextSection from "../components/productComparisonPageComponets/productComparisonTextSection/productComparisonTextSection";
function ProductComparisonPage() {
    return (
        <div>
            <Titlebgimg name="Product Comparison" />
            <ProductComparisonSection />
            <ProductComparisonTextSection />
            <OurAdvantages />
        </div>
    );
}
export default ProductComparisonPage;
