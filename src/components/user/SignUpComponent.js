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

    const handleChangeUser = (e) => {
        if (e.target) {
            user[e.target.name] = e.target.value
            setUser({...user})
        } else {
            user.birthDate = e
            setUser({...user})
            setBirthDate(e)
        }
    }

    const handleClickSignUp = (e) => {
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
        <div className="container">
            <div className="input-form-backgroud row">
                <div className="input-form col-md-12 mx-auto">
                    <h4 className="mb-3" style={{color: '#2B3A55'}}>회원가입</h4>
                    <form className="validation-form" noValidate>
                        <InputField type="email" label="이메일" name="email" value={user.email} onChange={handleChangeUser} required />
                        <InputField type="password" label="비밀번호" name="password" value={user.password} onChange={handleChangeUser} required />
                        <div className="row">
                            <InputField type="text" label="이름" name="name" value={user.name} onChange={handleChangeUser} required />
                            <InputField type="text" label="닉네임" name="nickname" value={user.nickname} onChange={handleChangeUser} required />
                        </div>
                        <PhoneNumberInput label="휴대폰 번호" name="phoneNumber" value={user.phoneNumber} onChange={handleChangeUser} required />
                        <div className="col-md-6 mb-3">
                            <label htmlFor="gender" className="form-label" style={{color: '#2B3A55'}}>성별</label>
                            <div>
                                <input type="radio" name="gender" value="1" /> <span style={{color: '#2B3A55'}}>남성</span>
                            </div>
                            <div>
                                <input type="radio" name="gender" value="2" /> <span style={{color: '#2B3A55'}}>여성</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthDate" className="form-label" style={{color: '#2B3A55'}}>생일을 선택해주세요</label>
                            <DatePicker dateFormat="yyyy년 MM월 dd일" selected={birthDate} locale={ko} onChange={handleChangeUser} value={user.birthDate} />
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="aggrement" required />
                            <label className="custom-control-label" htmlFor="aggrement" style={{color: '#2B3A55'}}>개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        <div className="mb-10 ">
                            <div className="row">
                                <div className="col-4 pe-2">
                                    <button className="btn btn-primary btn-lg btn-block w-100" onClick={handleClickSignUp} style={{backgroundColor: '#2B3A55'}}>가입 완료</button>
                                </div>
                                <div className="col-4 ps-2">
                                    <button type="button" className="btn btn-danger btn-lg btn-block w-100" style={{backgroundColor: '#F54748'}}>취소</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent