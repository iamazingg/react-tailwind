import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const Button = (props) => {
    const className = [props.className];
    const onCLick = () => {
        if (props.onClick) props.onCLick()
    }
    if (props.type === 'link') {
        if (props.isExternal) {
            return (
                <a href={props.href} className= {className.join(" ")}>{props.children}</a>
            )
        } else {
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                    onCLick={onClick}
                >
                    {props.children}
                </Link>
            )
        }
    }
    return (
        <button
            to={props.href}
            className={className.join(" ")}
            onCLick={onClick}
        >
            {props.children}
        </button>
    );
}

Button.PropTypes = {
    type: PropTypes.oneOf('button', 'link'),
    onClick: PropTypes.func,
    className: PropTypes.string,
    href: PropTypes.string,
    isPrimary : PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSmall: PropTypes.bool,
    isLarge: PropTypes.bool,
    isBlock: PropTypes.bool,
    isExternal: PropTypes.bool,
    hasShadow: PropTypes.bool,
    
}

export default Button;