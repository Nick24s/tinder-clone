import './UserSettingsPage.css';
import ListDividers from '../components/ListDividers';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CustomizedSlider from '../components/Slider';
import ColorSwitches from '../components/Switch';
import RangeSlider from '../components/RangeSlider';
import { useDispatch, useSelector } from "react-redux";
import UserSettings from '../components/UserSettings';


function UserSettingsPage() {

  const userId = useSelector(state => state.usersData.present.loggedUser);

  if (userId) {
    return (
      <UserSettings></UserSettings>
    );
  } else { return null }


}

export default UserSettingsPage;
