'use server'

const KEY = process.env.API_KEY;
console.log(process.env.API_KEY)
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}`;

export const searchMovies = async (title: string) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    return data.Search;
  };