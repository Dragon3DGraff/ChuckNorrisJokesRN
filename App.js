import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RandomJokes from './RandomJokes';
import Favourites from "./Favourites";

export default function App() {
	const [viewFavourites, setViewFavourites] = useState(false);

	function showFavourite(){
		setViewFavourites(!viewFavourites)
	}
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Chuck Norris Jokes</Text>
			<View style={styles.switchmodeview}>
				<Button onPress={showFavourite} title={!viewFavourites ? 'Favourites' : 'Get Jokes'}></Button>
			</View>
			<View>
				{!viewFavourites ? <RandomJokes ></RandomJokes>: <Favourites ></Favourites>}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C4C4C4',
		alignItems: 'center',
		marginTop: 25,
	},
	header: {
		fontSize: 22,
	},
	switchmodeview: {
		margin: 10,
	},
});
