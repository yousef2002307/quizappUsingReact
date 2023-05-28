
import {slecetalldata,changestatus,changeconfkind,changeconflevel} from './quizslice';
import { useSelector,useDispatch } from "react-redux";
const Prequiz = () => {
    const dispatch = useDispatch();
    const select1 = (e) => {
        let selectvalue =  e.target.value;
        dispatch(changeconfkind(selectvalue));
    }
    const select2 = (e) => {
        let selectvalue =  e.target.value;
        dispatch(changeconflevel(selectvalue));
    }
    return(
        <>
      <h2> Prequiz</h2>
      <label>Category</label>
      <select onChange={select1}>
        <option value='history'>history</option>
        <option value='sports'>sports</option>
      </select>
      <label>Status</label>
      <select onChange={select2}>
        <option value='easy'>easy</option>
        <option value='hard'>hard</option>
      </select>
       <button onClick={()=>dispatch(changestatus())}>start</button>
        </>
    )
}
export default Prequiz;
