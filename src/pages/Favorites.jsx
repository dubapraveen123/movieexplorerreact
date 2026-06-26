import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";

function Favorites() {
  const favorites = useSelector(
    state => state.favorites
  );

  const dispatch = useDispatch();

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <h2
          style={{
            textAlign: "center"
          }}
        >
          No Favorite Movies
        </h2>
      ) : (
        <div className="movies-container">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
            >
              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <p>{movie.genre}</p>

              <p>⭐ {movie.rating}</p>

              <button
                className="delete-btn"
                style={{
                  width: "100%",
                  marginTop: "10px"
                }}
                onClick={() =>
                  dispatch(
                    removeFavorite(movie.id)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Favorites;