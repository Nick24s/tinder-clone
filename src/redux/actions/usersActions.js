export function loadInitialData(data) {
    return {
        type: 'LOAD_INITIAL_DATA',
        payload: { data }
    }
}

export function loginAction(id) {
    return {
        type: 'LOGIN',
        payload: { id }
    }
}

export function registerAction(ID, email , pass , name, photos, username, gender, lookingFor, age, matches, liked, disliked, passions) {
    return {
        type : 'REGISTER',
        payload: {
            new : {ID, email , pass , name,  photos, username, gender, lookingFor, age, matches, liked, disliked, passions}}
    }
}

export function updateLocation(text , id) {
    return {
        type : 'UPDATE_LOCATION',
        payload: text,
        id : id,
    }
}

export function uploadImage(url, id) {
    return {
        type : 'UPLOAD_IMAGE',
        payload: url,
        id : id,
    }
}

export function removeImage(url, id) {
    return {
        type : 'REMOVE_IMAGE',
        payload: url,
        id : id,
    }
}

export function ChangeDescription(text, id) {
    return {
        type : 'UPDATE_DESCRIPTION',
        payload: text,
        id : id,
    }
}

export function ChangeLookingFor(text, id) {
    return {
        type : 'UPDATE_LOOKING_FOR',
        payload: text,
        id : id,
    }
}

export function ChangeEmail(text, id) {
    return {
        type : 'UPDATE_EMAIL',
        payload: text,
        id : id,
    }
}

export function ChangePhone(text, id) {
    return {
        type : 'UPDATE_PHONE',
        payload: text,
        id : id,
    }
}

export function ChangeUsername(text, id) {
    return {
        type : 'UPDATE_USERNAME',
        payload: text,
        id : id,
    }
}

export function changeAge(text, id) {
    return {
        type : 'UPDATE_AGE',
        payload: text,
        id : id,
    }
}

export function addMatchAction(loggedUserID , matchedUserID){
    return {
        type : 'ADD_MATCH',
        payload : {loggedUserID , matchedUserID}
    }
}

export function UpdateSchool(text, id){
    return {
        type : 'UPDATE_SCHOOL',
        payload: text,
        id : id,
    }
}

export function UpdateCompany(text, id){
    return {
        type : 'UPDATE_COMPANY',
        payload: text,
        id : id,
    }
}
export function UpdateJobTitle(text, id){
    return {
        type : 'UPDATE_JOB_TITLE',
        payload: text,
        id : id,
    }
}

export function UpdateGender(text, id){
    return {
        type : 'UPDATE_GENDER',
        payload: text,
        id : id,
    }
}


export function removeMatchAction(loggedUserId , matchedUserId){
    return {
        type : 'REMOVE_MATCH',
        loggedUserId : loggedUserId ,
             matchedUserId : matchedUserId
    }
}

export function addLikedAction(loggedUserID , matchedUserID){
    return {
        type : 'ADD_LIKE',
        payload : {loggedUserID , matchedUserID}
    }
}
export function addDislikedAction(loggedUserID , matchedUserID){
    return {
        type : 'ADD_DISLIKE',
        payload : {loggedUserID , matchedUserID}
    }
}

export function addPassions(passions , userId){
    return {
        type : 'UPDATE_PASSION',
        payload : passions,
        id : userId
    }
}

export function deletePassions(userId){
    return {
        type : 'DELETE_PASSION',
        id : userId
    }
}
export function firstLoadedData(){
    return {
        type : 'FIRST_LOADED_DATA'
    }
}


