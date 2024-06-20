import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./userprofilepage.css";

function UserProfilePage() {
  const user = useLoaderData();
  const [albums, setAlbums] = useState([]);
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => {
        const result = response.data.filter(
          (albums) => albums.userId === user.data.id
        );
        setAlbums(result);
      });
  }, [user]);

  const handleClick = (id) => {
    navigate(`/album/${id}`);
  };

  return (
    <main className={`display-user-profile ${theme}`}>
      <button onClick={() => navigate("/")}>Back to users</button>
      <h1>{user.data.name}</h1>
      <section className="display-user-infos">
        <section className="section-user-profile-infos">
          <h2>My Informations</h2>
          <p>{user.data.username}</p>
          <p>{user.data.email}</p>
          <button
            onClick={() => (window.location = `mailto:${user.data.email}`)}
          >
            Contact Me Here
          </button>
        </section>
        <section className="display-albums-user">
          <h2>My Albums : </h2>
          {albums.map((album) => (
            <ul key={album.id} className="section-users-albums">
              <li
                role="presentation"
                onClick={() => handleClick(album.id)}
                onKeyDown={() => handleClick(album.id)}
              >
                {album.title}
              </li>
            </ul>
          ))}
        </section>
      </section>
    </main>
  );
}

export default UserProfilePage;
