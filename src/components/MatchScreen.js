import styles from '../styles/MatchScreen.module.css'
import img from '../img/ItsAMatchTinderText.png';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataByID } from '../utils';
import setView from '../redux/actions/mainPageActions';
import { chatViewName } from '../GlobalConst';

export default function MatchScreen(props) {

    const dispatch = useDispatch();
    console.log(props);
    const allUsers = useSelector(state => state.usersData.present.usersData);
    const loggedUserData = getUserDataByID((props.loggedUserID), allUsers);
    let ClickedUserData = getUserDataByID((props.ClickedUser), allUsers);
    let ClickedUser = props.ClickedUser;
    return (
        <>
            <div className={styles.firstParent}>
            <div className={styles.MatchScreen}>
                <div className={styles.imgHolder}>
                    <img className={styles.img} src={img} alt="" />
                </div>
                <div className={styles.pHolder}>
                    <p className={styles.p}>You and {ClickedUserData.name} have liked each other!</p>
                </div>
                  <div className={styles.avatarHolder}>
                <Avatar  alt={loggedUserData.name} src={loggedUserData.photos[0]} sx={{width : 100 , height : 100}}></Avatar>
                <Avatar alt={ClickedUserData.name} src={ClickedUserData.photos[0]} sx={{width : 100 , height : 100}}></Avatar>
            </div>
            <div className={styles.buttonHolder}>
            <button className={styles.button} onClick={() => {dispatch(setView(chatViewName , ClickedUser))}}>CONTINUE TO CHAT</button>
            </div>
            </div>
            </div>
          
        </>
    )
}