import Prequiz from "./features/quiz/Prequiz";
import Quiz from "./features/quiz/Quiz";
import {slecetalldata} from './features/quiz/quizslice'
import { useSelector } from "react-redux";
function App() {
  const quizdata = useSelector(slecetalldata);
 const quizstatus = quizdata.quiz.quizstate;
 const quizvals = quizdata.quiz.quiz;
 //console.log(quizstatus,quizvals['history']['easy'],quizdata)
  return (
    <>
   {!quizstatus?<Prequiz/> :<Quiz/>}
    </>
  );
}

export default App;
