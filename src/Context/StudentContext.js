import React, { createContext, useReducer } from 'react';


const StudentContext = createContext();


const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, { name: action.payload.name, score: action.payload.score, id: state.length + 1 }];
    default:
      return state;
  }
};


const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
