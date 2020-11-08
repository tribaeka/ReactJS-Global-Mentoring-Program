import React, { MouseEvent } from 'react';
import styles from './closeBtn.module.scss';

interface CloseBtnProps {
   clickHandler(event: MouseEvent<HTMLDivElement>): void;
   size: string;
}

export enum CloseBtnSizes {
    SMALL = 'small',
    BIG = 'big'
}

const CloseBtn: React.FC<CloseBtnProps> = ({ clickHandler, size }) => {
    const calcBtnClass = () => {
        switch (CloseBtnSizes[size.toUpperCase()]) {
            case CloseBtnSizes.BIG:
                return styles.closeBtnBig;
            case CloseBtnSizes.SMALL:
                return styles.closeBtnSmall;
            default:
                return styles.closeBtnBig;
        }
    }
    return (
        <div onClick={clickHandler} className={calcBtnClass()}>
            &times;
        </div>
    )
}

export default CloseBtn;
