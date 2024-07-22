import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "/workspaces/ruperth3-react-hello-webapp/src/styles/home.css";

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
    }, [actions]);

    const addToFavorites = (vehicle) => {
        actions.addFavorite(vehicle);
    };

    return (
        <div className="d-flex carrousel">
            {store.vehicles && store.vehicles.map((vehicle, index) => (
                <div
                    key={index}
                    className="card mx-3"
                    style={{ width: "18rem", flex: "0 0 auto" }}
                    id="holaimg"
                >
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`}
                        className="card-img-top"
                        alt={vehicle.name} // Mejora la accesibilidad
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Imagen de reemplazo
                    />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <ul>
                            <li>Model: {vehicle.model}</li>
                            <li>Cost in Credits: {vehicle.cost_in_credits}</li>
                            <li>Crew: {vehicle.crew}</li>
                        </ul>
                        <div className="container d-flex justify-content-between">
                            <Link
                                to={`/single/vehicle/${vehicle.id}`}
                                className="btn btn-outline-primary"
                            >
                                Learn More
                            </Link>
                            <button
                                className="btn btn-outline-warning text-warning"
                                onClick={() => addToFavorites(vehicle)}
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

export default Vehicles;
