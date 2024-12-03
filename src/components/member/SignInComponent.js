import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from "../../components/common/InputField";
import KakaoSignInComponent from "./KakaoSignInComponent";
import NaverSignInComponent from "./NaverSignInComponent";

const SignInComponent = () => {
    const [loginParam, setLoginParam] = useState({ email: '', password: '' });

    const handleChange = (e) => setLoginParam({ ...loginParam, [e.target.name]: e.target.value });

    const handleClickSignIn = (e) => { e.preventDefault(); /* Add sign-in logic */ };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#fff' }}>
                        <div className="card-body">
                            <h4 className="text-center mb-4" style={{ color: '#ff6f61', fontWeight: '600' }}>로그인</h4>
                            <form>
                                <div className="mb-4">
                                    <InputField type="email" label="이메일" name="email" value={loginParam.email} onChange={handleChange} placeholder="이메일을 입력하세요" required />
                                </div>
                                <div className="mb-4">
                                    <InputField type="password" label="비밀번호" name="password" value={loginParam.password} onChange={handleChange} placeholder="비밀번호를 입력하세요" required />
                                </div>
                                <button className="btn w-100 py-3 mb-4" onClick={handleClickSignIn} style={{ backgroundColor: '#ff6f61', color: 'white', borderRadius: '12px', transition: 'all 0.2s' }}>로그인</button>
                                <div className="d-flex gap-3">
                                    <div className="flex-fill"><KakaoSignInComponent /></div>
                                    <div className="flex-fill"><NaverSignInComponent /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;