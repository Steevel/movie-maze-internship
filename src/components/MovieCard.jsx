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
          <h5 className="card-title ">{movie.show.name}</h5>
          <div>
            <span className="me-2">
              <i className="bi bi-star-fill me-1 text-warning"></i>
              <strong>
                {movie.show.rating?.average
                  ? movie.show.rating?.average?.toFixed(1)
                  : "0.0"}{" "}
              </strong>
            </span>
            {movie.show?.genres?.map((genre, index) => (
              <span
                key={index}
                className="badge rounded-pill text-bg-light border border-2  me-1 mb-1  pb-1 "
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="my-1">
            <small className="text-body-secondary me-2">
              <strong>Runtime:</strong>
              <em>
                {" "}
                {movie.show.runtime || movie.show.averageRuntime
                  ? movie.show.runtime || movie.show.averageRuntime
                  : "0"}{" "}
                min
              </em>
            </small>
          </div>
          <div className="my-1">
            <small className="text-body-secondary me-2">
              <strong>Language:</strong>
              <em> {movie.show.language ? movie.show.language : "English"}</em>
            </small>
          </div>
          <Link to={`/details/${movie.show.id}`} className="btn btn-dark mt-2">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
