import axios from "axios";
import { useEffect, useState } from "react";
import "./userlistpage.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function UserListPage() {
  const users = useLoaderData();
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [text, setText] = useState("");
  const { theme } = useTheme();
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

  const filteredUsers = users.data.filter((user) =>
    user.name.toLowerCase().includes(text.toLocaleLowerCase())
  );

  
  const handleChange = (e) => {
    setText(e.target.value);
  };

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
      <section className={`display-header-user-list ${theme}`}>
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={handleChange}
        />
      </section>
      <section className={`listing-user  ${theme}`}>
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className={
              theme === "dark" ? `card-user-dark dark` : `card-user-light light`
            }
          >
            <h2
              role="presentation"
              onClick={() => handleClick(user.id)}
              onKeyDown={() => handleClick(user.id)}
            >
              {user.name}
            </h2>
            <p>Email : {user.email}</p>
            <Link
              to={`http://${user.website}`}
              target="_blank"
              className={`link ${theme}`}
            >
              Website : {user.website}
            </Link>
            <p>Company : {user.company.name}</p>
            <p>Number of todos : {countTodos(user.id)}</p>
            <p>Number of albums : {countAlbums(user.id)}</p>
          </div>
        ))}
        {filteredUsers.length === 0 && <p>No User Found</p>}
      </section>
    </main>
  );
}

export default UserListPage;
