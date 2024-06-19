import axios from "axios";
import { useEffect, useState } from "react";
import "./userlistpage.css";

function UserListPage() {
  const [userData, setUserData] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setUserData(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <main>
      <h1>User List</h1>
      <section className="listing-user">
        {userData.map((users) => (
          <p key={users.id}>{users.name}</p>
        ))}
      </section>
    </main>
  );
}

export default UserListPage;
