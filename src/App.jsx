import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

const ShopPage = lazy(() => import("./page/ShopPage"));
const SingleProductPage = lazy(() => import("./page/SingleProductPage"));
const ProductComparisonPage = lazy(
    () => import("./page/ProductComparisonPage"),
);
const CartPage = lazy(() => import("./page/CartPage"));
const CheckoutPage = lazy(() => import("./page/CheckoutPage"));
const ContactPage = lazy(() => import("./page/ContactPage"));
const BlogPage = lazy(() => import("./page/BlogPage"));

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./page/HomePage";
function App() {
    return (
        <>
            <BrowserRouter>
                <div className="maincontainer">
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link to="">Home</Link>
                        <Link to="singleproductpage">SingleProduct</Link>
                        <Link to="productcomparisonpage">
                            ProductComparison
                        </Link>
                        <Link to="cartpage">Cart</Link>
                        <Link to="checkoutpage">Checkout</Link>
                        <Link to="contactpage">Contact</Link>
                        <Link to="blogpage">Blog</Link>
                    </div>
                    <Header />
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route
                            path="shoppage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <ShopPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="singleproductpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <SingleProductPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="productcomparisonpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <ProductComparisonPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="cartpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <CartPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="checkoutpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <CheckoutPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="contactpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <ContactPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="blogpage"
                            element={
                                <Suspense fallback={<p>Loading</p>}>
                                    <BlogPage />
                                </Suspense>
                            }
                        />
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
