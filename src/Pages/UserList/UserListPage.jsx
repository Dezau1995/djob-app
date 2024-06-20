import axios from "axios";
import { useEffect, useState } from "react";
import "./userlistpage.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function UserListPage() {
  const users = useLoaderData();
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
      setTodos(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);

  const countTodos = (userId) => {
    return todos.filter((todo) => todo.userId === userId).length;
  };

  const countAlbums = (userId) => {
    return albums.filter((album) => album.userId === userId).length;
  };

  const handleClick = (id) => {
    navigate(`/user-profile/${id}`);
  };

  return (
    <main>
      <h1>User List</h1>
      <section className="listing-user">
        {users.data.map((user) => (
          <div key={user.id} className="card-users">
            <h2
              role="presentation"
              onClick={() => handleClick(user.id)}
              onKeyDown={() => handleClick(user.id)}
            >
              {user.name}
            </h2>
            <p>Email : {user.email}</p>
            <Link to={`http://${user.website}`} target="_blank" className="link">
              Website : {user.website}
            </Link>
            <p>Company : {user.company.name}</p>
            <p>Number of todos : {countTodos(user.id)}</p>
            <p>Number of albums : {countAlbums(user.id)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default UserListPage;
