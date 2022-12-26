import axios from "axios";

const searchImages = async (serchTerm) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?per_page=36",
    {
      headers: {
        Authorization: `Client-ID bUkZZb2qk2VIeERb96yPd7JdFCWevyPq9wzgSgXCL_E`,
      },
      params: {
        query: serchTerm,
      },
    }
  );

  return response.data.results;
};

export default searchImages;
