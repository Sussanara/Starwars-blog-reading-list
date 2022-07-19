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
                             <div className="card" style={{ width: "17rem" }}  key={index} >
                                 <img src={Vehículos}className="card-img-top" alt="..." />
                                 <div className="card-body">
                                     <p className="card-text">
                                       {elem.name}
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