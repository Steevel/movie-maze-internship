/* eslint-disable react-hooks/exhaustive-deps */
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

const DetailsPage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  function strip_html_tags(str) {
    if (str === null || str === "") return false;
    else str = str?.toString();
    return str?.replace(/<[^>]*>/g, "");
  }

  useEffect(() => {
    Axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data);
        console.log(movieData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container-xxl">
      <div className="card mb-3 my-4 shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movieData.image?.original || "http://placehold.it/226x318"}
              className="posterimg  rounded-start"
              alt="Movie poster"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title ">{movieData.name}</h1>

              <div>
                <span className="me-2">
                  <i className="bi bi-star-fill me-1 text-warning"></i>
                  <strong>{movieData.rating?.average?.toFixed(1)}</strong>
                </span>
                {movieData.genres?.map((genre, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill text-bg-light border border-2  me-1 mb-1 fs-6 pb-2 "
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="card-text mt-1">
                <small className="text-body-secondary me-2">
                  <strong>Runtime:</strong>{" "}
                  <em>{movieData.runtime || movieData.averageRuntime} min</em>
                </small>
                <small className="text-body-secondary me-2">
                  <strong>Language:</strong> <em>{movieData.language}</em>
                </small>
                <small className="text-body-secondary me-2">
                  <strong>Premiered:</strong>{" "}
                  <em>{movieData.premiered?.split("-").reverse().join("-")}</em>
                </small>
              </p>

              <p className="card-text my-2">
                {strip_html_tags(movieData.summary)}
              </p>
              <p className="card-text"></p>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Book Movie
              </button>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
