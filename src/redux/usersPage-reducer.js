const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users:[]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW:{
            console.log(FOLLOW);
            return {
                ...state,
                users: state.users.map(u => {
                    if(action.userId === u.id){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(action.userId === u.id){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS :{
            return {...state, users: [...state.users, ...action.users]}
            // return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state;
    }
}

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const followAC = (userId) =>{
    return {type: FOLLOW, userId}
}
export const setUsersAC = users => {
    return {type: SET_USERS, users}
}

export default usersReducer;