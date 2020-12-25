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
    // const copy = {...state};
    // copy.dialogMessages = [...state.dialogMessages];
    switch (action.type){
        case UPDATE_DIALOG_MESSAGES :{
            return  {...state, newDialogMessage: action.newValue};
        }
        case SEND_MESSAGE :{
            const copy = {...state, dialogMessages: [...state.dialogMessages]};
            const d = new Date();
            let sms = {
                id: (copy.dialogMessages.length + 1),
                value: copy.newDialogMessage,
                time: `${d.getHours()>10 ? d.getHours() : "0"+d.getHours()}:${d.getMinutes()>10 ? d.getMinutes() : "0"+d.getMinutes()}`,
                who: "output"
            }
            copy.dialogMessages.unshift(sms);
            copy.newDialogMessage = "";
            return copy;
        }
        default :{
            return state;
        }
    }
    // if (action.type === UPDATE_DIALOG_MESSAGES) {
    //     copy.newDialogMessage = action.newValue;
    //
    // } else if (action.type === SEND_MESSAGE){
    //     if(copy.newDialogMessage.trim().length >= 1){
    //         const d = new Date();
    //         let sms = {
    //             id: (copy.dialogMessages.length + 1),
    //             value: copy.newDialogMessage,
    //             time: `${d.getHours()>10 ? d.getHours() : "0"+d.getHours()}:${d.getMinutes()>10 ? d.getMinutes() : "0"+d.getMinutes()}`,
    //             who: "output"
    //         }
    //         copy.dialogMessages.unshift(sms);
    //         copy.newDialogMessage = "";
    //     }
    //     // copy.newDialogMessage = "";
    //
    // }
    //
    // return copy;
}

export const sendMessage = () => {
    return {type: SEND_MESSAGE}
}
export const updateDialogMessage = (text) =>{
    return {type: UPDATE_DIALOG_MESSAGES, newValue: text}
}

export default dialogsReducer;