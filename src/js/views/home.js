import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	// const urlPeople = "https://swapi.dev/api/people/";
	// const urlPlanets = "https://swapi.dev/api/planets/";
	// const urlVehicles = "https://swapi.dev/api/vehicles/";

	// const [people, setPeople] = useState("hola");
	// const [planets, setPlanets] = useState(null);
	// const [vehicles, setVehicles] = useState(null);

	// useEffect(() => {
	// 	getPeople("https://swapi.dev/api/people/");
	// 	getPlanets (urlPlanets);
	// 	getVehicles (urlVehicles)
	// }, [])

	// const getPeople = (url) => {
	// 	fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}) // GET
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setPeople(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }

	// const getPlanets = (url) => {
	// 	fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}) // GET
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setPlanets(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }

	// const getVehicles = (url) => {
	// 	fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}) // GET
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setVehicles(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }
	const test = () => {
		console.log(store.people.results)
	}
	const test2 = () => {
		console.log(store.planets.results)
	}
	const test3 = () => {
		console.log(store.vehicles.results)
	}
	return (
		<>
			<div className="row">
				<div className="col-4">
					<div className="card h-70 p-0 border-0 ms-5 my-5" style={{ width: "18rem" }}>
						<img src="https://gcdn.lanetaneta.com/wp-content/uploads/2019/11/Star-Wars-10-mejores-momentos-de-C3PO-hasta-ahora-780x405.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
						<div className="card-body text-center">
							<h5 className="card-title">Characters</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk
								of the card's content.
							</p>
							<a href="/people" className="btn btn-primary">
								Ver más
							</a>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card h-70 p-0 border-0 ms-5 my-5" style={{ width: "18rem" }}>
						<img src="https://p4.wallpaperbetter.com/wallpaper/191/875/613/star-wars-at-at-endor-galactic-empire-wallpaper-preview.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
						<div className="card-body text-center">
							<h5 className="card-title">Planets</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk
								of the card's content.
							</p>
							<a href="/planets" className="btn btn-primary">
								Ver más
							</a>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card h-70 p-0 border-0 ms-5 my-5" style={{ width: "18rem" }}>
						<img src="https://cdnb.artstation.com/p/assets/images/images/011/977/773/large/luciano-komorizono-sandcrawlerv02.jpg?1532404983&dl=1" className="card-img-top" alt="..." style={{ height: "200px" }} />
						<div className="card-body text-center">
							<h5 className="card-title">Vehicles</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk
								of the card's content.
							</p>
							<a href="/vehicles" className="btn btn-primary">
								Ver más
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="card-footer"></div>
			<button className="text-center mt-5" onClick={test}>
				Hola
			</button>
			<button className="text-center mt-5" onClick={test2}>
				planets
			</button>
			<button className="text-center mt-5" onClick={test3}>
				vehicles
			</button> */}
		</>
	)
}
export default Home;