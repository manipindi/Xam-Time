import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    testMakers: [
      {email: "jeevan@gmail.com", name: "S Jeevan Babu"},
      {email: "manikanta9087@gmail.com", name: "MANIKANTA PINDI"},
    ],
    proctors: [
      {email: "manikanta9087@gmail.com", name: "MANIKANTA PINDI"},
      {email: "sksalma@gmail.com", name: "SK SALMA"},
    ],
    evaluators: [
      {email: "bhanu@gmail.com", name: "BHANU"},
      {email: "jeevan@gmail.com", name: "S JEEVAN BABU"},
    ],
    facultyAll: [
        {email: "manikanta9087@gmail.com", name: "MANIKANTA PINDI"},
        {email: "kashyap@gmail.com", name: "S JEEVAN BABU"},
        {email: "bhargav@gmail.com", name: "SK SALMA"},
        {email: "reddy@gmail.com", name: "BHANU"},
    ],
}

const testRolesSlice = createSlice({
  name: 'testRoles',
  initialState,
  reducers: {
    addTestMaker(state, action){
      if(action.payload.email==null){
          return;
      }
      var emailExists = false;
      for(var i=0; i<state.testMakers.length; i++){
          if(state.testMakers[i]['email'] == action.payload.email){
              emailExists = true;
          }
      }
      if(!emailExists){
        const name = state.facultyAll.find( (testMaker) => {return testMaker['email'] === action.payload.email} )['name']
        state.testMakers = [...state.testMakers, {email: action.payload.email, name: name}]
      }
    },
    removeTestMaker(state, action){
      state.testMakers.splice(action.payload.index,1);
    },
    addProctor(state, action){
      if(action.payload.email==null){
        return;
      }
      var emailExists = false;
      for(var i=0; i<state.proctors.length; i++){
          if(state.proctors[i]['email'] == action.payload.email){
              emailExists = true;
          }
      }
      if(!emailExists){
        const name = state.facultyAll.find( (proctor) => {return proctor['email'] === action.payload.email} )['name']
        state.proctors = [...state.proctors, {email: action.payload.email, name: name}]
      }
    },
    removeProctor(state, action){
      state.proctors.splice(action.payload.index,1);
    },
    addEvaluator(state, action){
      if(action.payload.email==null){
        return;
      }
      var emailExists = false;
      for(var i=0; i<state.evaluators.length; i++){
          if(state.evaluators[i]['email'] == action.payload.email){
              emailExists = true;
          }
      }
      if(!emailExists){
        const name = state.facultyAll.find( (evaluator) => {return evaluator['email'] === action.payload.email} )['name']
        state.evaluators = [...state.evaluators, {email: action.payload.email, name: name}]
      }
    },
    removeEvaluator(state, action){
      state.evaluators.splice(action.payload.index,1);
    },
  }
});

export const { addTestMaker, removeTestMaker, addProctor, removeProctor, addEvaluator, removeEvaluator } = testRolesSlice.actions;
export default testRolesSlice.reducer;
