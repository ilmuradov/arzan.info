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
    const fromTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="app-wrapper">
            <Header />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Main fromTop={fromTop} />} />
                    <Route path="/recommended" element={<RecommendedPage fromTop={fromTop} />} />
                    <Route path="/discounts" element={<DiscountsPage  fromTop={fromTop} />} />
                    <Route path="/news" element={<NewsPage  fromTop={fromTop} />} />
                    <Route path="/add" element={<AddPage  fromTop={fromTop} />} />
                    <Route path="/officials" element={<OfficialsPage  fromTop={fromTop} />} />
                    <Route path="/officials/:id" element={<OfficialAccountPage  fromTop={fromTop} />} />
                    <Route path="/aboutus" element={<AboutUsPage  fromTop={fromTop} />} />
                    <Route path="/favorites" element={<FavoritesPage  fromTop={fromTop} />} />
                    <Route path="/followings" element={<FollowingsPage  fromTop={fromTop} />} />
                    <Route path="/notifications" element={<NotificationsPage  fromTop={fromTop} />} />
                    <Route path="/top" element={<TopUsersPage  fromTop={fromTop} />} />
                    <Route path="/post" element={<PostPage  fromTop={fromTop} />} />
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