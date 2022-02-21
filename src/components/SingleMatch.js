import styles from './SingleMatch.module.css'
import { Avatar } from "@mui/material";
import { useDispatch } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { chatViewName } from '../GlobalConst';

export default function SingleMatch({name, id, profilImg}){

    const dispatch = useDispatch();

    const handleChoosenChat = () => {
        dispatch(setView(chatViewName));
}

    return (
        <div className={styles.matches} onClick={handleChoosenChat}>
            <h4 className={styles.name}>{name}</h4>
            <Avatar 
                variant="rounded"
                alt={name + id}
                src={profilImg}
                sx={{ width: 100, height: 120}}
            >
            </Avatar>
            
        </div>
    )
}