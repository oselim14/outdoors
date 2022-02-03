export default function ProfileCard({ user, setShowForm, showForm }) {

    return (
        <>
            
                <div >
                    <h1>{user.name}</h1>
                    <img src={user.profileImage} alt={user.name} width="300" />
                    <h3>{user.hiking}</h3>
                    <h3>{user.camping}</h3>
                    <h3>{user.about}</h3>
                </div>

            {user ?
                <button onClick={() => setShowForm(true)}>Edit Profile</button>
                :
                'null'
            }
        </>
    )
}