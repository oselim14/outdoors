export default function ProfileCard({ self, user, setShowForm, showForm }) {

    return (
        <>
            {self.map((u, idx) => (
                <div key={idx}>
                    <h1>{u.name}</h1>
                    <img src={u.profileImage} alt={u.name} width="300" />
                    <h3>{u.hiking}</h3>
                    <h3>{u.camping}</h3>
                    <h3>{u.about}</h3>
                </div>
            ))}
            {self ?
                <button onClick={() => setShowForm(true)}>Edit Profile</button>
                :
                'null'
            }
        </>
    )
}