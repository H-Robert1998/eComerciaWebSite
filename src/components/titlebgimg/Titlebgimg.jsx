import "./Titlebgimg.css";
import img from "../../img/tittlebgimg/titlebgimg.jpg";
function Titlebgimg(props) {
    return (
        <div className="titlebgimg_container">
            <div className="titlebgimg_containerimgefect"></div>
            <div className="titlebgimg_container_textblok">
                <p className="titlebgimg_container_textblok_text1">
                    {props.name}
                </p>
                <div className="titlebgimg_container_textblok_text2">
                    <p>Home</p>
                    <p>{">"}</p>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}
export default Titlebgimg;
