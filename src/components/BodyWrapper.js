
import ChatPage from "../pages/ChatPage";
import { useSelector } from 'react-redux';
import { swipeViewName, chatViewName } from '../GlobalConst'
import Advanced from './TinderCardTest';

export default function BodyWrapper() {

    const viewName = useSelector(state => state.mainPage.viewName);
    const allUsers = useSelector(state => state.usersData.usersData);

  
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
            <Advanced></Advanced>
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