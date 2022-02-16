import Blog from "./Blog"
import data from '../data'
export default function Projects() {
    
    const blogElems = data.map((blog,id) => (
        <Blog key={'blog'+id} blog={blog} />
    ))

    console.log(data)
    return(
    <div className="blog-container container">
    <h1>BLOG</h1>
    <div className="blogs">
        {blogElems}
    </div>
    </div>
    )
}