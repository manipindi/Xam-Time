import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        testId: "Test1234",
        title: "E3 Sem1 CN",
        description: "With supporting text below as a natural lead-in to additional content.",
        instruction: "Instructions",
        testMaker: "MANI@gmail.com",
        groupName: ["N16 Remedial"], 
        year: "", 
        branch: "", 
        section: "",
        edit: true,
        isGroup: true,
        author: "Admin",
        timeStamp: new Date().toLocaleString(),
        duration: "2hrs",
        startDateTime: new Date().toLocaleString(),
    },
    {
        testId: "Test1235",
        title: "E3 Sem1 DS",
        description: "With supporting text below as a natural lead-in to additional content.",
        instruction: "Instructions",
        testMaker: "reddy@gmail.com",
        groupName: ["N16 Remedial"], 
        year: "1", 
        branch: "2", 
        section: "2",
        edit: true,
        isGroup: false,
        author: "Admin",
        timeStamp: new Date().toLocaleString(),
        duration: "3hrs",
        startDateTime: new Date().toLocaleString(),
    },
    {
        testId: "Test1236",
        title: "E3 Sem1 Mathematics",
        description: "With supporting text below as a natural lead-in to additional content.",
        instruction: "Instructions",
        testMaker: "bhargav@gmail.com",
        groupName: ["N16 Remedial"], 
        year: "1", 
        branch: "2", 
        section: "2",
        edit: true,
        isGroup: false,
        author: "Admin",
        timeStamp: new Date().toLocaleString(),
        duration: "2hrs",
        startDateTime: new Date().toLocaleString(),
    },
    {
        testId: "Test1237",
        title: "E3 Sem1 Machine Learning",
        description: "With supporting text below as a natural lead-in to additional content.",
        instruction: "Instructions",
        testMaker: "kasyap@gmail.com",
        groupName: ["N16 Regular"], 
        year: "1", 
        branch: "2", 
        section: "2",
        edit: true,
        isGroup: false,
        author: "Admin",
        timeStamp: new Date().toLocaleString(),
        duration: "3hrs",
        startDateTime: new Date().toLocaleString(),
    }
]

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    createTest(state, action){
        return [...state, {...action.payload, 
            testId: "T1238",
            timeStamp: new Date().toLocaleString(),
            duration: "3hrs",
            startDateTime: new Date().toLocaleString(),
        }]
    },
    updateTest(state) {
        return state;
    },
    removeTest(state, action) {
        return state.filter((test) => test.testId === action.testId);
    },
    
  }
});

export const { createTest, removeTest, updateTest } = testsSlice.actions;
export default testsSlice.reducer; 
