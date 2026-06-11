import "./ProductComparisonSection.css";
import Compersionimg1 from "../../../img/productCompersionpageimg/Compersionimg1.png";
import Compersionimg2 from "../../../img/productCompersionpageimg/Compersionimg2.png";
function ProductComparisonSection() {
    return (
        <div className="productComparisonSection_container">
            <div className="productComparisonSection_container_section">
                <div className="productComparisonSection_container_section_blok1">
                    <p>Go to Product page for more Products</p>
                    <div>
                        <input type="text" placeholder="View More" />
                    </div>
                </div>
                <div className="productComparisonSection_container_section_blok2">
                    <div>
                        <div
                            className="productComparisonSection_container_section_blok2_blokimg1"
                            style={{
                                backgroundImage: `url(${Compersionimg1})`,
                            }}
                        ></div>
                        <p className="productComparisonSection_container_section_blok2_text1">
                            Asgaard Sofa
                        </p>
                        <p className="productComparisonSection_container_section_blok2_text2">
                            Rs. 250,000.00
                        </p>
                        <div className="productComparisonSection_container_section_blok2_reyting">
                            <p className="productComparisonSection_container_section_blok2_reyting_text1">
                                4.7
                            </p>
                            <div>
                                <svg
                                    width="124"
                                    height="20"
                                    viewBox="0 0 124 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M36 1L39 7L45 7.75L40.88 12.37L42 19L36 16L30 19L31.13 12.37L27 7.75L33 7L36 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M62 1L65 7L71 7.75L66.88 12.37L68 19L62 16L56 19L57.13 12.37L53 7.75L59 7L62 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M88 1L91 7L97 7.75L92.88 12.37L94 19L88 16L82 19L83.13 12.37L79 7.75L85 7L88 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M111.157 7.0125L104.801 7.9375L109.401 12.4188L108.313 18.75L114.001 15.7625V1.25L111.157 7.0125Z"
                                        fill="#FFC700"
                                    />
                                </svg>
                            </div>
                            <div className="productComparisonSection_container_section_blok2_reyting_lineVer"></div>
                            <p className="productComparisonSection_container_section_blok2_reyting_text2">
                                204 Review
                            </p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="productComparisonSection_container_section_blok2_blokimg1"
                            style={{
                                backgroundImage: `url(${Compersionimg2})`,
                            }}
                        ></div>
                        <p className="productComparisonSection_container_section_blok2_text1">
                            Outdoor Sofa Set
                        </p>
                        <p className="productComparisonSection_container_section_blok2_text2">
                            Rs. 224,000.00
                        </p>
                        <div className="productComparisonSection_container_section_blok2_reyting">
                            <p className="productComparisonSection_container_section_blok2_reyting_text1">
                                4.2
                            </p>
                            <div>
                                <svg
                                    width="124"
                                    height="20"
                                    viewBox="0 0 124 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M36 1L39 7L45 7.75L40.88 12.37L42 19L36 16L30 19L31.13 12.37L27 7.75L33 7L36 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M62 1L65 7L71 7.75L66.88 12.37L68 19L62 16L56 19L57.13 12.37L53 7.75L59 7L62 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M88 1L91 7L97 7.75L92.88 12.37L94 19L88 16L82 19L83.13 12.37L79 7.75L85 7L88 1Z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M111.157 7.0125L104.801 7.9375L109.401 12.4188L108.313 18.75L114.001 15.7625V1.25L111.157 7.0125Z"
                                        fill="#FFC700"
                                    />
                                </svg>
                            </div>
                            <div className="productComparisonSection_container_section_blok2_reyting_lineVer"></div>
                            <p className="productComparisonSection_container_section_blok2_reyting_text2">
                                145 Review
                            </p>
                        </div>
                    </div>
                </div>
                <div className="productComparisonSection_container_section_blok3">
                    <p className="productComparisonSection_container_section_blok3_text">
                        Add A Product
                    </p>
                    <div class="select-wrapper">
                        <select>
                            <option>Choose a Product</option>
                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductComparisonSection;
