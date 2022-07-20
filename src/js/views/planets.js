import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Planetas from "../../img/Planetas.jpg";

const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
        <>

            {
                     !!store.planets &&
                     store.planets.results.map((elem, index) => {
                         return (
                             <div className="card text-center mx-3" style={{ width: "17rem" }}  key={index} >
                                 <img src={Planetas} className="card-img-top" alt="..." />
                                 <div className="card-body">
                                     <p className="card-text">
                                      <li>Name: {elem.name}</li> 
                                      <li>Rotation period: {elem.rotation_period}</li>
                                      <li>Orbital period: {elem.orbital_period}</li>
                                      <button type onClick={() =>{actions.addFavorite(elem.name)}} className="btn btn-warning">
                                    <i className="fas fa-heart"></i>
                                </button>
                                     </p>
                                 </div>
                             </div>
                         )
                     })
                 }
             </>
         )
     }
export default Planets;