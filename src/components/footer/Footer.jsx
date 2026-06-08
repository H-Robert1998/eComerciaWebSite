import "./Footer.css"

function Footer (){

    return(
        <div className="footer_container">
           <span className="footer_container_line"></span>
           <div className="footer_container_blok">
                <div className="footer_container_blok1_text">
                    <p className="footer_container_blok1_text1">Funiro.</p>
                    <p className="footer_container_blok1_text2">400 University Drive Suite 200 Coral Gables,</p>
                    <p className="footer_container_blok1_text3">FL 33134 USA</p>
                </div>
                <div className="footer_container_blok2_text">
                    <nav>
                        <p>Links</p>
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
                <div className="footer_container_blok3_text">
                    <p>Links</p>
                    <ul>
                        <a href="#">
                            <li>Payment Options</li>
                        </a>
                        <a href="#">
                            <li>Returns</li>
                        </a>
                        <a href="#">
                            <li>Privacy Policies</li>
                        </a>
                    </ul>
                </div>
                <div className="footer_container_blok4_text">
                    <p className="footer_container_blok4_text1">Newsletter</p>      
                    <div className="footer_container_blok4_text_input">
                        <input type="text"  placeholder="Enter Your Email Address"/>
                        <p>SUBSCRIBE</p>
                    </div>
                </div>
           </div>
           <span className="footer_container_line"></span>
           <p className="footer_container_lastText">2023 furino. All rights reverved</p>
        </div>
    );
}
export default Footer