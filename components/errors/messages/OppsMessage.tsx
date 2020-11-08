import React from "react";
import Brand from "../../shared/brand/Brand";
import Footer from "@components/footer/Footer";
import styles from './../errorPage.module.scss';


const OppsMessage: React.FC = () =>
    <div className={styles.errorPage}>
        <div className={styles.brandWrapper}>
            <Brand/>
        </div>
        <h1 className={styles.errorMessage}>Opps something went wrong...</h1>
        <Footer/>
    </div>;

export default OppsMessage;
