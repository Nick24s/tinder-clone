import ImageSlider from "./ImageSlider";
import styles from '../styles/settingsCardHolder.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { getUserDataByID } from "../utils";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function SettingsCardinChat(props) {
    const chosenChatID = useSelector(state => state.mainPage.chosenChatID)
    const allUsers = useSelector(state => state.usersData.usersData);   
    let clickedUserData = getUserDataByID(chosenChatID , allUsers);
    return (
      
        <div className={styles.settingsCardHolder}>
            <ImageSlider images={clickedUserData.photos}></ImageSlider>
            <div className={styles.inside}>
                <div className={styles.info}>
                    <p className={styles.p}>{clickedUserData.username}</p>
                    <p className={styles.p2}>{clickedUserData.age}</p>
                    <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                </div>
                <div className={styles.secondLine}>
                    <SchoolOutlinedIcon></SchoolOutlinedIcon>
                    <p className={styles.secondlineP}>PMG 'Ivan Vazov'</p>
                </div>
            </div>
            <div className={styles.description}>
                <span>{clickedUserData.description}</span>
            </div>
        </div>
    )
}