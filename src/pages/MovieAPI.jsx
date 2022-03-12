import { useEffect, useState } from "react";
import axios from "axios";


export default function movieAPI() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {


    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=8862a4c0fb71af169242fdae33cfd4a0"
      );

      setCharacters(response.data.results);
    } catch (error) {
      console.log({ error });
    }
    
    console.log({characters})

    
  };
  
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
          
          
          <ul>
        {characters.map((character) => (
          <li>
            <h3>{character.title}</h3>
          </li>
        ))}
      </ul>


    </div>
  );
}