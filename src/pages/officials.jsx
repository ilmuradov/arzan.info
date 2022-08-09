import Officials from "../components/Officials/Officials"

const OfficialsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <Officials />
        </div>
    )
}

export default OfficialsPage