import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "65e609941da4acd944394273951d6598",
    language: "es-ES",
  },
});

export default movieDB;
