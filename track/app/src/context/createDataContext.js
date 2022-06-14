import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = Object.entries(actions)
      .reduce((acc, [key, fn]) => ({...acc, [key]: fn(dispatch)}), {});

    return(
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
 
  return { Context, Provider };
};
