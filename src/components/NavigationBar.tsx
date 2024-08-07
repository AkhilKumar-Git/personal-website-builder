import { Link } from "react-router-dom";

const NavigationBar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold" }}>Neeraj Walia #GX09</div>
      <div>
        <Link to="/work" style={linkStyle}>
          Work
        </Link>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/resume" style={linkStyle}>
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
