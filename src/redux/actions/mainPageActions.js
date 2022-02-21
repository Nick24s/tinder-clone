export default function setView(viewName) {

    return {
        type: 'SET_VIEW',
        payload: {
            viewName
        }
    }
}