import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from "../../components/common/InputField";
import React, {useState} from "react";
import KakaoSignInComponent from "./KakaoSignInComponent";
import NaverSignInComponent from "./NaverSignInComponent";
import naverLogin from "../../assets/btnG_naver.png";


const initState = {
    email: '',
    password:'',
}


const SignInComponent = () => {

    const [loginParam, setLoginParam] = useState({...initState})

    const [user, setUser] = useState({...initState})

    const handleChange = (e) =>{
        loginParam[e.target.name] = e.target.value
        setLoginParam({...loginParam})
    }

    const handleClickSignIn = (e) =>{

        e.preventDefault()

        // console.log(formData)
    }

    return (
        <div>
            <div className="container">
                <div className="input-form-backgroud row">
                    <div className="input-form col-md-12 mx-auto">
                        <h4 className="mb-3">로그인</h4>

                        <div className="mb-3">
                            <InputField
                                type="email"
                                label="이메일"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="이메일을 입력하세요"
                                required
                                // error={!formData.email.includes('@') ? '유효한 이메일을 입력하세요' : ''}
                            />
                        </div>
                        <div className="mb-3">
                            <InputField
                                type="password"
                                label="비밀번호"
                                name="password"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="비밀번호를 입력하세요"
                                required
                                // error={!formData.email.includes('@') ? '유효한 이메일을 입력하세요' : ''}
                            />
                        </div>
                        <div className="mb-10 ">
                            <div className="row">
                                <div className="col-4 pe-2">
                                    <button className="btn btn-primary btn-lg btn-block w-100 h-80"
                                            onClick={handleClickSignIn}>로그인
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10 ">
                            <div className="row">
                                <div className="col-4 pe-2">
                                    <KakaoSignInComponent/>
                                </div>
                                <div className="col-4 pe-2">
                                    <NaverSignInComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInComponent
