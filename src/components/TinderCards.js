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
            Fname: "Nina",
            Lname: "Dobrev",
            age: 22,
            url: ["https://filmitena.com/img/Actor/Original/255_or.jpg", 'https://webnews.bg/uploads/images/73/2673/122673/orig.jpg?_=1446789235']
        },
        {
            Fname: "Madison",
            Lname: "Beer",
            age: 23,
            url: ['https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/bf929516-4c5e-4370-b521-985cdea63cdc.jpg',
                    'https://pbs.twimg.com/media/E4VsNriXwAIiMfO.jpg',
                    'https://mfiles.alphacoders.com/849/849341.jpg']
        }
    ]);

    return (
        <div className="main">
                {people.map(user =>(
                    <TinderCard className="swipe" key={user.Lname + user.age} preventSwipe={['up', 'down']}>
                        <ImageSlider name={user.url} images={user.url}></ImageSlider>
                            <div className="UserInfo">
                                <div className="Name__AgeBox">
                                    <h3 className="CardName">{user.Fname}</h3>
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

                                    <Chip label="Football" size="small" sx={{
                                        backgroundColor: grey['900'] ,
                                        color: grey['A100'],
                                        opacity: '0.8',
                                        height:"30px",
                                        width: "72px",
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