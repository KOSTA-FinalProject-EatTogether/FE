import React, { useState } from "react";
import InputField from "./common/InputField";
import RegisterRestaurantOverview from "./RegisterRestaurantOverview";

const RegisterRestaurantSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSearch = () => {
        setShowResults(true);
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#1a75ff' : '#3182ce',
        color: 'white',
        marginBottom: '16px',
        padding: '0 24px',
        borderRadius: '6px',
        border: 'none',
        height: '38px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isHovered
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 1px 3px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={{ width: '100%', maxWidth: '42rem', margin: '0 auto' }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-end'
            }}>
                <div style={{ flex: 1 }}>
                    <InputField
                        type="text"
                        label="사업자번호"
                        name="rs_name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="사업자 번호를 입력하세요"
                    />
                </div>
                <button
                    type="button"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleSearch}
                >
                    조회
                </button>
            </div>

            {showResults && (
                <div style={{ marginTop: '1.5rem' }}>
                    <RegisterRestaurantOverview />
                </div>
            )}
        </div>
    );
};

export default RegisterRestaurantSearch;