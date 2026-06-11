import "./BlogMain.css";
import BlogMainlist from "./blogMainlist/BlogMainlist";
import BlogMainCategories from "./blogMainCategories/blogMainCategories";
import BlogMainRecentPosts from "./blogMainRecentPosts/blogMainRecentPosts";
function BlogMain() {
    return (
        <div className="blogMain_container">
            <div className="blogMain_container_blok1">
                <div className="blogMain_container_blok1_section1">
                    <BlogMainlist />
                </div>
                <div className="blogMain_container_blok1_section2">
                    <BlogMainCategories />
                    <BlogMainRecentPosts />
                </div>
            </div>
        </div>
    );
}
export default BlogMain;
