import React, { useEffect, useState } from 'react';
import * as userAPI from '../../utilities/users-api';
import { Link } from 'react-router-dom';
import './SearchPage.css';

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
            <Link to={`/profile/${u._id}`} key={idx}>
              <div className='card-body'>
              <div className='user-links' >
                <img src={u.profileImage} alt={u.name} width='100px' className='profileImage'/>
                <h1>{u.name.toUpperCase()}</h1>
              </div>
              <div className='hiking-camping'>
                <h3>I want to {u.hiking.toUpperCase()} about hiking.</h3>
                <h3>I want to {u.camping.toUpperCase()} about camping.</h3>
              </div>
              </div>
              </Link>
          </div>
        )}
      </div>
    </>
  );
}