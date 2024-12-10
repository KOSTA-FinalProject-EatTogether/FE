import React, { useState } from "react";
import InputField from "./common/InputField";

const RegisterRestaurantOverview = ({
                                        status = 'hold',
                                        holdReason = '필수 서류가 누락되었습니다.',
                                        initialData = {
                                            rs_name: '',
                                            rs_phone: '',
                                            rs_document_business_id: ''
                                        }
                                    }) => {
    const [formData, setFormData] = useState(initialData);
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleSubmit = () => {
        console.log('수정된 데이터:', formData);
        console.log('새로운 파일:', files);
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '42rem',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem'
        }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                }}>식당 등록 현황</h2>
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        backgroundColor: '#fee2e2',
                        color: '#991b1b'
                    }}>
                        보류
                    </span>
                    {status === 'hold' && (
                        <div style={{
                            marginLeft: '0.75rem',
                            fontSize: '0.875rem',
                            color: '#991b1b',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
                            </svg>
                            <span>{holdReason}</span>
                        </div>
                    )}
                </div>
            </div>

            <div style={{
                backgroundColor: '#f9fafb',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                marginBottom: '1.5rem'
            }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <InputField
                        type="text"
                        label="식당이름"
                        name="rs_name"
                        value={formData.rs_name}
                        onChange={handleChange}
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={status !== 'hold'}
                    />
                    <InputField
                        type="tel"
                        label="식당연락처"
                        name="rs_phone"
                        value={formData.rs_phone}
                        onChange={handleChange}
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={status !== 'hold'}
                    />
                    <InputField
                        type="text"
                        label="사업자번호"
                        name="rs_document_business_id"
                        value={formData.rs_document_business_id}
                        onChange={handleChange}
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={status !== 'hold'}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    display: 'block',
                    marginBottom: '0.5rem'
                }}>
                    사업자 등록증
                </label>
                {status === 'hold' ? (
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '0.375rem',
                            border: '1px solid #e5e7eb'
                        }}
                        multiple
                    />
                ) : (
                    <div style={{
                        backgroundColor: '#f9fafb',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                    }}>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                            등록된 파일 표시 영역
                        </p>
                    </div>
                )}
            </div>

            {status === 'hold' && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        type="button"
                        style={{
                            backgroundColor: '#3182ce',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.375rem',
                            border: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease',
                        }}
                        onClick={handleSubmit}
                        onMouseOver={e => e.target.style.backgroundColor = '#2c5282'}
                        onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
                    >
                        수정사항 제출
                    </button>
                </div>
            )}
        </div>
    );
};

export default RegisterRestaurantOverview;