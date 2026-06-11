import "./CheckoutPageComponetsMainPlaceOrder.css";

function CheckoutPageComponetsMainPlaceOrder() {
    return (
        <div className="checkoutPageComponetsMainPlaceOrder_container">
            <div className="checkoutPageComponetsMainPlaceOrder_container_blok">
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex1">
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_Product">
                        Product
                    </p>
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_Subtotal">
                        Subtotal
                    </p>
                </div>
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex1">
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_ProductName">
                        Asgaard sofa <span>x 1</span>
                    </p>
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_ProductValue">
                        Rs. 250,000.00
                    </p>
                </div>
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex1">
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_Subtotal">
                        Subtotal
                    </p>
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_SubtotalValue">
                        Rs. 250,000.00
                    </p>
                </div>
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex1">
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_Total">
                        Total
                    </p>
                    <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textblok_TotalValue">
                        Rs. 250,000.00
                    </p>
                </div>
            </div>
            <hr />
            <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2">
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_circl1"></div>
                <p className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_text1">
                    Direct Bank Transfer
                </p>
            </div>
            <p className="checkoutPageComponetsMainPlaceOrder_container_blok_text1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
            </p>
            <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2">
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_circl2"></div>
                <p className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_text2">
                    Direct Bank Transfer
                </p>
            </div>
            <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2">
                <div className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_circl2"></div>
                <p className="checkoutPageComponetsMainPlaceOrder_container_blok_Flex2_text2">
                    Cash On Delivery
                </p>
            </div>
            <p className="checkoutPageComponetsMainPlaceOrder_container_blok_textpolicy">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <strong> privacy policy.</strong>
            </p>
            <div className="checkoutPageComponetsMainPlaceOrder_container_btnPlaceorder">
                Place order
            </div>
        </div>
    );
}
export default CheckoutPageComponetsMainPlaceOrder;
