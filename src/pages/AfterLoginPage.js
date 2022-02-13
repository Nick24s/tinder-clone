import './AfterLoginPage.css';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { IconButton } from '@mui/material';
import TinderCards from '../components/TinderCards';
import SwipeButtons from '../components/SwipeButttons';

export default function AfterLoginPage(){


    return (
        <>
            <div className='Main'>
                <div>
                    <div className="Profile-side">
                        <IconButton className='icons-size'><PersonIcon fontSize='large'/></IconButton>
                        <h4>Username</h4>
                        <div className='icons'>
                            <IconButton fontSize="large"><LocalFireDepartmentIcon fontSize='large'></LocalFireDepartmentIcon></IconButton>
                            <IconButton><BusinessCenterIcon fontSize='large'></BusinessCenterIcon></IconButton> 
                        </div>
                        
                    </div>
                    <div className="Functionalities">
                        <div>
                            <button>Matches</button>
                            <button>Messages</button> 
                        </div>
                        <div className='Container'></div>
                    </div>
                </div>
                <TinderCards/>
                <SwipeButtons></SwipeButtons>
            </div>    
        </>
    )
}