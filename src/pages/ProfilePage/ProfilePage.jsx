import React from 'react';
import { useState } from 'react';
import * as userAPI from '../../utilities/users-api';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

export default function ProfilePage({ user, setUser }) {

    const [userInfo, setUserInfo] = useState({
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        hiking: user.hiking,
        camping: user.camping,
        about: user.about
    });

    const [showForm, setShowForm] = useState(false);



    function handleChange(evt) {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUser = await userAPI.update(user._id, userInfo);
        setUser(updatedUser);
        setShowForm(false);
    }

    return (
        <>
            {!showForm ?
                <ProfileCard  user={user} setShowForm={setShowForm} showForm={showForm} />
                :
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={userInfo.name} onChange={handleChange} required></input>
                        <label>Email</label>
                        <input type="email" name="email" value={userInfo.email} onChange={handleChange} required />
                        <label>Hiking:</label>
                        <select name='hiking' value={userInfo.hiking} onChange={handleChange}>
                            <option value="Share">Share</option>
                            <option value="Learn">Learn</option>
                        </select>
                        <label>Camping:</label>
                        <select name='camping' value={userInfo.camping} onChange={handleChange}>
                            <option value="Share">Share</option>
                            <option value="Learn">Learn</option>
                        </select>
                        <label>About:</label>
                        <input type="text" name="about" value={userInfo.about} onChange={handleChange} required />
                        <label>Profile Picture:</label>
                        <input placeholder='Image Link' type="text" name="profileImage" value={userInfo.profileImage} onChange={handleChange} required />
                        <button type="submit">Update Profile</button>
                    </form>
                </div>
            }
        </>
    )

}
