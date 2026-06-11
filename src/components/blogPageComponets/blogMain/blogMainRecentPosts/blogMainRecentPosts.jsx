import "./BlogMainRecentPosts.css";
import RecentPostsimg1 from "../../../../img/blogimg/BlogRecentPosts/BlogRecentPosts1.jpg";
import RecentPostsimg2 from "../../../../img/blogimg/BlogRecentPosts/BlogRecentPosts2.jpg";
import RecentPostsimg3 from "../../../../img/blogimg/BlogRecentPosts/BlogRecentPosts3.jpg";
import RecentPostsimg4 from "../../../../img/blogimg/BlogRecentPosts/BlogRecentPosts4.jpg";
import RecentPostsimg5 from "../../../../img/blogimg/BlogRecentPosts/BlogRecentPosts5.jpg";
function BlogMainRecentPosts() {
    return (
        <div className="blogMainRecentPosts_container">
            <div className="blogMainRecentPosts_container_blok">
                <p className="blogMainRecentPosts_container_blok_tittle">
                    Recent Posts
                </p>
                <div className="blogMainRecentPosts_container_blok_postItems">
                    <div
                        className="blogMainRecentPosts_container_blok_postItems_img"
                        style={{
                            backgroundImage: `url(${RecentPostsimg1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div>
                        <p className="blogMainRecentPosts_container_blok_postItems_text1">
                            Going all-in with millennial design
                        </p>
                        <p className="blogMainRecentPosts_container_blok_postItems_text2">
                            03 Aug 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className="blogMainRecentPosts_container_blok">
                <p className="blogMainRecentPosts_container_blok_tittle">
                    Recent Posts
                </p>
                <div className="blogMainRecentPosts_container_blok_postItems">
                    <div
                        className="blogMainRecentPosts_container_blok_postItems_img"
                        style={{
                            backgroundImage: `url(${RecentPostsimg2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div>
                        <p className="blogMainRecentPosts_container_blok_postItems_text1">
                            Going all-in with millennial design
                        </p>
                        <p className="blogMainRecentPosts_container_blok_postItems_text2">
                            03 Aug 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className="blogMainRecentPosts_container_blok">
                <p className="blogMainRecentPosts_container_blok_tittle">
                    Recent Posts
                </p>
                <div className="blogMainRecentPosts_container_blok_postItems">
                    <div
                        className="blogMainRecentPosts_container_blok_postItems_img"
                        style={{
                            backgroundImage: `url(${RecentPostsimg3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div>
                        <p className="blogMainRecentPosts_container_blok_postItems_text1">
                            Going all-in with millennial design
                        </p>
                        <p className="blogMainRecentPosts_container_blok_postItems_text2">
                            03 Aug 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className="blogMainRecentPosts_container_blok">
                <p className="blogMainRecentPosts_container_blok_tittle">
                    Recent Posts
                </p>
                <div className="blogMainRecentPosts_container_blok_postItems">
                    <div
                        className="blogMainRecentPosts_container_blok_postItems_img"
                        style={{
                            backgroundImage: `url(${RecentPostsimg4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div>
                        <p className="blogMainRecentPosts_container_blok_postItems_text1">
                            Going all-in with millennial design
                        </p>
                        <p className="blogMainRecentPosts_container_blok_postItems_text2">
                            03 Aug 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className="blogMainRecentPosts_container_blok">
                <p className="blogMainRecentPosts_container_blok_tittle">
                    Recent Posts
                </p>
                <div className="blogMainRecentPosts_container_blok_postItems">
                    <div
                        className="blogMainRecentPosts_container_blok_postItems_img"
                        style={{
                            backgroundImage: `url(${RecentPostsimg5})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div>
                        <p className="blogMainRecentPosts_container_blok_postItems_text1">
                            Going all-in with millennial design
                        </p>
                        <p className="blogMainRecentPosts_container_blok_postItems_text2">
                            03 Aug 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogMainRecentPosts;
