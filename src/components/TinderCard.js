import {React, useState} from 'react'
import ImageSlider from "./ImageSlider";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import { green, grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import { useSelector } from 'react-redux';
import SwipeButtons from './SwipeButttons';

export default  function CommonTinderCard(props) {

    const usersData = useSelector(state => state.usersData.usersData)
    const [cardInfoFlag, setCardInfo] = useState(false)

    const renderBody = (user) => {
            return (
                <TinderCard className="swipe" key={user.ID + user.userName} preventSwipe={['up', 'down']}>
                    
                <ImageSlider  images={user.photos}></ImageSlider>
                <div className="UserInfo">
                    <div className="Name__AgeBox">
                        <h3 className="CardName">{user.username}</h3>
                        <h3 className="AgeInfo">{user.age}</h3>
                    </div>
                    <div className="RecentlyActiveBox">
                        <CircleIcon sx={{ color: green['A200'], fontSize: 10 }}></CircleIcon>
                        <p>Recenly Active</p>
                    </div>
                    <div className="PassionsBox">
                        <Chip label="Netflix" size="small" sx={{
                            background: "linear-gradient(90deg, rgba(250,109,104,1) 0%, rgba(253,40,121,1) 100%)",
                            color: grey['A100'],
                            opacity: '0.8',
                            height: "30px",
                            width: "65px",
                            fontWeight: "500"
                        }} />

                        <Chip label="Netflix" size="small" sx={{
                            backgroundColor: grey['900'],
                            color: grey['A100'],
                            opacity: '0.8',
                            height: "30px",
                            width: "65px",
                            fontWeight: "500"
                        }} />
                    </div>
                    <div onClick={() => setCardInfo(true)} className="InfoIcon">
                        <InfoIcon  sx={{ color: "white", fontSize: "28px" }}></InfoIcon>
                    </div>
                </div>
     
                {  renderFooter()}
            </TinderCard>
            )
    }

    const card = (user) => {
        return (
            <div className='CardInfo'>
                <ImageSlider images={user.photos}></ImageSlider>
                <div className={"Inside"}>
                    <div className={'Info'}>
                        <p className={'p'}>{user.username}</p>
                        <p className={'p2'}>{user.age}</p>
                        <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                    </div>
                    <div className={'secondLine'}>
                        <SchoolOutlinedIcon></SchoolOutlinedIcon>
                        <p className={'secondlineP'}>PMG 'Ivan Vazov'</p>
                    </div>
                    <div onClick={() => setCardInfo(false)} className='BackBtn'>
                        <ArrowDropDownCircleRoundedIcon sx={{ color: "red", fontSize: "48px" }}/>
                    </div>
                </div>
            </div>
        )
    }

    const renderFooter =() => {
        return(
         <div className="SwipeButtons">
            <SwipeButtons key={props.user.ID + props.user.userName} id={props.user.ID} ></SwipeButtons>
        </div>
           
            
        )
    }
  return (
        
    <>
       { cardInfoFlag ? card(props.user) : renderBody(props.user) }
        
       {/* {  renderFooter()} */}

            </>
        
    )
}


