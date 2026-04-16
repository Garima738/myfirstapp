import React, { useEffect, useState } from "react";
import axios from "./axios";
function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/users")
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);   // store users in state
      })
      .catch(error => console.log(error));
  }, []);

  return ( 
    <div>
      <h1>User List</h1>
      
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default App;

//async await------->>>>>>

// await axios
// await fetch