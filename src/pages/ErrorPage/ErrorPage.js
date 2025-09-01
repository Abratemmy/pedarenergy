import React from 'react';
import OtherPages from '../../components/OtherPages/OtherPages';
import './ErrorPage.scss';
import Button from '../../components/Button/Button';

function ErrorPage() {
  return (
    <div>
         <OtherPages
                pageName="Error 404"
            />

            <div className="Error404Container">
                <div className="container">
                    <div className="contactContentTop">
                        <div className="titleStroke">Error</div>
                        <div className="subtitle"><span className="border-box"></span>Error 404</div>
                        <h2 className="pageTitle">This is Error <span>404 Page</span></h2>
                    </div>


                    <div className="errorBtn">
                        <Button
                            text="Go To Home"
                            buttonLink="/"
                        />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ErrorPage