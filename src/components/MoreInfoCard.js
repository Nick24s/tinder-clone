import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import ImageSlider from './ImageSlider'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function MoreInfoCard(props) {
    const user = useSelector(state => state.cardUser.user)[0];
    console.log(user);

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
                <div className='BackBtn'>
                    <ArrowDropDownCircleRoundedIcon sx={{ color: "red", fontSize: "48px" }} />
                </div>
            </div>
        </div>
    )
}