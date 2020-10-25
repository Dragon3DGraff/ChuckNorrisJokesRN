import React, { useEffect, useState } from 'react';
import Joke from './Joke';
import { Button, View, StyleSheet } from 'react-native';

function RandomJokes () {
	
	const [joke, setJoke] = useState('');
	const [timer, setTimer] = useState(false);

	useEffect(() => {
		let interval;
		if(timer) {
			getJoke();
			interval = setInterval(getJoke, 3000 )
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timer])

	function getJoke(){
		fetch('https://api.chucknorris.io/jokes/random')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			setJoke(data)
		})
		.catch((err) => console.error(err))
	}

	function initTimer(){
		setTimer(!timer);
	}

	return (
		<View>
			<View style={styles.buttonsview}>
				<Button title="Get joke" onPress={getJoke}></Button>
				<Button title={!timer ?'Auto':'Stop'} onPress={initTimer}></Button>
			</View>
			<View style={styles.jokeview}>
			{joke ? <Joke key={joke.id} joke={joke}></Joke>:null}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonsview: {
		flexDirection: "row",
		width: 150,
		justifyContent: "space-between",
		backgroundColor: '#C4C4C4',
		alignItems: 'center',
		alignSelf: 'center'
	},
	jokeview: {
		alignItems: 'center',
		margin: 20
	}
});

export default RandomJokes;