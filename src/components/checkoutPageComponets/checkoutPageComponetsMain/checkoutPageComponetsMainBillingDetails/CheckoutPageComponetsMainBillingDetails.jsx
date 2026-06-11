import "./CheckoutPageComponetsMainBillingDetails.css";

function CheckoutPageComponetsMainBillingDetails() {
    return (
        <div className="checkoutPageComponetsMainBillingDetails_container">
            <div className="checkoutPageComponetsMainBillingDetails_container_blok">
                <p className="checkoutPageComponetsMainBillingDetails_container_tittleText">
                    Billing details
                </p>
                <div className="checkoutPageComponetsMainBillingDetails_container_blokInputName">
                    <div className="checkoutPageComponetsMainBillingDetails_container_blokInputName_blok1">
                        <p>First Name</p>
                        <input type="text" />
                    </div>
                    <div className="checkoutPageComponetsMainBillingDetails_container_blokInputName_blok2">
                        <p>Last Name</p>
                        <input type="text" />
                    </div>
                </div>
                <p>Company Name (Optional)</p>
                <input type="text" />
                <p>Country / Region</p>
                <div className="checkoutPageComponetsMainBillingDetails_container_blok_select-wrapper">
                    <select name="" id="">
                        <option>Sri Lanka</option>
                        <option>Sri Lanka</option>
                        <option>Sri Lanka</option>
                    </select>
                </div>
                <p>Street address</p>
                <input type="text" />
                <p>Town / City</p>
                <input type="text" />
                <p>Province</p>
                <div className="checkoutPageComponetsMainBillingDetails_container_blok_select-wrapper">
                    <select name="" id="">
                        <option>Western Province</option>
                        <option>Western Province</option>
                        <option>Western Province</option>
                    </select>
                </div>
                <p>ZIP code</p>
                <input type="text" />
                <p>Phone</p>
                <input type="text" />
                <p>Email address</p>
                <input type="text" />
                <input
                    type="text"
                    className="checkoutPageComponetsMainBillingDetails_container_blok_lastInput"
                    placeholder="Additional information"
                />
            </div>
        </div>
    );
}
export default CheckoutPageComponetsMainBillingDetails;
