import { useState } from "react"
import TinderCard from "react-tinder-card";
import ImageSlider from "./ImageSlider";
import SwipeButtons from "./SwipeButttons";
import './TinderCards.css';
import pic1 from '../AvatarPicturesExp/1.jpg';
import { green, grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';



export default function TinderCards(){

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

    return (
        <div className="main">
                {people.map(user =>(
                    <TinderCard className="swipe" key={user.name} preventSwipe={['up', 'down']}>
                        <ImageSlider></ImageSlider>
                            <div className="UserInfo">
                                <div className="Name__AgeBox">
                                    <h3 className="CardName">{user.name}</h3>
                                    <h3 className="AgeInfo">{user.age}</h3>
                                </div>
                                <div className="RecentlyActiveBox">
                                    <CircleIcon  sx={{ color: green['A200'], fontSize: 10 }}></CircleIcon>
                                    <p>Recenly Active</p>
                                </div>
                                <div className="PassionsBox">
                                    <Chip label="Netflix" size="small" sx={{
                                        background: "linear-gradient(90deg, rgba(250,109,104,1) 0%, rgba(253,40,121,1) 100%)",
                                        color: grey['A100'],
                                        opacity: '0.8',
                                        height:"30px",
                                        width: "65px",
                                        fontWeight: "500"}}/>

                                    <Chip label="Netflix" size="small" sx={{
                                        backgroundColor: grey['900'] ,
                                        color: grey['A100'],
                                        opacity: '0.8',
                                        height:"30px",
                                        width: "65px",
                                        fontWeight: "500"}}/>
                                </div>
                                <div className="InfoIcon">
                                    <InfoIcon sx={{ color: "white", fontSize: "28px"}}></InfoIcon>
                                </div>
                            </div> 
                    </TinderCard>
                ))}
            <div className="SwipeButtons">
                <SwipeButtons></SwipeButtons>
            </div>
            
        </div>
    )
}