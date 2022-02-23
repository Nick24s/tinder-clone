export function loadInitialData(data) {
    return {
        type: 'LOAD_INITIAL_DATA',
        payload: { data }
    }
}


export function loginAction(id) {
    return {
        type: 'LOGIN',
        payload: { id  }
    }
}

export function registerAction(email , pass , firstName , lastName) {
    return {
        type : 'REGISTER',
        payload: {email , pass , firstName , lastName}
    }
}