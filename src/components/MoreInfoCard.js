import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import ImageSlider from './ImageSlider'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from '../styles/settingsCardHolder.module.css'
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';

export default function MoreInfoCard(props) {
    const user = useSelector(state => state.cardUser.user)[0];

    const [profileUser, setProfileUser] = useState();
    
    useEffect(()=>{
        setProfileUser(user)
    }, [profileUser])

    return (
        <div className='CardInfo'>
            <ImageSlider key={user.age + user.username} images={user.photos}></ImageSlider>
            <div className={"Inside"}>
                <div className={'Info'}>
                    <p className={'p'}>{user.username}</p>
                    <p className={'p2'}>{user.age}</p>
                    <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                </div>
                {user.company ? (<div className={styles.secondLine}>
                    <BusinessIcon />
                    <p className={styles.secondlineP}>{user.company}</p>
                </div>) : (<></>)}
                {user.jobTitle ? (<div className={styles.secondLine}>
                    <WorkIcon />
                    <p className={styles.secondlineP}>{user.jobTitle}</p>
                </div>) : (<></>)}
                {user.school ? (<div className={styles.secondLine}>
                    <SchoolOutlinedIcon />
                    <p className={styles.secondlineP}>{user.school}</p>
                </div>) : (<></>)}
                <div className={styles.secondLine}>
                    <DescriptionIcon></DescriptionIcon>
                    <p className={styles.secondlineP}>{user.description}</p>
                </div>
                {user.passions.length !== 0 ? (
                    <div key={user.age + user.username} className={styles.PassionsBox}>
                        <h3>Passions</h3>
                        <div className={styles.PassionsContainer}>
                            {user.passions.map(passion => <Chip key={passion} label={`${passion}`} variant="outlined" />)}
                        </div>
                    </div>) : (<></>)}
                <div onClick={props.onclick} className='BackBtn'>
                    <ArrowDropDownCircleRoundedIcon sx={{ color: "red", fontSize: "48px" }} />
                </div>
            </div>
        </div>
    )
}