import InputField from "./common/InputField";
import React, { useRef, useState } from "react";
import { postAdd } from "../api/registerRestaurantApi";

const initState = {
    rs_name: '',
    rs_phone: '',
    rs_document_business_id: ''
};

const RegisterRestaurantForm = () => {
    const uploadRef = useRef();
    const [rs_document, setRs_document] = useState(initState);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        rs_document[e.target.name] = e.target.value;
        setRs_document({...rs_document});
    };

    const handleClickAdd = (e) => {
        const files = uploadRef.current.files;
        const formData = new FormData();

        for(let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        formData.append("rs_name", rs_document.rs_document_business_id);
        formData.append("rs_phone", rs_document.rs_phone);
        formData.append("rs_document_business_id", rs_document.rs_document_business_id);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // postAdd(formData).then(data => {
        //     setResult(data.result);
        // });
    };

    const containerStyle = {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    };

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

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem'
    };

    const buttonStyle = {
        backgroundColor: '#3182ce',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#2c5282'
    };

    return (
        <div style={containerStyle}>
            <InputField
                type="text"
                label="식당이름"
                name="rs_name"
                value={rs_document.rs_name}
                onChange={handleChange}
                placeholder="식당 이름을 입력하세요"
                style={{ width: '100%' }}
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

            <div style={buttonContainerStyle}>
                <button
                    type="button"
                    style={buttonStyle}
                    onMouseOver={e => e.target.style.backgroundColor = '#2c5282'}
                    onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
                    onClick={handleClickAdd}
                >
                    식당 등록 완료
                </button>
            </div>
        </div>
    );
};

export default RegisterRestaurantForm;