import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import { IconButton } from '@mui/material';
import './SwipeButtons.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataByID } from '../utils';
import { addMatchAction } from '../redux/actions/usersActions';



export default function SwipeButtons(props) {
    const dispatch = useDispatch();
    const loggedUserID = useSelector(state => state.usersData.loggedUser)
    const allUsers = useSelector(state => state.usersData.usersData);


    const ClickedUserID = props.id;
    const onLikeClick = (e) => {
        console.log(e);
        e.preventDefault()
        console.log(ClickedUserID);
        let ClickedUserData = getUserDataByID(ClickedUserID, allUsers);
        let { liked = [] } = ClickedUserData;
        liked.forEach(likeID => {
            if(likeID === loggedUserID){
                console.log('MATCH!'); // TODO MATCH MESSAGE SCREEN
                dispatch(addMatchAction(loggedUserID , ClickedUserID))
            }
        })

        
    }

    return (

        <>
            <div className='swipeButts'>
                <IconButton className='swipeButt_rep'>
                    <ReplayIcon fontSize='large'></ReplayIcon>
                </IconButton>
                <IconButton className='swipeButt_close'>
                    <CloseIcon fontSize='large'></CloseIcon>
                </IconButton>
                <IconButton className='swipeButt_star'>
                    <StarIcon fontSize='large'></StarIcon>
                </IconButton>
                <IconButton className='swipeButt_fav' onClick={(userID) => { onLikeClick(userID) }}>
                    <FavoriteIcon fontSize='large'></FavoriteIcon>
                </IconButton>
                <IconButton className='swipeButt_bolt'>
                    <BoltIcon fontSize='large'></BoltIcon>
                </IconButton>
            </div>
        </>
    )
}