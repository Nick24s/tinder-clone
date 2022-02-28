import ImageAvatars from '../components/ChatAvatar'
import styles from '../styles/ChatPage.module.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsCardinChat from '../components/SettingCardinChat';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { swipeViewName } from '../GlobalConst';
import { getUserDataByID } from '../utils';
import { removeMatchAction } from '../redux/actions/usersActions';
import { db , storage} from '../firebase' 
import {addDoc} from '@firebase/firestore';

export default function ChatPage() {
    const chosenChatID = useSelector(state => state.mainPage.chosenChatID)
    const allUsers = useSelector(state => state.usersData.present.usersData);
    const loggedUserID = useSelector(state => state.usersData.present.loggedUser)
    const loggedUser = allUsers.filter(user => user.ID === loggedUserID)[0];
    let clickedUserData = getUserDataByID(chosenChatID, allUsers);


    // const [clickedUser, setClickedUser] = useState(false);
    // const [show, setShow] = useState(false);
    // const [receiver, setReceiver] = useState("");
    // const [receiverImage, setReceiverImage] = useState("");
    // const [inputStr, setInputStr] = useState('');
    // const [showPicker, setShowPicker] = useState(false);
    // const loggedUser = useSelector(state => state.userData);
    // const users = useSelector(state => state.users.users).filter(user => user.id !== loggedUser.id);
    // const [userGroups, setUserGroups] = useState([]);
    // const [messages, setMessages] = useState("");
    // const [currentMsgUserID, setCurrentMsgUserID] = useState("");
    // const [groupID, setGroupID] = useState("");
    const [input, setInput] = useState('');



    const HandleSend = (e) => {
        e.preventDefault();
        return <p>{input}</p>
        setInput('');
    }

    const dispatch = useDispatch();
    const closeChat = () => {
        dispatch(setView(swipeViewName))
    }


    const HandleUnmatch = (e) => {
        e.preventDefault()
       
        dispatch(removeMatchAction(loggedUserID , chosenChatID))
        dispatch(setView(swipeViewName))
    }
    
    return (
        <div className={styles.firstParent}>
            <div className={styles.ChatHolder}>
                <div className={styles.upperDiv}>
                    <ImageAvatars id={clickedUserData.message} className={styles.ChatScreen_image} src={clickedUserData.photos[0]}></ImageAvatars>
                    <p className={styles.chatScreen_time}>You matched with {clickedUserData.username} on 10/25/2019</p>
                    <div className={styles.closeIcon} onClick={closeChat}>
                        <CancelOutlinedIcon></CancelOutlinedIcon>
                    </div>
                </div>
                <div className={styles.actualChat}>

                    <div >
                        {(clickedUserData.messages).map(message => (

                            <div key={clickedUserData.message} className={styles.ChatScreen_message}>
                                <ImageAvatars
                                    className={styles.ChatScreen_image}
                                    alt={clickedUserData.name}
                                    src={clickedUserData.photos[0]}
                                />
                                <p className={styles.ChatScreen_text}>{message}</p>
                            </div>


                        ))}
                           <div className={styles.ChatScreen_message}>
                    <p className={styles.ChatScreen_textUser}>{input || 'testMessage'} </p>
                </div>
                    </div>



                </div>
                <div className={styles.sentMessageDiv}>

                    <form className={styles.chatScreen_input}>
                        <input value={input} onChange={e => setInput(e.target.value.trim())} className={styles.chatScreen_inputField} type="text" placeholder='type a message...' />
                        <button onClick={HandleSend} type='submit' className={styles.chatScreen_inputButton}>SEND</button>
                    </form>
                </div>

            </div>
            <div className={styles.side}>
                <SettingsCardinChat ></SettingsCardinChat>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.buttons} id={chosenChatID} onClick={HandleUnmatch}>UNMATCH</button>
                    <button className={styles.buttons}>REPORT</button>
                </div>
            </div>
        </div>

    )
}