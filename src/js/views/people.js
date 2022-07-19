import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const People = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                </div>
            </div>

            {
                !!store.people &&
                store.people.results.length > 0 &&
                store.people.results.map((elem, index) => {
                    return <li key={index}></li>
                })
            }
        </>
    )
}
export default People;