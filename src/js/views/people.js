import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Personajes from "../../img/PersonajesSW.jpg";

const People = () => {
    const { store, actions } = useContext(Context);
    const Test = () =>{
        console.log(store.favorite)
    }
    return (
        <>
            {
                !!store.people &&
                store.people.results.map((elem, index) => {
                    return (
                        <div className="card" style={{ width: "17rem" }} key={index} >
                            <img src={Personajes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    <li>Name: {elem.name}</li>
                                    <li>Height: {elem.height}</li>
                                    <li>Mass: {elem.mass}</li>
                                    <li>Hair Color: {elem.hair_color}</li>
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
export default People;