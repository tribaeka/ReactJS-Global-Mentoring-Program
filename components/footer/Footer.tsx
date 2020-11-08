import React from 'react';
import Brand from '@components/shared/brand/Brand';
import styles from './Footer.module.scss';

const Footer: React.FC = () =>
    <div className={styles.footerContent}>
        <Brand/>
    </div>;

export default Footer;
