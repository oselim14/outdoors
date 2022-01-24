import React, { useEffect, useState } from 'react';
import { checkToken } from '../../utilities/users-service';
import * as userAPI from '../../utilities/users-api';
import { Link } from 'react-router-dom';

export default function SearchPage(props) {

  const [otherUsers, setOtherUsers] = useState([]);


  useEffect(function () {
    async function getAllUsers() {
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
          <div>
            <Link to={`/users/${idx}`}>
              <div>
                <h1>{u.name}</h1>
                <img src={u.profileImage} alt={u.name} width='100px' />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}