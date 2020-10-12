import React from 'react';

export const ErrorMessage: React.FC<any> = props => {
    return <div className="error">
        {props.children}
    </div>
}