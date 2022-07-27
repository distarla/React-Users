import React, { useContext, useState, useEffect } from "react";

import usersData from '../data/usersData';

import DataContext from '../data/dataContext';

const UserCard = props => {

    const { state, setState } = useContext(DataContext);
    const [user, setUser] = useState({});

    useEffect(function() {
        setUser(usersData.filter(el => el.id == state.idUser)[0])
    },[state.idUser]);

    if (user) {
        return (
            <>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.photo}</p>
            </>
        );
    } else {
        return false;
    }

}

export default UserCard;