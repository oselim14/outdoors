import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MessagesPage from '../MessagesPage/MessagesPage';
import SearchPage from '../SearchPage/SearchPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/search" element={<SearchPage user={user} setUser={setUser} />} />
            <Route path='/profile/:id' element={<ProfilePage user={user} setUser={setUser} />} />
          </Routes>
          
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
