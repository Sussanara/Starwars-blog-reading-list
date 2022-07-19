import { useEffect, useState } from "react";
import { Context } from "../store/appContext";

const people = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
         

            {
                !!store.people &&
                store.people.results.length > 0 &&
                store.people.results.map((elem, index) => {
                    return <li key={index}>{elem.name} <Link to={`/users/${elem.id}/detail`}>ver</Link></li>
                })
            }
        </>
    )
}
export default people;