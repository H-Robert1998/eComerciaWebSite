import "./OurProductsSectionContentImg.css";
import DiscountNew from "./discountNew/DiscountNew";
import imgs from "../../../../img/homePageimg/ourProductsSectionimg/imgexport.js";

function OurProductsSectionContentImg() {
    let arrourProducts = [
        {
            id: 1,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "30%",
            colorbg: "#E97171",
        },
        {
            id: 2,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 3.500.000",
            productcostDiscount: "Rp 4.500.000",
            discounvalue: "30%",
            colorbg: "#E97171",
        },
        {
            id: 3,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "30%",
            colorbg: "#E97171",
        },
        {
            id: 4,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "New",
            colorbg: "#2EC1AC",
        },
        {
            id: 5,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "New",
            colorbg: "#2EC1AC",
        },
        {
            id: 6,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "30%",
            colorbg: "#E97171",
        },
        {
            id: 7,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "50%",
            colorbg: "#E97171",
        },
        {
            id: 8,
            productname: "Syltherine",
            productInfo: "Stylish cafe chair",
            productcost: "Rp 2.500.000",
            productcostDiscount: "Rp 3.500.000",
            discounvalue: "30%",
            colorbg: "#E97171",
        },
    ];
    return (
        <div className="ourProductsSectionContentImg_container">
            <div className="ourProductsSectionContentImg_container_blok">
                {arrourProducts.map((items, index) =>
                    index < 8 ? (
                        <div className="ourProductsSectionContentImg_container_blok_itemstext">
                            <img
                                src={imgs[items.id - 1]}
                                alt="Product"
                                width={285}
                                height={301}
                            />
                            <div className="ourProductsSectionContentImg_container_blok_itemstext_textblok">
                                <p className="textblok_tect1">
                                    {items.productname}
                                </p>
                                <p className="textblok_tect2">
                                    {items.productInfo}
                                </p>
                                <p className="textblok_tect3">
                                    {items.productcost}
                                    <p className="textblok_tect3_1">
                                        {items.productcostDiscount}
                                    </p>
                                </p>
                            </div>
                            <DiscountNew
                                name={items.discounvalue}
                                colorbg={items.colorbg}
                            />
                            <div className="container_blok_itemstext_clikAddCard">
                                <div className="container_blok_itemstext_clikAddCard_Btn">
                                    <p>Add to cart</p>
                                </div>
                                <div className="container_blok_itemstext_clikAddCard_IconTextblok">
                                    <div>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <p>Share</p>
                                    </div>
                                    <div>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <p>Compare</p>
                                    </div>
                                    <div>
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.81858 12.8009C-5.51448 5.43146 3.81884 -2.56854 7.81858 2.49016C11.8188 -2.56854 21.1522 5.43146 7.81858 12.8009Z"
                                                stroke="white"
                                                stroke-width="1.8"
                                            />
                                        </svg>
                                        <p>Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
}
export default OurProductsSectionContentImg;
