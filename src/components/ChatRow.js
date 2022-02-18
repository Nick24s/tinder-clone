import { Avatar } from "@mui/material";
import styles from './ChatRow.module.css'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

export default function ChatRow({name, message, id, profilImg}){

    return (
        <div className={styles.chat}>
            <Avatar sx={{ width: 74, height: 74 }} className={styles.chatImage} alt={name} src={profilImg}></Avatar>
            <div className={styles.info}>
                <h2>{name}</h2>
                <p><ReplyRoundedIcon fontSize="small" color="disabled"/>{message}</p>
            </div>
        </div>
    )
}