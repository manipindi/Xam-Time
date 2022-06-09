import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repsonsesAll: [
        {responseID: 'R1234', studentID: 'N160099', submitTime: '12/04/2022 - 10:45PM', evalStatus: 'Completed', marksScored: '48.80'},
        {responseID: 'R1234', studentID: 'N160099', submitTime: '12/04/2022 - 10:45PM', evalStatus: 'Completed', marksScored: '48.80'},
        {responseID: 'R1234', studentID: 'N160099', submitTime: '12/04/2022 - 10:45PM', evalStatus: 'Pending', marksScored: '48.80'},
        {responseID: 'R1234', studentID: 'N160099', submitTime: '12/04/2022 - 10:45PM', evalStatus: 'Completed', marksScored: '48.80'},
    ]
}

const resposesSlice = createSlice({
    name: 'responses',
    initialState,
    reducers: {

    }
})

export const {  } = resposesSlice.actions;
export default resposesSlice.reducer;