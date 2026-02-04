import {useState} from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: "30",
        email: "bruce@mail.com",
        address: {
            city: "Los Angelos",
            country: "USA"
        }
    });

    const updateName = () => {
        setUser({
            ...user,
            name: "Clark Kent",
        })
    }

    const updateAge = () => {
        setUser({
            ...user,
            age: parseInt(user.age) + 1,
        })
    }

    const updateMultiple = () => {
        setUser({
            ...user,
            name: "Diana",
            age: parseInt(user.age) + 1,
        })
    }

    const updateCity = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Los Santos",
            }
        })
    }

    // const changeToDefaults = () => {
    //     setUser({
    //         ...user
    //     })
    // }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            {/*<button onClick={changeToDefaults}>Change to defaults</button>*/}
            <button onClick={updateName}>Change Name to Clark Kent</button>
            <button onClick={updateAge}>Increase age by 1</button>
            <button onClick={updateMultiple}>Update name and age</button>
            <button onClick={updateCity}>Move to Los Santos</button>
        </div>
    )
}