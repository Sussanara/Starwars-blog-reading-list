import React from "react";
import { Link } from "react-router-dom";
import Starwars from "../../img/star_wars_logo_PNG10.png";

export const Navbar = () => {
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
							<Link className="nav-link active" aria-current="page" to="/#">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/#">
								Planets
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/#">
								Vehicles
							</Link>
						</li>
					</ul>
					<span className="navbar-text">Navbar text with an inline element</span>
				</div>
			</div>
		</nav>
	);
};
