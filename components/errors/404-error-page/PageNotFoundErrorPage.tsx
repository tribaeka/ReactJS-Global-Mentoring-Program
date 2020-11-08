import React from "react";
import Brand from "@components/shared/brand/Brand";
import Footer from "@components/footer/Footer";
import notFoundImage from '@assets/pageNotFound.gif';
import styles from './../errorPage.module.scss';
import Link from "next/link";

const PageNotFoundErrorPage: React.FC = () =>
    <div className={styles.errorPage}>
        <div className={styles.brandWrapper}>
            <Brand/>
        </div>
        <div className={styles.errorContainer}>
            <span className={styles.errorSubMessage}>
                Page Not Found
            </span>
            <img src={notFoundImage} alt=""/>
            <Link href={'/'}>
                <a className={styles.backToHomeLink}>
                    GO BACK TO HOME
                </a>
            </Link>
        </div>
        <Footer/>
    </div>;

export default PageNotFoundErrorPage;
