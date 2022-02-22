import { useState } from "react";
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
            url: ["https://filmitena.com/img/Actor/Original/255_or.jpg", 'https://webnews.bg/uploads/images/73/2673/122673/orig.jpg?_=1446789235']
        },
        {
            name: "Madison Beer",
            age: 23,
            url: ['https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/bf929516-4c5e-4370-b521-985cdea63cdc.jpg',
                                'https://pbs.twimg.com/media/E4VsNriXwAIiMfO.jpg',
                                'https://mfiles.alphacoders.com/849/849341.jpg']
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
        
        return <>
            <div className={props.className}>
                {people.map(user => (
                        <CommonTinderCard key={user.name} images={user.url} user={user} footer={buttonComponent}>
                        </CommonTinderCard>
                ))}
                
            </div>
        </>
    }



    return (

        <>
            {
                choosenView()
            }
        </>
    )
}