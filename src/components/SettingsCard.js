import ImageSlider from "./ImageSlider";
import styles from '../styles/settingsCardHolder.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EditInfoPage from '../pages/EditInfoPage';
import { useState } from "react";
// import styles from '../styles/EditInfoPage.module.css';
import EditInfoPictures  from '../components/EditInfoPictures';
import MultilineTextFields from '../components/MultilineTextFields'
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function SettingsCard() {

    const [show, setShow] = useState(false);

     const [ReadOnlyOrEdit , isReadyOnly] = useState(true);
  const renderReadOnlyMode = () => {
      return (
          <>
        <ImageSlider images={['https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/bf929516-4c5e-4370-b521-985cdea63cdc.jpg', 'https://mfiles.alphacoders.com/849/849341.jpg']}></ImageSlider>
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
        <button className={styles.btnGrad} onClick={() => isReadyOnly(!ReadOnlyOrEdit)}  >Edit info</button>

        </div>
        </>
      )
  
  }
   const renderEditMode = () => {
        return (
            <div className={styles.EditInfoPage}>
      <div style={{ display: 'flex' }}>
        <div className={styles.holder1} >Edit</div>
        <div className={styles.holder}>Preview</div>
      </div>
      <div className={styles.myPicsHolder}>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
        <EditInfoPictures></EditInfoPictures>
      
      </div>
      
      <button className={styles.buttonStyle}>Add media</button>
     <p className={styles.aboutP}>ABOUT NICK</p>
     <MultilineTextFields minRows='4' maxLength='300'></MultilineTextFields>
     <p className={styles.aboutP}>PASSIONS</p>

      {/* <div className={styles.clickableHolder}><p>Add Passions</p> </div> */}
      
    <ListDividers primary='Add Passions' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
    <p className={styles.aboutP}>JOB TITLE</p>
    <MultilineTextFields minRows='1' maxLength='40' placeholder='Add Job Title'></MultilineTextFields>
    <p className={styles.aboutP}>COMPANY</p>
    <MultilineTextFields minRows='1' maxLength='40' placeholder='Add Company'></MultilineTextFields>
    <p className={styles.aboutP}>SCHOOL</p>
    <MultilineTextFields minRows='1' maxLength='40' placeholder='Add School'></MultilineTextFields>
    <p className={styles.aboutP}>LIVING IN</p>
    <MultilineTextFields minRows='1' maxLength='40' placeholder='Add City'></MultilineTextFields>
    <p className={styles.aboutP}>GENDER</p>
    <ListDividers primary='MAN' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
    <p className={styles.aboutP}>SEXUAL ORIENTATION</p>
    <ListDividers primary='Straight' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
    <button className={styles.button2Style} onClick={() => isReadyOnly(!ReadOnlyOrEdit)}> Save</button>

    </div>
        )
   } 

    return (
        <div className={styles.settingsCardHolder}>

   {       ReadOnlyOrEdit ?  renderReadOnlyMode() : renderEditMode()  }
      </div>
    )
}