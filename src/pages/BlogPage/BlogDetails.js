import React from 'react';
import { useParams } from "react-router-dom";
import blogData from '../../components/Blog/BlogData';
import OtherPages from '../../components/OtherPages/OtherPages'
import BlogSidebar from './BlogSidebar';


function BlogDetails() {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    const blog = blogData.find((b) => b.title === decodedTitle);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }
  return (
    <div>
        <OtherPages
            pageName="BlogDetails"
        />

        <div className="blogDetalsContainer">
            <div className="container">
                <div className="contactContentTop">
                    <div className="titleStroke">Details</div>
                    <div className="subtitle"><span className="border-box"></span>Our Blog Details</div>
                    <h2 className="pageTitle">Dive into insights, stories, <span>and updates</span></h2>
                </div>

                
                <div className="blogDetailSession">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-9">
                            <div className="detailsContainer">
                                <div className="title">{blog.title}</div>
                                <div className="wrapper">
                                    <div className="image-holder">
                                        <img src={blog.image} alt="pedar energy" />
                                    </div>

                                    <div className="text-holder">
                                        <div className="intro">{blog.intro} </div>
                                        <div className="intro">{blog.intro2} </div>
                                        <div className="content">{blog.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BlogDetails