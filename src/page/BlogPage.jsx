import Titlebgimg from "../components/titlebgimg/Titlebgimg";
import OurAdvantages from "../components/ourAdvantages/OurAdvantages";
import BlogMain from "../components/blogPageComponets/blogMain/BlogMain";
function BlogPage() {
    return (
        <div>
            <Titlebgimg name="Blog" />
            <BlogMain />
            <OurAdvantages />
        </div>
    );
}
export default BlogPage;
