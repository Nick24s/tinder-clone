import ImageSlider from "./ImageSlider";
import styles from '../styles/settingsCardHolder.module.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useEffect, useState } from "react";
// import styles from '../styles/EditInfoPage.module.css';
import EditInfoPictures from '../components/EditInfoPictures';
import MultilineTextFields from '../components/MultilineTextFields'
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from "../redux/actions/usersActions";

export default function SettingsCard() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.usersData.loggedUser);
  const user = useSelector(state => (state.usersData.usersData).filter(user => user.ID === userId)[0]);

  const numberOfImageContainers = 9;

  // const [aboutYou, setAboutYou] = useState(user.aboutYou);
  // const [passions, setPassions] = useState(user.passions);
  // const [gender, setGender] = useState(user.gender);
  // const [orientation, setOrientation] = useState(user.sexualOrientation);
  const [livingIn, setLivingIn] = useState(user.location);
  const [userImages, setUserImages] = useState([user.photos]);
  // const [jobTitle, setJobTitle] = useState(user.jobTitle);
  // const [company, setCompany] = useState(user.company);
  // const [collegeOrUni, setCollegeOrUni] = useState(user.collageOrUni);

  useEffect(() => {
    const imagesArraySet = setImagesArrLengthAndFill(user.photos, numberOfImageContainers);
    setUserImages(imagesArraySet)
  }, []);

  const setImagesArrLengthAndFill = (imagesArr, maxSize) => {
    let resultArr = [...imagesArr]
    resultArr.length = maxSize;
    if (imagesArr.length < maxSize) {
      resultArr.fill('', imagesArr.length);
    }
    return resultArr;
  }




  const [ReadOnlyOrEdit, isReadyOnly] = useState(true);

  const renderReadOnlyMode = () => {
    return (
      <>
        <ImageSlider images={user.photos}></ImageSlider>
        <div className={styles.inside}>
          <div className={styles.info}>
            <p className={styles.p}>{user.username}</p>
            <p className={styles.p2}>{user.age}</p>
            <div style={{ marginTop: "22px", marginLeft: '2px' }}><CheckCircleOutlineSharpIcon></CheckCircleOutlineSharpIcon></div>
          </div>
          <div className={styles.secondLine}>
            <SchoolOutlinedIcon></SchoolOutlinedIcon>
            <p className={styles.secondlineP}>{user.description}</p>
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <button className={styles.btnGrad} onClick={() => isReadyOnly(!ReadOnlyOrEdit)}>Edit info</button>
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
          {
            userImages.map((container, i) => <EditInfoPictures key={i} image={container}></EditInfoPictures>)
          }
        </div>

        <button className={styles.buttonStyle}>Add media</button>
        <p className={styles.aboutP}>ABOUT YOU</p>
        <textarea className={styles.AboutInputBox} placeholder="Add description"></textarea>
        <p className={styles.aboutP}>PASSIONS</p>

        {/* <div className={styles.clickableHolder}><p>Add Passions</p> </div> */}

        <ListDividers primary='Add Passions' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
        <p className={styles.aboutP}>JOB TITLE</p>
        <input type="text" className={styles.inputBox} maxLength='40' placeholder='Add Job Title'></input>
        <p className={styles.aboutP}>COMPANY</p>
        <input type="text" className={styles.inputBox} maxLength='40' placeholder='Add Company'></input>
        <p className={styles.aboutP}>SCHOOL</p>
        <input type="text" className={styles.inputBox} maxLength='40' placeholder='Add School'></input>
        <p className={styles.aboutP}>LIVING IN</p>
        {/* <input onChange={handleLivingInChange} type="text" className={styles.inputBox} maxLength='40' placeholder='Add location'></input> */}
        <p className={styles.aboutP}>GENDER</p>
        <ListDividers primary={user.gender} secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
        {/* <p className={styles.aboutP}>SEXUAL ORIENTATION</p>
    <ListDividers primary='Straight' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers> */}
        <button className={styles.button2Style} onClick={() => isReadyOnly(!ReadOnlyOrEdit)}> Save</button>

      </div>
    )
  }

  return (
    <div className={styles.settingsCardHolder}>
      <div className={styles.wrapper}>
        {ReadOnlyOrEdit ? renderReadOnlyMode() : renderEditMode()}
      </div>

    </div>
  )
}