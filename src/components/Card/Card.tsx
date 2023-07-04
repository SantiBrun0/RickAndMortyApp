import React from 'react';
import './Card.css';
import { Character } from '../../models/character';

export type CardProps = {
	character: Character,
	btnFav: (character: Character) => void
	isFav: boolean
}

const Card: React.FC<CardProps>  = ({character, btnFav, isFav}: CardProps) => {

	const { id, name, gender, species, status, image, location } = character

	return (
		<article className='card'>
			<h3>{id} - {name}</h3>
			<img src={image} alt="card-image" />
			<p>Gender: {gender}</p>
			<p>Specie: {species}</p>
			<p>Location: {location.name}</p>
			<p>Status: {status}</p>
			<i 
				className='bx bxs-heart' 
				onClick={() => btnFav(character)}
				style={ (isFav) ? {color: 'red'} : {color: 'rgb(197,197,197)'}}
			>
			</i>
		</article>
	)
};

export default Card;
