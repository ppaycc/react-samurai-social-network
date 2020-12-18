const UPDATE_DIALOG_MESSAGES = 'UPDATE-DIALOG-MESSAGES';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogItem: [
        { id: 1, name: "Petya" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Bylochka" },
        { id: 6, name: "Oleg" },
        { id: 7, name: "admin" },
    ],
    newDialogMessage: '',
    dialogMessages: [
        {id: 1, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
        {id: 2, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
        {id: 3, value: "stiывагшп выарывравырарвыаывооаывоа в ва ва в в в в вв в  вng", time: "12:08", who: "output"},
        {id: 4, value: "Я ЭТО СДЕЛАЛАЛАЛАЛАЛЛАЛ", time: "12.08", who: "output"},
        {id: 5, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
        {id: 6, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
        {id: 7, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
        {id: 8, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
        {id: 9, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
    ]
}

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_DIALOG_MESSAGES) {
        state.newDialogMessage = action.newValue;

    } else if (action.type === SEND_MESSAGE){
        if(state.newDialogMessage.length >= 1){
            let sms = {
                id: (state.dialogMessages.length + 1),
                value: state.newDialogMessage,
                time: "12:12",
                who: "output"
            }
            state.dialogMessages.unshift(sms);
            state.newDialogMessage = "";
        }
        state.newDialogMessage = "";

    }

    return state;
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateDialogMessageActionCreator = (text) =>{
    return {type: UPDATE_DIALOG_MESSAGES, newValue: text}
}

export default dialogsReducer;