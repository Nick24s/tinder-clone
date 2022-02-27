import styles from '../styles/MatchScreen.module.css'
import img from '../img/ItsAMatchTinderText.png';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { getUserDataByID } from '../utils';
export default function MatchScreen(props) {

    console.log(props);
    const allUsers = useSelector(state => state.usersData.present.usersData);
    const loggedUserData = getUserDataByID((props.loggedUserID), allUsers);
    let ClickedUserData = getUserDataByID((props.ClickedUser), allUsers);
    return (
        <>
            <div className={styles.firstParent}>
            <div className={styles.MatchScreen}>
                <div className={styles.imgHolder}>
                    <img className={styles.img} src={img} alt="" />
                </div>
                {/* <Avatar alt={ClickedUserData.name} scr={ClickedUserData.photos[0]}></Avatar> */}
                <div className={styles.pHolder}>
                    <p>You and {ClickedUserData.name} have liked each other!</p>
                </div>
                  <div className={styles.avatarHolder}>
                <Avatar  alt={loggedUserData.name} src={loggedUserData.photos[0]} sx={{width : 100 , height : 100}}></Avatar>
                <Avatar alt={ClickedUserData.name} src={ClickedUserData.photos[0]} sx={{width : 100 , height : 100}}></Avatar>
            </div>
            <div className={styles.buttonHolder}>
            <button className={styles.button} >CONTINUE</button>
            </div>
            </div>
            </div>
          
        </>
    )
}