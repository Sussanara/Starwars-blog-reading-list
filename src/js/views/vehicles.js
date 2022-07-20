import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Vehículos from "../../img/vehículos.jpg";

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            {
                     !!store.vehicles &&
                     store.vehicles.results.map((elem, index) => {
                         return (
                             <div className="card text-center" style={{ width: "17rem" }}  key={index} >
                                 <img src={Vehículos}className="card-img-top" alt="..." />
                                 <div className="card-body">
                                     <p className="card-text">
                                      <li>Name: {elem.name}</li> 
                                      <li>Cost in credits: {elem.cost_in_credits}</li>
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
export default Vehicles;