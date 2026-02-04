import {useState} from "react";

export const Counter = () => {

    const [count, setCount] = useState(() => {
        console.log("Initial state function called")
        return 0;
    })
    console.log("Counter component rendered with count:", count)

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>Count: {count}</button>
    )
}