import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //   try{
  //     const data = await response.json();
  //     const loadedUsers = [];
  //     for(const key in data) {
  //       loadedUsers.push({
  //         id: key,
  //         username: data[key].username,
  //       })
  //     }
  //     setUsers(loadedUsers);
  //     console.log(loadedUsers)
  //   }catch(err) {
  //     console.log(err)
  //     throw new Error(err);
  //   }
  // }
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(data => {
      const loadedUsers = [];
      for(const key in data) {
        loadedUsers.push({
          id: key,
          username: data[key].username,
        })
      }
      setUsers(loadedUsers);
      console.log(loadedUsers)
    }).catch(err => {
      console.log(err);
      throw new Error(err);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <ul>
        {users.map( user => {
          return <li key={user.id}>
            {user.username}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
