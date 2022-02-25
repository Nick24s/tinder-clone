import styles from './AfterLoginPage.module.css';
import BodyWrapper from '../components/BodyWrapper';
import UserSettingsPage from './UserSettingsPage';
import {  useState } from 'react';
import SettingsCard from '../components/SettingsCard';
import SideMenuMachesMessages from '../components/SideMenuMachesMessages';
import ProfileSide from '../components/ProfileSide';

export default function AfterLoginPage() {
    
    const [show, setShow] = useState(false);
  
    
    return (
        <>
            <div className={styles.Main}>
                <div className={styles.FuncTab}>
                 <ProfileSide show={show} setShow={setShow}/>
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