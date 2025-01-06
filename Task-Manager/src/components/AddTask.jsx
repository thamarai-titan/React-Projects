import { useRecoilState, useSetRecoilState } from "recoil";
import { taskAtoms,taskListAtoms} from "../store/atoms";


export default function AddTask() {
  const [taskAtom, setTaskAtom] = useRecoilState(taskAtoms);
  const setTaskListAtom = useSetRecoilState(taskListAtoms)

    const handleChange = (event) => {
        setTaskAtom(event.target.value)
        
    }
    function addTasks(){
        if(taskAtom.trim() != ''){
            setTaskListAtom((oldList)=>[...oldList,taskAtom])
            setTaskAtom('')
        }   
        
    }
  return (
    <>
      <label htmlFor="task">Enter the task</label>
      <input
        type="text"
        placeholder="Enter the task"
        onChange={handleChange}
        value={taskAtom}
      />
      <button onClick={addTasks}>Add Task</button>
    </>
  );
}
