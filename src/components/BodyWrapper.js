import { useState } from "react"
import SwipeButtons from "./SwipeButttons";
import './TinderCards.css';
import { green, grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import ChatPage from "../pages/ChatPage";
import { useSelector } from 'react-redux';
import { swipeViewName, chatViewName } from '../GlobalConst'
import CommonTinderCard from "./TinderCard";

export default function BodyWrapper(props) {

    const viewName = useSelector(state => state.mainPage.viewName);

    const choosenView = () => {

        switch (viewName) {
            case swipeViewName:
                return renderSwipeView();
            case chatViewName:
                return renderChatView();
            default: return <div>No found view</div>
        }
    }


    const [people, setPeople] = useState([
        {
            name: "Nina Dobrev",
            age: 22,
            url: "https://cdn.marica.bg/images/marica.bg/759/1610452955.jpeg"
        },
        {
            name: "Madison Beer",
            age: 23,
            url: "https://i.insider.com/5f21bd5d2618b9656e20ac64?width=700"
        }
    ]);
    const renderChatView = () => {
        return (
            <ChatPage></ChatPage>
        )
    }

    const renderSwipeView = () => {
        const buttonComponent = <div className="SwipeButtons">
            <SwipeButtons></SwipeButtons>
        </div>;
        
        return <div className={props.className}>
            {people.map(user => (
                <CommonTinderCard user={user} footer={buttonComponent}></CommonTinderCard>

            ))}

        </div>
    }



    return (

        <>
            {
                choosenView()
            }
        </>
    )
}