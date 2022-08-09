import Followings from "../components/Followings/Followings"

const FollowingsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <Followings />
        </div>
    )
}

export default FollowingsPage