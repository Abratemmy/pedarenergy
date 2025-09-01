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
           
        </div>

    </div>
  )
}

export default BlogPage