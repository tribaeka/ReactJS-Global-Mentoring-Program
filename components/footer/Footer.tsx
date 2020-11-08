import React from 'react';
import Brand from '@components/shared/brand/Brand';
import styles from './footer.module.scss';

const Footer: React.FC = () =>
    <div className={styles.footerContent}>
        <Brand/>
    </div>;

export default Footer;
