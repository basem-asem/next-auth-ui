// import React from 'react';
// import { useReducer, useMemo, createContext, useContext } from "react";

// const INIT_STATE: InitStateObject = {
//   g_CompanyName: '',
//   g_ArtistName: '',
//   g_FirstName: '',
//   g_LastName: '',
//   g_Email: '',
//   g_AccountType: {
//     key: 0,
//     type: ''
//   },
//   g_Country: {
//     key: 0,
//     type: ''
//   },
//   g_State: {
//     key: 0,
//     type: ''
//   },
//   g_City: {
//     key: 0,
//     type: ''
//   },
//   p_CardName: '',
//   p_CardNumber: '',
//   p_ExpDate : '',
//   p_Cvv: '',
//   n_Notification: {
//     index: 0,
//     val: false
//   },
//   l_Language : {
//     index: 0,
//     val: ''
//   },
//   l_Timezone: {
//     index: 0,
//     val: ''
//   },
//   h_Name : '',
//   h_CompanyName: '',
//   h_Detail: '',
// }

// // create context
// const GlobalContext = createContext<any>({});
// const reducer = (state: InitStateObject, { type, payload }: ReducerObject) => {
//   return { ...state, [type]: payload };
// }

// function useGlobalContext() {
//   return useContext(GlobalContext);
// }

// const Provider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   return (
//     <GlobalContext.Provider
//       value={useMemo(() => [
//         state, { dispatch }
//       ], [state])}
//     >
//       {children}
//     </GlobalContext.Provider>
//   )
// }

// export { useGlobalContext, Provider };

import { stat } from "fs";
import React, { useReducer, useMemo, createContext, useContext, ReactNode, Dispatch } from "react";

// Initial state
const INIT_STATE: InitStateObject = {
  g_UserPhoto: '',
  g_CompanyName: '',
  g_ArtistName: '',
  g_FirstName: '',
  g_LastName: '',
  g_Email: '',
  g_AccountType: { key: '', value: '' },
  g_Country: { key: '', value: '' },
  g_State: { key: '', value: '' },
  g_City: { key: '', value: '' },
  b_CardName: '',
  b_CardNumber: '',
  b_ExpDate: '',
  b_Cvv: '',
  n_Notification: [false],
  l_Language: { key: '', value: '' },
  l_Timezone: { key: '', value: '' },
  h_Name: '',
  h_CompanyName: '',
  h_Detail: '',
}

// Create context
const GlobalContext = createContext<{
  state: InitStateObject;
  dispatch: Dispatch<ReducerObject>;
}>({
  state: INIT_STATE,
  dispatch: () => null,
});

const reducer = (state: InitStateObject, { type, payload }: ReducerObject): InitStateObject => {
  return { ...state, [type]: payload };
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

// Provider component
const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext, Provider };