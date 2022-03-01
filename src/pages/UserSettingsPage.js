import '../styles/UserSettingsPage.css';
import {  useSelector } from "react-redux";
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
