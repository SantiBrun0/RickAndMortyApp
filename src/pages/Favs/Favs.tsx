import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { AppStore } from '../../redux/store';
import './Favs.css';
import { Card } from '../../components/Card';
import { Character } from '../../models/character';
import { addFavorite, removeAllFavorites } from '../../redux/states/favorites';
import { Button } from '../../components/Button';

export type FavsProps = {
}

const Favs: React.FC<FavsProps>  = ({}) => {

	const navigate = useNavigate()

	const dispatch = useDispatch()
	
	const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([])

	const stateFavorite = useSelector((store: AppStore) => store.favorites)

	const findCharacter = (characterParam: Character): boolean => !!stateFavorite.find(character => characterParam.id === character.id)
	const filterCharacter = (characterParam: Character): Character[] => stateFavorite.filter(character => characterParam.id !== character.id)

	const handleChange = (character: Character) => {
		const filteredCharacter = findCharacter(character) ? filterCharacter(character) : [...selectedCharacters, character]
		dispatch(addFavorite(filteredCharacter))
		setSelectedCharacters(filteredCharacter)
	}

	const handleRemoveAllFavs = () => {
		dispatch(removeAllFavorites())
	}

	useEffect(() => {
	  setSelectedCharacters(stateFavorite)
	}, [stateFavorite])
	

	return (
		<div className='favs'>
			<Header 
				btnTitle='home' 
				btnFunction={() => navigate(-1)}
			/>

			{
				(stateFavorite.length === 0) 
					? <p className='no-favs'>No favorites characters yet :(</p> 
					: <Button title='Remove all favs' extraClassName='btn-remove-all' clickFunction={handleRemoveAllFavs} />
			}

			<section className='cards-fav-container'>
				{
					stateFavorite.map(character => <Card character={character} isFav={findCharacter(character)} btnFav={() => handleChange(character)} key={character.id} />)
				}
			</section>
		</div>
	)
};

export default Favs;
