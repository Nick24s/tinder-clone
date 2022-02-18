import  styles from './AfterLoginPage.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { IconButton } from '@mui/material';
import TinderCards from '../components/TinderCards';
import SwipeButtons from '../components/SwipeButttons';
import UserSettingsPage from './UserSettingsPage';
import { useState } from 'react';

export default function AfterLoginPage(){


    const [show , setShow] = useState(false);
    return (
        <>
            <div className={styles.Main}>
                <div>
                    <div className={styles.ProfileSide}>
                        <IconButton  onClick={() => setShow(!show)}><PersonIcon fontSize='large'/></IconButton>
                        <h4>Username</h4>
                        <div className={styles.icons}>
                            <IconButton fontSize="large"><LocalFireDepartmentIcon fontSize='large'></LocalFireDepartmentIcon></IconButton>
                            <IconButton  onClick={() => setShow(!show)} ><BusinessCenterIcon fontSize='large'></BusinessCenterIcon></IconButton> 
                        </div>
                        
                    </div>
                    <div className={styles.Functionalities}>
                    {
          show?<div >  <UserSettingsPage></UserSettingsPage> </div>: <div className={styles.MatchesOrMessages}> <button>Matches</button> <button>Messages</button>   </div>
        }
                       
                        {/* <div className='Container'></div> */}
                    </div>
                </div>
                <TinderCards/>
                <SwipeButtons></SwipeButtons>
            </div>    
        </>
    )
}