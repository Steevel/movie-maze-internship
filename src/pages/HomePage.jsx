/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Axios from "axios";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res.data);
        setMovieList(res.data);
        console.log(movieList);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container-xxl">
      <div className="d-flex justify-content-center my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4 mx-auto">
          {movieList.map((movie) => (
            <MovieCard key={movie.show.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
