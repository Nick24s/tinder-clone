import ImageAvatars from '../components/ChatAvatar'
import styles from '../styles/ChatPage.module.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MultilineTextFields from '../components/MultilineTextFields';
import SettingsCardinChat from '../components/SettingCardinChat';

export default function ChatPage() {

    return (
        <div className={styles.firstParent}>
            <div className={styles.ChatHolder}>
                <div className={styles.upperDiv}>
                    <ImageAvatars></ImageAvatars>
                    <p className={styles.insideP}>You matched with Karolina on 10/25/2019</p>
                    <div className={styles.closeIcon}>
                        <CancelOutlinedIcon></CancelOutlinedIcon>
                    </div>
                </div>
                <div className={styles.actualChat}></div>
                <div className={styles.sentMessageDiv}>
                    <MultilineTextFields minRows='1' variant='outlined' maxLength='80' placeholder='Type a message'></MultilineTextFields>
                    <div className={styles.sendButtonHolder}><p className={styles.sendButton}>SEND</p></div>

                </div>


            </div>
            <div className={styles.side}>
            <SettingsCardinChat></SettingsCardinChat>
            <div className={styles.buttonsWrapper}>
                    <button className={styles.buttons}>UNMATCH</button>
                    <button className={styles.buttons}>REPORT</button>
                    </div>
            </div>
        </div>

    )
}