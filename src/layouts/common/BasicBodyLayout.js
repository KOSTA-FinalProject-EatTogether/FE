import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "../../components/common/HeaderComponent";
import NavBarComponent from "../../components/common/NavBarComponent";
const BasicBodyLayout = ({ children }) => {
  return (
    
  <div>
    <HeaderComponent/>
    <NavBarComponent/>
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
  </div>
    
    
  );
};

export default BasicBodyLayout;