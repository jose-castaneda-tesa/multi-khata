import axios from 'axios';

export const chuckService = {
  getRandomJoke() {
    return axios.get('https://api.chucknorris.io/jokes/random');
  },
};