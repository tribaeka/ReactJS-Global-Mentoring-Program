import React, { MouseEvent } from 'react';

interface CloseBtnProps {
   clickHandler(event: MouseEvent<HTMLDivElement>): void;
   size: string;
}

export enum CloseBtnSizes {
    SMALL = 'small',
    BIG = 'big'
}

const CloseBtn: React.FC<CloseBtnProps> = ({ clickHandler, size }) => {
    return (
        <div onClick={clickHandler} className={`close-btn-${size}`}>
            &times;
        </div>
    )
}

export default CloseBtn;
