import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from "../../components/common/InputField";
import PhoneNumberInput from "../../components/common/PhoneNumberInput";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/locale'

const initState = {
    email: '',
    name: '',
    nickname:'',
    password:'',
    phoneNumber: '',
    birthDate: '',
    gender : '',
}


const SignUpComponent = () => {

    const [user, setUser] = useState({...initState})

    const [birthDate, setBirthDate] = useState(new Date())

    const handleChangeUser = (e) =>{
        if (e.target) {
            user[e.target.name] = e.target.value
            setUser({...user})
        } else {
            // 날짜 선택의 경우
            user.birthDate = e
            setUser({...user})
            setBirthDate(e)
        }
    }

    const handleClickSignUp = (e) =>{

        e.preventDefault()

        const formData = new FormData()

        formData.append("name", user.name)
        formData.append("nickname", user.nickname)
        formData.append("birthDate", user.birthDate)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("phoneNumber", user.phoneNumber)
        formData.append("gender", user.gender)

        console.log(formData)
    }

    return (
        <div>
            <h1>This is SignUp Page</h1>
            <div className="container">
                <div className="input-form-backgroud row">
                    <div className="input-form col-md-12 mx-auto">
                        <h4 className="mb-3">회원가입</h4>
                        <form className="validation-form" noValidate>
                            <div className="mb-3">
                                <InputField
                                    type="email"
                                    label="이메일"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChangeUser}
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
                                    onChange={handleChangeUser}
                                    placeholder="비밀번호를 입력하세요"
                                    required
                                    // error={!formData.email.includes('@') ? '유효한 이메일을 입력하세요' : ''}
                                />
                            </div>
                            <div className="row">
                                <InputField
                                    type="text"
                                    label="이름"
                                    name="name"
                                     value={user.name}
                                    onChange={handleChangeUser}
                                    placeholder="이름을 입력하세요"
                                    required
                                    // error={!formData.email.includes('@') ? '유효한 이메일을 입력하세요' : ''}
                                />
                                <div className="col-md-6 mb-3">
                                    <InputField
                                        type="text"
                                        label="닉네임"
                                        name="nickname"
                                         value={user.email}
                                        onChange={handleChangeUser}
                                        placeholder="닉네임을 입력하세요"
                                        required
                                        // error={!formData.email.includes('@') ? '유효한 이메일을 입력하세요' : ''}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <PhoneNumberInput
                                    label="휴대폰 번호"
                                    name="phoneNumber"
                                    value={user.phoneNumber}
                                    onChange={handleChangeUser}
                                    required
                                    // error={errors.phoneNumber}
                                />

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender" className="form-label">성별</label>
                                <div>
                                    <input type="radio" name="gender" value="1"/>남성
                                </div>
                                <div>
                                    <input type="radio" name="gender" value="2"/>여성
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="birthDate" className="form-label">생일을 선택해주세요</label>
                                <div>
                                    <DatePicker
                                        dateFormat="yyyy년 MM월 dd일"
                                        selected = {birthDate}
                                        locale={ko}
                                        onChange={handleChangeUser}
                                        value = {user.birthDate}
                                    >
                                    </DatePicker>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="aggrement" required/>
                                <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                            </div>

                            <div className="mb-10 ">
                                <div className="row">
                                    <div className="col-4 pe-2">
                                        <button className="btn btn-primary btn-lg btn-block w-100"
                                        onClick={handleClickSignUp}>가입 완료
                                        </button>
                                    </div>
                                    <div className="col-4 ps-2">
                                        <button type="button" className="btn btn-danger btn-lg btn-block w-100">취소</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent
