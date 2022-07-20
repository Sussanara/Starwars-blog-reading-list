import React from "react";
import { NavLink } from "react-router-dom";
import Starwars from "../../img/star_wars_logo_PNG10.png";
import BabyYoda from "../../img/baby-yoda.png";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand">
				</a>
				<img src={Starwars} style={{ height: "60px" }}></img>
				<button
					className="navbar-toggler"
					type="img"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/home">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/people">
								Characters
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/planets">
								Planets
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/vehicles">
								Vehicles
							</NavLink>
						</li>
					</ul>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span>Favorites </span>
							<i className="fab fa-gratipay"></i>
						</a>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"
						>

							{
								!!store.favorite &&
								store.favorite.map((elem, index) => {
									return (
										<li key={index}>{elem.name}<i className="fas fa-trash-alt" onClick={() =>{actions.deleteFavorite(elem.name)}}></i></li>
									)
								}
								)
							}
						</ul>
					</li>
					<img src={BabyYoda} style={{ height: "60px" }}></img>
				</div>
			</div>
		</nav>
	);
};
