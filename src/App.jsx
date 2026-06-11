import "./App.css";
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
            <div className="maincontainer">
                <Header />
                {/* <HomePage /> */}
                {/* <ShopPage /> */}
                {/* <SingleProductPage /> */}
                {/* <ProductComparisonPage /> */}
                {/* <CartPage /> */}
                {/* <CheckoutPage /> */}
                {/* <ContactPage /> */}
                <BlogPage />
                <Footer />
            </div>
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
