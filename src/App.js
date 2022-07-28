import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { compose } from "redux"
import AddPage from "./pages/add"
import DiscountsPage from "./pages/discounts"
import Main from "./pages/main"
import NewsPage from "./pages/news"
import RecommendedPage from "./pages/recommended"

const App = () => {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/recommended" element={<RecommendedPage />} />
                    <Route path="/discounts" element={<DiscountsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, { })
)(App)