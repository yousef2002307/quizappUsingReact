import { configureStore } from "@reduxjs/toolkit";
import quizslice from "../features/quiz/quizslice";
const store = configureStore({
    reducer:{
       quiz: quizslice
    }
});
export default store;