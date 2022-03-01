import ImageSlider from "./ImageSlider";
import styles from '../styles/SettingsCardinChat.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { getUserDataByID } from "../utils";
import { useSelector } from "react-redux";
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';

export default function SettingsCardinChat() {
    const chosenChatID = useSelector(state => state.mainPage.chosenChatID)
    const allUsers = useSelector(state => state.usersData.present.usersData);
    let clickedUserData = getUserDataByID(chosenChatID, allUsers);

    return (

        <div className={styles.settingsCardHolder}>
            <ImageSlider key={chosenChatID} images={clickedUserData.photos}></ImageSlider>
            <div className={styles.inside}>
                <div className={styles.info}>
                    <p className={styles.p}>{clickedUserData.username}</p>
                    <p className={styles.p2}>{clickedUserData.age}</p>
                    <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                </div>
                {clickedUserData.company ? (<div className={styles.secondLine}>
                    <BusinessIcon />
                    <p className={styles.secondlineP}>{clickedUserData.company}</p>
                </div>) : (<></>)}
                {clickedUserData.jobTitle ? (<div className={styles.secondLine}>
                    <WorkIcon />
                    <p className={styles.secondlineP}>{clickedUserData.jobTitle}</p>
                </div>) : (<></>)}
                {clickedUserData.school ? (<div className={styles.secondLine}>
                    <SchoolOutlinedIcon />
                    <p className={styles.secondlineP}>{clickedUserData.school}</p>
                </div>) : (<></>)}
                <div className={styles.secondLine}>
                    <DescriptionIcon></DescriptionIcon>
                    <p className={styles.secondlineP}>{clickedUserData.description}</p>
                </div>
                {clickedUserData.passions.length !== 0 ? (
                    <div className={styles.PassionsBox}>
                        <h3>Passions</h3>
                        <div className={styles.PassionsContainer}>
                            {clickedUserData.passions.map(passion => <Chip key={passion} label={`${passion}`} variant="outlined" />)}
                        </div>
                    </div>) : (<></>)}
            </div>
        </div>
    )
}