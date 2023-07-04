import React, { useEffect, useState } from 'react';
import './Home.css';
import { Header } from '../../components/Header';
import getFiveRandomCharacters from '../../api/getCharacters';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../../models/character';
import { addFavorite } from '../../redux/states/favorites';
import { AppStore } from '../../redux/store';


export type HomeProps = {
}

const Home: React.FC<HomeProps>  = ({}) => {

	const { characters,  newFiveCharacters } = getFiveRandomCharacters()

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

	useEffect(() => {
	  setSelectedCharacters(stateFavorite)
	}, [stateFavorite])
	

	return (
		<div className='home'>
			<Header btnTitle='open favs' btnFunction={() => navigate('favs')} />
			<div className='btn-container'>
				<Button title='Randomize five characters' extraClassName='btn-randomize' clickFunction={newFiveCharacters} />
			</div>

			<section className='cards-container'>
				{
					characters.map(character => <Card character={character} isFav={findCharacter(character)} btnFav={() => handleChange(character)} key={character.id} />)
				}
			</section>
		</div>
	)
};

export default Home;
