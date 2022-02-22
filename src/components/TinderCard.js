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

export default  function CommonTinderCard(props) {

    const [cardInfoFlag, setCardInfo] = useState(false)

    const renderBody = (user) => {
            return (
                <TinderCard className="swipe" key={user.name} preventSwipe={['up', 'down']}>
                <ImageSlider  images={user.url}></ImageSlider>
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
                    <div onClick={() => setCardInfo(true)} className="InfoIcon">
                        <InfoIcon  sx={{ color: "white", fontSize: "28px" }}>dasdasdasdas</InfoIcon>
                    </div>
                </div>
            </TinderCard>
            )
    }

    const card = (user) => {
        return (
            <div className='CardInfo'>
                <ImageSlider images={["https://filmitena.com/img/Actor/Original/255_or.jpg", 'https://webnews.bg/uploads/images/73/2673/122673/orig.jpg?_=1446789235']}></ImageSlider>
                <div className={"Inside"}>
                    <div className={'Info'}>
                        <p className={'p'}>Nick</p>
                        <p className={'p2'}>24</p>
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

    const renderFooter =(footer) => {
        return(

            <> {footer}</>
        )
    }
  return (
        
    <>
       { cardInfoFlag ? card(props.user) : renderBody(props.user) }
        
       { props.footer && renderFooter(props.footer)}

            </>
        
    )
}


