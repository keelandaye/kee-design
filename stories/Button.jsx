import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export const Button = ({ variant, backgroundColor, size, label, ...props }) => {
    return (
        <button
            type="button"
            className={['kee-button', `kee-button--${size}`, `kee-button--${variant}`].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    primary: PropTypes.oneOf(['primary', 'secondary', 'warning']),
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    backgroundColor: null,
    variant: 'primary',
    size: 'medium',
    onClick: undefined,
    disabled: false,
};
