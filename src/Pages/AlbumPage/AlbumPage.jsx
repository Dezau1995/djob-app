import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./albumpage.css";

function AlbumPage() {
  const album = useLoaderData();
  const [infoAlbum, setInfoAlbum] = useState([]);
  const { theme } = useTheme();
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
        console.log(covers);
      });
  }, [album.data.id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className={`display-album ${theme}`}>
      <button type="button" onClick={handleClick}>
        ←
      </button>
      <h1>{album.data.title}</h1>
      <section className="section-album-photo">
        {infoAlbum.map((cover) => (
          <div key={cover.id} className="display-cover">
            {(
              <img src={cover.thumbnailUrl} alt="cover" />
            )}
            <p>{cover.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default AlbumPage;
