import React from 'react';
import './Header.css';
import { Button } from '../Button';

export type HeaderProps = {
	btnTitle: string
	btnFunction: () => void
}

const Header: React.FC<HeaderProps>  = ({ btnTitle, btnFunction }: HeaderProps) => {

	return (
		<header className='header'>
			<div className='container'>
				<img src="icon-rick.webp" alt="icon-rick" />
				<h2 className='title'>Rick & Morty</h2>
			</div>

			<Button 
				title={btnTitle}
				extraClassName='btn-header'
				clickFunction={btnFunction} 
			/>
		</header>
	)
};

export default Header;
