import { combineReducers } from "@reduxjs/toolkit";
import auth from './authSlice';
import tests from './testsSlice';
import testDetails from './testDetailsSlice';
import questions from "./questionsSlice";
import testRoles from './testRolesSlice';
import responses from './responsesSlice';

const rootReducer = combineReducers({
    testsReducer: tests,
    authReducer: auth,
    testDetailsReducer: testDetails,
    questionsReducer: questions,
    testRolesReducer: testRoles,
    responsesReducer: responses,
})

export default rootReducer;