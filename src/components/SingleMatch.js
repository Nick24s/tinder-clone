import styles from './SingleMatch.module.css'
import { Avatar } from "@mui/material";
import { useDispatch } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { chatViewName } from '../GlobalConst';

export default function SingleMatch({name, id, profilImg}){

    const dispatch = useDispatch();

    const handleChoosenChat = (e) => {
        const ChoosenChatID = e.target.alt;
        console.log(ChoosenChatID)
        dispatch(setView(chatViewName , ChoosenChatID));
}

    return (
        <div className={styles.matches} onClick={handleChoosenChat}>
            <h4 className={styles.name}>{name}</h4>
            <Avatar 
                variant="rounded"
                key={id}
                alt={ id}
                src={profilImg}
                sx={{ width: 100, height: 120}}
            >
            </Avatar>
            
        </div>
    )
}