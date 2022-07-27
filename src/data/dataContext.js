import React from "react";

export const data = {
    idUser: 0,
    levelUser: 0
}

const DataContext = React.createContext(data);

export default DataContext;