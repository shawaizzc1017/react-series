export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser }) => {
    if (hideOffline && !isOnline) {
        return null
    }
    return (
        <div>
            <h3>
                {name}&nbsp;
                {isPremium && <small>star</small>}&nbsp;
                {isNewUser && <small>party</small>}
            </h3>
            <span>{ isOnline ? "Online" : "Offline" }</span>
            <p>{ isOnline ? "Available for chat" : "Not available" }</p>
            { isOnline ?
                (<button>Send Message</button>) :
                (<small>Check back later</small>)
            }
        </div>
    )
}