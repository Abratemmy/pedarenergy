import React from 'react';
import blogData from '../../components/Blog/BlogData';
import {NavLink} from 'react-router-dom';
import { MdAddIcCall } from "react-icons/md";

function BlogSidebar() {
  return (
    <div className="blogSidebarContainer">
        <div className="sidebarTitle">Recent Post</div>
        {blogData.map((data, index) => {
            return(
                <NavLink to={`/blogs/${encodeURIComponent(data.title)}`} className="blogSidebarLink">
                    <div className="sidebarContent">
                        <div className='left'>
                            <img src={data.image} alt="" />
                        </div>

                        <div className="right">
                            <div className='blogTitle'>{data.title}</div>
                        </div>
                    </div>
                </NavLink>
            )
        })}

        <div className="blogContact">
            <div className="imageDiv"><MdAddIcCall className='icon' /></div>
            <div className="title">Got any Questions?</div>
            <div className='title'>Call us Today</div>
            <div className='line'></div>

            <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>

        </div>
        
    </div>
  )
}

export default BlogSidebar