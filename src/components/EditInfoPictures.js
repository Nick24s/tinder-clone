import React from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { pink } from '@mui/material/colors';



export default function EditInfoPictures() {
    
    return (
        <div style={{backgroundColor : 'grey' , borderRadius : '30px' , minWidth : '110px' , width : '100px' , minHeight : '150px' , height : '150px' , margin : '7px'}} >
                <div style={{float: "right" , marginTop : '120px'}}>
                <AddCircleOutlinedIcon  sx={{ color: pink[500] , fontSize: 31}}></AddCircleOutlinedIcon>

                </div>
        </div>
    )
}