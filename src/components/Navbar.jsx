import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );
const favorites = useSelector(
  state => state.favorites
);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        background:
"linear-gradient(90deg,#1E3A8A,#2563EB)",
        borderBottom: "1px solid #374151",
      }}
    >
      <div>
        <Link to="/">Home</Link>

        <Link
          to="/movies"
          style={{ marginLeft: "20px" }}
        >
          Movies
        </Link>
        <Link
  to="/favorites"
  style={{ marginLeft: "20px" }}
>
  Favorites ({favorites.length})
</Link>
        <Link
  to="/about"
  style={{ marginLeft: "20px" }}
>
  About
</Link>
      </div>

      <div>
        {!user && (
          <>
            <Link
              to="/register"
              style={{ marginRight: "20px" }}
            >
              Register
            </Link>

            <Link to="/login">
              Login
            </Link>
          </>
        )}

        {user && (
          <>
            <span
              style={{
                color: "white",
                marginRight: "20px",
                fontWeight: "bold"
              }}
            >
              Welcome {user.name}
            </span>

            <Link to="/logout">
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;