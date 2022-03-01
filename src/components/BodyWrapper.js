
import ChatPage from "../pages/ChatPage";
import { useSelector } from 'react-redux';
import { swipeViewName, chatViewName } from '../GlobalConst'
import SwipeCards from './SwipeCards';

export default function BodyWrapper() {

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

    const renderChatView = () => {
        return (
            <ChatPage ></ChatPage>
        )
    }


    const renderSwipeView = () => {
        return <>
            <SwipeCards></SwipeCards>
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