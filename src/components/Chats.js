// import { Chat } from '@material-ui/icons'
import { useSelector } from 'react-redux';
import { getUserDataByID } from '../utils';
import ChatRow from './ChatRow'
import styles from './Chats.module.css'

export default function Chats() {


    const loggedUserID = useSelector(state => state.usersData.loggedUser)
    const allUsers = useSelector(state => state.usersData.usersData);



    let loggedUserData = getUserDataByID(loggedUserID, allUsers);
    const { matches = [] } = loggedUserData;


    const renderChatSide = () => {
        let result = [];
        matches.map(matchID => {
            const userData = getUserDataByID(matchID, allUsers);

            result = [
                ...result,
                <ChatRow
                    key={userData.ID}
                    id={userData.ID}
                    name={userData.username}
                    message={userData.messages[0]}
                    profilImg={userData.photos[0]}
                />
            ]

        })
        return result;
    }

    return (
        <div>
            {renderChatSide()}

        </div>
    )
}