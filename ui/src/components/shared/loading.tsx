import React from 'react';

export const Loading: React.FC<any> = props => {
    return <div className="loading">
        {props.children}
    </div>
}