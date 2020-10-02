import React from "react";
import Brand from "../../shared/brand/Brand";
import Footer from "../../home/footer/Footer";
import notFoundImage from '@assets/pageNotFound.gif';
import rightImage from '@assets/notFoundErrorRight.png';
import sorryImage from '@assets/search.png';
import {Link} from "react-router-dom";

const PageNotFoundErrorPage: React.FC = () =>
    <div className="error-page">
        <div className="brand-wrapper">
            <Brand/>
        </div>
        <div className="error-container">
            <span className="error-sub-message">Page Not Found</span>
            <img className="error-image" src={notFoundImage} alt=""/>
            <Link className="back-to-home-link" to="/">GO BACK TO HOME</Link>
        </div>
        <Footer/>
    </div>;

export default PageNotFoundErrorPage;
