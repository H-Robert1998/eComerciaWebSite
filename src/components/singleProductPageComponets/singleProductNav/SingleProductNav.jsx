import "./singleProductNav.css";

function SingleProductNav() {
    return (
        <div className="singleProductNav_container">
            <div className="singleProductNav_container_blok">
                <p>Home</p>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
                        fill="black"
                    />
                </svg>
                <p>Shop</p>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
                        fill="black"
                    />
                </svg>
                <div
                    style={{
                        width: "1px",
                        height: "37px",
                        backgroundColor: "#9F9F9F",
                    }}
                ></div>
                <p className="singleProductNav_container_blok_lasttext">
                    Asgaard sofa
                </p>
            </div>
        </div>
    );
}
export default SingleProductNav;
