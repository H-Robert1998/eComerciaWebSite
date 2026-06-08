import Titlebgimg from "../components/titlebgimg/Titlebgimg";
import ShopFilter from "../components/shopPageComponets/shopFilter/ShopFilter";
import OurProductsSectionContentImg from "../components/homePageComponets/ourProductsSection/ourProductsSectionContentImg/OurProductsSectionContentImg";
import AllShopProductsSectionPageNavigation from "../components/shopPageComponets/allShopProductsSection/allShopProductsSectionPageNavigation/allShopProductsSectionPageNavigation";
import OurAdvantages from "../components/ourAdvantages/OurAdvantages";
function ShopPage() {
    return (
        <div>
            <Titlebgimg name="Shop" />
            <ShopFilter />
            <OurProductsSectionContentImg showcount={16} />
            <AllShopProductsSectionPageNavigation />
            <OurAdvantages />
        </div>
    );
}
export default ShopPage;
