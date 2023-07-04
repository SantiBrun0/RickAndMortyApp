import React from 'react';
import './Button.css';

export type ButtonProps = {
	title: string
	clickFunction: () => void
	extraClassName?: string
}

const Button: React.FC<ButtonProps>  = ({ title, clickFunction, extraClassName }: ButtonProps) => {
	return (
		<button 
			onClick={clickFunction}
			className={`btn ${extraClassName}`}
		>
			{title}
		</button>
	);
};

export default Button;
