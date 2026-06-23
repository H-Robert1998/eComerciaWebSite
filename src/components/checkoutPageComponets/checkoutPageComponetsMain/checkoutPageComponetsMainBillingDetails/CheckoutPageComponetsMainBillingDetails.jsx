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
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="checkoutPageComponetsMainBillingDetails_container_blokInputName_blok2">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" />
                    </div>
                </div>
                <label htmlFor="Company">Company Name (Optional)</label>
                <input type="text" id="Company" />
                <label htmlFor="Country">Country / Region</label>
                <div className="checkoutPageComponetsMainBillingDetails_container_blok_select-wrapper">
                    <select name="" id="Country">
                        <option>Sri Lanka</option>
                        <option>Sri Lanka</option>
                        <option>Sri Lanka</option>
                    </select>
                </div>
                <label htmlFor="Street">Street address</label>
                <input type="text" id="Street" />
                <label htmlFor="town">Town / City</label>
                <input type="text" id="town" />
                <label htmlFor="provincedd">Province</label>
                <div className="checkoutPageComponetsMainBillingDetails_container_blok_select-wrapper">
                    <select name="" id="provincedd">
                        <option>Western Province</option>
                        <option>Western Province</option>
                        <option>Western Province</option>
                    </select>
                </div>
                <label htmlFor="ZIP">ZIP code</label>
                <input type="text" id="ZIP" />
                <label htmlFor="Phone">Phone</label>
                <input type="email" id="Phone" />
                <label htmlFor="Email">Email address</label>
                <input type="text" id="Email" />
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
