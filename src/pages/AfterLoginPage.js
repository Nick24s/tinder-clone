import styles from './AfterLoginPage.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessCenterSvgIcon from '@mui/icons-material/BusinessCenter';
import { IconButton } from '@mui/material';
import TinderCards from '../components/TinderCards';
import SwipeButtons from '../components/SwipeButttons';
import UserSettingsPage from './UserSettingsPage';
import { useState } from 'react';
import SettingsCard from '../components/SettingsCard';
import SideMenuMachesMessages from '../components/SideMenuMachesMessages';
import { pink } from '@mui/material/colors';

export default function AfterLoginPage() {


    const [show, setShow] = useState(false);
    return (
        <>
            <div className={styles.Main}>
                <div>
                    <div className={styles.ProfileSide}>
                            <IconButton  onClick={() => setShow(!show)}><PersonIcon sx={{ color: pink[50], fontSize: 30 }}/></IconButton>
                            <h4>Username</h4>
                        <div className={styles.icons}>
                            <IconButton fontSize="large"><LocalFireDepartmentIcon  sx={{color: pink[50], fontSize: 30 }}></LocalFireDepartmentIcon></IconButton>
                            <IconButton><BusinessCenterSvgIcon  sx={{color: pink[50], fontSize: 30 }}></BusinessCenterSvgIcon></IconButton>
                        </div>
                    </div>
                    <div className={styles.Functionalities}>
                        {
                            show ? <div >  <UserSettingsPage></UserSettingsPage> </div> : <div className={styles.MatchesOrMessages}><SideMenuMachesMessages></SideMenuMachesMessages>   </div>
                        }

                        {/* <div className='Container'>  </div> */}
                    </div>
                </div>
                {
                    show ? <div><SettingsCard/></div> : <><TinderCards/><SwipeButtons/></>
                }   
              
                <div>
                   
                  
                </div>
            </div>
        </>
    )
}