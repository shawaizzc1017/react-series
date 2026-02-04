import {ActionButton} from "./ActionButton.jsx";

export const Contact = () => {

    const handleSendMessage = () => {
        alert("Sending message...");
    }

    return (
        <div>
            <h2>Contact Us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage} />
        </div>
    )
}