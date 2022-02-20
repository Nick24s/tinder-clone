import styles from './SingleMatch.module.css'
import { Avatar } from "@mui/material";


export default function SingleMatch({name, id, profilImg}){


    return (
        <div className={styles.matches}>
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