const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			planets: null,
			vehicles: null,
			favorite: [],
			demo: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: (url) => {
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
						setStore({ people: data });
					})
					.catch((error) => {
						console.log(error);
					});
			},
			getPlanets: (url) => {
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
						setStore({ planets: data });
					})
					.catch((error) => {
						console.log(error);
					});
			},
			getVehicles: (url) => {
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
						setStore({ vehicles: data });
					})
					.catch((error) => {
						console.log(error);
					});
			},
		}
	};
}

export default getState;
