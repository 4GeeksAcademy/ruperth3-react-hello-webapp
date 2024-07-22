import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "/workspaces/ruperth3-react-hello-webapp/src/styles/home.css";

const Card = () => {
  const { store, actions } = useContext(Context);

  const addToFavorites = (character) => {
    actions.addFavorite(character);
  };

  return (
    <div className="d-flex carrousel">
      {store.characters && store.characters.map((character, index) => (
        <div
          id="holaimg"
          key={index}
          className="card mx-3"
          style={{ width: "18rem", flex: "0 0 auto" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
            className="card-img-top"
            alt={character.name} 
          />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <ul>
              <li>Gender: {character.gender}</li>
              <li>Hair Color: {character.hair_color}</li>
              <li>Eye Color: {character.eye_color}</li>
            </ul>
            <div className="container d-flex justify-content-between">
              <Link
                to={`/single/character/${character.id}`}
                className="btn btn-outline-primary"
              >
                Learn More
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToFavorites(character)}
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

export default Card;
