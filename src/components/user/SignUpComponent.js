import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import PhoneNumberInput from "../../components/common/PhoneNumberInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale';

const initState = {
    email: '',
    name: '',
    nickname: '',
    password: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
};

const SignUpComponent = () => {
    const [user, setUser] = useState({ ...initState });
    const [birthDate, setBirthDate] = useState(new Date());

    const handleChangeUser = (e) => {
        if (e.target) {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        } else {
            setUser({
                ...user,
                birthDate: e
            });
            setBirthDate(e);
        }
    };

    const handleClickSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(user).forEach(key => {
            formData.append(key, user[key]);
        });
        console.log(formData);
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '42rem',
        margin: '0 auto',
        padding: '2rem'
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2B3A55',
        marginBottom: '2rem'
    };

    const rowStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1rem'
    };

    const genderContainerStyle = {
        marginBottom: '1.5rem'
    };

    const genderLabelStyle = {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#2B3A55',
        marginBottom: '0.5rem'
    };

    const genderOptionsStyle = {
        display: 'flex',
        gap: '2rem'
    };

    const radioGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem'
    };

    const buttonStyle = (color) => ({
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: color,
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        flex: 1,
        maxWidth: '200px',
        transition: 'background-color 0.2s'
    });

    const datePickerStyle = {
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #e5e7eb',
        borderRadius: '4px',
        color: '#374151'
    };
    const datePickerCustomStyles = {
        width: '100%',
        padding: '0.5rem',
        fontSize: '0.875rem',
        border: '1px solid #e5e7eb',
        borderRadius: '4px',
        color: '#374151',
        backgroundColor: 'white',
        cursor: 'pointer',
        outline: 'none'
    };

    const datePickerWrapperStyle = {
        marginBottom: '1.5rem'
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h4 style={titleStyle}>일반 사용자 회원가입</h4>
                <form onSubmit={handleClickSignUp}>
                    <InputField
                        type="email"
                        label="이메일"
                        name="email"
                        value={user.email}
                        onChange={handleChangeUser}
                        style={{marginBottom: '1rem'}}
                        required
                    />
                    <InputField
                        type="password"
                        label="비밀번호"
                        name="password"
                        value={user.password}
                        onChange={handleChangeUser}
                        style={{marginBottom: '1rem'}}
                        required
                    />
                    <div style={rowStyle}>
                        <InputField
                            type="text"
                            label="이름"
                            name="name"
                            value={user.name}
                            onChange={handleChangeUser}
                            required
                        />
                        <InputField
                            type="text"
                            label="닉네임"
                            name="nickname"
                            value={user.nickname}
                            onChange={handleChangeUser}
                            required
                        />
                    </div>
                    <PhoneNumberInput
                        label="휴대폰 번호"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChangeUser}
                        style={{marginBottom: '1rem'}}
                        required
                    />
                    <div style={genderContainerStyle}>
                        <label style={genderLabelStyle}>성별</label>
                        <div style={genderOptionsStyle}>
                            <div style={radioGroupStyle}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="1"
                                    onChange={handleChangeUser}
                                />
                                <span style={{color: '#2B3A55'}}>남성</span>
                            </div>
                            <div style={radioGroupStyle}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="2"
                                    onChange={handleChangeUser}
                                />
                                <span style={{color: '#2B3A55'}}>여성</span>
                            </div>
                        </div>
                    </div>
                    <div style={datePickerWrapperStyle}>
                        <label style={{
                            display: 'block',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#2B3A55',
                            marginBottom: '0.5rem'
                        }}>
                            생일을 선택해주세요
                        </label>
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일"
                            selected={birthDate}
                            locale={ko}
                            onChange={handleChangeUser}
                            customInput={
                                <input
                                    style={datePickerCustomStyles}
                                />
                            }
                        />
                    </div>
                    <div style={{marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <input
                            type="checkbox"
                            id="aggrement"
                            required
                        />
                        <label
                            htmlFor="aggrement"
                            style={{color: '#2B3A55', margin: 0}}
                        >
                            개인정보 수집 및 이용에 동의합니다.
                        </label>
                    </div>
                    <div style={buttonContainerStyle}>
                        <button
                            type="submit"
                            style={buttonStyle('#2B3A55')}
                            onMouseOver={e => e.target.style.backgroundColor = '#3d4f75'}
                            onMouseOut={e => e.target.style.backgroundColor = '#2B3A55'}
                        >
                            가입 완료
                        </button>
                        <button
                            type="button"
                            style={buttonStyle('#F54748')}
                            onMouseOver={e => e.target.style.backgroundColor = '#f76666'}
                            onMouseOut={e => e.target.style.backgroundColor = '#F54748'}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpComponent;