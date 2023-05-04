import { useParams } from "react-router-dom";

const DetailsPage = ({ movie }) => {
  const { id } = useParams();

  return (
    <div>
      <h1>DetailsPage</h1>
      <h2>{id}</h2>
      <h2>{movie?.show.name}</h2>
    </div>
  );
};

export default DetailsPage;
