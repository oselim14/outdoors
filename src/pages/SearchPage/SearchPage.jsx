import React, {useEffect, useState} from 'react';
import { checkToken } from '../../utilities/users-service';
import * as userAPI from '../../utilities/users-api';

export default function SearchPage() {

  const [otherUsers, setOtherUsers] = useState([]);


  useEffect(function(){
    async function getAllUsers(){
      const users = await userAPI.getAll();
      setOtherUsers(users);
      console.log(users);
    }
    getAllUsers();
  }, []);
  

  return (
    <>
      <h1>Make a Friend</h1>
      <div>
        {otherUsers.map((u, idx) =>
          <h1>{u.name}</h1>
        )}
      </div>
    </>
  );
}