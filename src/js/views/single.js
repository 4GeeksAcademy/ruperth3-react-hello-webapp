import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
    const { store } = useContext(Context);
    const params = useParams();
    const [element, setElement] = useState(null);

    useEffect(() => {
        if (params.theid) {
            let result;
            switch (params.type) {
                case "character":
                    result = store.characters?.find(character => character.url.split('/')[5] === params.theid);
                    break;
                case "planet":
                    result = store.planets?.find(planet => planet.url.split('/')[5] === params.theid);
                    break;
                case "vehicle":
                    result = store.vehicles?.find(vehicle => vehicle.url.split('/')[5] === params.theid);
                    break;
                default:
                    result = null;
            }
            setElement(result);
        }
    }, [params, store.characters, store.planets, store.vehicles]);

    const renderElementDetails = () => {
        if (!element) return <p className="text-light">No details available.</p>;

        switch (params.type) {
            case "character":
                return (
                    <div className="card-body d-flex justify-content-center">
                        <div className="me-2">
                            <img
                                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                                className="card-img-top"
                                src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
                                alt="character-img"
                            />
                        </div>
                        <div>
                            <h1 className="text-light">{element.name}</h1>
                            <p className="text-light">Height: {element.height}</p>
                            <p className="text-light">Gender: {element.gender}</p>
                            <p className="text-light">Hair Color: {element.hair_color}</p>
                            <p className="text-light">Eye Color: {element.eye_color}</p>
                            <p className="text-light">Skin Color: {element.skin_color}</p>
                            <p className="text-light">Birth Year: {element.birth_year}</p>
                        </div>
                    </div>
                );
            case "planet":
                return (
                    <div className="card-body d-flex justify-content-center">
                        <div className="me-2">
                            <img
                                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                                className="card-img-top"
                                src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
                                alt="planet-img"
                            />
                        </div>
                        <div>
                            <h1 className="text-light">{element.name}</h1>
                            <p className="text-light">Population: {element.population}</p>
                            <p className="text-light">Terrain: {element.terrain}</p>
                            <p className="text-light">Climate: {element.climate}</p>
                            <p className="text-light">Orbital Period: {element.orbital_period}</p>
                            <p className="text-light">Diameter: {element.diameter}</p>
                            <p className="text-light">Surface Water: {element.surface_water}</p>
                        </div>
                    </div>
                );
            case "vehicle":
                return (
                    <div className="card-body d-flex justify-content-center">
                        <div className="me-2">
                            <img
                                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                                className="card-img-top"
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
                                alt="vehicle-img"
                            />
                        </div>
                        <div>
                            <h1 className="text-light">{element.name}</h1>
                            <p className="text-light">Model: {element.model}</p>
                            <p className="text-light">Manufacturer: {element.manufacturer}</p>
                            <p className="text-light">Cost in Credits: {element.cost_in_credits}</p>
                            <p className="text-light">Crew: {element.crew}</p>
                            <p className="text-light">Cargo Capacity: {element.cargo_capacity}</p>
                        </div>
                    </div>
                );
            default:
                return <p className="text-light">No details available.</p>;
        }
    };

    return (
        <div className="jumbotron">
            <Link to="/">
                <span className="btn btn-warning btn-lg" role="button">
                Go back to the home page.
                </span>
            </Link>
            {renderElementDetails()}
        </div>
    );
};

