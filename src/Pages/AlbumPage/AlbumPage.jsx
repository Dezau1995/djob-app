import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function AlbumPage() {
  const album = useLoaderData();
  const [infoAlbum, setInfoAlbum] = useState([]);
  const navigate = useNavigate();

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
        console.log(covers)
      });
  }, [album.data.id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        ←
      </button>
      <h1>{album.data.title}</h1>
      {infoAlbum.map((cover) => (
        <div key={cover.id}>
          <img
            src={cover.thumbnailUrl}
            alt="cover"
          />
          <h2>{cover.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default AlbumPage;
