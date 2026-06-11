import "./CheckoutPageComponetsMain.css";
import CheckoutPageComponetsMainBillingDetails from "./checkoutPageComponetsMainBillingDetails/CheckoutPageComponetsMainBillingDetails";
import CheckoutPageComponetsMainPlaceOrder from "./checkoutPageComponetsMainPlaceOrder/CheckoutPageComponetsMainPlaceOrder";
function CheckoutPageComponetsMain() {
    return (
        <div className="checkoutPageComponetsMain_container">
            <div className="checkoutPageComponetsMain_container_blok">
                <CheckoutPageComponetsMainBillingDetails />
                <CheckoutPageComponetsMainPlaceOrder />
            </div>
        </div>
    );
}
export default CheckoutPageComponetsMain;
