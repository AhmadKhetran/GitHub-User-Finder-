import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar mb-10 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none ps-2 mx-2">
          <FaGithub className="inline pr-4 text-5xl" />
          <Link to="/home" className="text-lg font-bold">
            {props.title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/home" className="btn btn-ghost btn-sm ">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm ">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
