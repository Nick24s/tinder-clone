import React, { useEffect, useState } from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { pink } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { removeImage } from '../redux/actions/usersActions';



export default function EditInfoPictures(props) {
    const dispatch = useDispatch()
    const imgUrl = props.image ? props.image : "https://www.tate.org.uk/art/images/work/L/L01/L01682_10.jpg";
    const userId = useSelector(state => state.usersData.loggedUser);
    const user = useSelector(state => (state.usersData.usersData).filter(user => user.ID === userId)[0]);
    
    const onDeleteImg = () => {
        if (props.index < user.photos.length){
            const newImgArr = user.photos.filter(img => img != imgUrl)
            dispatch(removeImage(newImgArr, userId))
        }

        
    }

    return (
        <div style={{backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: "100% 100%",
                    borderRadius : '30px' , 
                    minWidth : '110px' , 
                    width : '100px' , 
                    minHeight : '150px' , 
                    height : '150px' , 
                    margin : '7px'
                    }} >
                    <div onClick={onDeleteImg} style={{float: "right" , marginTop : '120px'}}>
                        <CancelIcon sx={{ color: pink[500] , fontSize: 31}}></CancelIcon>
                    </div>
        </div>
    )
}