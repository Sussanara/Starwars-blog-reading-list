import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {
	const { store, actions } = useContext(Context);
	/* const urlPeople = "https://swapi.dev/api/people/";
	const urlPlanets = "https://swapi.dev/api/planets/";
	const urlVehicles = "https://swapi.dev/api/vehicles/";

	const [people, setPeople] = useState("hola");
	const [planets, setPlanets] = useState(null);
	const [vehicles, setVehicles] = useState(null);

	useEffect(() => {
		getPeople("https://swapi.dev/api/people/");
		getPlanets (urlPlanets);
		getVehicles (urlVehicles)
	}, [])

	const getPeople = (url) => {
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}) // GET
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setPeople(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const getPlanets = (url) => {
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}) // GET
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setPlanets(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const getVehicles = (url) => {
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}) // GET
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setVehicles(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	const test = () => {
		console.log(people.results)
	}
	const test2 = () => {
		console.log(planets.results)
	}
	const test3 = () => {
		console.log(vehicles.results)
	} */
	return (
		<>
			<button className="text-center mt-5" onClick={test}>
				Hola
			</button>
			<button className="text-center mt-5" onClick={test2}>
				planets
			</button>
			<button className="text-center mt-5" onClick={test3}>
				vehicles
			</button>
		</>
	)

}



