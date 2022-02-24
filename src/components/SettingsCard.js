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
import { ChangeDescription, updateLocation, UpdateSchool, UpdateJobTitle, UpdateCompany, UpdateGender } from "../redux/actions/usersActions";

export default function SettingsCard() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.usersData.loggedUser);
  const user = useSelector(state => (state.usersData.usersData).filter(user => user.ID === userId)[0]);

  const numberOfImageContainers = 9;

  const [aboutYou, setAboutYou] = useState(user.description ? user.description : "");
  // const [passions, setPassions] = useState(user.passions);
  const [gender, setGender] = useState(user.gender);
  // const [orientation, setOrientation] = useState(user.sexualOrientation);
  const [livingIn, setLivingIn] = useState(user.location ? user.location : "");
  const [userImages, setUserImages] = useState([user.photos]);
  const [jobTitle, setJobTitle] = useState(user.jobTitle ? user.jobTitle : "");
  const [company, setCompany] = useState(user.company ? user.company : "");
  const [school, setSchool] = useState(user.school ? user.school : "");

  useEffect(() => {
    const imagesArraySet = setImagesArrLengthAndFill(user.photos, numberOfImageContainers);
    setUserImages(imagesArraySet)
  }, []);

  const setImagesArrLengthAndFill = (imagesArr, maxSize) => {
    let resultArr = [...imagesArr]

    if (imagesArr.length < maxSize) {
      resultArr.length = maxSize;
      resultArr.fill('', imagesArr.length);
    }
    return resultArr;
  }

  const handleAboutYouChange = (e) => {
    setAboutYou(e.target.value);
  }
  const handleAboutYou = (e) => {
    if (user.aboutYou !== aboutYou) {
      dispatch(ChangeDescription(e.target.value, user.ID))
    }
  }

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  }
  const handleCompany = (e) => {
    if (user.company !== company) {
      dispatch(UpdateCompany(e.target.value, user.ID))
    }
  }

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  }
  const handleJobTitle = (e) => {
    if (user.jobTitle !== jobTitle) {
      dispatch(UpdateJobTitle(e.target.value, user.ID))
    }
  }
  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }
  const handleSchool = (e) => {
    if (user.school !== school) {
      dispatch(UpdateSchool(e.target.value, user.ID))
    }
  }

  const handleLivingInChange = (e) => {
    setLivingIn(e.target.value);
  }

  const locationUpdater = (e) => {
    if (user.location !== livingIn) {
      dispatch(updateLocation(e.target.value, user.ID));
    }
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }

  const handleGender = (e) => {
    if (user.gender !== gender) {
      dispatch(UpdateGender(e.target.value, user.ID));
    }
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
        <textarea onBlur={handleAboutYou} onChange={handleAboutYouChange} value={aboutYou} className={styles.AboutInputBox} placeholder="Add description"></textarea>
        <p className={styles.aboutP}>PASSIONS</p>

        {/* <div className={styles.clickableHolder}><p>Add Passions</p> </div> */}

        <ListDividers primary='Add Passions' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
        <p className={styles.aboutP}>JOB TITLE</p>
        <input type="text" onChange={handleJobTitleChange} onBlur={handleJobTitle} value={jobTitle} className={styles.inputBox} maxLength='40' placeholder='Add Job Title'></input>
        <p className={styles.aboutP}>COMPANY</p>
        <input type="text" onChange={handleCompanyChange} onBlur={handleCompany} value={company} className={styles.inputBox} maxLength='40' placeholder='Add Company'></input>
        <p className={styles.aboutP}>SCHOOL</p>
        <input type="text" onChange={handleSchoolChange} value={school} onBlur={handleSchool} className={styles.inputBox} maxLength='40' placeholder='Add School'></input>
        <p className={styles.aboutP}>LIVING IN</p>
        <input onChange={handleLivingInChange} onBlur={locationUpdater} value={livingIn} type="text" className={styles.inputBox} maxLength='40' placeholder='Add location'></input>
        <p className={styles.aboutP}>GENDER</p>
        <select onBlur={handleGender} onChange={handleGenderChange} value={gender} name="gender" id={styles.gender}>
          <option value="Man">Man</option>
          <option value="Women">Women</option>
        </select>
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