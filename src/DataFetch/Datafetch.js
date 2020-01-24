import React from "react";
import { useFetch } from "./Hooks";
function Photos() {
  const [data, loading] = useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=7251d113868a9c14da475de55cd01340&language=en-US"
  );
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({id, title, url }) => (
        
            <h1>{genres.id}</h1>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;