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

export function registerAction(ID, email , pass , firstName , lastName ) {
    return {
        type : 'REGISTER',
        payload: {ID, email , pass , firstName , lastName}
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

export function ChangeDescription(text, id) {
    return {
        type : 'UPDATE_DESCRIPTION',
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