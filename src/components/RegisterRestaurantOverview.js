import React from "react";
import InputField from "./common/InputField";

const RegisterRestaurantOverview = () => {
    const containerStyle = {
        width: '100%',
        maxWidth: '42rem',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem'
    };

    const headerStyle = {
        marginBottom: '1.5rem'
    };

    const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1rem'
    };

    const statusContainer = {
        display: 'flex',
        gap: '0.5rem'
    };

    const statusBadgeStyle = (color) => ({
        padding: '0.25rem 0.75rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        borderRadius: '9999px',
        ...getBadgeColors(color)
    });

    const contentContainerStyle = {
        backgroundColor: '#f9fafb',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginBottom: '1.5rem'
    };

    const inputGridStyle = {
        display: 'grid',
        gap: '1.5rem'
    };

    const documentLabelStyle = {
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#374151',
        marginBottom: '0.5rem',
        display: 'block'
    };

    const documentAreaStyle = {
        backgroundColor: '#f9fafb',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb'
    };

    const documentTextStyle = {
        color: '#6b7280',
        fontSize: '0.875rem'
    };

    function getBadgeColors(type) {
        switch (type) {
            case 'pending':
                return {
                    backgroundColor: '#fef3c7',
                    color: '#92400e'
                };
            case 'approved':
                return {
                    backgroundColor: '#d1fae5',
                    color: '#065f46'
                };
            case 'hold':
                return {
                    backgroundColor: '#fee2e2',
                    color: '#991b1b'
                };
            default:
                return {};
        }
    }

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h2 style={titleStyle}>식당 등록 현황</h2>
                <div style={statusContainer}>
                    <span style={statusBadgeStyle('pending')}>승인대기</span>
                    <span style={statusBadgeStyle('approved')}>승인</span>
                    <span style={statusBadgeStyle('hold')}>보류</span>
                </div>
            </div>

            <div style={contentContainerStyle}>
                <div style={inputGridStyle}>
                    <InputField
                        type="text"
                        label="식당이름"
                        name="rs_name"
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={true}
                    />
                    <InputField
                        type="tel"
                        label="식당연락처"
                        name="rs_phone"
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={true}
                    />
                    <InputField
                        type="text"
                        label="사업자번호"
                        name="rs_document_business_id"
                        style={{ width: '100%', backgroundColor: 'white' }}
                        readOnly={true}
                    />
                </div>
            </div>

            <div>
                <label style={documentLabelStyle}>
                    사업자 등록증
                </label>
                <div style={documentAreaStyle}>
                    <p style={documentTextStyle}>등록된 파일 표시 영역</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterRestaurantOverview;