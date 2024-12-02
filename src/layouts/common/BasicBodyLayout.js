import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BasicBodyLayout = ({ children }) => {
  return (
    <div 
      className="mx-auto border border-secondary" 
      style={{
        width: '480px',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};

export default BasicBodyLayout;