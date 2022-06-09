import { createSlice } from "@reduxjs/toolkit";

var today = new Date();
var minStartDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
var minStartTime = ('0' + today.getHours()).slice(-2) + ':' + ('0' + today.getMinutes()).slice(-2);
var minStartDateTime = minStartDate + 'T'+ minStartTime;

const initialState = {
    testId: "T1245",
    testTitle: "E3 Sem1 Mathematics",
    testStartDateTime: minStartDateTime,
    testEndDateTime: minStartDateTime,
    studentInstructions: "",
}

const testDetailsSlice = createSlice({
  name: 'testDetails',
  initialState,
  reducers: {
    updateTestDetails(state, action){
        state.testStartDateTime = action.payload.testStartDateTime;
        state.testEndDateTime = action.payload.testEndDateTime;
        state.studentInstructions = action.payload.studentInstructions;
    }
  }
});

export const { updateTestDetails, } = testDetailsSlice.actions;
export default testDetailsSlice.reducer;
