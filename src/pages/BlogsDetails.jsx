import React from 'react'
import './bDetailsStyle.css';
import { useParams, useLocation, Link } from 'react-router-dom';
const BlogsDetails = (props) => {
    const { blogId } = useParams();
    const location = useLocation();
    const { state } = location;
    const { blogData } = state;
    const filteredBlog = blogData.filter((blog) => blog.id == blogId);
    console.log(filteredBlog)
    const getRelatedBlogs = () => {
        return blogData.filter((blog) => blog.id !== blogId).slice(0, 2);
    };
    return (
        <section>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 p-0">
                        <div>
                            <img src={'/blogsdetailsbanner.webp'}
                                className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    {filteredBlog.map((blog) => (
                        <div className="col-12">
                            <div className="sec-title">
                                <h1>{blog.title}</h1>
                            </div>
                            <div className="reading-time">
                                <p className="bold">{blog.date}</p>
                            </div>
                            <div className="blog-detail-content">
                                {blog.description}
                                .&nbsp;&nbsp;
                                <h2>Tips for optimizing fridge energy efficiency&nbsp;</h2>
                                <div><b>Maintain proper temperature:</b>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-title">
                            <h2>Related Blogs</h2>
                        </div>
                    </div>
                </div>

                <div className="row gy-5">
                    {getRelatedBlogs().map((relatedBlog) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={relatedBlog.id}>
                            <Link to={`blogs/${relatedBlog.id}`} style={{ textDecoration: "none" }}>
                                <div className="related-blog-box">
                                    <div className="related-blog-box-img">
                                        <img src={relatedBlog.image} className="img-fluid lazyload" />
                                    </div>
                                    <div className="related-blog-box-content">
                                        <h4>{relatedBlog.title}</h4>
                                        <p>{`Posted on: ${relatedBlog.date}`}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogsDetails