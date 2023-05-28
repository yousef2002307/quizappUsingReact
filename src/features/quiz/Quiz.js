import { useState } from 'react';
import {slecetalldata} from './quizslice';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
const Quiz = () => {
    const [counter,setcounter] = useState(0);
    const [ans,setans] = useState(0);
    const divref = useRef(null);
    const quizdata = useSelector(slecetalldata);
    const quizconfigs = quizdata.quiz.choosenconfig;
    const quizvals = quizdata.quiz.quiz;
    let quizesquesandanswers =quizvals[quizconfigs.kind][quizconfigs.level];
    const anschosen = (e) => {
        let chosenanswer = e.target.dataset.val;
        let actualanswer = divref.current.dataset.id
       if(parseInt(chosenanswer) === parseInt(actualanswer)){
        setcounter((prevState) => prevState + 1);
        setans((prevState) => prevState + 1);
       }else{
        setcounter((prevState) => prevState + 1);
       } 
        
    }
   // console.log(quizesquesandanswers)
   let quizrender =  quizesquesandanswers.map((ele,index) => {
       // console.log(ele[0])//question
        //console.log(ele[1]) // answer
        if(index === counter){
        return(
            <div ref={divref} data-id={ele[1]} key={Math.random() * 22}>
                <h3>{ele[0]}</h3>
                <aside onClick={anschosen} data-val='1'>ans1</aside>
                <aside onClick={anschosen} data-val='2'>ans2</aside>
                <aside onClick={anschosen} data-val='3'>ans3</aside>
            </div>
        )
        }
    })
    if(counter > 2) return `quiz has been finished right answers: ${ans}`
    return(
        <>
        
      <h2>{quizconfigs.kind} : {quizconfigs.level}</h2>
      <h3>correct answers {ans} / {counter}</h3>
      <section>
        {quizrender}
      </section>
        </>
    )
}
export default Quiz;