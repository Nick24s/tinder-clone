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
import { db } from '../firebase'
import { collection, query, orderBy, onSnapshot, Timestamp, setDoc, doc, updateDoc } from '@firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
export default function ChatPage() {

    const chosenChatID = useSelector(state => state.mainPage.chosenChatID)
    const allUsers = useSelector(state => state.usersData.present.usersData);
    const loggedUserID = useSelector(state => state.usersData.present.loggedUser)
    const loggedUser = allUsers.filter(user => user.ID === loggedUserID)[0];
    let clickedUserData = getUserDataByID(chosenChatID, allUsers);
    const dispatch = useDispatch();
    const [inputStr, setInputStr] = useState('');
    const [userGroups, setUserGroups] = useState([]);
    const [messages, setMessages] = useState("");
    const [groupID, setGroupID] = useState(loggedUserID + chosenChatID);

    const liveUpdate = async (messagesRef) => {
        const queryObj = query(messagesRef, orderBy("sentAt"));
        onSnapshot(queryObj, (querySnapshot) => {
            const msgArr = [];
            querySnapshot.forEach((doc) => {
                msgArr.push({ id: doc.id, ...doc.data() })
            });
            setMessages(msgArr);
        });
    }

    const messagesRef = collection(db, "message", groupID, "messages");
    useEffect(() => {
        liveUpdate(messagesRef);

    }, [])

    const closeChat = () => {
        dispatch(setView(swipeViewName))
    }
    const HandleUnmatch = (e) => {
        e.preventDefault()
        dispatch(removeMatchAction(loggedUserID, chosenChatID))
        dispatch(setView(swipeViewName))
    }

    const getAllChats = async () => {
        const grRef = collection(db, "groups");
        const queryObj = query(grRef, orderBy("createdAt"));
        onSnapshot(queryObj, (querySnapshot) => {
            const groupsArr = [];
            querySnapshot.forEach((group) => {
                groupsArr.unshift({ id: group.id, ...group.data() })
            })
            console.log(groupsArr)
            groupsArr.map(group => {
                if (group.id === `${chosenChatID}${loggedUserID}`) {
                    setGroupID(`${chosenChatID}${loggedUserID}`);
                }
            })
            setUserGroups(groupsArr);
        })
    }

    useEffect(function loadGroups() {
        getAllChats();
    }, [])

    async function handleSendMessage() {
        setDoc(doc(db, "message", groupID, "messages", uuidv4()), {
            messageText: inputStr,
            sentBy: loggedUserID,
            sentAt: Timestamp.fromDate(new Date())
        });
        const groupRef = doc(db, "groups", groupID);

        await updateDoc(groupRef, {
            recentMessage: inputStr
        });
        setInputStr('');
        const messagesRef = collection(db, "message", groupID, "messages");
        liveUpdate(messagesRef);

    }

    const handleEnterPress = e => {
        if (e.keyCode === 13) {
            handleSendMessage();
        }
    };

    return (
        <div className={styles.firstParent}>
            <div className={styles.ChatHolder}>
                <div className={styles.upperDiv}>
                    <ImageAvatars key={loggedUser + clickedUserData.ID} id={clickedUserData.message} className={styles.ChatScreen_image} src={clickedUserData.photos[0]}></ImageAvatars>
                    <p className={styles.chatScreen_time}>You matched with {clickedUserData.username} on 10/25/2019</p>
                    <div className={styles.closeIcon} onClick={closeChat}>
                        <CancelOutlinedIcon></CancelOutlinedIcon>
                    </div>
                </div>
                <div className={styles.actualChat}>

                    <div className={styles.ChatScreen_message} >

                        {
                            messages &&
                            messages.map(msg => {

                                if (msg.sentBy === loggedUserID) {
                                    return (<div className={styles.ChatScreen_textUser} key={msg.id}>{msg.messageText}</div>)
                                } else {
                                    return (<div className={styles.ChatScreen_text} key={msg.id}>{msg.messageText}</div>)
                                }
                            }

                            )
                        }

                    </div>
                </div>
                <div className={styles.sentMessageDiv}>
                    <form className={styles.chatScreen_input}>
                        <input value={inputStr}
                            onKeyDown={e => handleEnterPress(e)}
                            onChange={e => setInputStr(e.target.value)}
                            className={styles.chatScreen_inputField}
                            type="text" placeholder='type a message...' />

                        <button onClick={handleSendMessage} type="button" className={styles.chatScreen_inputButton}>SEND</button>
                    </form>
                </div>
            </div>
            <div className={styles.side}>
                <SettingsCardinChat ></SettingsCardinChat>
                <div className={styles.buttonsWrapper}>
                    <button key={loggedUser + clickedUserData.ID} className={styles.buttons} id={chosenChatID} onClick={HandleUnmatch}>UNMATCH</button>
                    <button className={styles.buttons}>REPORT</button>
                </div>
            </div>
        </div>

    )
}