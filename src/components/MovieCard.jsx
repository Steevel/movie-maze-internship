import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col">
      {/* style={{ width: "18rem" }} */}
      <div className="card shadow">
        <img
          src={movie.show.image?.medium || "http://placehold.it/226x318"}
          // width="320px"
          height="320px"
          className="card-img-top object-fit-cover"
          alt="Movie poster"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.show.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <Link to={`/${movie.show.id}`} className="btn btn-dark">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
