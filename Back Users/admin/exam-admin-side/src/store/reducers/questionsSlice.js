import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    sections: [
        {
            sectionName: "Multiple Choice Questions",
            sectionId: "S1245",
            order: "1",
            duration: 180,
            shuffleOptions: true,
            shuffleQuestions: false,
            questions: [
                {order: "1", questionId: "Q1234", Start: "Define Object Orient.."},
                {order: "2", questionId: "Q1235", Start: "Define Object Orient.."},
                {order: "3", questionId: "Q1236", Start: "Define Object Orient.."},
                {order: "4", questionId: "Q1237", Start: "Define Object Orient.."},
                {order: "5", questionId: "Q1238", Start: "Define Object Orient.."},
                {order: "6", questionId: "Q1239", Start: "Define Object Orient.."},
                {order: "7", questionId: "Q1240", Start: "Define Object Orient.."},
            ]
        },
        {
            sectionName: "Logical Reasoning",
            sectionId: "S1246",
            order: "2",
            duration: 180,
            shuffleOptions: true,
            shuffleQuestions: false,
            questions: [
                {order: "1", questionId: "Q1234", Start: "Define Object Orient.."},
                {order: "2", questionId: "Q1235", Start: "Define Object Orient.."},
                {order: "3", questionId: "Q1236", Start: "Define Object Orient.."},
                {order: "4", questionId: "Q1237", Start: "Define Object Orient.."},
                {order: "5", questionId: "Q1238", Start: "Define Object Orient.."},
                {order: "6", questionId: "Q1239", Start: "Define Object Orient.."},
                {order: "7", questionId: "Q1240", Start: "Define Object Orient.."},
            ]
        },
        // {
        //     sectionName: "Verbal Ability",
        //     sectionId: "S1247",
        //     order: "3",
        //     duration: 180,
        //     shuffleOptions: true,
        //     shuffleQuestions: false,
        //     questions: [
        //         {order: "1", questionId: "Q1234", Start: "Define Object Orient.."},
        //         {order: "2", questionId: "Q1235", Start: "Define Object Orient.."},
        //         {order: "3", questionId: "Q1236", Start: "Define Object Orient.."},
        //         {order: "4", questionId: "Q1237", Start: "Define Object Orient.."},
        //         {order: "5", questionId: "Q1238", Start: "Define Object Orient.."},
        //         {order: "6", questionId: "Q1239", Start: "Define Object Orient.."},
        //         {order: "7", questionId: "Q1240", Start: "Define Object Orient.."},
        //     ]
        // }
    ], 
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    updateSectionDetails(state, action){
        console.log(action.payload);
        state.sections[action.payload.index].sectionName = action.payload.sectionName;
        state.sections[action.payload.index].duration = action.payload.duration;
        state.sections[action.payload.index].shuffleOptions = action.payload.shuffleOptions;
        state.sections[action.payload.index].shuffleQuestions = action.payload.shuffleQuestions;
        console.log("updated");
    },
    addSection(state, action){
        for(var i=0; i<state.sections.length; i++){
            state.sections[i]['order'] = i+1+""
        }
        var l = state.sections.length+1 +'';
        const newSec =  {sectionName:"Section" + l, sectionId:'S1236', order: l, duration: "", shuffleOptions: false, shuffleQuestions: false, questions: []}; 
        state.sections = [...state.sections, newSec];

        //return {sections: [...temp, newSec]};
    },
    deleteSection(state, action) {
        state.sections.splice(action.payload.index, 1);
        for(var i=0; i<state.sections.length; i++){
            state.sections[i]['order'] = i+1+""
        }
        console.log(current(state.sections))
    },
    reorderSections(state, action){
        // dropped outside the list
        if (!action.payload.result.destination) {
            return;
        }
    
        const sections = reorder(
            state.sections,
            action.payload.result.source.index,
            action.payload.result.destination.index
        );
    
        state.sections = sections;
    },
    reorderQuestions(state, action){
        // dropped outside the list
        if (!action.payload.result.destination) {
            return;
        }
        var sectionIndex = 0;
        for(var i=0; i<state.sections.length; i++){
            if(state.sections[i].sectionId === action.payload.sectionId){
                sectionIndex = i;
                break;
            }
        }

        const questions = reorder(
            state.sections[sectionIndex].questions,
            action.payload.result.source.index,
            action.payload.result.destination.index
        );
    
        state.sections[sectionIndex].questions = questions;
    },
    createQuestion(state, action){
        console.log(action.payload);
    }
    
  }
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    for(var i=0; i<result.length; i++){
        result[i]['order'] = i+1+"";
    }

    return result;
};



export const { updateSectionDetails, addSection, deleteSection, reorderSections, reorderQuestions, createQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
