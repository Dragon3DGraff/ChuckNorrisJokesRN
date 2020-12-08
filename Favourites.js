import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import favouriteJokes from "./favouriteJokes";
import Joke from "./Joke";

export default function Favourites() {
  const [cleared, setCleared] = useState(favouriteJokes.array.length === 0);
  const [arrUpdated, setArrUpdated] = useState(true);

  function updateState() {
    if (favouriteJokes.array.length === 0) setCleared(true);
    setArrUpdated(!arrUpdated);
  }

  function clearFavourites() {
    favouriteJokes.clear();
    setCleared(true);
  }

  return (
    <View style={styles.favouriteJokes}>
      <Text>Your favourite jokes</Text>
      <View>
        {favouriteJokes.array.map((item, index) => (
          <Joke
            key={item.id}
            joke={item}
            updateState={updateState}
            number={index + 1}
          ></Joke>
        ))}
      </View>
      <View>
        {!cleared ? (
          <Button onPress={clearFavourites} title="Clear Favourites"></Button>
        ) : (
          <Text>No Favourite Jokes</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  favouriteJokes: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});
