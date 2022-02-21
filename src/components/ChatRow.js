import { Avatar } from "@mui/material";
import styles from './ChatRow.module.css'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { useDispatch} from 'react-redux';
import setView from "../redux/actions/mainPageActions";

export default function ChatRow({name, message, id, profilImg }){
  
    const dispatch = useDispatch();

    // todo pass userID here (to render chat for clicked user)
    const handleChoosenChat = () => {
            dispatch(setView('chatView'));
    }
    
    return (
        // <Link to='/main/chat' >
        
        <div key={id} className={styles.chat} onClick={handleChoosenChat}>
            <Avatar sx={{ width: 74, height: 74 }} className={styles.chatImage} alt={name} src={profilImg}></Avatar>
            <div   className={styles.info}>
                <h2>{name}</h2>
                <p><ReplyRoundedIcon fontSize="small" color="disabled"/>{message}</p>
            </div>
        </div>
        // </Link>
    )
}