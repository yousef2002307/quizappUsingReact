import { createSlice } from "@reduxjs/toolkit";
const  initialState = {
    quizstate: false,
    choosenconfig : {kind:"history",level:"easy"},
    quiz: {
        "history":{
            "easy" : [["(he) choose ans2",2],["(he) choose ans1",1],["(he) choose ans3",3]],
            "hard" : [["(hh) choose ans1",1],["(hh) choose ans3",3],["(hh) choose ans2",2]]
        },
        "sports":{
            "easy" : [["(se) choose ans3",3],["(se) choose ans1",1],["(se) choose ans2",2]],
            "hard" : [["(sh) choose ans1",1],["(sh) choose ans3",3],["(sh) choose ans2",2]]
        }
    }
}
export const quizslice = createSlice({
    name : "quiz",
    initialState,
    reducers:{
        changestatus : (state,action) => {
            state.quizstate = !state.quizstate 
        },
        changeconflevel : (state,action) => {
            let val = action.payload;
            state.choosenconfig = {...state.choosenconfig,level : val};
        },
        changeconfkind : (state,action) => {
            let val = action.payload;
            state.choosenconfig = {...state.choosenconfig,kind : val};
        },
    }
});
export const  slecetalldata = (state) => state;
export const {changestatus,changeconflevel,changeconfkind} = quizslice.actions;
export default quizslice.reducer;
