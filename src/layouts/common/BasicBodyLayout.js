import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../components/common/layout/NavBar";
import NavBarByRole from "../../components/common/layout/NavBarByRole";
import Header from "../../components/common/layout/Header";
const BasicBodyLayout = ({ children }) => {
  return (
    
  <div>
    <Header/>
    <NavBar/>
    <NavBarByRole/>
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