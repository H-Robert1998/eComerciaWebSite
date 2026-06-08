import "./InspirationsSectionTitle.css"
import InspirationsSectionBtn from "../inspirationsSectionBtn/InspirationsSectionBtn";

function InspirationsSectionTitle (){

    return(
        <div className="inspirationsSectionTitle_container">
            <div className="container_blok">
                <p className="container_blok_text1">50+ Beautiful rooms inspiration</p>
                <p className="container_blok_text2">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <InspirationsSectionBtn/>
            </div>
        </div>
    );
}
export default InspirationsSectionTitle