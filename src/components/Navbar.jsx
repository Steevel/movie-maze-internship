import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white" href="#">
          Movie Maze
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
