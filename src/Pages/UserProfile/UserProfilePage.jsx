import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function UserProfilePage() {
    const user = useLoaderData();
    const [albums, setAlbums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/albums`)
          .then((response) => {
            const result = response.data.filter((albums) => albums.userId === user.data.id)
            setAlbums(result);
            console.log(result);
          });
      }, [user]);

     
    return (
        <main>
            <p onClick={() => navigate("/")}>back</p>
           <h1>{user.data.name}</h1>
           <p>{user.data.username}</p>
           <p>{user.data.email}</p>
           {albums.map((album) => (
            <div key={album.id}>
                <p>{album.title}</p>
            </div>
           ))}
        </main>
    );
}

export default UserProfilePage;