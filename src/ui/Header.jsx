import { Link } from "react-router-dom"
import SearchOreder from "../features/oreder/SearchOrder"

function Header(){
    return (
        <div>
            <Link to='/'>Fast React Food</Link>
            <SearchOreder/>
        </div>
    )
}
export default Header