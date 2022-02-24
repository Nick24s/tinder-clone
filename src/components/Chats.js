// import { Chat } from '@material-ui/icons'
import ChatRow from './ChatRow'
import styles from './Chats.module.css'

export default function Chats(){


    

    return (
            <div>
                <ChatRow 
                id={0}
                name="Choko"
                message="hey, you fine ?"
                profilImg="https://pbs.twimg.com/profile_images/1445125329681625099/n4Np3MDE_400x400.jpg"
                />
        
            </div>
    )
}