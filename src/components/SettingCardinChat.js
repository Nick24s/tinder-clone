import ImageSlider from "./ImageSlider";
import styles from '../styles/settingsCardHolder.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EditInfoPage from '../pages/EditInfoPage';
import { useState } from "react";

export default function SettingsCardinChat() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.settingsCardHolder}>
            <ImageSlider images={["https://filmitena.com/img/Actor/Original/255_or.jpg", 'https://webnews.bg/uploads/images/73/2673/122673/orig.jpg?_=1446789235']}></ImageSlider>
            <div className={styles.inside}>
                <div className={styles.info}>
                    <p className={styles.p}>Nick</p>
                    <p className={styles.p2}>24</p>
                    <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
                </div>
                <div className={styles.secondLine}>
                    <SchoolOutlinedIcon></SchoolOutlinedIcon>
                    <p className={styles.secondlineP}>PMG 'Ivan Vazov'</p>
                </div>
            </div>
            <div className={styles.description}>
                <span>some decription</span>
            </div>
        </div>
    )
}