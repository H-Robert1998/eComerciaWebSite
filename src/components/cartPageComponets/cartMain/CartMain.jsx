import "./CartMain.css";
import CartMainCartTotals from "./cartMainCartTotals/cartMainCartTotals";
import addbycartimg from "../../../img/cartpageimg/addbycartimg.png";
function CartMain() {
    return (
        <div className="cartMain_container">
            <div className="cartMain_container_blok">
                <div className="cartMain_container_blok_section1">
                    <div className="cartMain_container_blok_section1_header">
                        <p className="cartMain_container_blok_section1_header_text1left">
                            Product
                        </p>
                        <p
                            className="cartMain_container_blok_section1_headertexthide
                        cartMain_container_blok_section1_header_text2left"
                        >
                            Price
                        </p>
                        <p
                            className="cartMain_container_blok_section1_headertexthide
                        cartMain_container_blok_section1_header_text3left"
                        >
                            Quantity
                        </p>
                        <p
                            className="cartMain_container_blok_section1_headertexthide
                        cartMain_container_blok_section1_header_text4left"
                        >
                            Subtotal
                        </p>
                    </div>
                    <div className="cartMain_container_blok_section1_addBayProduct">
                        <div
                            className="cartMain_container_blok_section1_addBayProduct_img"
                            style={{ backgroundImage: `url(${addbycartimg})` }}
                        ></div>
                        <div className="cartMain_container_blok_section1_addBayProduct_infoblok">
                            <p className="cartMain_container_blok_section1_addBayProduct_text1">
                                Asgaard sofa
                            </p>
                            <p className="cartMain_container_blok_section1_addBayProduct_text1">
                                Rs. 250,000.00
                            </p>
                            <div className="cartMain_container_blok_section1_addBayProduct_countPrise">
                                <input type="text" placeholder="1" />
                                <p className="cartMain_container_blok_section1_addBayProduct_text2">
                                    Rs. 250,000.00
                                </p>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z"
                                        fill="#B88E2F"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartMain_container_blok_section2">
                    <CartMainCartTotals />
                </div>
            </div>
        </div>
    );
}
export default CartMain;
