import React, {useRef, useState} from "react";
import InputField from "../../components/common/InputField";
import PhoneNumberInput from "../../components/common/PhoneNumberInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale';

const initState = {
    email: '',
    password: '',
    phoneNumber: '',
    rs_name: '',
    rs_phone: '',
    rs_document_business_id: ''
};

const OwnerSignUpComponent = () => {
    const uploadRef = useRef();
    const [rs_document, setRs_document] = useState(initState);

    const handleChange = (e) => {
        rs_document[e.target.name] = e.target.value;
        setRs_document({...rs_document});
    };

    const handleClickSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(rs_document).forEach(key => {
            formData.append(key, rs_document[key]);
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

    const fileInputLabelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#374151'
    };

    const fileInputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: '0.375rem',
        border: '1px solid #e5e7eb',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        marginBottom: '1.5rem'
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h4 style={titleStyle}>식당 점주 회원가입</h4>
                <form onSubmit={handleClickSignUp}>
                    <InputField
                        type="email"
                        label="이메일"
                        name="email"
                        value={rs_document.email}
                        onChange={handleChange}
                        style={{marginBottom: '1rem'}}
                        placeholder="이메일을 입력하세요"
                        required
                    />
                    <InputField
                        type="password"
                        label="비밀번호"
                        name="password"
                        value={rs_document.password}
                        onChange={handleChange}
                        style={{marginBottom: '1rem'}}
                        placeholder="비밀번호를 입력하세요"
                        required
                    />
                    <InputField
                        type="text"
                        label="식당이름"
                        name="rs_name"
                        value={rs_document.rs_name}
                        onChange={handleChange}
                        placeholder="식당 이름을 입력해주세요"
                        required
                    />

                    <InputField
                        type="tel"
                        label="식당연락처"
                        name="rs_phone"
                        value={rs_document.rs_phone}
                        onChange={handleChange}
                        placeholder="식당 연락처를 입력하세요"
                        style={{ width: '100%' }}
                    />
                    <InputField
                        type="text"
                        label="사업자번호"
                        name="rs_document_business_id"
                        value={rs_document.rs_document_business_id}
                        onChange={handleChange}
                        placeholder="사업자번호를 입력하세요"
                        style={{ width: '100%' }}
                    />

                    <div>
                        <label
                            htmlFor="fileInput"
                            style={fileInputLabelStyle}
                        >
                            사업자 등록증을 올려주세요
                        </label>
                        <input
                            ref={uploadRef}
                            style={fileInputStyle}
                            type="file"
                            multiple={true}
                            id="fileInput"
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

export default OwnerSignUpComponent;