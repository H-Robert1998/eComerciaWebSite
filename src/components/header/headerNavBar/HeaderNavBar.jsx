import "./HeaderNavBar.css";
import { Link } from "react-router-dom";
function HeaderNavBar() {
    return (
        <div className="headerNavBar_container">
            <nav>
                <ul>
                    <Link to="">
                        <li>Home</li>
                    </Link>
                    <Link to="shoppage">
                        <li>Shop</li>
                    </Link>
                    <Link>
                        <li>About</li>
                    </Link>
                    <Link to="contactpage">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
export default HeaderNavBar;
