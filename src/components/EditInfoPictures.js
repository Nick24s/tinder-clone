import React, { useState } from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { pink } from '@mui/material/colors';
import { useSelector } from 'react-redux';



export default function EditInfoPictures(props) {
    const imgUrl = props.image ? props.image : "https://www.tate.org.uk/art/images/work/L/L01/L01682_10.jpg";
    const userId = useSelector(state => state.usersData.present.loggedUser);
    const user = useSelector(state => (state.usersData.present.usersData).filter(user => user.ID === userId)[0]);

    const [uploadImageFlag, setUploadImageFlag] = useState(false)


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
                {uploadImageFlag ? (
                    <div style={{float: "right" , marginTop : '120px'}}>
                        <AddCircleOutlinedIcon  sx={{ color: pink[500] , fontSize: 31}}></AddCircleOutlinedIcon>
                    </div>
                ) : (
                    <div style={{float: "right" , marginTop : '120px'}}>
                        <CancelIcon sx={{ color: pink[500] , fontSize: 31}}></CancelIcon>
                    </div>
                )}
        </div>
    )
}