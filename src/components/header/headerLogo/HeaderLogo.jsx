import "./HeaderLogo.css";
import logoImg from "../../../img/headerImg/headerLogo.png";
import { Link } from "react-router-dom";

function HeaderLogo() {
    return (
        <Link to="" className="HeaderLogo_link">
            <div className="headerLogo_container">
                <img src={logoImg} alt="logoImg" width={50} height={32} />
                <h1>Furniro</h1>
            </div>
        </Link>
    );
}
export default HeaderLogo;
