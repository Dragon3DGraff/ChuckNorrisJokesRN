import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import favouriteJokes from './favouriteJokes';

function Joke({joke, updateState, number}){
	const [isFavourite, setIsFavourite] = useState(favouriteJokes.has(joke));

	function addToFavourite(){
		if(!isFavourite){
			favouriteJokes.add(joke);
		} else {
			favouriteJokes.remove(joke);
		}
		if(updateState)	updateState();
		setIsFavourite(!isFavourite);
	}
	return(
		<View style={styles.jokeview}>
			<Text style={styles.joketext}>
				{number ? number +'. ' : ''}
				{joke ? joke['value'] : ""}
			</Text>
			<Text onPress={addToFavourite}>
				{!isFavourite
					?
					<Text style={styles.star}>&#9734;</Text>
					:
					<Text style={styles.star}>&#9733;</Text>
				}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	jokeview: {
		
		flexDirection: "row",
		justifyContent: "space-between",
		// alignItems: 'center',
		backgroundColor: '#ffffff',
		margin: 5,
	},
	joketext: {
		width:'90%',
		padding: 7,
	},
	star: {
		fontSize: 18
	}
});


export default Joke;