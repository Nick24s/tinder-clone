export default function setView(viewName , chosenChatID) {

    return {
        type: 'SET_VIEW',
        payload: {
            viewName , chosenChatID
        }
    }
}

