import { Avatar } from "@mui/material";
import styles from './ChatRow.module.css'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { useDispatch} from 'react-redux';
import setView from "../redux/actions/mainPageActions";
import { chatViewName } from "../GlobalConst";

export default function ChatRow({name, message, id, profilImg }){
  
    const dispatch = useDispatch();

    // todo pass userID here (to render chat for clicked user)
    const handleChoosenChat = (e) => {
       const chosenChatID = e.target.alt;
            
            dispatch(setView(chatViewName , chosenChatID));
    }
    
    return (
        <div  className={styles.chat}>
            <Avatar sx={{ width: 74, height: 74 }} key={id} className={styles.chatImage} alt={id} src={profilImg}  onClick={handleChoosenChat}></Avatar>
            <div   className={styles.info}>
                <h2>{name}</h2>
                <p><ReplyRoundedIcon fontSize="small" color="disabled"/>{message}</p>
            </div>
        </div>
    )
}