import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhoneNumberInput = ({
                              label = '전화번호',
                              value,
                              onChange,
                              placeholder = '010-1234-5678',
                              required = false,
                              error = ''
                          }) => {
    const formatPhoneNumber = (input) => {
        // 숫자만 추출
        const phoneNumber = input.replace(/[^\d]/g, '');

        // 최대 11자리로 제한
        const limitedNumber = phoneNumber.slice(0, 11);

        // 포맷팅
        if (limitedNumber.length < 4) {
            return limitedNumber;
        } else if (limitedNumber.length < 7) {
            return `${limitedNumber.slice(0, 3)}-${limitedNumber.slice(3)}`;
        } else if (limitedNumber.length < 11) {
            return `${limitedNumber.slice(0, 3)}-${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`;
        } else {
            return `${limitedNumber.slice(0, 3)}-${limitedNumber.slice(3, 7)}-${limitedNumber.slice(7)}`;
        }
    };

    const handleChange = (e) => {
        const formattedNumber = formatPhoneNumber(e.target.value);
        onChange(e.target.name, formattedNumber);
    };

    const validatePhoneNumber = (number) => {
        // 010으로 시작하는 11자리 숫자 체크
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        return phoneRegex.test(number);
    };

    return (
        <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
                {label}
            </label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength="13"
                required={required}
                className={`
          form-control 
          ${error || (value && !validatePhoneNumber(value)) ? 'is-invalid' : ''}
        `}
            />
            {error && (
                <div className="invalid-feedback">
                    {error}
                </div>
            )}
            {value && !validatePhoneNumber(value) && !error && (
                <div className="invalid-feedback d-block">
                    올바른 휴대폰 번호 형식이 아닙니다. (010-XXXX-XXXX)
                </div>
            )}
        </div>
    );
};

PhoneNumberInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string
};

export default PhoneNumberInput;