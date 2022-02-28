import React, { useState, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TinderCard from 'react-tinder-card'
import ImageSlider from './ImageSlider'
import { green, grey, pink } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import { IconButton } from '@mui/material';
import styles from "./TinderCardTest.module.css"
import MoreInfoCard from "./MoreInfoCard.js"
import setUser from '../redux/actions/cardPageActions';
import './TinderCards.css';
import { getUserDataByID } from '../utils';
import WorkIcon from '@mui/icons-material/Work';
import { addDislikedAction, addLikedAction, addMatchAction } from '../redux/actions/usersActions';
import { ActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import MatchScreen from './MatchScreen';



function Advanced(props) {
    const dispatch = useDispatch();
    const loggedUserID = useSelector(state => state.usersData.present.loggedUser);
    const userId = useSelector(state => state.usersData.present.loggedUser);
    const allUsers = useSelector(state => state.usersData.present.usersData);
    const loggedUserData = getUserDataByID(userId, allUsers);
    const db = useSelector(state => state.usersData.present.usersData).filter(user => user.ID !== loggedUserData.ID &&
                                                                     user.gender === loggedUserData.lookingFor &&
                                                                     !user.matches.includes(loggedUserData.ID));
    const [matches, setMatches] = useState(db);
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    const [cardInfoFlag, setCardInfo] = useState(true);
    const [showMatchScreen , setMatchScreen] = useState(false);
    const [ClickedUser , setClickedUser] = useState();
   

    const childRefs = useMemo(
        () =>
            Array(matches.length)
                .fill(0)
                .map((i) => React.createRef()),
        [matches]
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < matches.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index , ClickedUserID) => {
       
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        let ClickedUserData = getUserDataByID(ClickedUserID, allUsers);
        let actionToDispatch;
        if(direction === "right"){
            actionToDispatch = addLikedAction;
            let { liked = [] } = ClickedUserData;
        liked.forEach(likeID => {
            if(likeID === loggedUserID){
                actionToDispatch =  addMatchAction;
                console.log('MATCH!'); 
                setClickedUser(ClickedUserID);
                // setMatchScreen(true);
                // TODO MATCH MESSAGE SCREEN
                
            }
        })
        dispatch(actionToDispatch(loggedUserID , ClickedUserID))
    
        } else {
            let loggedUserData = getUserDataByID(loggedUserID, allUsers);
            let { disliked = [] } = loggedUserData;
            if(!disliked.includes(ClickedUserID)){
                actionToDispatch = addDislikedAction
                dispatch(actionToDispatch(loggedUserID , ClickedUserID))
            }
            
        }
       
    }

    const outOfFrame = (name, idx, id) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

    }

    const swipe = async (dir) => {
        console.log(dir)
        if (canSwipe && currentIndex < matches.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }

    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
     
            // eslint-disable-next-line no-unused-expressions
            dispatch(ActionCreators.undo())

    }
    
    const saveUserInStore = (user) => {
        dispatch(setUser(user));
        setCardInfo(false);
    }

    const changeCardInfoFlag = () => {
        setCardInfo(true)
    }


    return (
    <>
    {showMatchScreen ? <div> <MatchScreen loggedUserID={loggedUserID} ClickedUser={ClickedUser}  showMatchScreen={showMatchScreen}  setMatchScreen={setMatchScreen}/> </div>  : null }
        <div className={styles.TinderCards}>
            <div className='cardContainer'> 
                {matches.map((character, index) => (
                    cardInfoFlag ? (<><TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name, index, character.ID)}
                        onCardLeftScreen={() => outOfFrame(character.name, index, character.ID)}
                    >
                        <div key={character.name + character.ID}>
                            <ImageSlider images={character.photos}></ImageSlider>
                            <div className="UserInfo">
                                <div className="Name__AgeBox">
                                    <h3 className="CardName">{character.username}</h3>
                                    <h3 className="AgeInfo">{character.age}</h3>
                                </div>
                                <div className="RecentlyActiveBox">
                                    <CircleIcon sx={{ color: green['A200'], fontSize: 10 }}></CircleIcon>
                                    <p>Recenly Active</p>
                                </div>
                                {character.jobTitle ? (<div className={styles.secondLine}>
                                    <WorkIcon sx={{color: "white"}}/>
                                    <p className={styles.secondlineP}>{character.jobTitle}</p>
                                </div>) : (<></>)}
                                <div className="PassionsBox">
                                    {character.passions.map((passion, i) => (<Chip key={passion} label={passion} size="small" sx={{
                                        backgroundColor: pink['400'],
                                        color: grey['50'],
                                        opacity: '0.9',
                                        height: "30px",
                                        width: "65px",
                                        fontWeight: "500"
                                    }} />))}
                                </div>
                                <div onClick={() => saveUserInStore(character)} className="InfoIcon">
                                    <InfoIcon sx={{ color: "white", fontSize: "28px" }}></InfoIcon>
                                </div>
                            </div>
                        </div>
                    </TinderCard>
                        <div key={character.name + character.ID} className={styles.swipeButts}>
                            <IconButton onClick={() => goBack()} className={styles.swipeButt_rep}>
                                <ReplayIcon ></ReplayIcon>
                            </IconButton>
                            <IconButton onClick={() => swipe('left')} className={styles.swipeButt_close}>
                                <CloseIcon ></CloseIcon>
                            </IconButton>
                            <IconButton className={styles.swipeButt_star}>
                                <StarIcon></StarIcon>
                            </IconButton>
                            <IconButton onClick={() => swipe('right' )} className={styles.swipeButt_fav}>
                                <FavoriteIcon></FavoriteIcon>
                            </IconButton>
                            <IconButton className={styles.swipeButt_bolt}>
                                <BoltIcon></BoltIcon>
                            </IconButton>
                        </div></>
                    ) : (<>
                        <MoreInfoCard onclick={()=>changeCardInfoFlag()}/>
                    </>
                    )
                ))}
            </div>
        </div>
        </>
    )
}

export default Advanced