import React from 'react'
import ImageSlider from "./ImageSlider";

import TinderCard from "react-tinder-card";
import './TinderCards.css';
import { green, grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';

export default  function CommonTinderCard(props) {
    const renderBody = (user) => {
            return (
                <TinderCard className="swipe" key={user.name} preventSwipe={['up', 'down']}>
                <ImageSlider></ImageSlider>
                <div className="UserInfo">
                    <div className="Name__AgeBox">
                        <h3 className="CardName">{user.name}</h3>
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
                    <div className="InfoIcon">
                        <InfoIcon sx={{ color: "white", fontSize: "28px" }}></InfoIcon>
                    </div>
                </div>
            </TinderCard>
            )
    }

    const renderFooter =(footer) => {
        return(

            <> {footer}</>
        )
    }
  return (
        
    <>
       { renderBody(props.user) }
        
       { props.footer && renderFooter(props.footer)}

            </>
        
    )
}


