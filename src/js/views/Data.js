import { useEffect, useState } from "react";

const App = () => {

  const urlPeople = "https://swapi.dev/api/people/";
  const urlPlanets = "https://swapi.dev/api/planets/";
  const urlVehicles = "https://swapi.dev/api/vehicles/";

  const [url] = useState("https://swapi.dev/api/people/");
  const [people, setPeople] = useState(null);

  useEffect(() => {
    getPeople(url);
    getData();
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

      
  }
}