import "./HeaderNavBar.css"

function HeaderNavBar (){

    return(
        <div className="headerNavBar_container">
            <nav>
                <ul>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Shop</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
}
export default HeaderNavBar