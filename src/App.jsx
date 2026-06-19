import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import SingleProductPage from "./page/SingleProductPage";
import ProductComparisonPage from "./page/ProductComparisonPage";
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import ContactPage from "./page/ContactPage";
import BlogPage from "./page/BlogPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <>
            <BrowserRouter>
                <div className="maincontainer">
                    {/* <div style={{ display: "flex", gap: "5px" }}>
                        <Link to="">Home</Link>
                        <Link to="singleproductpage">SingleProduct</Link>
                        <Link to="productcomparisonpage">
                            ProductComparison
                        </Link>
                        <Link to="cartpage">Cart</Link>
                        <Link to="checkoutpage">Checkout</Link>
                        <Link to="contactpage">Contact</Link>
                        <Link to="blogpage">Blog</Link>
                    </div> */}
                    <Header />
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="shoppage" element={<ShopPage />} />
                        <Route
                            path="singleproductpage"
                            element={<SingleProductPage />}
                        />
                        <Route
                            path="productcomparisonpage"
                            element={<ProductComparisonPage />}
                        />
                        <Route path="cartpage" element={<CartPage />} />
                        <Route path="checkoutpage" element={<CheckoutPage />} />
                        <Route path="contactpage" element={<ContactPage />} />
                        <Route path="blogpage" element={<BlogPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

// import "./SignInBtn.css"

// function SignInBtn (){

//     return(
//         <div className="signInBtn_container">
//             <div className="signInBtn_blok">Sign In</div>
//         </div>
//     );
// }
// export default SignInBtn
