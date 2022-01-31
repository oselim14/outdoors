import React, { useEffect, useState } from 'react';
import { checkToken } from '../../utilities/users-service';
import * as userAPI from '../../utilities/users-api';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import Talk from 'talkjs';

export default function SearchPage(props) {

  const [otherUsers, setOtherUsers] = useState([]);


  useEffect(function () {
    async function getAllUsers() {
      const users = await userAPI.getAll();
      setOtherUsers(users);
    }
    getAllUsers();
  }, []);


  return (
    <>
      <h1>Make a Friend</h1>
      <div>
        {otherUsers.map((u, idx) =>
          <div className='user-cards'>
            <Link to={`/profile/${u._id}`}>
              <div className='user-links' key={idx}>
                <img src={u.profileImage} alt={u.name} width='100px' className='profileImage'/>
                <h1>{u.name}</h1>
              </div>
            </Link>
              <div className='hiking-camping'>
                <h3>I want to {u.hiking.toUpperCase()} about hiking.</h3>
                <h3>I want to {u.camping.toUpperCase()} about camping.</h3>
              </div>
          </div>
        )}
      </div>
    </>
  );
}