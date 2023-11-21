import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE } from "../actions/favoritesActions";
import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const favorites = useSelector((store) => store.favorites.favorites);

  const dispatch = useDispatch();
  const handleRemoveFav = (movieID) => {
    dispatch({ type: REMOVE_FAVORITE, payload: movieID });
  };

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {favorites?.map((movie) => (
          <Link
            key={movie.id}
            className="py-1 flex gap-2 justify-between"
            to={`/movies/${movie.id}`}
          >
            {movie.title}
            <span
              className="material-icons hover:text-red-600 text-[18px]"
              onClick={() => {
                handleRemoveFav(movie.id);
              }}
            >
              remove_circle
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovieList;
