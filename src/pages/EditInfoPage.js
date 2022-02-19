import styles from '../styles/EditInfoPage.module.css';
import EditInfoPictures  from '../components/EditInfoPictures';

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
     
    </div>
  );
}

export default EditInfoPage;
