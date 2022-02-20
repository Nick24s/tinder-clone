import { Avatar } from "@mui/material";
import styles from './ChatRow.module.css'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { Link } from 'react-router-dom';
import { useState } from "react";
export default function ChatRow({name, message, id, profilImg }){
  

    const [isclicked , clickf] = useState(false)

    return (
        // <Link to='/main/chat' >
        
        <div className={styles.chat} isclicked={isclicked} onClick={() => clickf(!isclicked)}>
            <Avatar sx={{ width: 74, height: 74 }} className={styles.chatImage} alt={name} src={profilImg}></Avatar>
            <div className={styles.info}>
                <h2>{name}</h2>
                <p><ReplyRoundedIcon fontSize="small" color="disabled"/>{message}</p>
            </div>
        </div>
        // </Link>
    )
}