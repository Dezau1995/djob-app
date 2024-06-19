import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function AlbumPage() {
  const album = useLoaderData();
  const [infoAlbum, setInfoAlbum] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${album.data.id}`
      )
      .then((response) => {
        const covers = response.data.filter(
          (cover) => cover.albumId === album.data.id
        );
        setInfoAlbum(covers);
        console.log(covers);
      });
  }, [album.data.id]);

  return (
    <div>
      <button type="button">←</button>
      <h1>{album.data.title}</h1>
      {infoAlbum.map((cover) => (
        <div key={cover.id}>
          <img
            src={`https://via.placeholder.com/600/${cover.thumbnaiUrl}`}
            alt="cover"
          />
        </div>
      ))}
    </div>
  );
}

export default AlbumPage;
