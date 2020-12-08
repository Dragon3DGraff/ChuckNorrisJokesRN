import AsyncStorage from "@react-native-async-storage/async-storage";

let favouritesArray = [];

const getAllKeys = async () => {
  try {
    let favouritesObject = JSON.parse(await AsyncStorage.getItem("favourites"));
    for (let key in favouritesObject) {
      favouritesArray.push(favouritesObject[key]);
    }
  } catch (e) {
    console.log(e);
  }
};

getAllKeys();

const favouriteJokes = {
  array: favouritesArray,
  add: function (joke) {
    const has = this.has(joke);
    if (!has) {
      this.array.push(joke);
      this.updateLocalStorage();
    }
    if (this.array.length > 10) {
      this.array.shift();
      this.updateLocalStorage();
    }
  },
  remove: function (joke) {
    this.array = this.array.filter((item) => item["id"] !== joke.id);
    this.updateLocalStorage();
  },
  clear: function () {
    this.array.length = 0;
    this.updateLocalStorage();
  },
  has: function (joke) {
    const filtered = this.array.filter((item) => item["id"] === joke.id);
    return filtered.length > 0;
  },
  arrToJSON: function () {
    let object = {};
    this.array.map((item) => {
      object[item.id] = item;
    });
    return JSON.stringify(object);
  },
  updateLocalStorage: async function () {
    await AsyncStorage.setItem("favourites", this.arrToJSON());
  },
};

export default favouriteJokes;
