import "./CartMainCartTotals.css";

function CartMainCartTotals() {
    return (
        <div className="artMainCartTotals_container">
            <div className="artMainCartTotals_container_blok">
                <p className="artMainCartTotals_container_blok_text1">
                    Cart Totals
                </p>
                <div className="artMainCartTotals_container_blok_subtotal">
                    <p className="artMainCartTotals_container_blok_subtotal_text1">
                        Subtotal
                    </p>
                    <p className="artMainCartTotals_container_blok_subtotal_text2">
                        Rs. 250,000.00
                    </p>
                </div>
                <div className="artMainCartTotals_container_blok_total">
                    <p className="artMainCartTotals_container_blok_total_text1">
                        Total
                    </p>
                    <p className="artMainCartTotals_container_blok_total_text2">
                        Rs. 250,000.00
                    </p>
                </div>
                <button className="artMainCartTotals_btnCheckOut">
                    Check Out
                </button>
            </div>
        </div>
    );
}
export default CartMainCartTotals;
