import Post from "../components/Post/Post"
import img from "../assets/recommended/1.jpg"
import logo from "../assets/logos/halkmarket.png"

const PostPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <Post img={img} logo={logo} name="Halkmarket" />
        </div>
    ) 
}

export default PostPage