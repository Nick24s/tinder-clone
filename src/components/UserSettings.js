import '../pages/UserSettingsPage.css';
import ListDividers from '../components/ListDividers';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { ChangeLookingFor , changeAge, ChangeEmail, ChangePhone, ChangeUsername } from '../redux/actions/usersActions';
import setView from '../redux/actions/mainPageActions';
import { swipeViewName } from '../GlobalConst';
import { validateUsername, validateProfileEmail } from "../utils";




export default function UserSettings() {
  const userId = useSelector(state => state.usersData.present.loggedUser);
  const user = useSelector(state => (state.usersData.present.usersData).filter(user => user.ID === userId)[0]);
  const [lookingFor, setLookingFor] = useState(user.lookingFor);
  const [age, setAge] = useState(user.age);
  const [username, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [phoneValidator, setPhoneValidator] = useState(false);
  const [usernameValidator, setUsernameValidator] = useState(false);
  const [ EmailValidator, setEmailValidator] = useState(false);
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

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.trim());
    if (e.target.value.trim() !== "" && !isNaN(e.target.value.trim())){
      setPhoneValidator(false);
    } else {
      setPhoneValidator(true)
    }
    
  }
  const handlePhone = (e) => {
    if (user.phone !== phone && !isNaN(phone)) {
      dispatch(ChangePhone(e.target.value.trim(), user.ID))
    }
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.trim());
    if (validateUsername(e.target.value.trim())) {
      setUsernameValidator(false)
    } else {
      setUsernameValidator(true)
    }
  }
  const handleUsername = (e) => {
    if (user.username !== username && !username.includes(" ")) {
      setUsernameValidator(false)
      dispatch(ChangeUsername(e.target.value, user.ID))
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
    if (validateProfileEmail(e.target.value.trim())){
      setEmailValidator(false);
    } else {
      setEmailValidator(true);
    }

  }
  const handleEmail = (e) => {
    if (user.email !== email && validateProfileEmail(email)) {
      dispatch(ChangeEmail(e.target.value, user.ID))
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
      <div className='LookingFor'>
        <p>Email</p>
        <input className='InputFields' onChange={handleEmailChange} onBlur={handleEmail} value={email} type="text" maxLength='20' placeholder='Add email'></input>
      </div>
      {EmailValidator ? <h5 className='Warrning'>Wrong email format</h5> : null}
      <div className='LookingFor'>
        <p>Mobile number</p>
        <input className='InputFields' onChange={handlePhoneChange} onBlur={handlePhone} value={phone} type="text" maxLength='15' placeholder='Add phone'></input>
      </div>
      {phoneValidator ? <h5 className='Warrning'>Number should contain only numbers</h5> : null}
      
      <div className='LookingFor'>
        <p>*Age</p>
        <input className='InputFieldAge' onBlur={handleAge} onChange={handleAgeChange} value={age} placeholder="Add age" type="number" id="age" name="age"
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
        <div className='LookingFor'>
          <p>Username</p>
          <input className='InputFields' onChange={handleUsernameChange} onBlur={handleUsername} value={username} type="text" maxLength='20' placeholder='Add username'></input>
        </div>
        {usernameValidator ? <h5 className='Warrning'>Username should not contain spaces</h5> : null}
      <h3 className='h3'>Notifications</h3>
      <div className='logout'>
        <p onClick={handleLogout}>Logout</p>
      </div>


    </div>
  )
}

