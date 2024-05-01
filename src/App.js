import "./App.css";
import { useEffect, useState } from "react";

const URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/4539";

function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json);
        setPhoto(json.primaryImageSmall);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data Fetching in React</h1>
      <div>Here is a photo:</div>
      <img src={photo} />
    </div>
  );
}

export default App;
