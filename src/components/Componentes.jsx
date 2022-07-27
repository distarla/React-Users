import React, { useContext, useState, useEffect } from "react";

import DataContext from '../data/dataContext';

const Componentes = props => {

    const { state, setState } = useContext(DataContext);
    const [show, setShow] = useState(false);

    useEffect(function() {
        setShow(state.levelUser >= props.level );        
    },[state.idUser]);

    if (show) {
        return (
            <p>Pode ver {props.title}</p>
        )
    } else {
        return false;
    }

}

export default Componentes;