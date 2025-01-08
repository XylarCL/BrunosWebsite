import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" key="Home" className="header-content">Home</Link>
            <Link to="/projects" key="projects" className="header-content">Projects</Link>
            <Link to="/about" key="about" className="header-content">About</Link>
        </header>);
}

export default Header;