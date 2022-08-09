import Add from "../components/Add/Add"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const AddPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            {/* <Header />  */}
            <Add />
            {/* <Footer />  */}
        </div>
    )
}

export default AddPage