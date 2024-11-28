import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputField = ({
                        type = 'text',
                        label,
                        name,
                        value,
                        onChange,
                        placeholder = '',
                        readOnly = false,
                        required = false,
                        error = '',
                        className = '',
                        helpText = ''
                    }) => {
    return (
        <div className="mb-3">
            {label && (
                <label
                    htmlFor={name}
                    className="form-label"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                readOnly={readOnly}
                className={`
          form-control 
          ${error ? 'is-invalid' : ''}
          ${className}
        `}
            />
            {helpText && !error && (
                <small className="form-text text-muted">
                    {helpText}
                </small>
            )}
            {error && (
                <div className="invalid-feedback">
                    {error}
                </div>
            )}
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string,
    className: PropTypes.string,
    helpText: PropTypes.string
};

export default InputField;