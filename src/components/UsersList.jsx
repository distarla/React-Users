import React, { useContext } from "react";

import usersData from '../data/usersData';
import './UsersList.css';

import DataContext from '../data/dataContext';

const UsersList = props => {

    const { state, setState } = useContext(DataContext);

    console.log(state);

    function setUser(user,level) {
        setState({
            ...state,
            idUser: user,
            levelUser: level
        });
        console.log(state);
    }

    const usersLi = usersData.map( user => {
        return (
            <li key={user.id} onClick={ e => setUser(user.id,user.level)} className="list-group-item d-flex justify-content-between align-items-center">
                {user.name}
                <span className="badge bg-primary rounded-pill">{user.level}</span>
            </li>
        )
    })

    return (
        <ul className="list-group">
            {usersLi}
        </ul>
    )
}

export default UsersList;