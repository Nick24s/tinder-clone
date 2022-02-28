import '../pages/UserSettingsPage.css';
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CustomizedSlider from '../components/Slider';
import ColorSwitches from '../components/Switch';
import RangeSlider from '../components/RangeSlider';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { ChangeLookingFor , changeAge } from '../redux/actions/usersActions';
import setView from '../redux/actions/mainPageActions';
import { swipeViewName } from '../GlobalConst';




export default function UserSettings() {
  const userId = useSelector(state => state.usersData.present.loggedUser);
  const user = useSelector(state => (state.usersData.present.usersData).filter(user => user.ID === userId)[0]);
  const [lookingFor, setLookingFor] = useState(user.lookingFor);
  const [age, setAge] = useState(user.age);
  const dispatch = useDispatch();



  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    dispatch(setView(swipeViewName));

  }

  const handleLookingForChange = (e) => {
    setLookingFor(e.target.value);
  }
  const handleLookingFor = (e) => {
    if (user.lookingFor !== lookingFor) {
      dispatch(ChangeLookingFor(e.target.value, user.ID))
    }
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleAge = (e) => {
    if (user.age !== age) {
      dispatch(changeAge(e.target.value, user.ID))
    }
  }


  return (
    <div style={{ width: '24em', borderRight: "1px solid rgb(233,234,239) " }}>
      {!(age !== 0 && user.location && lookingFor) ? (
        <div class="WariningPanel">
          <h3>Warning!</h3>
          <p>Before start matching please update all fields marked with * in your profile.</p>
        </div>
      ) : (<></>)}
      <h3 className='h3'>Account settings</h3>
      <ListDividers primary='Email' secondary={user.email}></ListDividers>
      <ListDividers primary='Phone' secondary='359897791227'></ListDividers>
      <div className='LookingFor'>
        <p>*Age</p>
        <input onBlur={handleAge} onChange={handleAgeChange} value={age} placeholder="Add age" type="number" id="age" name="age"
          min="1" max="150"></input>
      </div>


      <h3 className='h3'>Discovery settings</h3>
      {/* add arrow here */}
      <ListDividers primary='*Location' secondary={user.location}></ListDividers>

      {/* add arrow here */}
      <div className='LookingFor'>
        <p>*Looking For:</p>
        <select onBlur={handleLookingFor} onChange={handleLookingForChange} value={lookingFor ? lookingFor : ""} name="lookingFor" id="lookingFor">
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
          <option value=""></option>
        </select>
      </div>

      <h3 className='h3'>Web profile</h3>
      <ListDividers primary='Username' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <h3 className='h3'>Notifications</h3>
      <ListDividers primary='Email' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <div className='logout'>
        <p onClick={handleLogout}>Logout</p>
      </div>


    </div>
  )
}

