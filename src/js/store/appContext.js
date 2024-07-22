import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Crear el contexto con un valor predeterminado nulo.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // Estado local para el contexto.
        const [state, setState] = useState(() => {
            const initialState = getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState(prevState => ({
                        store: { ...prevState.store, ...updatedStore },
                        actions: { ...prevState.actions }
                    }))
            });
            return initialState;
        });

        useEffect(() => {
            state.actions.getCharacters();
            state.actions.getPlanets();
        }, [state.actions]);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;
