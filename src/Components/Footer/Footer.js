import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <div className="footer__scrollTop" onClick={scrollTop}>
                <span>Back to top</span>
            </div>
            <div className="footer__content">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                        alt="website-logo"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footer
