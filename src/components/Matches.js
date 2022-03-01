import SingleMatch from "./SingleMatch";
import styles from '../styles/Matches.module.css'
import { useSelector } from "react-redux";
import { getUserDataByID } from "../utils";

export default function Matches() {

    const loggedUserID = useSelector(state => state.usersData.present.loggedUser)
    const allUsers = useSelector(state => state.usersData.present.usersData);

    let loggedUserData = getUserDataByID(loggedUserID, allUsers);
    const { matches = [] } = loggedUserData;

    const renderMatches = () => {
        let result = [];
        matches.map(matchID => {
            const userData = getUserDataByID(matchID, allUsers);

            result = [
                ...result,
                <SingleMatch
                    key={userData.ID}
                    id={userData.ID}
                    name={userData.username}
                    profilImg={userData.photos[0]}
                />]

        })
        return result;
    }

    return (

        <div className={styles.matches}>
            {renderMatches()}
        </div>
    )
}