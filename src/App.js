import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';


function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUser(res.data))
  }, [])

  console.log(user)
  return (
    <div className="App">
     <UserList user={user}/>
   
    </div>
  );
}

export default App;
