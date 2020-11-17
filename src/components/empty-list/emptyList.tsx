import React from "react";
import './emptyList.scss';

const EmptyList: React.FC = () => {
    return (
        <div className="empty-list">No Movie Found</div>
    );
};

export default React.memo(EmptyList);
