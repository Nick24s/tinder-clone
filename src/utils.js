
export const ValidateRegistrationFields = (email, firstName, lastName, password) => {
  if (validateNames(firstName, lastName) && validateEmail(email) && validatePass(password)) {
    return true;
  }
}


export const ValidateLoginFields = (email, password) => {
  if (validateEmail(email) && validatePass(password)) {
    return true;
  }
}

const validateNames = (firstName, lastName) => {
  let nameFormat = /^[a-zA-Z]+$/;
  console.log(firstName + lastName);
  if ((firstName.match(nameFormat)) && (lastName.match(nameFormat))) {
    return true;
  } else {
    alert("You have entered an invalid name!");
    return false;
  }
}

export const validateUsername = (username) => {
  let usernameFormat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  if ((username.match(usernameFormat))) {
    return true;
  } else {
    return false;
  }
}

const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailFormat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

export const validateProfileEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailFormat)) {
    return true;
  } else {
    return false;
  }
}


const validatePass = (pass) => {
  if (pass.trim() !== '') {
    return true;
  } else {
    alert('password field empty!');
    return false;
  }
}


export const getUserDataByID = (loggedUserID, users) => {
  let loggedUserData = {};

  users.forEach((user) => {
    if (user.ID == loggedUserID) {
      loggedUserData = user;
    }
  })

  return loggedUserData;
}

export const AddToMatchData = (loggedUserID, matchedUserID, newUsersData) => {

  return newUsersData.map(user => (
    user.ID === loggedUserID
      ? { ...user, matches: [...user.matches, matchedUserID] }
      : user.ID === matchedUserID ? { ...user, liked: user.liked.filter(like => (like !== loggedUserID)), matches: [...user.matches, loggedUserID] } : user)
  )
}
// LIKE LOGIN (GOES IN EVERYUSER , NOT ONLY LOGGED) {...user , liked : [...user.liked , matchedUserID]}
export const AddToLikedData = (loggedUserID, likedUserID, newUsersData) => {

  return newUsersData.map(user => (
    user.ID === loggedUserID
      ? { ...user, liked: [...user.liked, likedUserID] }
      :  user)
  )
}

export const AddToDislikedData = (loggedUserID, dislikedUserID, newUsersData) => {

  return newUsersData.map(user => (
    user.ID === loggedUserID
      ? { ...user, disliked: [...user.disliked, dislikedUserID] }
      :  user)
  )
}


export const RemoveFromUserData = (loggedUserID, matchedUserID, newUsersData) => {

  return newUsersData.map(user => (
    user.ID === loggedUserID
      ? {...user, matches: user.matches.filter(match => (match !== matchedUserID))}
      : user.ID === matchedUserID ? {...user , liked :[...user.liked , loggedUserID] , matches : [...user.matches.filter(match => (match !== loggedUserID))] } : user)
  )
}
