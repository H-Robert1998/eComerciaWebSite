import "./Header.css"
import HeaderBurger from "./headerBurger/HeaderBurger";
import HeaderIcon from "./headerIcon/HeaderIcon";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderNavBar from "./headerNavBar/HeaderNavBar";
import HeaderShoppingCart from "./headerShoppingCart/headerShoppingCart";

function Header (){

    return(
        <header className="header_container">
            <HeaderLogo/>
            <HeaderNavBar/>
            <HeaderIcon/>
            <HeaderBurger/>
            <HeaderShoppingCart/>
        </header>
    );
}
export default Header