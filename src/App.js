import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (name,age) => {
    setUsers([...users, {name, age, id: Math.random().toString()}])
  }

  const onGetHandler = (info)=>{
      setUsers(info)
  }

  return (
    <div>
      <AddUser onAddUSer={addUserHandler}/>
      <UserList users={users} onGet={onGetHandler}/>
    </div>
  );
}

export default App;
