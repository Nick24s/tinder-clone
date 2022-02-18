import ImageSlider from "./ImageSlider";
import styles from '../styles/settingsCardHolder.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default function SettingsCard() {


    return (
        <div className={styles.settingsCardHolder}>
            <ImageSlider></ImageSlider>
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
            <div className={styles.buttonHolder}>
            <button className={styles.btnGrad} >Edit info</button>
            </div>
        </div>
    )
}