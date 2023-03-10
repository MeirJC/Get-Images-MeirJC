import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import "./App.css";
function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (serchTerm) => {
    const result = await searchImages(serchTerm);
    console.log(result);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
