import Titlebgimg from "../components/titlebgimg/Titlebgimg";
import OurAdvantages from "../components/ourAdvantages/OurAdvantages";
import CheckoutPageComponetsMain from "../components/checkoutPageComponets/checkoutPageComponetsMain/CheckoutPageComponetsMain";
function CheckoutPage() {
    return (
        <div>
            <Titlebgimg name="Checkout" />
            <CheckoutPageComponetsMain />
            <OurAdvantages />
        </div>
    );
}
export default CheckoutPage;
