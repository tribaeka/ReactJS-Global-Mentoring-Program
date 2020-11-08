import React from "react";
import styles from './emptyList.module.scss';

const EmptyList: React.FC = () => {
    return (
        <div className={styles.emptyList}>No Movie Found</div>
    );
};

export default React.memo(EmptyList);
