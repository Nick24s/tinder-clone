import './TinderCards.css';
import ChatPage from "../pages/ChatPage";
import { useSelector } from 'react-redux';
import { swipeViewName, chatViewName } from '../GlobalConst'
import CommonTinderCard from "./TinderCard";

export default function BodyWrapper(props) {

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
            <ChatPage></ChatPage>
        )
    }
        


    const renderSwipeView = () => {
       
        
        return <>
            <div className={props.className}>
                {allUsers.map(user => (
                        <CommonTinderCard key={user.ID + user.userName} images={user.photos} user={user}  >
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