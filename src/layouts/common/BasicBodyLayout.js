import React from 'react';
import NavBar from "../../components/common/layout/NavBar";
import NavBarByRole from "../../components/common/layout/NavBarByRole";
import Header from "../../components/common/layout/Header";

const BasicBodyLayout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <NavBar />
            <NavBarByRole />
            <div
                className="mx-auto border border-gray-300"
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