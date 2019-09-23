import React from 'react';

const Some = ({ msg, children }) => (
    <div>
        <p>{msg}</p>;
        {children}
    </div>
);

export default Some;
