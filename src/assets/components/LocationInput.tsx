import React, { useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";

const LocationInput = ({ label }: { label: string }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await axios.get("https://photon.komoot.io/api/", {
          params: {
            q: value,
            limit: 5,
          },
        });

        const results = response.data.features.map(
          (item: any) =>
            item.properties.name +
            (item.properties.city ? ", " + item.properties.city : "") +
            (item.properties.country ? ", " + item.properties.country : "")
        );

        setSuggestions(results);
      } catch (error) {
        console.log("Error fetching location: ", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className=" relative form-group flex flex-col gap-1 sm:w-1/2 grow">
      <label htmlFor="" className="font-bold flex items-center gap-1">
        <FaLocationDot className="text-primary" />
        {label}
      </label>
      <input
        type="text"
        value={query}
        onChange={handleInput}
        className="p-2 border-gray-900/20 border rounded-md bg-gray-50"
        placeholder="City, address, point of interest"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 top-20 left-0 right-0 bg-white border border-gray-200 rounded shadow mt-1">
          {suggestions.map((suggestion, i) => (
            <li
              key={i}
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
              className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
