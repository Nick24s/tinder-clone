import './UserSettingsPage.css';
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CustomizedSlider from '../components/Slider';
import ColorSwitches from '../components/Switch';
import RangeSlider from '../components/RangeSlider';
import { useDispatch } from "react-redux"
function UserSettingsPage() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type : 'LOGOUT'})
   
  }

  return (
    // border-right: 1px solid rgb(233,234,239);
    <div style={{ width: '24em' , borderRight : "1px solid rgb(233,234,239) " }}>
      <h3 className='h3'>Account settings</h3>
        <ListDividers primary='Email' secondary='example@gmail.com'></ListDividers>
        <ListDividers primary='Phone' secondary='359897791227'></ListDividers>
        <ListDividers primary='Promo code'></ListDividers>

      <h3 className='h3'>Discovery settings</h3>
      {/* add arrow here */}
      <ListDividers primary='Location' secondary='Sofia,Bulgaria'></ListDividers>
      <CustomizedSlider></CustomizedSlider>
      <div className='switchHolder'>
        <p>Only show people in this range</p>
        <ColorSwitches></ColorSwitches>
      </div>
     
      {/* add arrow here */}
      <ListDividers primary='Looking for' secondary='Women'></ListDividers>
      <RangeSlider></RangeSlider>
      <div className='switchHolder'>
        <p>Only show people in this range</p>
        <ColorSwitches></ColorSwitches>
      </div>
      <div className='switchHolder2' >
        <p>Show me on Tinder</p>
        <ColorSwitches></ColorSwitches>
      </div>
      <ListDividers primary='Block contacts' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <h3 className='h3'>Web profile</h3>
      <ListDividers primary='Username' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <h3 className='h3'>Notifications</h3>
      <ListDividers primary='Email' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <ListDividers primary='Push notifications' secondary={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}></ListDividers>
      <div className='logout'>
        <p onClick={handleLogout}>Logout</p>
      </div>


    </div>


  );
}

export default UserSettingsPage;
