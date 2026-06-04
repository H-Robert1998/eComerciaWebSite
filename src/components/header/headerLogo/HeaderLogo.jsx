import "./HeaderLogo.css"
import logoImg from "../../../img/headerImg/headerLogo.png"

function HeaderLogo (){

    return(
        <div className="headerLogo_container">
            <img src={logoImg} alt="logoImg" width={50} height={32}/>
            <h1>Furniro</h1>
        </div>
    );
}
export default HeaderLogo