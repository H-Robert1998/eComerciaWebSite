import "./SingleProductAdditionalInfoSection.css";
import descriptionimg1 from "../../../img/singlpraductimg/description1.png";
import descriptionimg2 from "../../../img/singlpraductimg/description2.png";
function SingleProductAdditionalInfoSection() {
    return (
        <div className="singleProductAdditionalInfoSection_container">
            <hr />
            <div className="singleProductAdditionalInfoSection_container_blok_title">
                <p className="singleProductAdditionalInfoSection_container_blok_title_text1">
                    Description
                </p>
                <p className="singleProductAdditionalInfoSection_container_blok_title_text2">
                    Additional Information
                </p>
                <p className="singleProductAdditionalInfoSection_container_blok_title_text2">
                    Reviews {"["}5{"]"}
                </p>
            </div>
            <div className="singleProductAdditionalInfoSection_container_blok_imgtext">
                <p className="singleProductAdditionalInfoSection_container_text3">
                    Embodying the raw, wayward spirit of rock {"‘"}n{"‘"} roll,
                    the Kilburn portable active stereo speaker takes the
                    unmistakable look and sound of Marshall, unplugs the chords,
                    and takes the show on the road.
                </p>
                <p className="singleProductAdditionalInfoSection_container_text4">
                    Weighing in under 7 pounds, the Kilburn is a lightweight
                    piece of vintage styled engineering. Setting the bar as one
                    of the loudest speakers in its class, the Kilburn is a
                    compact, stout-hearted hero with a well-balanced audio which
                    boasts a clear midrange and extended highs for a sound that
                    is both articulate and pronounced. The analogue knobs allow
                    you to fine tune the controls to your personal preferences
                    while the guitar-influenced leather strap enables easy and
                    stylish travel.
                </p>
                <div className="singleProductAdditionalInfoSection_container_blokimg">
                    <div
                        className="singleProductAdditionalInfoSection_container_blokimg_bg"
                        style={{
                            backgroundImage: `url(${descriptionimg1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "0px -120px",
                            // backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* <img
                            src={descriptionimg1}
                            alt="descriptionimg1"
                            width={645}
                            height={348}
                        /> */}
                    </div>
                    <div className="singleProductAdditionalInfoSection_container_blokimg_bg">
                        <img
                            src={descriptionimg2}
                            alt="descriptionimg1"
                            width={645}
                            height={348}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default SingleProductAdditionalInfoSection;
