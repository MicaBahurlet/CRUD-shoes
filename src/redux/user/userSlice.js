// import { createSlice } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   currentUser: null,
//   hiddenMenu: true,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState: INITIAL_STATE,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     },
//     setVerified: state => {
//       if (state.currentUser) {
//         state.currentUser.verified = true;
//       }
//     },
//     toggleMenuHidden: state => {
//       return {
//         ...state,
//         hiddenMenu: !state.hiddenMenu,
//       };
//     },
//     logoutUser: state => {
//       state.currentUser = null;
//     },
//   },
// });

// export const { setCurrentUser, setVerified, toggleMenuHidden, logoutUser } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    setVerified: state => {
      if (state.currentUser) {
        state.currentUser.verified = true;
      }
    },
    toggleMenuHidden: state => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
    logoutUser: state => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, setVerified, toggleMenuHidden, logoutUser } = userSlice.actions;

export default userSlice.reducer;
