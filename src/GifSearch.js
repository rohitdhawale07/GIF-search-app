// GifSearch.js
import React, { useState } from "react";
import axios from "axios";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=79Wf1jrBJntWvuezTGqhfqUrBRfbzlm0&limit=20`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 mr-2 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {gifs.map((gif) => (
          <div key={gif.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifSearch;
