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


export function updateLocation(id , text) {
    return {
        type : 'UPDATE_LOCATION',
        payload: text,
        id : id,
    }
}

export function uploadImage(text, id, index) {
    return {
        type : 'UPLOAD_IMAGE',
        payload: text,
        id : id,
        index : index,
    }
}

export function addMatchAction(loggedUserID , matchedUserID){
    return {
        type : 'ADD_MATCH',
        payload : {loggedUserID , matchedUserID}
    }
}