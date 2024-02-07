import styles from '../styles/SingleMatch.module.css'
import { Avatar } from "@mui/material";
import { useDispatch } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { chatViewName } from '../GlobalConst';

export default function SingleMatch({name, id, profilImg}){

    const dispatch = useDispatch();
    const handleChosenChat = (e) => {
        const chosenChatID = e.target.alt;
   
        dispatch(setView(chatViewName , chosenChatID));
}
    return (
        <div className={styles.matches} onClick={handleChosenChat}>
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