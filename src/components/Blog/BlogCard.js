import React from 'react';
import './BlogCard.scss';
import Button from '../Button/Button';
import blogData from './BlogData'

function BlogCard() {

    return (
        <div className='blogCardComponent'>
            <div className='container'>
                <div className="contactContentTop">
                    <div className="titleStroke">Blog</div>
                    <div className="subtitle"><span className="border-box"></span>Latest News</div>
                    <h2 className="pageTitle">News & Articles</h2>
                </div>

                <div className="blogCardWrapper">
                    {blogData.map((data, index) => {
                        return(
                            <div key={index} className="blogCard">
                                <div className='img-holder'>
                                    <div className='immer'>
                                        <img src={data.image} alt="pedar blog" />
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h6>{data.title}</h6>
                                    <p>{data.intro}</p>
                                    <div className='button'>
                                        <Button
                                            text='Read More'
                                            buttonLink={`/blogs/${encodeURIComponent(data.title)}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogCard