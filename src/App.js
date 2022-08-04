import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { compose } from "redux"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AboutUsPage from "./pages/aboutus"
import AddPage from "./pages/add"
import DiscountsPage from "./pages/discounts"
import FavoritesPage from "./pages/favorites"
import FollowingsPage from "./pages/followings"
import Main from "./pages/main"
import NewsPage from "./pages/news"
import NotificationsPage from "./pages/notifications"
import OfficialAccountPage from "./pages/officialAccountPage"
import OfficialsPage from "./pages/officials"
import PostPage from "./pages/post"
import RecommendedPage from "./pages/recommended"
import TopUsersPage from "./pages/topUsers"

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/recommended" element={<RecommendedPage />} />
                    <Route path="/discounts" element={<DiscountsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/officials" element={<OfficialsPage />} />
                    <Route path="/officials/:id" element={<OfficialAccountPage />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/followings" element={<FollowingsPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/top" element={<TopUsersPage />} />
                    <Route path="/post" element={<PostPage />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, { })
)(App)