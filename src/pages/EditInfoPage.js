import styles from '../styles/EditInfoPage.module.css';
import EditInfoPictures  from '../components/EditInfoPictures';
import MultilineTextFields from '../components/MultilineTextFields'
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function EditInfoPage() {
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
    <button className={styles.button2Style}>Save</button>

    </div>
  );
}

export default EditInfoPage;
