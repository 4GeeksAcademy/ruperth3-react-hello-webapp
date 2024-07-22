const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contador: 0,
            demo: [],
            characters: [],
            planets: [],
            favorites: [],
            vehicles: []
        },
        actions: {
            getCharacters: async () => {
                try {
                    const response = await fetch('https://swapi.dev/api/people/');
                    if (response.status !== 200) {
                        throw new Error("Error al cargar los personajes");
                    }
                    const data = await response.json();
                    const charactersWithIds = data.results.map(character => {
                        const id = character.url.split('/')[5];
                        return { ...character, id };
                    });
                    setStore({ characters: charactersWithIds });
                } catch (error) {
                    console.error("Error al cargar los personajes:", error);
                    // Optionally: display error to user
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch('https://swapi.dev/api/planets/');
                    if (response.status !== 200) {
                        throw new Error("Error al cargar los planetas");
                    }
                    const data = await response.json();
                    const planetsWithIds = data.results.map(planet => {
                        const id = planet.url.split('/')[5];
                        return { ...planet, id };
                    });
                    setStore({ planets: planetsWithIds });
                } catch (error) {
                    console.error("Error al cargar los planetas:", error);
                    // Optionally: display error to user
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch('https://swapi.dev/api/vehicles/');
                    if (response.status !== 200) {
                        throw new Error("Error al cargar los vehiculos");
                    }
                    const data = await response.json();
                    const vehiclesWithIds = data.results.map(vehicle => {
                        const id = vehicle.url.split('/')[5];
                        return { ...vehicle, id };
                    });
                    setStore({ vehicles: vehiclesWithIds });
                } catch (error) {
                    console.error("Error al cargar los vehiculos:", error);
                    // Optionally: display error to user
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.id === item.id)) {
                    setStore({
                        ...store,
                        favorites: [...store.favorites, item]
                    });
                }
            },
            eliminar: (item) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favorite => favorite.id !== item.id);
                setStore({
                    ...store,
                    favorites: updatedFavorites
                });
            }
        }
    }; 
};

export default getState;
