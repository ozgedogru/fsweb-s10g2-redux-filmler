import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { DELETE_MOVIE } from "../actions/movieActions";
import { ADD_FAVORITE } from "../actions/favoritesActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();

  const movies = useSelector((store) => store.movies.movies);
  const movie = movies.find((movie) => movie.id === Number(id));

  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch({ type: DELETE_MOVIE, payload: movie.id });
    push("/movies");
  };

  const isFav = useSelector((store) =>
    store.favorites.favorites.includes(movie)
  );
  const handlerFav = () => {
    if (!isFav) {
      dispatch({ type: ADD_FAVORITE, payload: movie });
    }
  };

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Açıklama</div>
          <p className="flex-1">{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button
          onClick={handlerDelete}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500"
        >
          Sil
        </button>
        <button
          onClick={handlerFav}
          className="myButton bg-blue-600 hover:bg-blue-500 "
        >
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Movie;
