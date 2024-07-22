import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "/workspaces/ruperth3-react-hello-webapp/src/styles/home.css";

const Planets = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const addToFavorites = (planet) => {
    actions.addFavorite(planet);
  };

  return (
    <div className="d-flex carrousel">
      {store.planets && store.planets.map((elem, index) => (
        <div
          key={index}
          className="card mx-3"
          style={{ width: "18rem", flex: "0 0 auto" }}
          id="holaimg"
        >
          <img
            onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg")}
            className="firstImg"
            src={`https://starwars-visualguide.com/assets/img/planets/${elem.id}.jpg`}
            alt={elem.name} // Añadido para accesibilidad
          />
          <div className="card-body">
            <h5 className="card-title">{elem.name}</h5>
            <ul>
              <li>Population: {elem.population}</li>
              <li>Terrain: {elem.terrain}</li>
            </ul>
            <div className="container d-flex justify-content-between">
              <Link
                to={`/single/planet/${elem.id}`}
                className="btn btn-outline-primary"
              >
                Learn More
              </Link>
              <button
                className="btn btn-outline-warning text-warning"
                onClick={() => addToFavorites(elem)}
              >
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planets;
