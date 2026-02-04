import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
            <button onClick={handleLogin}>{isLoggedIn ? "logout" : "Login"}</button>
            <input type="text" value={message} onChange={handleMessage} placeholder="Type a message" />
            <p>{message}</p>
        </>
    )

}