

const getSongs = (url) => {
    fetch(`http://assets.breatheco.de/apis/sound/songs`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setSongs(data);
        setLimit(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSongs(urlApi);
  }, []);