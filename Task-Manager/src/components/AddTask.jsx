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
    <div className="w-80 bg-slate-500 rounded-xl">
      <div className="py-5">

      <label htmlFor="task" className="text-lg ">Enter the task </label>
      </div>

      <div className="py-5">
      <input
        type="text"
        placeholder="Enter the task"
        onChange={handleChange}
        value={taskAtom}
        className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />


      </div>
      <div className="py-5">
      <button onClick={addTasks} className="bg-slate-400 rounded-full w-32 py-3">Add Task</button>
      </div>
      </div>
    </>
  );
}
