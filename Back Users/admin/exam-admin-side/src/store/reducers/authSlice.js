import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logStatus: true,
    accessToken: "",
    email: ""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
        state.logStatus = false;
        state.email = "";
      },
    login(state, action) {
        console.log(action);
        if(action.payload.email==="mani9087@gmail.com" && action.payload.pwd==="12345"){
          state.logStatus = true;
          state.email = action.payload.email;
        }
        
      },
    setAccessToken(state, action) {
        state.accessToken = action.payload.token;
      },
  }
});

export const { login, logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
