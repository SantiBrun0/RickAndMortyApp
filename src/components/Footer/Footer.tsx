import React from 'react';
import './Footer.css';

export type FooterProps = {
}

const Footer: React.FC<FooterProps>  = ({}) => {
	return (
		<footer className='footer'>
			Made with <i className='bx bx-heart'></i> by Santiago Bruno
		</footer>
	)
};

export default Footer;
