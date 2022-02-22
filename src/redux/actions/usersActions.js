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
