import React, { useState } from "react";

import UsersList from "../components/UsersList";
import UserCard from "../components/UserCard";
import Acesso from "./Acesso";
import Componentes from "../components/Componentes";
import Register from "./Register";

import DataContext, { data } from '../data/dataContext'

function App() {

  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{state, setState}}>
      <div className="container">
        <div className="row">
          <div className="col">Users List<br/><UsersList></UsersList></div>
          <div className="col">User Card<br/><UserCard></UserCard></div>
          <div className="col">Approved components<br/>
          <Acesso>
            <Componentes level={2} title="Componente 1"></Componentes>
            <Componentes level={4} title="Componente 2"></Componentes>
          </Acesso>
          </div>
        </div>
        <div className="row">
          <Register></Register>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
