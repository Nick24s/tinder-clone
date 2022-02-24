import styles from './AfterLoginPage.module.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessCenterSvgIcon from '@mui/icons-material/BusinessCenter';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import BodyWrapper from '../components/BodyWrapper';
import UserSettingsPage from './UserSettingsPage';
import { useState } from 'react';
import SettingsCard from '../components/SettingsCard';
import SideMenuMachesMessages from '../components/SideMenuMachesMessages';
import { pink } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import setView from '../redux/actions/mainPageActions';
import { swipeViewName } from '../GlobalConst';
import { getUserDataByID } from '../utils';

export default function AfterLoginPage() {


    const dispatch = useDispatch();

    const loggedUserID = useSelector(state => state.usersData.loggedUser);
    const users = useSelector(state => state.usersData.usersData);

    let loggedUserData = getUserDataByID(loggedUserID, users);
    const { photos: avatars, name } = loggedUserData;
    const avatar = (avatars || [])[0];





    const renderSwipe = () => {
        dispatch(setView(swipeViewName));
    }

    const [show, setShow] = useState(false);
    return (
        <>
            <div className={styles.Main}>
                <div>
                    <div className={styles.ProfileSide}>
                        <Avatar alt="Remy Sharp" src={avatar} onClick={() => setShow(!show)} />
                        <h4 className={styles.userName}>{name}</h4>
                        <div className={styles.icons}>
                            <div className={styles.ButtonBackground}>
                                {show &&
                                    <IconButton onClick={() => { setShow(false); renderSwipe() }} fontSize="large">
                                        <LocalFireDepartmentIcon o sx={{ color: pink[50], fontSize: 26 }}></LocalFireDepartmentIcon>
                                    </IconButton>
                                }
                            </div>
                            <div className={styles.ButtonBackground}>
                                <IconButton><BusinessCenterSvgIcon sx={{ color: pink[50], fontSize: 26 }}></BusinessCenterSvgIcon></IconButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Functionalities}>
                        {
                            show ? <div >  <UserSettingsPage></UserSettingsPage> </div> : <div className={styles.MatchesOrMessages}><SideMenuMachesMessages></SideMenuMachesMessages>   </div>
                        }

                    </div>
                </div>
                {
                    show ? <div><SettingsCard /></div> : <><BodyWrapper className='main' /></>
                }

                <div>


                </div>
            </div>
        </>
    )
}