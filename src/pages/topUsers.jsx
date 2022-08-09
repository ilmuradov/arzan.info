import TopUsers from "../components/Top-users/Top-users"

const TopUsersPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <TopUsers />
        </div>
    ) 
}

export default TopUsersPage