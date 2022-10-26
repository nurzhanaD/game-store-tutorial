import classNames from 'classnames';
import React from 'react';
import './Button.css';

export function Button({onClick,type,children,size='s'}) {
    const btnClass = classNames({
        'btn':true,
        'btn-primary': type === 'primary',
        'btn-secondary': type === 'secondary',
        'btn-small': type === 'small',
        'btn-medium': type === 'medium'
    })
    return (
      <button className={btnClass} onClick={onClick}>{children}</button>
    )
}
