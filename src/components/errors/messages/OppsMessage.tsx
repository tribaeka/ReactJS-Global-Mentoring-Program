import React from "react";
import Brand from "../../shared/brand/Brand";
import Footer from "@components/footer/Footer";

const OppsMessage: React.FC = () =>
    <div className="error-page">
        <div className="brand-wrapper">
            <Brand/>
        </div>
        <h1 className="error-message">Opps something went wrong...</h1>
        <Footer/>
    </div>;

export default OppsMessage;
