import Favorites from "../components/Favorites/Favorites"

const FavoritesPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <Favorites />
        </div>
    )
}

export default FavoritesPage