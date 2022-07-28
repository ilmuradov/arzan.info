import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { compose } from "redux"
import DiscountsPage from "./pages/discounts"
import Main from "./pages/main"
import RecommendedPage from "./pages/recommended"

const App = () => {
    // const handleScroll = (e) => {
    //     debugger
    //     console.log('scrollTop: ', e.currentTarget.scrollTop)
    //     console.log('offsetHeight: ', e.currentTarget.offsetHeight)
    // }

    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/recommended" element={<RecommendedPage />} />
                    <Route path="/discounts" element={<DiscountsPage />} />
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