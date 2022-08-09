import Notifications from "../components/Notifications/Notifications"

const NotificationsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}> 
            <Notifications />
        </div>
    )
}

export default NotificationsPage