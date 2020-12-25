import {connect} from "react-redux";
// import Users from "./Users";
import {
    changePage,
    changeIsFetching,
    setTotalUsers,
    follow,
    setUsers,
    unfollow
} from "../../redux/usersPage-reducer";
import React from "react";
import * as axios from "axios";
import UserItem from "./UsersItem";
import s from "./UsersItem.module.css";
import loader from "../../default/img/preloader.gif"

class User extends React.Component{

    componentDidMount() {
        this.props.changeIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=> {
            this.props.changeIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        })
    }
    changeCurrentPage = (page) =>{
        this.props.changeIsFetching(true);
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=> {
            this.props.changeIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        const userItem = this.props.users.map(user => {
            return <UserItem key={user.id} id={user.id} ava={user.photos.small} name={user.name} status={user.status} followed={user.followed} follow={this.props.follow} unfollow={this.props.unfollow} />
        })
        const pageCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];
        for(let i = 1; i<= pageCount; i++ ){
            pages.push(i);
        }
        let pagesTmp = pages.map(p=> {
            return <span onClick={()=>this.changeCurrentPage(p)} className={this.props.currentPage === p && s.selected}>{p}</span>
        })
        return  (
            <div className={s.wrapper}>
                {this.props.isFetching ? <img className={s.loading} src={loader} alt=''/> : null}
                <div className={s.pages}>{pagesTmp}</div>
                {userItem}
                {/*<button className={s.btn}>Get users</button>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers:(users) => {
//             dispatch(setUsersAC(users));
//         },
//         follow:(userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         changePage:(number) => {
//             dispatch(changeCurrentPageAC(number));
//         },
//         setTotalUsers: number => {
//             dispatch(setTotalUsersAC(number));
//         },
//         changeIsFetching: flag => {
//             dispatch(changeIsFetching(flag));
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {setUsers, follow, unfollow, changePage, setTotalUsers, changeIsFetching})(User);

export default UsersContainer;