import classes from "./Top-users.module.css"
import img1 from "../../assets/users/1.jfif"
import img2 from "../../assets/users/2.jfif"
import img3 from "../../assets/users/3.jfif"
import img4 from "../../assets/users/4.jfif"
import img5 from "../../assets/users/5.jfif"
import img6 from "../../assets/users/6.jfif"
import img7 from "../../assets/users/7.jfif"
import img8 from "../../assets/users/8.jfif"
import img9 from "../../assets/users/9.jfif"
import img10 from "../../assets/users/10.jfif"

const TopUsers =  () => {
    return (
        <div className={classes.container}>
            <div className={classes.name}> <h1> Top-10 Users </h1> </div>
            <div className={classes.usersList}>
                <table>
                    <thead>
                        <tr>
                            <th>N0</th>
                            <th>name</th>
                            <th>ball</th>
                        </tr>
                    </thead>
                    <tbody>
                        <User id={1} img={img6} name="babamyrat_7700" ballCount={4097} />
                        <User id={2} img={img7} name="kerem_1234" ballCount={4091} />
                        <User id={3} img={img8} name="perman_karol" ballCount={3906} />
                        <User id={4} img={img9} name="garayev__" ballCount={3496} />
                        <User id={5} img={img10} name="aylara_1_2" ballCount={3100} />
                        <User id={6} img={img1} name="Jemal" ballCount={2869} />
                        <User id={7} img={img2} name="kerwen_324" ballCount={2263} />
                        <User id={8} img={img3} name="marina_queen" ballCount={2107} />
                        <User id={9} img={img4} name="aly" ballCount={1760} />
                        <User id={10} img={img5} name="_merjen_" ballCount={1534} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const User = ({ id, name, img, ballCount }) => {
    return (
        <tr className={classes.user}>
            <td className={classes.number}> {id} </td>
            <td className={classes.img}> <div> <img src={img} alt={name} /> </div> <h3> {name} </h3> </td>
            <td className={classes.ballCount}> {ballCount} </td>
        </tr>
    )
}

export default TopUsers