import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import { IconButton } from '@mui/material';
import './SwipeButtons.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataByID } from '../utils';
import { addLikedAction, addMatchAction } from '../redux/actions/usersActions';



export default function SwipeButtons(props) {
    const dispatch = useDispatch();
    const loggedUserID = useSelector(state => state.usersData.loggedUser)
    const allUsers = useSelector(state => state.usersData.usersData);


    const ClickedUserID = props.id;
    const onLikeClick = (e) => {
        e.preventDefault()
        let ClickedUserData = getUserDataByID(ClickedUserID, allUsers);
        let { liked = [] } = ClickedUserData;

        let actionToDispatch = addLikedAction;

        liked.forEach(likeID => {
            if(likeID === loggedUserID){
                actionToDispatch =  addMatchAction;
                console.log('MATCH!'); // TODO MATCH MESSAGE SCREEN
                // dispatch(addMatchAction(loggedUserID , ClickedUserID))
            }
        })

        dispatch(actionToDispatch(loggedUserID , ClickedUserID))
        
    }

    const onDislikeClick = (e) => {
        e.preventDefault();
        let ClickedUserData = getUserDataByID(ClickedUserID, allUsers);
        let { disliked = [] } = ClickedUserData;
        // dispatch(addDislike)
    }

    return (

        <>
            <div className='swipeButts'>
                <IconButton className='swipeButt_rep'>
                    <ReplayIcon fontSize='large'></ReplayIcon>
                </IconButton>
                <IconButton className='swipeButt_close'>
                    <CloseIcon fontSize='large' onClick={(userID) => {onDislikeClick(userID)}}></CloseIcon>
                </IconButton>
                <IconButton className='swipeButt_star'>
                    <StarIcon fontSize='large'></StarIcon>
                </IconButton>
                <IconButton className='swipeButt_fav' onClick={(userID) => {onLikeClick(userID) }}>
                    <FavoriteIcon fontSize='large'></FavoriteIcon>
                </IconButton>
                <IconButton className='swipeButt_bolt'>
                    <BoltIcon fontSize='large'></BoltIcon>
                </IconButton>
            </div>
        </>
    )
}