import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
		return <a className={`${style.btn} ${props.style}`} href={props.href}>
			{props.children}
		</a>
};

export default Button;