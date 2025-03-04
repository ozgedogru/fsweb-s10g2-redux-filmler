import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_FAVORITES } from "../actions/favoritesActions";
import { Link } from "react-router-dom";

const AppHeader = (props) => {
  const appTitle = useSelector((store) => store.movies.appTitle);

  const displayFavorites = useSelector(
    (store) => store.favorites.displayFavorites
  );

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({ type: TOGGLE_FAVORITES });
  };

  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className="text-zinc-600">{appTitle}</h2>
      <div className="flex items-center gap-2">
        <div
          onClick={handleToggle}
          className="myButton bg-blue-600 hover:bg-blue-500"
        >
          <span>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="myButton bg-green-700 hover:bg-green-600"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
