// import { createSlice } from '@reduxjs/toolkit'
// export const initialState = {
// logindetails:{}
// }

// const logindetailsSlice = createSlice({
//   name: 'logindetails',
//   initialState,
//   reducers: {
//     getprofile: (state, { payload }) => {
//       state.logindetails=payload
//     },
   
  
//   },
// })

// export const {getprofile} = logindetailsSlice.actions
// export const logindetailSelector = state => state.logindetails
// export default logindetailsSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUserData } = loginSlice.actions;

export const logindetailSelector = (state) => state.login;

export const getprofile = (state) => {
  return {
    name: state.login.name,
    email: state.login.email,
  };
};

export default loginSlice.reducer;


