import { Link } from "react-router-dom";

const Profile = (props) => {
    return (
        <div>
            <p>{props.author}</p>
            <Link to="/">back to home</Link>
        </div>
    )
}
export default Profile;