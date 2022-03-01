import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import ImageSlider from './ImageSlider'
import { useState } from 'react';
import styles from '../styles/settingsCardHolder.module.css'
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';

export default function MoreInfoCard(props) {
    const [profileUser, setProfileUser] = useState(props.character);

    return (
        <div className='CardInfo'>
            <ImageSlider key={profileUser.age + profileUser.username} images={profileUser.photos}></ImageSlider>
            <div className={"Inside"}>
                <div className={'Info'}>
                    <p className={'p'}>{profileUser.username}</p>
                    <p className={'p2'}>{profileUser.age}</p>
                    <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                </div>
                {profileUser.company ? (<div className={styles.secondLine}>
                    <BusinessIcon />
                    <p className={styles.secondlineP}>{profileUser.company}</p>
                </div>) : (<></>)}
                {profileUser.jobTitle ? (<div className={styles.secondLine}>
                    <WorkIcon />
                    <p className={styles.secondlineP}>{profileUser.jobTitle}</p>
                </div>) : (<></>)}
                {profileUser.school ? (<div className={styles.secondLine}>
                    <SchoolOutlinedIcon />
                    <p className={styles.secondlineP}>{profileUser.school}</p>
                </div>) : (<></>)}
                <div className={styles.secondLine}>
                    <DescriptionIcon></DescriptionIcon>
                    <p className={styles.secondlineP}>{profileUser.description}</p>
                </div>
                {profileUser.passions.length !== 0 ? (
                    <div className={styles.PassionsBox}>
                        <h3>Passions</h3>
                        <div className={styles.PassionsContainer}>
                            {profileUser.passions.map(passion => <Chip key={passion} label={`${passion}`} variant="outlined" />)}
                        </div>
                    </div>) : (<></>)}
                <div onClick={props.onclick} className='BackBtn'>
                    <ArrowDropDownCircleRoundedIcon sx={{ color: "red", fontSize: "48px" }} />
                </div>
            </div>
        </div>
    )
}