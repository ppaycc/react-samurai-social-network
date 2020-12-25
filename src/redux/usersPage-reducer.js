const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_TOTAL_USER = 'CHANGE_TOTAL_USER';
const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';

const initialState = {
    users:[],
    pageSize: 20,
    currentPage:1,
    totalUsers: 0,
    isFetching: true
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
            return {...state, users: [...action.users]}
            // return {...state, users: [...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE :{
            return { ...state, currentPage: action.number}
        }
        case CHANGE_TOTAL_USER :{
            return {...state, totalUsers: action.totalUser}
        }
        case CHANGE_IS_FETCHING :{
            return {...state, isFetching: action.isFetching}
        }
        default :
            return state;
    }
}

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const follow = (userId) =>{
    return {type: FOLLOW, userId}
}
export const setUsers = users => {
    return {type: SET_USERS, users}
}
export const changePage = number => {
    return {type: SET_CURRENT_PAGE, number}
}
export const setTotalUsers = (totalUser) => {
    return {type: CHANGE_TOTAL_USER, totalUser}
}
export const changeIsFetching = (isFetching) => {
    return {type: CHANGE_IS_FETCHING, isFetching}
}

export default usersReducer;