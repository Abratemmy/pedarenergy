import React from 'react';
import './BlogCard.scss';
import Button from '../Button/Button';

function BlogCard() {
    return (
        <div className='blogCardComponent'>
            <div className='container'>
                <div className="contactContentTop">
                    <div className="titleStroke">Blog</div>
                    <div className="subtitle"><span className="border-box"></span>Latest News</div>
                    <h2 className="pageTitle">News & Article</h2>
                </div>

                <div className="blogCardWrapper">
                    <div className="blogCard">
                        <div className='img-holder'>
                            <div className='immer'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755650277/pedarEnergy/blog1_ao6cze.jpg" alt="pedar blog" />
                            </div>
                        </div>

                        <div className="text-holder">
                            <h6>Fixing Supplier Performance & Governance Gaps</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            <div className='button'>
                                <Button
                                    text='Read More'
                                    buttonLink='/blog/fixing-supplier-performance-and-governance-gaps'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="blogCard">
                        <div className='img-holder'>
                            <div className='immer'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755650276/pedarEnergy/blog3_duexmh.jpg" alt="pedar blog" />
                            </div>
                        </div>

                        <div className="text-holder">
                            <h6>The Future of Gas-to-Power in Nigeria</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            <div className='button'>
                                <Button
                                    text='Read More'
                                    buttonLink='/blog/fixing-supplier-performance-and-governance-gaps'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="blogCard">
                        <div className='img-holder'>
                            <div className='immer'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755650277/pedarEnergy/blog2_bzhtb1.jpg" alt="pedar blog" />
                            </div>
                        </div>

                        <div className="text-holder">
                            <h6>ESG Compliance in Industrial Projects</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            <div className='button'>
                                <Button
                                    text='Read More'
                                    buttonLink='/blog/fixing-supplier-performance-and-governance-gaps'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard