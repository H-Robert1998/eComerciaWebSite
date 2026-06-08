import "./InspirationsSectionSlider.css";
import img1 from "../../../../img/homePageimg/inspirationsSectionimg/inspirationimg1.png";
import img2 from "../../../../img/homePageimg/inspirationsSectionimg/inspirationimg2.png";
import img3 from "../../../../img/homePageimg/inspirationsSectionimg/inspirationimg3.png";
function InspirationsSectionSlider() {
    return (
        <div className="inspirationsSectionSlider_container">
            <div className="inspirationsSectionSlider_container_blok">
                <div className="inspirationsSectionSlider_container_blokImg1">
                    <div className="inspirationsSectionSlider_container_blokImg1_imgcard">
                        <div className="inspirationsSectionSlider_container_blokImg1_imgcard_text">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "#616161",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    paddingTop: "32px",
                                    paddingLeft: "32px",
                                }}
                            >
                                <p>01</p>
                                <span
                                    style={{
                                        width: "27px",
                                        height: "1px",
                                        backgroundColor: "#616161",
                                    }}
                                ></span>
                                <p>Bed Room</p>
                            </div>
                            <p
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "600",
                                    paddingLeft: "32px",
                                    paddingTop: "8px",
                                }}
                            >
                                Inner Peace
                            </p>
                        </div>
                        <div className="inspirationsSectionSlider_container_blokImg1_imgcard_arrow">
                            <svg
                                width="20"
                                height="14"
                                viewBox="0 0 20 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.75 6.75H0.75M12.75 12.75L18.75 6.75L12.75 0.75"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <img src={img1} alt="room" width={404} height={582} />
                    <div className="blokImg2_radio_group2">
                        <input type="radio" name="slider1" id="r1a" />
                        <label for="r1a"></label>
                        <input
                            type="radio"
                            name="slider1"
                            id="r2a"
                            checked="checked"
                        />
                        <label for="r2a"></label>
                        <input type="radio" name="slider1" id="r3a" />
                        <label for="r3a"></label>
                        <input type="radio" name="slider1" id="r4a" />
                        <label for="r4a"></label>
                    </div>
                </div>
                <div className="inspirationsSectionSlider_container_blokImg2">
                    <img src={img2} alt="room" width={372} height={486} />
                    <div className="blokImg2_radio_group2">
                        <input type="radio" name="slider" id="r1" />
                        <label for="r1"></label>
                        <input
                            type="radio"
                            name="slider"
                            id="r2"
                            checked="checked"
                        />
                        <label for="r2"></label>
                        <input type="radio" name="slider" id="r3" />
                        <label for="r3"></label>
                        <input type="radio" name="slider" id="r4" />
                        <label for="r4"></label>
                    </div>
                </div>
                <div className="inspirationsSectionSlider_container_blokImg3">
                    <img src={img2} alt="room" width={372} height={486} />
                </div>
            </div>
        </div>
    );
}
export default InspirationsSectionSlider;
