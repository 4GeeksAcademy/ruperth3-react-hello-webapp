import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Star-Wars-Logo-1.png";
import "/workspaces/ruperth3-react-hello-webapp/src/styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const eliminar = (item) => {
        actions.eliminar(item);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3" id="navBarsito">
            <Link to="/">
                <img src={Logo} className="logo" alt="logo-star-wars" />
            </Link>
            <div className="dropdown ms-auto">
                <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites <span>({store.favorites.length})</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                {item.name}
                                <button onClick={() => eliminar(item)} className="btn btn-link">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item">Empty (0)</li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
