import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from "../../components/common/InputField";
import KakaoSignInComponent from "./KakaoSignInComponent";
import NaverSignInComponent from "./NaverSignInComponent";
import { Link } from "react-router-dom";


const SignInComponent = () => {
    const [loginParam, setLoginParam] = useState({ email: '', password: '' });
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => setLoginParam({ ...loginParam, [e.target.name]: e.target.value });

    const handleClickSignIn = (e) => {
        e.preventDefault();
        /* Add sign-in logic */
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#1a75ff' : '#3182ce',
        color: 'white',
        marginBottom: '16px',
        padding: '0 24px',
        borderRadius: '6px',
        border: 'none',
        height: '38px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isHovered
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 1px 3px rgba(0, 0, 0, 0.1)',
        width: '100%'
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '42rem',
        margin: '0 auto'
    };

    const formContainerStyle = {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem'
    };

    const socialButtonsContainerStyle = {
        display: 'flex',
        gap: '1rem'
    };

    const registrationContainerStyle = {
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '1.5rem'
    };

    const registrationTextStyle = {
        color: '#718096',
        fontSize: '14px',
        marginRight: '8px'
    };

    const registrationLinkStyle = {
        color: '#3182ce',
        fontSize: '14px',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'color 0.2s ease'
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h4 style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748'
                }}>
                    로그인
                </h4>
                <form>
                    <div style={{marginBottom: '1rem'}}>
                        <InputField
                            type="email"
                            label="이메일"
                            name="email"
                            value={loginParam.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div style={{marginBottom: '1.5rem'}}>
                        <InputField
                            type="password"
                            label="비밀번호"
                            name="password"
                            value={loginParam.password}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <button
                        onClick={handleClickSignIn}
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        로그인
                    </button>
                    <div style={socialButtonsContainerStyle}>
                        <div style={{flex: 1}}>
                            <KakaoSignInComponent/>
                        </div>
                        <div style={{flex: 1}}>
                            <NaverSignInComponent/>
                        </div>
                    </div>
                    <div style={registrationContainerStyle}>
                        <span style={registrationTextStyle}>아직 회원이 아니신가요?</span>
                        <Link to="/user/signup" style={registrationLinkStyle}>
                            회원가입
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInComponent;