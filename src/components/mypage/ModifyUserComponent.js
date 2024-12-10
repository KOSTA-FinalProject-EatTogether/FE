import React, { useState, useRef } from "react";
import InputField from "../common/InputField";
import PhoneNumberInput from "../common/PhoneNumberInput";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

const ModifyUserComponent = () => {
    const [user, setUser] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef();

    const handleChangeUser = (e) => {
        if (e.target) {
            user[e.target.name] = e.target.value;
            setUser({...user});
        } else {
            user.birthDate = e;
            setUser({...user});
            setBirthDate(e);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
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

    const profileImageStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '60px',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '2px solid #e5e7eb'
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h4 className="text-2xl font-bold text-[#2B3A55] mb-6">회원정보 수정</h4>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={profileImage || "/api/placeholder/120/120"}
                        alt="프로필"
                        style={profileImageStyle}
                    />
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                        프로필 사진 변경
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                <form className="space-y-4" noValidate>
                    <InputField
                        type="email"
                        label="이메일"
                        name="email"
                        value={user.email}
                        onChange={handleChangeUser}
                        placeholder="이메일을 입력하세요"
                        readOnly={true}
                    />

                    <InputField
                        type="password"
                        label="비밀번호"
                        name="password"
                        value={user.password}
                        onChange={handleChangeUser}
                        placeholder="비밀번호를 입력하세요"
                        required
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            type="text"
                            label="이름"
                            name="name"
                            value={user.name}
                            onChange={handleChangeUser}
                            placeholder="이름을 입력하세요"
                            required
                        />
                        <InputField
                            type="text"
                            label="닉네임"
                            name="nickname"
                            value={user.nickname}
                            onChange={handleChangeUser}
                            placeholder="닉네임을 입력하세요"
                            required
                        />
                    </div>

                    <PhoneNumberInput
                        label="휴대폰 번호"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChangeUser}
                        required
                    />

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">성별</label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="1" className="mr-2"/>
                                <span>남성</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="2" className="mr-2"/>
                                <span>여성</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">생일</label>
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일"
                            selected={birthDate}
                            locale={ko}
                            onChange={handleChangeUser}
                            value={user.birthDate}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <hr className="my-6"/>

                    <div className="flex justify-center gap-4">
                        <button
                            type="submit"
                            style={buttonStyle('#2B3A55')}
                            onMouseOver={e => e.target.style.backgroundColor = '#3d4f75'}
                            onMouseOut={e => e.target.style.backgroundColor = '#2B3A55'}
                        >
                            수정 완료
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

export default ModifyUserComponent;