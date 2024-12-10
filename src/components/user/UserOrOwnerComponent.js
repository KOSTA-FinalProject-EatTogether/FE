import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserOrOwnerComponent = () => {
    const navigate = useNavigate();

    const handleUserSignUp = () => {
        navigate('/user/user-signup');
    };

    const handleOwnerSignUp = () => {
        navigate('/user/owner-signup');
    };

    const buttonStyle = (color) => ({
        padding: '1rem 2rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: color,
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: '500',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '360px',
        transition: 'background-color 0.2s'
    });

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        width: '100%',
        padding: '2rem 0'
    };

    return (
        <div className="flex flex-col items-center justify-center w-full py-8">
            <h2 className="text-3xl font-bold text-center text-[#2B3A55] mb-12">회원가입</h2>
            <div style={buttonContainerStyle}>
                <button
                    onClick={handleUserSignUp}
                    style={buttonStyle('#F54748')}
                >
                    일반 사용자 회원가입
                </button>
                <button
                    onClick={handleOwnerSignUp}
                    style={buttonStyle('#2B3A55')}
                >
                    식당 점주 회원가입
                </button>
            </div>
        </div>
    );
};

export default UserOrOwnerComponent;