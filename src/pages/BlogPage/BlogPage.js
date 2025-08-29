import React from 'react';
import './BlogPage.scss';
import OtherPages from '../../components/OtherPages/OtherPages';
import BlogCard from '../../components/Blog/BlogCard';


function BlogPage() {
  return (
    <div>
        <OtherPages
            pageName="Blogs"
        />

        <div className="blogPageContainer">
            <BlogCard />
            {/* <div className="container">
                <div className="contactContentTop">
                    <div className="titleStroke">Blogs</div>
                    <div className="subtitle"><span className="border-box"></span>GET IN TOUCH</div>
                    <h2 className="pageTitle">Don't hesitate to contact Us</h2>
                </div>
            </div> */}
        </div>

    </div>
  )
}

export default BlogPage