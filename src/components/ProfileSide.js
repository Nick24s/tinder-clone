import React from 'react'
import styles from '../styles/MainPage.module.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessCenterSvgIcon from '@mui/icons-material/BusinessCenter';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { swipeViewName } from '../GlobalConst';
import { getUserDataByID } from '../utils';
import { pink } from '@mui/material/colors';

export default function ProfileSide(props) {

    const loggedUserID = useSelector(state => state.usersData.present.loggedUser);
    const users = useSelector(state => state.usersData.present.usersData);
    const dispatch = useDispatch();

    const renderSwipe = () => {
        dispatch(setView(swipeViewName));
    }


    let loggedUserData = getUserDataByID(loggedUserID, users);
    const { photos: avatars, name } = loggedUserData;
    const avatar = (avatars || [])[0];

    return (
        <div className={styles.ProfileSide}>
            <Avatar alt="Remy Sharp" src={avatar} onClick={() => props.setShow(!props.show)} />
            <h4 className={styles.userName}>{name}</h4>
            <div className={styles.icons}>
                <div className={styles.ButtonBackground}>
                    {props.show &&
                        <IconButton onClick={() => { props.setShow(false); renderSwipe() }} fontSize="large">
                            <LocalFireDepartmentIcon sx={{ color: pink[50], fontSize: 26 }}></LocalFireDepartmentIcon>
                        </IconButton>
                    }
                </div>
                <div className={styles.ButtonBackground}>
                    <IconButton><BusinessCenterSvgIcon sx={{ color: pink[50], fontSize: 26 }}></BusinessCenterSvgIcon></IconButton>
                </div>
            </div>
        </div>
    )
}

