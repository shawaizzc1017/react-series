export const CustomButton = ({ text }) => {
    const name = "React"
    const handleClick = () => {
        console.log(`Hey ${name}, you clicked ${text}`);
    }
    return (
        <button onClick={handleClick}>{text}</button>
    )
}