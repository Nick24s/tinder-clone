import ImageAvatars from '../components/ChatAvatar'
import styles from '../styles/ChatPage.module.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsCardinChat from '../components/SettingCardinChat';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import {  swipeViewName } from '../GlobalConst';
export default function ChatPage() {

    const [messages, setMessages] = useState([
        {
            id: '1',
            name: 'Ivan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-_kgOmA9pVU8v0-y9RPdW7v4EHj-FoAkwA&usqp=CAU',
            message: 'whats up'
        },
        {
            id: '2',
            name: 'Ivan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-_kgOmA9pVU8v0-y9RPdW7v4EHj-FoAkwA&usqp=CAU',
            message: 'second Message'
        },
        {
            id: '3',
            name: 'Ivan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-_kgOmA9pVU8v0-y9RPdW7v4EHj-FoAkwA&usqp=CAU',
            message: 'ne up'
        },
        {
            id: '4',
            message: 'my message'
        }
    ]);
    const [input, setInput] = useState('');

    const handleSend = e => {
        e.preventDefault();
        if(input !== ''){
            setMessages([...messages, { message: input }]);
        }
        setInput('');
    }

    const dispatch = useDispatch();
    const closeChat = () => {
        dispatch(setView(swipeViewName))
    }

    return (
        <div className={styles.firstParent}>
            <div className={styles.ChatHolder}>
                <div className={styles.upperDiv}>
                    <ImageAvatars className={styles.ChatScreen_image} src={messages[0].image}></ImageAvatars>
                    <p className={styles.chatScreen_time}>You matched with {messages[0].name} on 10/25/2019</p>
                    <div className={styles.closeIcon} onClick={closeChat}>
                        <CancelOutlinedIcon></CancelOutlinedIcon>
                    </div>
                </div>
                <div className={styles.actualChat}>
                    {/* <Link to={`/chat/${name}`} */}
                    <div >
                        {messages.map(message => (
                            message.name ? (
                                <div key={message.id} className={styles.ChatScreen_message}>
                                    <ImageAvatars
                                        className={styles.ChatScreen_image}
                                        alt={message.name}
                                        src={message.image}
                                    />
                                    <p className={styles.ChatScreen_text}>{message.message}</p>
                                </div>
                            ) : (
                                <div className={styles.ChatScreen_message}>
                                    <p className={styles.ChatScreen_textUser}>{message.message} </p>
                                </div>
                            )
                        ))}

                    </div>
                    {/* </Link> */}



                </div>
                <div className={styles.sentMessageDiv}>

                    <form className={styles.chatScreen_input}>
                        <input value={input} onChange={e => setInput(e.target.value.trim())} className={styles.chatScreen_inputField} type="text" placeholder='type a message...' />
                        <button onClick={handleSend} type='submit' className={styles.chatScreen_inputButton}>SEND</button>
                    </form>
                    {/* <div className={styles.sendButtonHolder}><p className={styles.sendButton}>SEND</p></div>  */}
                    {/* * <MultilineTextFields minRows='1' variant='outlined' maxLength='80' placeholder='Type a message'></MultilineTextFields> */}
                </div>



            </div>
            <div className={styles.side}>
                <SettingsCardinChat></SettingsCardinChat>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.buttons}>UNMATCH</button>
                    <button className={styles.buttons}>REPORT</button>
                </div>
            </div>
        </div>

    )
}